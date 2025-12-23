import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/site/config/site-config';
import { iconMap } from '@/site/utils/icon-map';
import { fadeInUp, slideUpLarge, scaleOnly } from '@/site/utils/motion-variants';

const ProcessSection = () => {
  const { process } = SITE_CONFIG;
  return (
    <section id="process" className="py-12 md:py-[56px] lg:py-16 bg-brand-soft relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[100px] opacity-60 will-change-transform" style={{ transform: 'translateZ(0)' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-dark/10 shadow-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-dark/60">{process.badge.text}</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-display text-4xl md:text-5xl font-bold text-brand-dark"
          >
            {process.headline}
          </motion.h2>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-main/0 via-brand-main/30 to-brand-main/0 md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-12 md:gap-24">
            {process.steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = iconMap[step.icon];
              return (
                <motion.div
                  key={step.id}
                  variants={slideUpLarge}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Content Card Side */}
                  <div className={`flex-1 pl-20 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-white/50 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <h3 className="font-display text-3xl font-bold text-brand-dark mb-2 relative z-10">
                        {step.title}
                      </h3>
                      <p className="text-brand-main font-medium mb-4 uppercase tracking-wider text-sm relative z-10">
                        {step.subtitle}
                      </p>
                      <p className="text-brand-dark/60 leading-relaxed text-lg relative z-10">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Central Node (Icon) */}
                  <div className="absolute left-0 md:relative md:left-auto flex-shrink-0 z-20">
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-4 border-brand-soft shadow-xl transform transition-transform-safe hover:scale-110 hover:rotate-3">
                      {IconComponent && <IconComponent size={28} className="text-brand-dark" strokeWidth={1.5} />}
                      
                      {/* Floating Number Badge */}
                      <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full ${step.color} ${step.shadow} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                        {step.id}
                      </div>
                    </div>
                  </div>

                  {/* Spacer Side (For Layout Balance) */}
                  <div className="flex-1 hidden md:block relative overflow-hidden h-full min-h-[100px]">
                     {/* Decorative Elements specific to side */}
                     <span className={`absolute top-1/2 -translate-y-1/2 text-[120px] font-display font-bold text-brand-dark/5 select-none z-0 ${
                         isEven ? 'left-12' : 'right-12'
                     }`}>
                         {step.id}
                     </span>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* End Mark */}
          <div className="flex justify-center mt-12 relative z-10">
            <motion.div 
              variants={scaleOnly}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-brand-main text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-brand-main/30"
            >
                <span>{process.endMark.text}</span>
                <div className="bg-white/20 p-1 rounded-full">
                    {(() => {
                      const EndIcon = iconMap[process.endMark.icon];
                      return EndIcon ? <EndIcon size={16} /> : null;
                    })()}
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;