import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/site/config/site-config';
import { iconMap } from '@/site/utils/icon-map';
import { fadeInUp } from '@/site/utils/motion-variants';
const StorySection = () => {
  const { story } = SITE_CONFIG;

  return (
    <section id="story" className="py-12 md:py-[56px] lg:py-16 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-6"
          >
            {story.headline.line1}<br />
            <span className="text-brand-main italic">{story.headline.highlight}</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-dark/70"
          >
            {story.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {story.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-brand-soft p-8 rounded-[2rem] hover:bg-white hover:shadow-lg hover:shadow-brand-dark/5 border border-transparent hover:border-brand-light transition-safe group"
              >
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-brand-main shadow-sm group-hover:scale-110 transition-transform-safe">
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-dark mb-4">{feature.title}</h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StorySection;