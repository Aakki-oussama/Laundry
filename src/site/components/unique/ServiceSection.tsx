import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/site/config/site-config';
import { iconMap } from '@/site/utils/icon-map';
import { fadeInUp, fadeInRight } from '@/site/utils/motion-variants';

const ServicesSection = () => {
  const { services } = SITE_CONFIG;
  const [activeService, setActiveService] = useState<string>(services.items[0].id);

  return (
    <section id="services" className="py-12 md:py-[56px] lg:py-16 bg-brand-dark text-brand-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Left: Navigation List */}
          <div className="md:w-1/3 flex flex-col justify-center space-y-6">
            <motion.h2 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-display text-4xl font-bold mb-8 text-white"
            >
              {services.headline}
            </motion.h2>
            
            <div className="space-y-4">
              {services.items.map((service) => {
                const IconComponent = iconMap[service.icon];
                return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-safe flex items-center justify-between group ${
                    activeService === service.id 
                      ? 'bg-brand-main text-white shadow-lg scale-105' 
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div>
                    <h3 className="font-display text-xl font-bold">{service.title}</h3>
                    <p className={`text-sm mt-1 ${activeService === service.id ? 'text-white/90' : 'text-white/40'}`}>
                      {service.subtitle}
                    </p>
                  </div>
                  {IconComponent && (
                    <IconComponent 
                      className={`transition-transform duration-300 ${activeService === service.id ? 'scale-125' : 'group-hover:scale-110'}`} 
                      size={24} 
                    />
                  )}
                </button>
                );
              })}
            </div>
          </div>

          {/* Right: Display Area */}
          <div className="md:w-2/3 relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden bg-brand-dark/50 border border-white/10">
            <AnimatePresence mode="wait">
              {services.items.map((service) => {
                const IconComponent = iconMap[service.icon];
                return (
                  activeService === service.id && (
                    <motion.div
                      key={service.id}
                      variants={fadeInRight}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex flex-col"
                    >
                      {/* Image Half */}
                      <div className="h-3/5 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent z-10" />
                        <img 
                          src={service.src} 
                          alt={service.alt} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                        {service.priceStart && (
                          <div className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                            <span className="text-sm font-bold tracking-wide">{service.priceStart}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Content Half */}
                      <div className="h-2/5 p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4 text-brand-main">
                          {IconComponent && <IconComponent size={28} />}
                          <span className="text-sm uppercase tracking-widest font-bold">Détails du service</span>
                        </div>
                        <p className="text-xl md:text-2xl leading-relaxed text-brand-cream/90">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;