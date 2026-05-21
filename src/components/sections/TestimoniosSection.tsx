import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIOS } from '../../data/testimonios';

export default function TestimoniosSection() {
  return (
    <section id="testimonios" className="bg-black py-24 md:py-32 px-6 border-t border-white/5 relative z-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.div
          id="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-white/40 text-xs uppercase tracking-widest font-semibold block mb-3">
            Gente real del valle
          </span>
          <h2 className="text-4xl md:text-6xl text-white tracking-tight font-serif leading-tight">
            Confianza <em className="italic text-white/60 font-serif">del valle</em>
          </h2>
          <p className="mt-4 text-white/50 text-sm max-w-md mx-auto">
            La mejor recomendación es un trato impecable, de persona a persona y de vecino a vecino.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {TESTIMONIOS.map((item, index) => {
          // Extract initials for the premium visual avatar placeholder
          const initials = item.author
            .split(' ')
            .map(n => n[0])
            .join('');

          return (
            <motion.div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="liquid-glass rounded-3xl p-7 md:p-8 flex flex-col justify-between border border-white/5"
            >
              <div className="flex flex-col gap-5">
                <div>
                  <Quote size={20} className="text-white/20 mb-4 scale-x-[-1]" />
                  <p className="text-white/85 text-xs md:text-sm leading-relaxed font-light italic font-serif">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Separator */}
              <div className="w-full h-px bg-white/10 my-6" />

              {/* Author row */}
              <div className="flex items-center gap-3">
                <div className="liquid-glass rounded-full w-10 h-10 flex items-center justify-center font-serif text-white/90 text-sm font-semibold border border-white/10 shrink-0">
                  {initials}
                </div>
                <div>
                  <span className="text-white text-xs md:text-sm font-semibold block">
                    {item.author}
                  </span>
                  <span className="text-white/40 text-[10px] uppercase font-mono tracking-wider block">
                    {item.comuna} · {item.operation}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
