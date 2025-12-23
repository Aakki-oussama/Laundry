import { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue, useReducedMotion } from 'framer-motion';
import { SITE_CONFIG } from '@/site/config/site-config';
import { iconMap } from '@/site/utils/icon-map';
import { fadeInUp } from '@/site/utils/motion-variants';

// Detect if device is mobile/iOS for performance optimization
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

// Sub-component for the animated number
const AnimatedCounter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const prefersReducedMotion = useReducedMotion();
  const isMobile = isMobileDevice();
  
  // Use simpler animation on mobile/iOS or when reduced motion is preferred
  const useSimpleAnimation = isMobile || prefersReducedMotion;
  
  const motionValue = useMotionValue(0);
  // Lighter spring config for mobile, or use tween for reduced motion
  const springValue = useSpring(motionValue, { 
    damping: useSimpleAnimation ? 30 : 50, 
    stiffness: useSimpleAnimation ? 80 : 100 
  });

  useEffect(() => {
    if (isInView) {
      if (useSimpleAnimation) {
        // Simple linear animation for mobile
        motionValue.set(value);
      } else {
        motionValue.set(value);
      }
    }
  }, [isInView, value, motionValue, useSimpleAnimation]);

  useEffect(() => {
    if (!ref.current) return;
    
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        // Format number with spaces (e.g. 1 000) and no decimals
        ref.current.textContent = Math.floor(latest).toLocaleString('fr-FR');
      }
    });
    
    return unsubscribe;
  }, [springValue]);

  return (
    <span className="flex" style={{ willChange: 'contents' }}>
      <span ref={ref} style={{ willChange: 'transform' }} />{suffix}
    </span>
  );
};

const StatsSection = () => {
  const { stats } = SITE_CONFIG;
  const prefersReducedMotion = useReducedMotion();
  const isMobile = isMobileDevice();
  
  // Reduce animation delays on mobile for better performance
  const getDelay = (index: number) => {
    if (prefersReducedMotion) return 0;
    return isMobile ? index * 0.1 : index * 0.2;
  };

  return (
    <section className="py-12 md:py-[56px] lg:py-16 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Decor - Reduced blur on mobile for performance */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute top-0 left-0 w-64 h-64 bg-brand-main rounded-full ${isMobile ? 'blur-[50px]' : 'blur-[100px]'}`} />
        <div className={`absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full ${isMobile ? 'blur-[50px]' : 'blur-[100px]'}`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.items.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: isMobile ? "-100px" : "-50px" }}
                transition={{ 
                  delay: getDelay(index), 
                  duration: isMobile ? 0.4 : 0.6,
                  ease: "easeOut"
                }}
                className="text-center group"
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-brand-main group-hover:border-brand-main transition-colors duration-300 shadow-lg">
                  {IconComponent && (
                    <IconComponent size={32} className="text-brand-main group-hover:text-white transition-colors duration-300" />
                  )}
                </div>
                
                <div className="font-display font-bold text-4xl md:text-5xl mb-2 flex justify-center text-white tracking-tight">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                <h3 className="font-bold text-lg text-white/90 mb-1">{stat.label}</h3>
                <p className="text-sm text-white/50">{stat.subtext}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;