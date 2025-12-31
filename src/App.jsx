import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInAnonymously, 
  signInWithCustomToken,
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  serverTimestamp, 
  doc, 
  updateDoc, 
  deleteDoc,
  query
} from 'firebase/firestore';
import { 
  Calendar, 
  Clock, 
  Phone, 
  MapPin, 
  Activity, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronRight, 
  Stethoscope, 
  Heart, 
  Mail, 
  CheckCircle, 
  Trash2, 
  Lock, 
  LogOut 
} from 'lucide-react';

// --- CONFIGURAZIONE FIREBASE ---
const firebaseConfig = typeof __firebase_config !== 'undefined' 
  ? JSON.parse(__firebase_config) 
  : {
      apiKey: "", 
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    };

const appId = typeof __app_id !== 'undefined' ? __app_id : 'studio-medico-enrico-di-paola';

// Inizializzazione Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const DOCTOR_PROFILE = {
  name: "Dr. Enrico Di Paola",
  title: "Medico Chirurgo Specialista",
  bio: "Con oltre 20 anni di esperienza clinica, accolgo i miei pazienti in un ambiente riservato e professionale. Il mio obiettivo è offrire percorsi di cura personalizzati, ascoltando attentamente ogni singola esigenza.",
  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Enrico&gender=male&clothing=blazerAndShirt",
  email: "enrico.dipaola@studiomedico.it",
  phone: "+39 02 12345678",
  address: "Via Roma 123, 00100 Roma (RM)"
};

const SERVICES = [
  { icon: Stethoscope, title: "Visita Specialistica", desc: "Esame clinico approfondito e diagnosi accurata per ogni patologia." },
  { icon: Heart, title: "Cardiologia Base", desc: "Elettrocardiogramma e monitoraggio costante della pressione arteriosa." },
  { icon: ShieldCheck, title: "Certificazioni", desc: "Rilascio certificati di idoneità sportiva non agonistica e buona salute." },
  { icon: Activity, title: "Piani di Prevenzione", desc: "Check-up periodici e programmi di screening personalizzati." }
];

// --- COMPONENTI UI ---
const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button', disabled = false }) => {
  const baseStyle = "px-6 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-teal-600 text-white hover:bg-teal-700 disabled:bg-teal-300 shadow-md",
    secondary: "bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50",
    danger: "bg-red-100 text-red-600 hover:bg-red-200",
    outline: "border border-slate-300 text-slate-700 hover:bg-slate-50",
    cta: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg"
  };
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Input = ({ label, type = "text", value, onChange, placeholder, required = false, rows }) => (
  <div className="mb-4 text-left">
    <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
    {rows ? (
      <textarea value={value} onChange={onChange} required={required} placeholder={placeholder} rows={rows}
        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
      />
    ) : (
      <input type={type} value={value} onChange={onChange} required={required} placeholder={placeholder}
        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
      />
    )}
  </div>
);

