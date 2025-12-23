import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SITE_CONFIG } from '@/site/config/site-config';
import { iconMap } from '@/site/utils/icon-map';
import { fadeInUp } from '@/site/utils/motion-variants';

const FAQSection = () => {
  const { faq } = SITE_CONFIG;
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-[56px] lg:py-16 bg-brand-soft relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-dark/10 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-dark/5 shadow-sm text-brand-dark mb-6"
          >
            {(() => {
              const BadgeIcon = iconMap[faq.badge.icon];
              return BadgeIcon ? <BadgeIcon size={16} className="text-brand-main" /> : null;
            })()}
            <span className="text-xs font-bold uppercase tracking-widest">{faq.badge.text}</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl font-bold text-brand-dark mb-4"
          >
            {faq.headline.title}
          </motion.h2>
          <p className="text-brand-dark/60">
            {faq.headline.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faq.items.map((item: { id: number; question: string; answer: string }, index: number) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-3xl overflow-hidden transition-safe ${
                activeIndex === index 
                  ? 'bg-white border-brand-main/30 shadow-lg shadow-brand-main/5' 
                  : 'bg-white/50 border-brand-dark/5 hover:bg-white hover:border-brand-dark/10'
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left"
              >
                <span className={`font-display font-bold text-lg sm:text-xl ${activeIndex === index ? 'text-brand-main' : 'text-brand-dark'}`}>
                  {item.question}
                </span>
                <span className={`p-2 rounded-full transition-colors flex-shrink-0 ml-4 ${activeIndex === index ? 'bg-brand-main text-white' : 'bg-brand-soft text-brand-dark/40'}`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 sm:px-8 pb-8 text-brand-dark/70 leading-relaxed text-base sm:text-lg border-t border-brand-soft pt-4 mt-[-1rem]">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;