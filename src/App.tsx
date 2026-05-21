import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ArrowRight, 
  ArrowUpRight,
  Mail, 
  Instagram, 
  Facebook, 
  CheckCircle, 
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Award,
  ShieldCheck,
  MapPin,
  Calendar,
  Coins
} from 'lucide-react';

import BackgroundVideoCrossfade from './components/ui/BackgroundVideoCrossfade';
import ownerPortrait from './assets/images/corredora_valle_portrait_1779379743327.png';
import { useIndicadores } from './hooks/useIndicadores';

import PropiedadesCuradas from './components/sections/PropiedadesCuradas';
import TestimoniosSection from './components/sections/TestimoniosSection';
import Footer from './components/layout/Footer';

export default function App() {
  // Chilean Indicators Hook
  const indicadores = useIndicadores();

  // Active hover/focus state for the SVG map comunas synchronization
  const [activeComuna, setActiveComuna] = useState<string | null>(null);

  // Active intent tab for the hero selector
  const [activeTab, setActiveTab] = useState<'vender' | 'arrendar' | 'tasar'>('vender');
  
  // Mobile drawer control
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Checklist panel state (Step 0 Prerequisites check)
  const [checklistOpen, setChecklistOpen] = useState(true);

  // Interactive local checklist state for Step 0, saving customer setup progress
  const [checklistProgress, setChecklistProgress] = useState({
    dominio: false, // vallecorredores.cl
    email: false, // info@vallecorredores.cl
    foto: true, // we generated a high resolution placeholder!
    video: false, // drone video
    datos: true, // verified human brand details
    catalogo: false // catalog cleaning
  });

  // Toggle checklist item
  const toggleChecklistItem = (key: keyof typeof checklistProgress) => {
    setChecklistProgress(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Pre-configured WhatsApp messages depending on selected tab
  const getWhatsAppLink = (tab: 'vender' | 'arrendar' | 'tasar') => {
    const baseUrl = 'https://wa.me/56933934808';
    if (tab === 'vender') {
      return `${baseUrl}?text=Hola,%20quiero%20vender%20una%20propiedad%20en%20el%20valle`;
    } else if (tab === 'arrendar') {
      return `${baseUrl}?text=Hola,%20quiero%20arrendar%20una%20propiedad%20en%20el%20valle`;
    } else {
      return `${baseUrl}?text=Hola,%20quiero%20tasar%20mi%20propiedad`;
    }
  };

  const getTabLabel = (tab: 'vender' | 'arrendar' | 'tasar') => {
    if (tab === 'vender') return 'Quiero Vender';
    if (tab === 'arrendar') return 'Quiero Arrendar';
    return 'Tasar mi Propiedad';
  };

  const contactData = {
    phone: '+56 9 3393 4808',
    phoneRaw: '+56933934808',
    email: 'info@vallecorredores.cl',
    instagram: 'https://instagram.com/vallecorredores',
    facebook: 'https://facebook.com/vallecorredores',
    name: 'María José Guerrero',
    desc: 'Boutique Broker con más de 12 años viviendo y asesorando transacciones inmobiliarias de alto valor en Machalí, Requínoa y Coya.',
    omi: 'Registro OMI #4521-CH',
    years: '12',
    regions: 'Machalí, Requínoa, Coya y Valle del Cachapoal'
  };

  return (
    <div id="valle-app-container" className="min-h-screen bg-black text-white relative flex flex-col selection:bg-white selection:text-black">
      
      {/* SECTION 0: STEP 0 COLLAPSIBLE PREREQUISITES PANEL */}
      <div id="step-0-prerequisites-bar" className="w-full bg-neutral-950 border-b border-white/10 z-50">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse" />
            <p className="text-xs text-white/70 font-medium font-sans">
              Prerequisitos de Lanzamiento (Paso 0) — <span className="text-amber-400 font-semibold">Borrador de Rediseño Premium</span>
            </p>
          </div>
          <button 
            id="toggle-checklist-btn"
            onClick={() => setChecklistOpen(!checklistOpen)}
            className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/5"
          >
            {checklistOpen ? 'Ocultar Checklist' : 'Ver Checklist Técnico'}
            {checklistOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
        
        <AnimatePresence>
          {checklistOpen && (
            <motion.div 
              id="step-0-checklist-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden bg-neutral-900/60 border-t border-white/5 backdrop-blur-md"
            >
              <div className="max-w-5xl mx-auto px-6 py-6 font-sans">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                      Estatus Estratégico
                    </h4>
                    <p className="text-xs text-white/60 leading-relaxed">
                      El rediseño editorial no puede convivir con elementos informales. El cliente debe completar la migración corporativa antes de lanzar la versión de producción oficial.
                    </p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-3">
                      Lista de Verificación de Integridad Directa (Tocas para marcar progreso)
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {/* Check 1 */}
                      <div 
                        id="chk-dominio"
                        onClick={() => toggleChecklistItem('dominio')}
                        className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors border border-white/5"
                      >
                        <span className="mt-0.5">
                          {checklistProgress.dominio ? (
                            <CheckCircle size={15} className="text-emerald-400" />
                          ) : (
                            <AlertCircle size={15} className="text-amber-500" />
                          )}
                        </span>
                        <div>
                          <p className="text-xs font-medium text-white/90">Dominio comprado (vallecorredores.cl)</p>
                          <p className="text-[10px] text-white/50">Reemplazar vallecorredores.kitepropcrm.com</p>
                        </div>
                      </div>

                      {/* Check 2 */}
                      <div 
                        id="chk-email"
                        onClick={() => toggleChecklistItem('email')}
                        className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors border border-white/5"
                      >
                        <span className="mt-0.5">
                          {checklistProgress.email ? (
                            <CheckCircle size={15} className="text-emerald-400" />
                          ) : (
                            <AlertCircle size={15} className="text-amber-500" />
                          )}
                        </span>
                        <div>
                          <p className="text-xs font-medium text-white/90">Correo corporativo (info@vallecorredores.cl)</p>
                          <p className="text-[10px] text-white/50">Eliminar valle.corredores@gmail.com</p>
                        </div>
                      </div>

                      {/* Check 3 */}
                      <div 
                        id="chk-foto"
                        onClick={() => toggleChecklistItem('foto')}
                        className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors border border-white/5"
                      >
                        <span className="mt-0.5">
                          {checklistProgress.foto ? (
                            <CheckCircle size={15} className="text-emerald-400" />
                          ) : (
                            <AlertCircle size={15} className="text-amber-500" />
                          )}
                        </span>
                        <div>
                          <p className="text-xs font-medium text-white/90">Retrato profesional de María José</p>
                          <p className="text-[10px] text-white/50">Generado con IA de alta resolución para la Bio</p>
                        </div>
                      </div>

                      {/* Check 4 */}
                      <div 
                        id="chk-video"
                        onClick={() => toggleChecklistItem('video')}
                        className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors border border-white/5"
                      >
                        <span className="mt-0.5">
                          {checklistProgress.video ? (
                            <CheckCircle size={15} className="text-emerald-400" />
                          ) : (
                            <AlertCircle size={15} className="text-amber-500" />
                          )}
                        </span>
                        <div>
                          <p className="text-xs font-medium text-white/90">Video Drone Territorial del Valle</p>
                          <p className="text-[10px] text-white/50">Falta adjuntar MP4 (se usa fallback de foto premium)</p>
                        </div>
                      </div>

                      {/* Check 5 */}
                      <div 
                        id="chk-datos"
                        onClick={() => toggleChecklistItem('datos')}
                        className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors border border-white/5"
                      >
                        <span className="mt-0.5">
                          {checklistProgress.datos ? (
                            <CheckCircle size={15} className="text-emerald-400" />
                          ) : (
                            <AlertCircle size={15} className="text-amber-500" />
                          )}
                        </span>
                        <div>
                          <p className="text-xs font-medium text-white/90">Información humana verificable</p>
                          <p className="text-[10px] text-white/50">Años operando en el Valle del Cachapoal cargados</p>
                        </div>
                      </div>

                      {/* Check 6 */}
                      <div 
                        id="chk-catalogo"
                        onClick={() => toggleChecklistItem('catalogo')}
                        className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors border border-white/5"
                      >
                        <span className="mt-0.5">
                          {checklistProgress.catalogo ? (
                            <CheckCircle size={15} className="text-emerald-400" />
                          ) : (
                            <AlertCircle size={15} className="text-amber-400" />
                          )}
                        </span>
                        <div>
                          <p className="text-xs font-medium text-white/90">Depuración catálogo KiteProp CRM</p>
                          <p className="text-[10px] text-white/50">Eliminar duplicados en el panel del CRM actual</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div id="hero-navbar-wrapper" className="relative flex flex-col min-h-screen">
        
        {/* VIDEO DE FONDO / IMAGEN CON CROSSFADE */}
        <BackgroundVideoCrossfade 
          src="" // Empty forces fallback to the beautiful generated drone shot
          className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
        />

        {/* OVERLAY GRADIENTE SUTIL */}
        <div id="hero-gradient-overlay" className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-0 pointer-events-none" />

        {/* SECTION 1: NAVBAR (PILL FLOTANTE) */}
        <nav id="floating-navbar-container" className="relative z-20 px-6 py-6 w-full">
          <div id="navbar-glass-pill" className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* Logo / Izquierda */}
            <div className="flex items-center gap-2">
              <span className="font-serif italic text-white text-xl md:text-2xl tracking-tight">VALLE</span>
              <span className="font-light text-white/60 text-xs uppercase tracking-widest pl-2 border-l border-white/20">Corredores</span>
            </div>

            {/* Links / Centro (Hidden on Mobile) */}
            <div id="navbar-links-desktop" className="hidden md:flex items-center gap-8">
              <a href="#propiedades-venta" className="text-white/80 hover:text-white text-xs uppercase tracking-wider font-medium transition-colors">Venta</a>
              <a href="#propiedades-arriendo" className="text-white/80 hover:text-white text-xs uppercase tracking-wider font-medium transition-colors">Arriendo</a>
              <a href="#tasacion" className="text-white/80 hover:text-white text-xs uppercase tracking-wider font-medium transition-colors">Tasación</a>
              <a href="#quien-está-detrás" className="text-white/80 hover:text-white text-xs uppercase tracking-wider font-medium transition-colors font-sans">Quién está detrás</a>
            </div>

            {/* Acciones / Derecha (Desktop and Pill CTA) */}
            <div className="flex items-center gap-4">
              <a 
                id="phone-cta-desktop"
                href={`tel:${contactData.phoneRaw}`}
                className="hidden sm:flex items-center gap-2 text-white/80 hover:text-white text-xs uppercase tracking-wider font-medium transition-colors"
              >
                <Phone size={14} />
                <span>Llamar</span>
              </a>

              <a 
                id="whatsapp-cta-desktop"
                href={`https://wa.me/56933934808?text=Hola,%20necesito%20información%20sobre%20el%20valle`}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center justify-center liquid-glass rounded-full px-5 py-2.5 text-xs uppercase tracking-wider font-semibold border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <MessageCircle size={14} className="mr-1.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              {/* Hamburger Button for Mobile */}
              <button 
                id="hamburger-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-full liquid-glass border-white/10 text-white/90 hover:text-white"
                aria-label="Abrir Menú"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </nav>

        {/* MOBILE DRAWER NAV */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              id="mobile-nav-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-neutral-950/95 border-l border-white/10 backdrop-blur-xl z-40 p-8 flex flex-col justify-between shadow-2xl pt-28"
            >
              <div className="flex flex-col gap-6">
                <span className="text-white/40 text-xs uppercase tracking-widest border-b border-white/10 pb-2">Navegación</span>
                <a 
                  href="#propiedades-venta" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif italic text-white/95 hover:text-white transition-colors"
                >
                  Propiedades en Venta
                </a>
                <a 
                  href="#propiedades-arriendo" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif italic text-white/95 hover:text-white transition-colors"
                >
                  Propiedades en Arriendo
                </a>
                <a 
                  href="#tasacion" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif italic text-white/95 hover:text-white transition-colors"
                >
                  Servicio de Tasación
                </a>
                <a 
                  href="#quien-está-detrás" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif italic text-white/95 hover:text-white transition-colors"
                >
                  Quién está detrás
                </a>
              </div>

              <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
                <a 
                  id="mobile-phone-cta"
                  href={`tel:${contactData.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-white/95 text-sm font-medium transition-colors justify-center hover:bg-white/10"
                >
                  <Phone size={16} />
                  Llamar Directo
                </a>
                <a 
                  id="mobile-whatsapp-cta"
                  href={`https://wa.me/56933934808?text=Hola,%20necesito%20información%20sobre%20el%20valle`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-white text-sm font-medium transition-colors justify-center hover:bg-emerald-950/70"
                >
                  <MessageCircle size={16} className="text-emerald-400" />
                  Escribir WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SECTION 2: HERO TERRITORIAL */}
        <section id="hero-section" className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[4%]">
          
          {/* Main Editorial Badge */}
          <motion.div 
            id="hero-editorial-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 bg-black/60 backdrop-blur-sm"
          >
            <MapPin size={12} className="text-white/60" />
            <span className="text-[11px] font-sans text-white/80 uppercase tracking-widest font-semibold">Machalí · Requínoa · Coya</span>
          </motion.div>

          {/* Heading Principal */}
          <motion.h1 
            id="hero-main-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-9xl text-white tracking-tight leading-none text-center transform"
          >
            <span className="font-serif font-light block">El valle, como nadie</span>
            <span className="font-serif block mt-1">
              más <em className="italic text-white">lo conoce</em>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            id="hero-subheading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-xl mx-auto text-white/70 text-sm md:text-lg leading-relaxed font-light font-sans"
          >
            Asesoría inmobiliaria boutique en Machalí, Requínoa y Coya. Propiedades del Valle del Cachapoal, gestionadas con conocimiento real del territorio.
          </motion.p>

          {/* SELECTOR PRINCIPAL */}
          <motion.div 
            id="hero-selector-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 max-w-xl w-full"
          >
            <div className="liquid-glass rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-center gap-1">
              <div className="grid grid-cols-3 gap-1 w-full md:w-auto flex-1">
                <button 
                  id="tab-btn-vender"
                  onClick={() => setActiveTab('vender')}
                  className={`px-4 py-3 md:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === 'vender' 
                      ? 'bg-white text-black font-semibold shadow-md' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Quiero Vender
                </button>
                <button 
                  id="tab-btn-arrendar"
                  onClick={() => setActiveTab('arrendar')}
                  className={`px-4 py-3 md:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === 'arrendar' 
                      ? 'bg-white text-black font-semibold shadow-md' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Quiero Arrendar
                </button>
                <button 
                  id="tab-btn-tasar"
                  onClick={() => setActiveTab('tasar')}
                  className={`px-4 py-3 md:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === 'tasar' 
                      ? 'bg-white text-black font-semibold shadow-md' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Tasar
                </button>
              </div>

              <div className="hidden md:block w-px h-6 bg-white/15 mx-1" />

              <a 
                id="hero-action-cta"
                href={getWhatsAppLink(activeTab)}
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-auto bg-white hover:bg-neutral-200 text-black rounded-full px-6 py-3 text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 border border-white"
              >
                <span>Hablar ahora</span>
                <ArrowRight size={14} />
              </a>
            </div>

            <p className="text-white/40 text-[11px] font-sans tracking-wide mt-3">
              Atención personal · Sin bots · Respuesta directa para {getTabLabel(activeTab)}
            </p>
          </motion.div>

          {/* ICONOS SOCIALES Y ACCESOS RÁPIDOS */}
          <motion.div 
            id="hero-social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-center gap-4 mt-16 md:mt-24"
          >
            <a 
              id="social-instagram-link"
              href={contactData.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full liquid-glass border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Instagram VALLE"
            >
              <Instagram size={18} />
            </a>
            
            <a 
              id="social-facebook-link"
              href={contactData.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full liquid-glass border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Facebook VALLE"
            >
              <Facebook size={18} />
            </a>

            <a 
              id="social-whatsapp-direct"
              href={`https://wa.me/56933934808`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full liquid-glass border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Escribir Directo"
            >
              <MessageCircle size={18} className="text-emerald-400" />
            </a>
          </motion.div>

        </section>

      </div>

      {/* SECTION 3: "QUIEN ESTA DETRAS" */}
      <section id="quien-está-detrás" className="bg-black py-24 md:py-32 px-6 border-t border-white/5 relative z-20">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            id="quien-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <span className="text-white/40 text-xs uppercase tracking-widest font-semibold block">
              Quién está detrás
            </span>
            <h2 className="text-4xl md:text-6xl text-white tracking-tight leading-[1.1] font-serif mt-3">
              Una persona, <em className="italic text-white/60">no una marca</em>
            </h2>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            
            {/* Columna Izquierda - Portrait photo */}
            <motion.div 
              id="quien-portrait-container"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden group shadow-2xl border border-white/10"
            >
              <img 
                id="owner-portrait-image"
                src={ownerPortrait}
                alt="María José Guerrero, Fundadora de VALLE Corredores"
                className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 liquid-glass rounded-full px-3 py-1.5 text-xs text-white/90 font-medium tracking-wide">
                @vallecorredores
              </div>
            </motion.div>

            {/* Columna Derecha - Bio details */}
            <motion.div 
              id="quien-bio-details"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="flex flex-col h-full justify-center"
            >
              <div className="border-b border-white/10 pb-6">
                <h3 className="font-serif text-4xl md:text-5xl text-white tracking-tight">
                  {contactData.name}
                </h3>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-2 block font-medium">
                  Corredora de propiedades · Valle del Cachapoal
                </p>
              </div>

              <div className="mt-6 text-white/70 text-sm md:text-base leading-relaxed space-y-4 max-w-md font-sans">
                <p>
                  "Más de <strong className="text-white font-medium">{contactData.years} años</strong> caminando el valle. Conozco cada calle de Machalí, Requínoa y Coya de primera mano."
                </p>
                <p>
                  "Cada propiedad que muestro la he visitado y evaluado yo personalmente. No vendo propiedades que no compraría yo misma para mi familia. Mi compromiso es un conocimiento de territorio honesto y sin rodeos."
                </p>
              </div>

              {/* Separador */}
              <div className="w-full h-px bg-white/10 my-6" />

              {/* Datos Verificables */}
              <div className="grid grid-cols-2 gap-4">
                <div id="bio-stat-years">
                  <span className="text-white/40 text-[10px] uppercase tracking-wider font-semibold block">Años en el Valle</span>
                  <span className="font-serif text-3xl text-white mt-1 block">{contactData.years}+</span>
                </div>
                <div id="bio-stat-registry">
                  <span className="text-white/40 text-[10px] uppercase tracking-wider font-semibold block">Registro Oficial</span>
                  <span className="text-sm font-sans text-white/90 mt-1.5 block flex items-center gap-1">
                    <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                    <span>{contactData.omi}</span>
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 my-6" />

              {/* Contact Targets */}
              <div className="space-y-4 font-sans">
                {/* Email corporativo */}
                <a 
                  id="owner-email-link"
                  href={`mailto:${contactData.email}`} 
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Mail size={14} className="text-white/60" />
                  </span>
                  <div>
                    <span className="text-[10px] text-white/40 block leading-tight font-medium uppercase tracking-wider">Email Corporativo</span>
                    <span className="text-white/95">{contactData.email}</span>
                  </div>
                </a>

                {/* Teléfono directo */}
                <a 
                  id="owner-phone-link"
                  href={`tel:${contactData.phoneRaw}`} 
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Phone size={14} className="text-white/60" />
                  </span>
                  <div>
                    <span className="text-[10px] text-white/40 block leading-tight font-medium uppercase tracking-wider">Teléfono Directo</span>
                    <span className="text-white/95">{contactData.phone}</span>
                  </div>
                </a>

                {/* WhatsApp button */}
                <div className="pt-2">
                  <a 
                    id="owner-whatsapp-button"
                    href={`https://wa.me/56933934808?text=Hola%20María%20José,%20vi%20tu%20perfil%20en%20Valle%20Corredores%20y%20necesito%2520asesoría`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full liquid-glass border border-white/10 text-white hover:bg-white/5 transition-all text-xs font-semibold uppercase tracking-wider"
                  >
                    <MessageCircle size={14} className="text-emerald-400" />
                    <span>Conversemos por WhatsApp</span>
                    <ArrowRight size={14} className="text-white/30" />
                  </a>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION 4: SERVICIOS — GRID DE 3 CARDS */}
      <section id="servicios" className="bg-black py-24 md:py-32 px-6 overflow-hidden relative z-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
          <motion.div 
            id="servicios-header-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <span className="text-white/40 text-xs tracking-widest uppercase mb-3 block font-semibold">
              Tres servicios · Cero genéricos
            </span>
            <h2 className="text-4xl md:text-5xl text-white tracking-tight font-serif leading-tight">
              Lo que <em className="italic text-white/60 font-serif">sabemos hacer</em>
            </h2>
          </motion.div>
          
          <div id="servicios-header-right" className="hidden md:block text-white/40 text-sm font-mono tracking-widest uppercase">
            01 / 03 · Servicios Boutique
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1 - VENTA */}
          <motion.div 
            id="service-card-venta"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.0, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => window.open('https://wa.me/56933934808?text=Hola,%20quiero%20vender%20mi%20propiedad%20en%20el%20Valle%20del%20Cachapoal', '_blank')}
            className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer hover:bg-white/[0.02] transition-colors duration-300 flex flex-col justify-between h-full border border-white/5"
          >
            <div className="aspect-video overflow-hidden relative bg-neutral-900">
              <video 
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
                autoPlay 
                muted 
                loop 
                playsInline 
                preload="auto"
                className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-white/40 text-[10px] tracking-widest uppercase font-semibold">Operación</span>
                  <span className="liquid-glass rounded-full p-2 text-white group-hover:rotate-12 transition-transform duration-300">
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                <h3 className="font-serif text-white text-2xl tracking-tight leading-tight mb-3">Venta</h3>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-5">
                  Tasación realista basada en el comportamiento local real, fotografía profesional de alto impacto visual y publicación en los portales seleccionados para maximizar filtros y seriedad de interesados.
                </p>
              </div>

              <div className="flex items-center gap-2 text-white/70 group-hover:text-white text-xs transition-colors">
                <MessageCircle size={14} className="text-emerald-400" />
                <span>Hablar por WhatsApp →</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - ARRIENDO */}
          <motion.div 
            id="service-card-arriendo"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => window.open('https://wa.me/56933934808?text=Hola,%20quiero%20arrendar%20mi%20propiedad%20en%20el%20Valle%20del%20Cachapoal', '_blank')}
            className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer hover:bg-white/[0.02] transition-colors duration-300 flex flex-col justify-between h-full border border-white/5"
          >
            <div className="aspect-video overflow-hidden relative bg-neutral-900">
              <video 
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
                autoPlay 
                muted 
                loop 
                playsInline 
                preload="auto"
                className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-white/40 text-[10px] tracking-widest uppercase font-semibold">Operación</span>
                  <span className="liquid-glass rounded-full p-2 text-white group-hover:rotate-12 transition-transform duration-300">
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                <h3 className="font-serif text-white text-2xl tracking-tight leading-tight mb-3">Arriendo</h3>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-5">
                  Encontramos y evaluamos minuciosamente arrendatarios serios y estables. Redactamos contratos robustos con absoluto respaldo legal y firmas en notaría para resguardar tu tranquilidad.
                </p>
              </div>

              <div className="flex items-center gap-2 text-white/70 group-hover:text-white text-xs transition-colors">
                <MessageCircle size={14} className="text-emerald-400" />
                <span>Hablar por WhatsApp →</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - TASACIÓN */}
          <motion.div 
            id="service-card-tasacion"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => window.open('https://wa.me/56933934808?text=Hola,%20necesito%20tasar%20mi%20propiedad%20en%20el%20Valle%20del%20Cachapoal', '_blank')}
            className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer hover:bg-white/[0.02] transition-colors duration-300 flex flex-col justify-between h-full border border-white/5"
          >
            <div className="aspect-video overflow-hidden relative bg-neutral-900">
              <video 
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
                autoPlay 
                muted 
                loop 
                playsInline 
                preload="auto"
                className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-white/40 text-[10px] tracking-widest uppercase font-semibold">Asesoría</span>
                  <span className="liquid-glass rounded-full p-2 text-white group-hover:rotate-12 transition-transform duration-300">
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                <h3 className="font-serif text-white text-2xl tracking-tight leading-tight mb-3">Tasación</h3>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-5">
                  Análisis técnico real e in situ del mercado inmobiliario del Valle. Evaluamos condiciones particulares de tu terreno, luz, vías de comunicación y te entregamos un valor justo de verdad en UF.
                </p>
              </div>

              <div className="flex items-center gap-2 text-white/70 group-hover:text-white text-xs transition-colors">
                <MessageCircle size={14} className="text-emerald-400" />
                <span>Hablar por WhatsApp →</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 5: CONOCIMIENTO x TERRITORIO */}
      <section id="conocimiento" className="bg-black py-28 md:py-40 px-6 overflow-hidden relative z-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          
          <motion.div 
            id="concepto-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight font-serif">
              Conocimiento <em className="italic text-white/40 font-serif">x</em> Territorio
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Columna Izquierda — Video */}
            <motion.div 
              id="territorio-video-box"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className="rounded-3xl overflow-hidden aspect-[4/3] relative bg-neutral-900 border border-white/10"
            >
              <video 
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
                autoPlay 
                muted 
                loop 
                playsInline 
                preload="auto"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Columna Derecha — Dos bloques con divider */}
            <motion.div 
              id="territorio-detalles-box"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className="flex flex-col justify-center"
            >
              {/* Bloque 1 */}
              <div className="mb-8">
                <span className="text-white/40 text-xs tracking-widest uppercase mb-3 block font-semibold">
                  Años caminando el valle
                </span>
                <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans">
                  No vendemos lo que no conocemos en persona. Cada propiedad en nuestro catálogo ha sido recorrida y analizada exhaustivamente por María José. Sabemos qué barrios y condominios del Valle de Cachapoal suben de plusvalía real, cuáles presentan problemas con las capas freáticas locales, dónde la luz del sol abarca el hogar y dónde no calienta bien durante el duro invierno. Ese conocimiento fáctico y empírico no se busca en internet: se vive.
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 my-8" />

              {/* Bloque 2 */}
              <div className="mb-0">
                <span className="text-white/40 text-xs tracking-widest uppercase mb-3 block font-semibold">
                  Atención personal, no masiva
                </span>
                <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans">
                  Trabajamos con un número celosamente limitado de clientes de manera mensual. Esto se traduce en que tu propiedad, o la búsqueda incansable de tu próximo hogar, se convierte en el foco prioritario absoluto. Si nos contactas en momentos de la noche, obtienes respuesta de la persona real detrás de la corredora, no respuestas prefabricadas de contestadores digitales. Asesoría boutique verdadera.
                </p>
              </div>

              {/* CTA */}
              <div id="territorio-cta-wrap" className="mt-8">
                <a 
                  id="btn-conversar-valle"
                  href="https://wa.me/56933934808?text=Hola,%20me%20gustaría%20conversar%20sobre%2520propiedades%20e%20inversión%20en%20el%20valle"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 liquid-glass rounded-full px-8 py-3 text-white text-xs uppercase tracking-wider font-semibold hover:bg-white/5 transition-all"
                >
                  Conversemos sobre el valle
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION 6: FEATURED VIDEO — TASACIÓN GRATUITA EN EL VALLE */}
      <section id="tasacion" className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden relative z-20">
        <div className="max-w-6xl mx-auto">
          
          <motion.div 
            id="tasacion-featured-container"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="rounded-3xl overflow-hidden aspect-video relative bg-neutral-900 border border-white/10 group shadow-2xl"
          >
            <video 
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
              autoPlay 
              muted 
              loop 
              playsInline 
              preload="auto"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />

            {/* OVERLAY INFERIOR */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              
              {/* Columna Izquierda - Card de oferta */}
              <div id="tasacion-oferta-card" className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md border border-white/10">
                <span className="text-white/50 text-[10px] tracking-widest uppercase block mb-2 font-semibold">
                  Sin costo · Sin compromiso
                </span>
                <p className="text-white text-xs md:text-sm leading-relaxed">
                  Detállame tu dirección y características de tu parcela o propiedad por WhatsApp. Realizo una visita directa al terreno, evalúo los valores comerciales de transacciones cerradas recientemente en tu misma calle y te entrego un valor de mercado realista expresado en UF. <strong className="font-semibold text-white">Nos distanciamos de las promesas infladas o ficticias que se usan para captarte.</strong>
                </p>
              </div>

              {/* Columna Derecha - CTAs */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 items-start md:items-end">
                <motion.a 
                  id="btn-solicitar-tasacion"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://wa.me/56933934808?text=Hola,%20solicito%20una%20tasación%20gratuita%20para%20mi%20propiedad%20en%20el%20valle"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white hover:bg-neutral-200 text-black rounded-full px-8 py-3 text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-md text-nowrap w-full sm:w-auto text-center"
                >
                  Solicitar tasación gratuita →
                </motion.a>

                <a 
                  id="btn-ver-como-trabajo"
                  href="#quien-está-detrás"
                  className="liquid-glass rounded-full px-8 py-3 text-white text-xs uppercase tracking-wider font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
                >
                  Ver cómo trabajo
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 7: MAPA DEL VALLE + COMUNAS */}
      <section id="cobertura" className="bg-black py-24 md:py-32 px-6 border-t border-white/5 relative z-20">
        <div className="max-w-6xl mx-auto">
          
          <motion.div 
            id="cobertura-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-white/40 text-xs uppercase tracking-widest block font-semibold mb-3">
              Área de cobertura · Especialización extrema
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tight font-serif leading-[1.05]">
              Las comunas que <em className="italic text-white/60 font-serif">conozco</em>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-white/60 text-sm md:text-base leading-relaxed">
              Trabajamos exclusivamente en el Valle del Cachapoal. Esto se traduce en que manejamos los valores históricos reales de calles de tierra, loteos rurales con derechos de aguas y reglamentaciones particulares de esta zona geográfica.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
            
            {/* Columna Izquierda (3/5) — Mapa estilizado SVG */}
            <div id="vector-map-column" className="lg:col-span-3">
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden liquid-glass border border-white/10 p-6 flex items-center justify-center bg-black/40">
                
                {/* SVG MAP CONTAINER */}
                <svg 
                  viewBox="0 0 600 450" 
                  className="w-full h-full max-h-[380px] drop-shadow-2xl"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Rio Cachapoal (Dashed vector) */}
                  <path 
                    d="M 120 280 C 220 210, 320 240, 480 180 C 530 160, 560 170, 590 150" 
                    fill="transparent" 
                    stroke="rgba(255,255,255,0.18)" 
                    strokeWidth="3" 
                    strokeDasharray="6 6"
                  />
                  <text x="140" y="255" fill="rgba(255,255,255,0.25)" fontSize="9" className="font-mono tracking-widest uppercase italic">río cachapoal</text>

                  {/* Comuna: Rancagua (Reference) */}
                  <g 
                    id="map-comuna-rancagua" 
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveComuna('rancagua')}
                    onMouseLeave={() => setActiveComuna(null)}
                  >
                    <polygon 
                      points="180,80 320,60 350,140 220,160" 
                      fill={activeComuna === 'rancagua' ? 'rgba(255,255,255,0.06)' : 'transparent'} 
                      stroke="rgba(255,255,255,0.15)" 
                      strokeWidth="1.2"
                      className="transition-colors duration-300"
                    />
                    <text x="240" y="110" fill={activeComuna === 'rancagua' ? '#ffffff' : 'rgba(255,255,255,0.4)'} fontSize="11" className="font-sans font-medium tracking-wider uppercase transition-colors duration-300">Rancagua</text>
                  </g>

                  {/* Comuna: Machalí (Territorio principal) */}
                  <g 
                    id="map-comuna-machali" 
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveComuna('machali')}
                    onMouseLeave={() => setActiveComuna(null)}
                  >
                    <polygon 
                      points="320,60 520,30 550,220 350,140" 
                      fill={activeComuna === 'machali' ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.02)'} 
                      stroke={activeComuna === 'machali' ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.25)'} 
                      strokeWidth="1.6"
                      className="transition-colors duration-300"
                    />
                    <text x="410" y="105" fill={activeComuna === 'machali' ? '#ffffff' : 'rgba(255,255,255,0.7)'} fontSize="13" className="font-sans font-semibold tracking-widest uppercase transition-colors duration-300">Machalí</text>
                    <circle cx="430" cy="120" r="5" fill="#ffffff" />
                    <circle cx="430" cy="120" r="12" fill="transparent" stroke="#ffffff" strokeWidth="1" className="animate-ping" style={{ transformOrigin: '430px 120px' }} />
                  </g>

                  {/* Comuna: Requínoa (Rural premium) */}
                  <g 
                    id="map-comuna-requinoa" 
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveComuna('requinoa')}
                    onMouseLeave={() => setActiveComuna(null)}
                  >
                    <polygon 
                      points="220,160 350,140 400,320 180,310" 
                      fill={activeComuna === 'requinoa' ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.02)'} 
                      stroke={activeComuna === 'requinoa' ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.25)'} 
                      strokeWidth="1.6"
                      className="transition-colors duration-300"
                    />
                    <text x="260" y="220" fill={activeComuna === 'requinoa' ? '#ffffff' : 'rgba(255,255,255,0.7)'} fontSize="13" className="font-sans font-semibold tracking-widest uppercase transition-colors duration-300">Requínoa</text>
                    <circle cx="280" cy="240" r="5" fill="#ffffff" />
                    <circle cx="280" cy="240" r="10" fill="transparent" stroke="#ffffff" strokeWidth="1" className="animate-ping" style={{ transformOrigin: '280px 240px' }} />
                  </g>

                  {/* Comuna: Coya (Pre-cordillera natural) */}
                  <g 
                    id="map-comuna-coya" 
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveComuna('coya')}
                    onMouseLeave={() => setActiveComuna(null)}
                  >
                    <polygon 
                      points="350,140 550,220 460,380 400,320" 
                      fill={activeComuna === 'coya' ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.02)'} 
                      stroke={activeComuna === 'coya' ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)'} 
                      strokeWidth="1.5"
                      className="transition-colors duration-300"
                    />
                    <text x="430" y="280" fill={activeComuna === 'coya' ? '#ffffff' : 'rgba(255,255,255,0.6)'} fontSize="12" className="font-sans font-medium tracking-widest uppercase transition-colors duration-300">Coya</text>
                    <circle cx="440" cy="300" r="4" fill="#ffffff" />
                  </g>

                  {/* Comuna: Coltauco */}
                  <g 
                    id="map-comuna-coltauco" 
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveComuna('coltauco')}
                    onMouseLeave={() => setActiveComuna(null)}
                  >
                    <polygon 
                      points="30,190 140,180 180,310 50,330" 
                      fill={activeComuna === 'coltauco' ? 'rgba(255,255,255,0.06)' : 'transparent'} 
                      stroke="rgba(255,255,255,0.15)" 
                      strokeWidth="1.2"
                      className="transition-colors duration-300"
                    />
                    <text x="75" y="240" fill={activeComuna === 'coltauco' ? '#ffffff' : 'rgba(255,255,255,0.4)'} fontSize="11" className="font-sans font-medium tracking-wider uppercase transition-colors duration-300">Coltauco</text>
                  </g>

                  {/* Comuna: Doñihue */}
                  <g 
                    id="map-comuna-donihue" 
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveComuna('donihue')}
                    onMouseLeave={() => setActiveComuna(null)}
                  >
                    <polygon 
                      points="140,180 220,160 180,310" 
                      fill={activeComuna === 'donihue' ? 'rgba(255,255,255,0.06)' : 'transparent'} 
                      stroke="rgba(255,255,255,0.15)" 
                      strokeWidth="1.2"
                      className="transition-colors duration-300"
                    />
                    <text x="145" y="200" fill={activeComuna === 'donihue' ? '#ffffff' : 'rgba(255,255,255,0.4)'} fontSize="11" className="font-sans font-medium tracking-wider uppercase transition-colors duration-300">Doñihue</text>
                  </g>
                </svg>

                {/* Info Overlay inside map representing interactive cues */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[10px] text-white/50 font-mono tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 bg-white rounded-full inline-block animate-pulse" />
                  <span>Interactive Map · Pasa el cursor</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha (2/5) — Chips de comunas */}
            <div id="comunas-chips-column" className="lg:col-span-2 flex flex-col justify-between h-full py-2">
              <div>
                <span className="text-white/40 text-[10px] uppercase font-semibold tracking-wider mb-4 block">
                  Donde trabajas hoy
                </span>

                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'machali', name: 'Machalí', size: 'Premium Valle' },
                    { id: 'requinoa', name: 'Requínoa', size: 'Rural Boutique' },
                    { id: 'coya', name: 'Coya', size: 'Pre-cordillera' },
                    { id: 'rancagua', name: 'Rancagua', size: 'Conexión' },
                    { id: 'coltauco', name: 'Coltauco', size: 'Sectores' },
                    { id: 'donihue', name: 'Doñihue', size: 'Sectores' },
                  ].map((comuna) => (
                    <div 
                      key={comuna.id}
                      id={`chip-comuna-${comuna.id}`}
                      onMouseEnter={() => setActiveComuna(comuna.id)}
                      onMouseLeave={() => setActiveComuna(null)}
                      className={`liquid-glass rounded-xl px-4 py-2.5 flex items-center justify-between gap-3 text-sm cursor-pointer transition-all border ${
                        activeComuna === comuna.id ? 'bg-white/10 border-white/40 text-white' : 'border-white/5 text-white/70 hover:bg-white/[0.03]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${activeComuna === comuna.id ? 'bg-white' : 'bg-white/30'}`} />
                        <span className="font-medium">{comuna.name}</span>
                      </div>
                      <span className="text-[9px] font-mono uppercase text-white/40 whitespace-nowrap">{comuna.size}</span>
                    </div>
                  ))}
                </div>

                <p className="text-white/30 text-xs leading-relaxed mt-6">
                  ¿Tienes propiedades ubicadas fuera de estas zonas seleccionadas? conversemos igual de todos modos. Si no puedo representarte directamente, te conectaré con el broker de mi confianza que atienda tu territorio. Obtenemos resultados limpios.
                </p>
              </div>

              <div className="w-full h-px bg-white/10 my-6" />

              {/* Stats Compactos */}
              <div className="grid grid-cols-2 gap-5 font-sans">
                <div>
                  <span className="text-white/40 text-[10px] uppercase tracking-wider font-semibold block">Comunas cubiertas</span>
                  <span className="font-serif text-3xl text-white mt-1 block">6 Comunas</span>
                </div>
                <div>
                  <span className="text-white/40 text-[10px] uppercase tracking-wider font-semibold block">Especialización</span>
                  <span className="text-xs text-white/80 mt-2 block font-medium flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-emerald-400" />
                    <span>Conocimiento Real</span>
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <PropiedadesCuradas />
      <TestimoniosSection />

      <Footer />

    </div>
  );
}