// --- COMPONENTE PRINCIPALE ---
export default function App() {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [view, setView] = useState('home'); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const footerRef = useRef(null);
  
  const [bookingData, setBookingData] = useState({
    patientName: '', phone: '', email: '', date: '', time: '', notes: ''
  });
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [adminPass, setAdminPass] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  // RULE 3: Auth Before Queries
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (error) { 
        console.error("Errore Autenticazione:", error); 
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  // Fetching data - Guarded by user auth (RULE 1 & 2)
  useEffect(() => {
    if (!user) return;

    // RULE 1: Strict Paths
    const appointmentsRef = collection(db, 'artifacts', appId, 'public', 'data', 'appointments_enrico');
    
    // RULE 2: No Complex Queries (Simple fetch)
    const unsubscribe = onSnapshot(appointmentsRef, 
      (snapshot) => {
        const apps = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // Sorting in memory to comply with RULE 2
        const sortedApps = apps.sort((a, b) => {
          const dateA = a.createdAt?.seconds || 0;
          const dateB = b.createdAt?.seconds || 0;
          return dateB - dateA;
        });
        setAppointments(sortedApps);
      }, 
      (err) => {
        console.error("Errore Firestore:", err);
      }
    );

    return () => unsubscribe();
  }, [user]);

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!user) return; // Guard
    
    setSubmitStatus('loading');
    try {
      const appointmentsRef = collection(db, 'artifacts', appId, 'public', 'data', 'appointments_enrico');
      await addDoc(appointmentsRef, {
        ...bookingData,
        status: 'pending',
        createdAt: serverTimestamp(),
        userId: user.uid // Track who created it
      });
      setSubmitStatus('success');
      setTimeout(() => { 
        setView('home'); 
        setSubmitStatus('idle'); 
        setBookingData({patientName:'', phone:'', email:'', date:'', time:'', notes:''}); 
      }, 3000);
    } catch (e) { 
      console.error("Errore durante la prenotazione:", e);
      setSubmitStatus('error'); 
    }
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPass === 'admin123') { 
      setIsAdmin(true); 
      setView('admin'); 
    } else { 
      alert("Password Errata"); 
    }
  };

  const scrollToContact = () => {
    setMobileMenuOpen(false);
    setView('home');
    setTimeout(() => {
      footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
              <div className="p-2 bg-teal-600 rounded-lg"><Stethoscope className="text-white" size={24} /></div>
              <span className="font-bold text-xl tracking-tight text-slate-800">{DOCTOR_PROFILE.name}</span>
            </div>
            <div className="hidden md:flex items-center gap-8 font-medium">
              <button onClick={() => setView('home')} className="hover:text-teal-600 transition-colors">Home</button>
              <button onClick={() => setView('booking')} className="hover:text-teal-600 transition-colors">Prenota</button>
              <button onClick={scrollToContact} className="px-4 py-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-all">Contatti</button>
              {isAdmin ? (
                <button onClick={() => setView('admin')} className="text-teal-600 flex items-center gap-1"><Lock size={18}/> Pannello</button>
              ) : (
                <button onClick={() => setView('login')} className="text-slate-400 hover:text-slate-600"><Lock size={18}/></button>
              )}
            </div>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-xl font-semibold text-center">
            <button onClick={() => {setView('home'); setMobileMenuOpen(false)}}>Home</button>
            <button onClick={() => {setView('booking'); setMobileMenuOpen(false)}}>Prenota Visita</button>
            <button onClick={() => {scrollToContact(); setMobileMenuOpen(false)}}>Contatti</button>
          </div>
        </div>
      )}

      <main className="pt-16">
        {view === 'home' && (
          <div className="animate-in fade-in duration-500">
            <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                  La tua salute merita <span className="text-teal-600">attenzione</span> e professionalità.
                </h1>
                <p className="text-xl text-slate-600 mb-8">{DOCTOR_PROFILE.bio}</p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" onClick={() => setView('booking')}>
                    Prenota Visita <ChevronRight size={20}/>
                  </Button>
                  <Button variant="outline" onClick={scrollToContact}>
                    Contattami
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
                <img src={DOCTOR_PROFILE.image} alt={DOCTOR_PROFILE.name} className="relative w-full max-w-md mx-auto drop-shadow-2xl" />
              </div>
            </section>

            <section className="bg-white py-20 px-6">
              <div className="max-w-7xl mx-auto text-left mb-16">
                <h2 className="text-3xl font-bold mb-4">Servizi dello Studio</h2>
                <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
              </div>
              <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {SERVICES.map((s, i) => (
                  <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all group text-left">
                    <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <s.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {view === 'booking' && (
          <section className="py-20 px-6 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-2">Prenota la tua Visita</h2>
            <p className="text-slate-600 mb-10">Compila il modulo per richiedere un appuntamento presso lo studio.</p>
            
            {submitStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 p-8 rounded-2xl flex flex-col items-center gap-4">
                <CheckCircle className="text-green-500" size={64} />
                <h3 className="text-2xl font-bold text-green-800">Richiesta Inviata!</h3>
                <p className="text-green-700">Verrai ricontattato a breve per la conferma.</p>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-left">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="Nome Completo" required value={bookingData.patientName} onChange={e => setBookingData({...bookingData, patientName: e.target.value})} placeholder="Mario Rossi" />
                  <Input label="Telefono" type="tel" required value={bookingData.phone} onChange={e => setBookingData({...bookingData, phone: e.target.value})} placeholder="+39 ..." />
                </div>
                <Input label="Email" type="email" required value={bookingData.email} onChange={e => setBookingData({...bookingData, email: e.target.value})} placeholder="email@esempio.it" />
                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="Data Preferita" type="date" required value={bookingData.date} onChange={e => setBookingData({...bookingData, date: e.target.value})} />
                  <Input label="Fascia Oraria" type="time" required value={bookingData.time} onChange={e => setBookingData({...bookingData, time: e.target.value})} />
                </div>
                <Input label="Note aggiuntive" rows={3} value={bookingData.notes} onChange={e => setBookingData({...bookingData, notes: e.target.value})} placeholder="Dettagli opzionali..." />
                <Button type="submit" className="w-full" disabled={submitStatus === 'loading'}>
                  {submitStatus === 'loading' ? 'Invio...' : 'Conferma Prenotazione'}
                </Button>
                {submitStatus === 'error' && (
                  <p className="mt-4 text-red-500 text-sm text-center font-medium italic">
                    Si è verificato un errore. Per favore, controlla la tua connessione o riprova più tardi.
                  </p>
                )}
              </form>
            )}
          </section>
        )}

        {view === 'login' && !isAdmin && (
          <section className="py-40 px-6 max-w-md mx-auto text-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <Lock className="mx-auto mb-4 text-slate-400" size={48} />
              <h2 className="text-2xl font-bold mb-6">Area Riservata</h2>
              <form onSubmit={handleAdminLogin}>
                <Input label="Password di Accesso" type="password" value={adminPass} onChange={e => setAdminPass(e.target.value)} placeholder="Password..." />
                <Button type="submit" className="w-full">Accedi</Button>
              </form>
              <p className="mt-4 text-xs text-slate-400">Usa 'admin123' per i test</p>
            </div>
          </section>
        )}

        {view === 'admin' && isAdmin && (
          <section className="py-20 px-6 max-w-6xl mx-auto text-left">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-bold">Gestione Prenotazioni</h2>
                <p className="text-slate-600">Visualizza e gestisci le richieste dei pazienti.</p>
              </div>
              <Button variant="outline" onClick={() => setIsAdmin(false)}>Esci <LogOut size={16}/></Button>
            </div>
            
            <div className="grid gap-4">
              {!user ? (
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 text-amber-800 text-center font-medium">
                  Connessione al database in corso...
                </div>
              ) : appointments.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-2xl border border-dashed border-slate-300 text-slate-400 font-medium">
                  Nessun appuntamento trovato.
                </div>
              ) : (
                appointments.map(app => (
                  <div key={app.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-lg">{app.patientName}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${app.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                          {app.status === 'confirmed' ? 'Confermato' : 'In attesa'}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1 text-sm text-slate-500">
                        <span className="flex items-center gap-1"><Phone size={14}/> {app.phone}</span>
                        <span className="flex items-center gap-1"><Mail size={14}/> {app.email}</span>
                        <span className="flex items-center gap-1"><Calendar size={14}/> {app.date}</span>
                        <span className="flex items-center gap-1"><Clock size={14}/> {app.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {app.status === 'pending' && (
                        <Button variant="primary" onClick={async () => {
                          const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'appointments_enrico', app.id);
                          await updateDoc(docRef, { status: 'confirmed' });
                        }}>Conferma</Button>
                      )}
                      <button onClick={async () => {
                        if(window.confirm("Eliminare questa prenotazione?")) {
                          const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'appointments_enrico', app.id);
                          await deleteDoc(docRef);
                        }
                      }} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={20}/></button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        )}
      </main>

      <footer ref={footerRef} className="bg-slate-900 text-white pt-20 pb-10 px-6 text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-teal-600 rounded-lg"><Stethoscope size={24} /></div>
              <span className="font-bold text-xl tracking-tight">{DOCTOR_PROFILE.name}</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Studio medico dedicato alla salute e al benessere del paziente con un approccio moderno e professionale.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contatti</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={18} className="text-teal-500"/> {DOCTOR_PROFILE.phone}
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={18} className="text-teal-500"/> {DOCTOR_PROFILE.email}
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} className="text-teal-500"/> {DOCTOR_PROFILE.address}
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Orari</h4>
            <p className="text-slate-400 text-sm mb-2">Lun - Ven: 09:00 - 18:00</p>
            <p className="text-slate-400 text-sm">Sabato: 09:00 - 12:00 (Solo urgenze)</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} {DOCTOR_PROFILE.name}.
        </div>
      </footer>
    </div>
  );
}