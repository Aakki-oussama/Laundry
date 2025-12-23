import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/site/config/site-config';
import { iconMap } from '@/site/utils/icon-map';
import { fadeInUp, fadeInUpSmall, scaleOnly, rotateIn3D } from '@/site/utils/motion-variants';

const CTASection = () => {
  const { cta, footer } = SITE_CONFIG;
  const BadgeIcon = iconMap[cta.badge.icon] || iconMap['Clock'];
  // Use footer contact as single source of truth for all contact info
  const contact = footer.contact;
  const WhatsAppIcon = iconMap[contact.whatsapp.icon] || iconMap['MessageCircle'];
  const PhoneIcon = iconMap['Phone'] || iconMap['Phone']; // Phone icon is standard
  const phoneNumber = contact.phone;
  const phoneHref = `tel:${phoneNumber.replace(/\s/g, '')}`;
  return (
    <section id="contact" className="py-12 md:py-[56px] lg:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Main Card */}
        <div className="relative bg-brand-dark rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-dark/20">
          
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-main/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
          
          {/* Content Wrapper */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 md:p-20 items-center">
            
            {/* Text Side */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <motion.div 
                variants={fadeInUpSmall}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-brand-main mb-8 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm mx-auto lg:mx-0"
              >
                 <BadgeIcon size={16} />
                 <span className="text-xs md:text-sm font-bold tracking-wider uppercase">{cta.badge.text}</span>
              </motion.div>
              
              <motion.h2 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]"
              >
                {cta.headline.line1} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-main to-sky-300">{cta.headline.highlight}</span>
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/70 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                {cta.description}
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a 
                  href={contact.whatsapp.href} 
                  className="group bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-green-900/20 hover:bg-[#20bd5a] hover:scale-[1.02] transition-safe"
                >
                  <WhatsAppIcon className="group-hover:rotate-12 transition-transform" size={20} />
                  {contact.whatsapp.label}
                </a>
                
                <a 
                  href={phoneHref} 
                  className="group bg-white/5 text-white border border-white/10 px-6 py-3 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-white hover:text-brand-dark transition-safe"
                >
                  <PhoneIcon size={20} />
                  <span>{phoneNumber}</span>
                </a>
              </motion.div>
              
              <p className="mt-6 text-white/30 text-xs uppercase tracking-widest">
                {cta.hours}
              </p>
            </div>

            {/* Visual Side: Simulated Chat Interface */}
            <div className="relative flex justify-center items-center perspective-1000 order-1 lg:order-2">
               <motion.div 
                 variants={rotateIn3D}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="relative w-full max-w-[340px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-4 md:p-6 flex flex-col transform rotate-0 lg:rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl"
               >
                  {/* Chat Header */}
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <img 
                          src={cta.chat.avatar.src} 
                          alt={cta.chat.avatar.alt} 
                          className="rounded-full"
                          loading="lazy"
                          decoding="async"
                        />
                     </div>
                     <div>
                        <p className="text-white font-bold text-sm">{cta.chat.name}</p>
                        <p className="text-[#25D366] text-xs font-medium flex items-center gap-1" style={{ color: cta.chat.status.color }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cta.chat.status.color }}></span>
                          {cta.chat.status.text}
                        </p>
                     </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-4 mb-6">
                    {cta.chat.messages.map((message, index) => (
                      <div
                        key={index}
                        className={`${
                          message.sender === 'customer'
                            ? 'bg-white/10 self-start rounded-2xl rounded-tl-none mr-auto'
                            : 'bg-brand-main self-end ml-auto rounded-2xl rounded-tr-none shadow-lg'
                        } p-3 px-4 max-w-[90%]`}
                      >
                        <p className={`text-sm leading-relaxed ${message.sender === 'customer' ? 'text-white/90' : 'text-white font-medium'}`}>
                          {message.text}
                        </p>
                        <span className={`text-[10px] block text-right mt-1 ${message.sender === 'customer' ? 'text-white/30' : 'text-white/50'}`}>
                          {message.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Input area simulation */}
                  <div className="mt-auto bg-black/20 rounded-full h-10 w-full flex items-center px-4 justify-between">
                     <div className="w-20 h-2 bg-white/20 rounded-full"></div>
                     <div className="w-6 h-6 rounded-full bg-brand-main/50 flex items-center justify-center">
                        <ArrowRight size={12} className="text-white" />
                     </div>
                  </div>

                  {/* Decorative Badge */}
                  <motion.div 
                    variants={scaleOnly}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-4 -right-4 bg-white text-brand-dark px-3 py-1 rounded-lg font-bold shadow-xl text-xs rotate-12"
                  >
                    {cta.chat.badge.text}
                  </motion.div>
               </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;