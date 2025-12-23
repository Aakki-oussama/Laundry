import { Droplets, MapPin, Mail, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/site/config/site-config';
import { iconMap } from '@/site/utils/icon-map';

const Footer = () => {
  const { name, logo, footer } = SITE_CONFIG;

  return (
    <footer className="bg-primary dark:bg-[oklch(0.22_0.04_254)] text-white pt-24 pb-8 relative overflow-hidden border-t border-white/5 dark:border-white/10">
        
        {/* Large Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden select-none opacity-[0.02]">
            <span className="font-display font-bold text-[20vw] leading-none text-white whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm">
                {name.toUpperCase()}
            </span>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-2 mb-6 group">
              <div className="bg-brand-main p-2.5 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-brand-main/20">
                  <Droplets className="text-white" size={24} fill="currentColor" fillOpacity={0.2} />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">{logo.text}</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              {footer.description}
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h2 className="font-display font-bold text-lg mb-6 text-white">Services</h2>
            <ul className="space-y-4 text-white/60 text-sm">
              {footer.services.map((service) => (
                  <li key={service.name}>
                      <a href={service.href} className="hover:text-brand-main transition-colors flex items-center gap-2 group">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-main transition-colors"></span>
                          {service.name}
                      </a>
                  </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h2 className="font-display font-bold text-lg mb-6 text-white">Contact</h2>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-brand-main/20 transition-colors">
                    <MapPin size={16} className="text-brand-main" />
                </div>
                <span className="mt-1">
                  {footer.contact.address.line1},<br/>{footer.contact.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-brand-main/20 transition-colors">
                    <Mail size={16} className="text-brand-main" />
                </div>
                <a href={`mailto:${footer.contact.email}`} className="hover:text-white transition-colors">
                  {footer.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-brand-main/20 transition-colors">
                    <Phone size={16} className="text-brand-main" />
                </div>
                <a href={`tel:${footer.contact.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {footer.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h2 className="font-display font-bold text-lg mb-6 text-white">Suivez-nous</h2>
            <div className="flex gap-4">
              {footer.social.map((social) => {
                const IconComponent = iconMap[social.icon];
                return IconComponent ? (
                  <a 
                    key={social.name}
                    href={social.href} 
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-main hover:border-brand-main hover:text-white text-white/60 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-brand-main/25"
                    aria-label={`Visiter notre page ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent size={20} strokeWidth={1.5} />
                  </a>
                ) : null;
              })}
            </div>
          </div>

        </div>

        {/* SEO Block - Integrated (Moved from LocalSeoSection) */}
        <div className="border-t border-white/10 pt-12 pb-12 mb-8">
            <h3 className="font-display text-white/80 text-lg mb-4">{footer.seo.title}</h3>
            <div className="grid md:grid-cols-2 gap-8 text-sm text-white/40 leading-relaxed">
                {footer.seo.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex justify-center items-center text-xs text-white/30">
          <p>@ 2025 {name} Meknès</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;