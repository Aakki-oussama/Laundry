import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '@/site/config/site-config';
import { iconMap } from '@/site/utils/icon-map';
import { fadeInUp, fadeInLeft, scaleIn } from '@/site/utils/motion-variants';

const TrustSection = () => {
  const { trust } = SITE_CONFIG;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % trust.testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [trust.testimonials.length]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % trust.testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + trust.testimonials.length) % trust.testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 20 : -20,
      opacity: 0
    })
  };

  return (
    <section id="trust" className="py-12 md:py-[56px] lg:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text & Testimonial Slider */}
          <div className="flex flex-col justify-center">
            <motion.h2 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="font-display text-4xl font-bold text-brand-dark mb-6"
            >
              {trust.headline.line1} <br />
              <span className="text-brand-main">{trust.headline.highlight}</span>
            </motion.h2>
            
                <motion.p 
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 }}
                  className="text-brand-dark/70 text-lg mb-10 leading-relaxed"
                >
              {trust.description}
            </motion.p>
            
            {/* Trust Badge */}
                <motion.div 
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4 items-start mb-12"
                >
              <div className="bg-brand-soft p-3 rounded-full shrink-0">
                {(() => {
                  const BadgeIcon = iconMap[trust.badge.icon];
                  return BadgeIcon ? <BadgeIcon className="text-brand-main fill-current" size={24} /> : null;
                })()}
              </div>
              <div>
                <h3 className="font-bold text-brand-dark text-lg">{trust.badge.title}</h3>
                <p className="text-brand-dark/60 text-sm mt-1">{trust.badge.text}</p>
              </div>
            </motion.div>

            {/* Dynamic Testimonial Card */}
            <div className="relative bg-brand-soft rounded-3xl p-8 border-l-4 border-brand-main h-[320px] flex flex-col justify-between group hover:shadow-lg transition-shadow duration-300">
              {(() => {
                const QuoteIcon = iconMap['Quote'];
                return QuoteIcon ? <QuoteIcon className="absolute top-6 right-6 text-brand-main/20 rotate-180" size={48} /> : null;
              })()}
              
              <div className="relative overflow-y-auto flex-grow pr-2">
                <AnimatePresence initial={false} mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ opacity: { duration: 0.3 }, x: { duration: 0.3, ease: "easeOut" } }}
                    className="w-full"
                  >
                    <p className="text-base md:text-xl italic text-brand-dark/80 font-display leading-relaxed">
                      "{trust.testimonials[currentIndex].text}"
                    </p>
                    <div className="mt-6">
                      <p className="font-bold text-brand-dark text-sm md:text-base">{trust.testimonials[currentIndex].author}</p>
                      <p className="text-sm text-brand-main font-medium uppercase tracking-wide">
                        {trust.testimonials[currentIndex].location} — {trust.testimonials[currentIndex].role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="flex gap-2 mt-6 justify-end">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white text-brand-dark/50 hover:text-brand-main hover:bg-white shadow-sm transition-safe"
                  aria-label="Avis précédent"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white text-brand-dark/50 hover:text-brand-main hover:bg-white shadow-sm transition-safe"
                  aria-label="Avis suivant"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

          </div>

          {/* Right: Visual collage */}
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Main Image */}
            <motion.div 
               variants={scaleIn}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="absolute top-0 right-0 w-4/5 h-4/5 bg-brand-main rounded-[3rem] overflow-hidden shadow-2xl rotate-3"
            >
                <img 
                    src={trust.images.main.src} 
                    className="w-full h-full object-cover opacity-90 mix-blend-multiply" 
                    alt={trust.images.main.alt}
                    loading="lazy"
                    decoding="async"
                />
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-dark/90 to-transparent p-8">
                    <p className="font-display text-white text-2xl font-bold">{trust.images.main.overlay.title}</p>
                    <p className="text-white/80 text-sm mt-2">{trust.images.main.overlay.text}</p>
                </div>
            </motion.div>

            {/* Floating Detail Image */}
            <motion.div 
               variants={fadeInUp}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               transition={{ delay: 0.3, duration: 0.8 }}
               className="absolute bottom-12 left-0 w-3/5 h-3/5 bg-white border-8 border-white rounded-[2rem] shadow-xl overflow-hidden -rotate-2"
            >
                <img 
                    src={trust.images.secondary.src} 
                    className="w-full h-full object-cover" 
                    alt={trust.images.secondary.alt}
                    loading="lazy"
                    decoding="async"
                />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;