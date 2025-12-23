import { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { SITE_CONFIG } from '@/site/config/site-config';
import { iconMap } from '@/site/utils/icon-map';
import { fadeInUp } from '@/site/utils/motion-variants';

// Sub-component for the animated number
const AnimatedCounter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value]); // motionValue is stable from framer-motion, no need in deps

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Format number with spaces (e.g. 1 000) and no decimals
        ref.current.textContent = Math.floor(latest).toLocaleString('fr-FR');
      }
    });
  }, [springValue]); // springValue is stable from framer-motion, but needed for cleanup

  return <span className="flex"><span ref={ref} />{suffix}</span>;
};

const StatsSection = () => {
  const { stats } = SITE_CONFIG;
  return (
    <section className="py-12 md:py-[56px] lg:py-16 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-main rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px]" />
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
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.5, duration: 0.6 }}
                className="text-center group"
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