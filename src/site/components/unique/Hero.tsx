import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, scaleIn, slideUpLarge } from '@/site/utils/motion-variants';
import { SITE_CONFIG } from '@/site/config/site-config';

const Hero = () => {
  const { hero } = SITE_CONFIG;
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-24 md:pb-[56px] lg:pt-20 lg:pb-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-full bg-brand-soft rounded-bl-[100px] -z-10 opacity-60" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="max-w-2xl z-10">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl font-bold leading-[1.1] text-brand-dark mb-8"
          >
            {hero.headline.line1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-main to-brand-dark">
              {hero.headline.highlight}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-brand-dark/70 mb-10 leading-relaxed max-w-md"
          >
            {hero.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {hero.buttons.map((button) => (
              button.primary ? (
                <a
                  key={button.label}
                  href={button.href}
                  className="group bg-brand-dark text-brand-cream px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-brand-main transition-safe shadow-lg shadow-brand-dark/20"
                >
                  {button.label}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              ) : (
                <a
                  key={button.label}
                  href={button.href}
                  className="px-8 py-4 rounded-2xl font-semibold text-brand-dark border-2 border-brand-dark/10 hover:border-brand-dark/30 hover:bg-white/50 transition-safe flex items-center justify-center"
                >
                  {button.label}
                </a>
              )
            ))}
          </motion.div>

          {/* Mobile Only Image Block */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.8 }}
            className="block lg:hidden mt-12 w-full h-64 rounded-3xl overflow-hidden relative shadow-xl"
          >
             <img 
               src={hero.images.main.src} 
               alt={hero.images.main.alt} 
               className="w-full h-full object-cover"
               decoding="async"
             />
             
             {/* Mobile Badge - Right Side */}
             <div className="absolute top-4 right-4 bg-brand-cream/10 backdrop-blur-md border border-white/20 p-2.5 rounded-lg shadow-lg">
                <p className="text-brand-cream font-display text-base font-bold">{hero.badgeOverlay.percentage}</p>
                <p className="text-brand-light text-[10px] uppercase tracking-wider leading-tight">{hero.badgeOverlay.title}<br/>{hero.badgeOverlay.subtitle}</p>
             </div>
          </motion.div>
        </div>

        {/* Desktop Visual Element */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[600px] w-full hidden lg:block"
        >
           {/* Abstract Shape Mask */}
          <div className="absolute inset-0 bg-brand-dark rounded-[40px] rotate-3 overflow-hidden shadow-2xl">
             {/* Main Background Image - Clean White Linen Texture */}
             <img 
               src={hero.images.main.src} 
               alt={hero.images.main.alt} 
               className="w-full h-full object-cover opacity-100"
               decoding="async"
             />
             
             {/* Floating Badge - Right Side */}
             <div className="absolute top-8 right-8 bg-brand-cream/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg z-20">
                <p className="text-brand-cream font-display text-xl font-bold">{hero.badgeOverlay.percentage}</p>
                <p className="text-brand-light text-xs uppercase tracking-wider leading-tight">{hero.badgeOverlay.title}<br/>{hero.badgeOverlay.subtitle}</p>
             </div>
          </div>
          
          {/* Second overlapping image - Drying clothes in nature (Fresh air vibe) */}
          <motion.div 
            variants={slideUpLarge}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute -bottom-10 -left-10 w-2/3 h-64 rounded-[30px] overflow-hidden border-4 border-brand-cream shadow-xl -rotate-3"
          >
            <img 
               src={hero.images.secondary.src} 
               alt={hero.images.secondary.alt} 
               className="w-full h-full object-cover"
               loading="lazy"
               decoding="async"
             />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;