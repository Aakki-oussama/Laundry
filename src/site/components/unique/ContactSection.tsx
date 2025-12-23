import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/site/config/site-config';
import { iconMap } from '@/site/utils/icon-map';
import { fadeInUp, fadeInLeft, scaleIn } from '@/site/utils/motion-variants';

const ContactSection = () => {
  const { contact } = SITE_CONFIG;
  return (
    <section id="contact" className="py-12 md:py-[56px] lg:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Contact Menu (Compact & Elegant) */}
          <div className="lg:col-span-5">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="font-display text-4xl font-bold text-brand-dark mb-4">
                {contact.headline.title}
              </h2>
              <p className="text-brand-dark/60 text-lg leading-relaxed">
                {contact.headline.subtitle}
              </p>
            </motion.div>

            {/* Compact Vertical List */}
            <div className="flex flex-col gap-4">
              
              {/* WhatsApp - Highlighted */}
              <motion.a 
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                href={contact.methods.whatsapp.href}
                target="_blank"
                className="group flex items-center justify-between p-4 rounded-2xl bg-[#25D366]/5 border border-[#25D366]/20 hover:bg-[#25D366] transition-safe"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#25D366] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {(() => {
                      const WhatsAppIcon = iconMap[contact.methods.whatsapp.icon];
                      return WhatsAppIcon ? <WhatsAppIcon size={24} strokeWidth={2} /> : null;
                    })()}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark group-hover:text-white transition-colors">{contact.methods.whatsapp.label}</h3>
                    <p className="text-sm text-brand-dark/60 group-hover:text-white/90 transition-colors">{contact.methods.whatsapp.description}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/0 flex items-center justify-center text-[#25D366] group-hover:bg-white/20 group-hover:text-white transition-safe">
                  {(() => {
                    const ArrowIcon = iconMap['ArrowRight'];
                    return ArrowIcon ? <ArrowIcon size={18} /> : null;
                  })()}
                </div>
              </motion.a>

              {/* Phone Line */}
              <motion.a 
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                href={contact.methods.phone.href}
                className="group flex items-center justify-between p-4 rounded-2xl bg-brand-soft border border-transparent hover:bg-brand-dark hover:text-white transition-safe"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white text-brand-dark flex items-center justify-center shadow-sm">
                    {(() => {
                      const PhoneIcon = iconMap[contact.methods.phone.icon];
                      return PhoneIcon ? <PhoneIcon size={22} /> : null;
                    })()}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark group-hover:text-white">{contact.methods.phone.label}</h3>
                    <p className="text-sm text-brand-dark/60 group-hover:text-white/70">{contact.methods.phone.description}</p>
                  </div>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a 
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                href={contact.methods.email.href}
                className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-brand-light hover:border-brand-main hover:shadow-md transition-safe"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-soft text-brand-dark flex items-center justify-center">
                    {(() => {
                      const MailIcon = iconMap[contact.methods.email.icon];
                      return MailIcon ? <MailIcon size={22} /> : null;
                    })()}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark">{contact.methods.email.label}</h3>
                    <p className="text-sm text-brand-dark/60">{contact.methods.email.description}</p>
                  </div>
                </div>
              </motion.a>

            </div>

            {/* Socials - Small & Discrete */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="mt-10 pt-8 border-t border-brand-light flex items-center justify-between"
            >
               <span className="text-sm font-bold text-brand-dark/40 uppercase tracking-wider">Suivez-nous</span>
               <div className="flex gap-3">
                  {contact.social.map((social: { name: string; href: string; icon: string }) => {
                    const SocialIcon = iconMap[social.icon];
                    const isInstagram = social.name === 'Instagram';
                    return (
                      <a 
                        key={social.name}
                        href={social.href} 
                        className={`w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center text-brand-dark transition-safe ${
                          isInstagram 
                            ? 'hover:bg-gradient-to-tr hover:from-[#fd5949] hover:to-[#d6249f] hover:text-white' 
                            : 'hover:bg-[#1877F2] hover:text-white'
                        }`}
                        aria-label={`Suivre ${social.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {SocialIcon && <SocialIcon size={18} />}
                      </a>
                    );
                  })}
               </div>
            </motion.div>

          </div>

          {/* Right Column: Map (Clean) */}
          <div className="lg:col-span-7 h-full min-h-[500px] relative">
            <motion.div 
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full h-full rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-dark/10 relative z-10"
            >
              <iframe 
                src={contact.map.embedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-[filter] duration-500"
              ></iframe>
            </motion.div>
            
            {/* Decorative Element behind map */}
            <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-brand-soft rounded-full -z-10" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-main/10 rounded-full blur-3xl -z-10" />

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;