import { useState } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/site/config/site-config';
import { useScroll } from '@/site/hooks/use-scroll';

const Navbar = () => {
  const isScrolled = useScroll(SITE_CONFIG.scroll.threshold);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { navigation, logo } = SITE_CONFIG;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-brand-cream/80 backdrop-blur-md shadow-sm border-b border-brand-main/10' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-brand-main text-white p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
              <Droplets size={24} strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-brand-dark">
              {logo.text}
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-brand-dark/80 hover:text-brand-main transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-main hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={navigation.cta.href}
              className="bg-brand-dark text-brand-cream px-6 py-2.5 rounded-full font-medium text-sm hover:bg-brand-main transition-colors duration-300 transform hover:scale-105"
            >
              {navigation.cta.label}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-brand-dark"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Ouvrir le menu de navigation"
            aria-expanded={isMobileOpen}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-dark/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white"
              aria-label="Fermer le menu"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col items-center gap-8">
              {navigation.links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="font-display text-3xl text-brand-cream hover:text-brand-main transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                href={navigation.cta.href}
                onClick={() => setIsMobileOpen(false)}
                className="mt-8 bg-brand-main text-white px-8 py-3 rounded-full text-lg"
              >
                {navigation.cta.mobileLabel}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;