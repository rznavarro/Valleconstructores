import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Bed, Bath, Maximize } from 'lucide-react';
import { PROPIEDADES } from '../../data/propiedades';
import { Property } from '../../data/types';

export default function PropiedadesCuradas() {
  const [filter, setFilter] = useState<'todas' | 'venta' | 'arriendo'>('todas');

  const filteredProperties = PROPIEDADES.filter(p => {
    if (filter === 'todas') return true;
    return p.type === filter;
  });

  const handleWhatsAppContact = (e: React.MouseEvent, prop: Property) => {
    e.stopPropagation();
    const cleanMsg = encodeURIComponent(prop.whatsappText);
    window.open(`https://wa.me/56933934808?text=${cleanMsg}`, '_blank');
  };

  return (
    <section id="propiedades" className="bg-black py-24 md:py-32 px-6 border-t border-white/5 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <motion.div 
          id="propiedades-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-lg"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase mb-3 block font-semibold">
            Selección exclusiva del valle
          </span>
          <h2 className="text-3xl md:text-5xl text-white tracking-tight font-serif leading-tight">
            Propiedades que <em className="italic text-white/60 font-serif">recomiendo</em>
          </h2>
        </motion.div>
        
        <div className="hidden md:block text-white/40 text-sm font-mono tracking-wider">
          Actualizado semanalmente · Sin duplicados
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="flex gap-2.5 justify-start max-w-6xl mx-auto mt-8 mb-10 overflow-x-auto pb-2 scrollbar-none">
        {(['todas', 'venta', 'arriendo'] as const).map((type) => (
          <button
            key={type}
            id={`filter-tab-${type}`}
            onClick={() => setFilter(type)}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              filter === type
                ? 'bg-white text-black font-semibold shadow'
                : 'text-white/60 hover:text-white border border-white/10 hover:bg-white/5'
            }`}
          >
            {type === 'todas' ? 'Todas' : type === 'venta' ? 'En Venta' : 'En Arriendo'}
          </button>
        ))}
      </div>

      {/* PROPERTIES GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProperties.map((prop, idx) => (
            <motion.div
              layout
              key={prop.id}
              id={`property-card-${prop.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => {
                const cleanMsg = encodeURIComponent(`Hola María José, vi la propiedad "${prop.title}" en Coya/Machalí/Requínoa en tu web y me gustaría hablar contigo.`);
                window.open(`https://wa.me/56933934808?text=${cleanMsg}`, '_blank');
              }}
              className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between border border-white/5 h-full"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-neutral-900 border-b border-white/5">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* badges overlay */}
                <div className="absolute top-4 left-4 liquid-glass rounded-full px-3 py-1 border border-white/10 text-white text-[10px] uppercase tracking-widest font-semibold">
                  {prop.type === 'venta' ? 'Venta' : 'Arriendo'}
                </div>

                <div className="absolute top-4 right-4 bg-white text-black font-semibold rounded-full px-3 py-1 text-xs shadow-md font-sans">
                  {prop.priceText}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-white/40 text-[10px] uppercase tracking-widest font-semibold font-mono">
                    {prop.comuna}
                  </span>
                  
                  <h3 className="font-serif text-lg md:text-xl text-white tracking-tight leading-tight mt-2 line-clamp-2">
                    {prop.title}
                  </h3>

                  {/* Specs */}
                  <div className="mt-4 flex gap-4 border-t border-white/5 pt-4">
                    <div className="flex items-center gap-1.5 text-white/50 text-xs">
                      <Bed size={13} className="text-white/30" />
                      <span>{prop.specs.bedrooms} dorms</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/50 text-xs">
                      <Bath size={13} className="text-white/30" />
                      <span>{prop.specs.bathrooms} baños</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/50 text-xs">
                      <Maximize size={13} className="text-white/30" />
                      <span>{prop.specs.surface} m²</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-white/60 group-hover:text-white text-xs transition-colors py-1">
                    Ver más →
                  </span>
                  
                  <button
                    id={`btn-contact-prop-${prop.slug}`}
                    onClick={(e) => handleWhatsAppContact(e, prop)}
                    className="flex items-center gap-1.5 text-white/70 hover:text-white text-xs liquid-glass border border-white/10 px-3.5 py-1.5 rounded-full hover:bg-white/5 transition-all"
                  >
                    <MessageCircle size={13} className="text-emerald-400" />
                    <span>Consultar</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-12 text-center">
        <a
          id="btn-ver-catalogo-completo"
          href="https://wa.me/56933934808?text=Hola,%20quisiera%20conversar%20sobre%20las%20propiedades%20disponibles%20en%20el%20valle"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-white/60 hover:text-white text-xs uppercase tracking-widest font-semibold border-b border-white/25 hover:border-white pb-1 transition-all"
        >
          Solicitar catálogo extendido →
        </a>
      </div>
    </section>
  );
}
