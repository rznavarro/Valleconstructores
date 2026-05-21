import { Mail, Phone, MessageCircle, Instagram, Facebook, Coins } from 'lucide-react';
import { useIndicadores } from '../../hooks/useIndicadores';

export default function Footer() {
  const indicadores = useIndicadores();

  return (
    <footer id="main-valle-footer" className="bg-black border-t border-white/5 py-16 px-6 overflow-hidden relative z-20">
      <div className="max-w-6xl mx-auto">
        
        {/* ZONE 1 - TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          
          {/* BRAND COLUMN */}
          <div className="flex flex-col gap-4">
            <div id="footer-logo-brand" className="flex items-baseline gap-1">
              <span className="font-serif italic text-white text-3xl font-medium tracking-tight">VALLE</span>
              <span className="font-sans text-white text-3xl font-light tracking-tight">Corredores</span>
            </div>
            
            <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-sm font-sans mt-2">
              Asesoría inmobiliaria boutique en el Valle del Cachapoal. Operaciones transparentes y atención directa de persona a persona en Machalí, Requínoa y Coya.
            </p>
          </div>

          {/* NAVIGATION COLUMN */}
          <div>
            <h4 className="text-white/40 text-xs uppercase tracking-widest mb-4 font-semibold">
              Servicios
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a href="#servicios" className="text-white/70 hover:text-white transition-colors">
                  Venta Boutique
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/70 hover:text-white transition-colors">
                  Arriendos Seleccionados
                </a>
              </li>
              <li>
                <a href="#tasacion" className="text-white/70 hover:text-white transition-colors">
                  Tasación de Terreno Gratuita
                </a>
              </li>
              <li>
                <a href="#quien-está-detrás" className="text-white/70 hover:text-white transition-colors">
                  Quién está detrás
                </a>
              </li>
              <li>
                <a href="#cobertura" className="text-white/70 hover:text-white transition-colors">
                  Comunas cubiertas
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT & SOCIALS COLUMN */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-widest mb-4 font-semibold">
                Contacto Directo
              </h4>
              
              <ul className="space-y-3 font-sans text-sm">
                <li>
                  <a 
                    id="footer-email-link"
                    href="mailto:info@vallecorredores.cl" 
                    className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors"
                  >
                    <Mail size={14} className="text-white/40" />
                    <span>info@vallecorredores.cl</span>
                  </a>
                </li>
                <li>
                  <a 
                    id="footer-phone-link"
                    href="tel:+56933934808" 
                    className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors"
                  >
                    <Phone size={14} className="text-white/40" />
                    <span>+56 9 3393 4808</span>
                  </a>
                </li>
                <li>
                  <a 
                    id="footer-wa-link"
                    href="https://wa.me/56933934808?text=Hola,%20María%2520José.%20Necesito%20asesoría%20sobre%20una%2520propiedad%20en%20el%20valle" 
                    className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={14} className="text-[#25D366]" />
                    <span>Escríbenos por WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social icons */}
            <div className="flex gap-2.5 mt-6">
              <a 
                href="https://wa.me/56933934808"
                target="_blank"
                rel="noreferrer" 
                className="w-10 h-10 rounded-full liquid-glass border border-white/10 hover:border-white/20 text-white flex items-center justify-center hover:bg-white/5 transition-all"
                title="Siguenos por WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
              <a 
                href="https://instagram.com/vallecorredores" // Validated branding profile URL
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full liquid-glass border border-white/10 hover:border-white/20 text-white flex items-center justify-center hover:bg-white/5 transition-all"
                title="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a 
                href="https://facebook.com/vallecorredores" // Validated branding profile URL
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full liquid-glass border border-white/10 hover:border-white/20 text-white flex items-center justify-center hover:bg-white/5 transition-all"
                title="Facebook"
              >
                <Facebook size={15} />
              </a>
            </div>

          </div>

        </div>

        {/* ZONE 2 - CHILEAN ECONOMIC INDICATORS */}
        <div className="w-full h-px bg-white/10 mt-12 mb-8" />
        
        <div id="footer-ticker" className="flex flex-col sm:flex-row justify-center items-center gap-6 py-2 select-none">
          <div className="flex items-center gap-2 text-white/40 text-xs">
            <Coins size={14} />
            <span className="font-mono uppercase tracking-wider">Chile</span>
          </div>

          <div className="hidden sm:block w-px h-3 bg-white/15" />

          {/* UF */}
          <div className="flex items-center gap-1.5 font-sans text-xs md:text-sm">
            <span className="font-serif italic text-white/45">uf</span>
            <span className="text-white/80 font-semibold tabular-nums">
              {new Intl.NumberFormat('es-CL', {
                style: 'currency', currency: 'CLP', maximumFractionDigits: 0
              }).format(indicadores.uf)}
            </span>
          </div>

          <div className="w-px h-3 bg-white/10 hidden sm:block" />

          {/* USD */}
          <div className="flex items-center gap-1.5 font-sans text-xs md:text-sm">
            <span className="font-serif italic text-white/45">usd</span>
            <span className="text-white/80 font-semibold tabular-nums">
              {new Intl.NumberFormat('es-CL', {
                style: 'currency', currency: 'CLP', maximumFractionDigits: 0
              }).format(indicadores.dolar)}
            </span>
          </div>

          <div className="hidden sm:block w-px h-3 bg-white/15" />

          {/* Sincronización */}
          <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-full text-[9px] text-white/50 font-mono uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span>Indicadores Sincronizados</span>
          </div>
        </div>

        {/* ZONE 3 - BOTTOM BAR */}
        <div className="w-full h-px bg-white/5 my-8" />

        <div id="footer-copyright-row" className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-2">
          <div className="text-white/30 text-xs font-sans text-center md:text-left">
            © 2026 VALLE Corredores de Propiedades. Todos los derechos reservados.
          </div>
          
          <div className="flex gap-6 justify-center md:justify-end text-white/30 hover:text-white/60 text-xs transition-colors font-sans">
            <a href="#cobertura" className="hover:text-white/80 transition-colors">Política de Privacidad</a>
            <a href="#cobertura" className="hover:text-white/80 transition-colors">Términos de Servicio</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
