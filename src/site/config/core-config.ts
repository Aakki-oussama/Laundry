// Core site configuration - static site information
// This includes site name, logo, contact info, and social media
export const coreConfig = {
  // Site name
  name: 'EcoLaundry',
  
  // Logo configuration for header and footer
  logo: {
    icon: 'Droplets',
    text: 'EcoLaundry',
  },
  
  // Contact information (single source of truth for all contact info)
  contact: {
    address: {
      line1: 'Avenue Zitoune, Meknès',
      line2: 'Morocco',
      country: 'Morocco',
    },
    email: 'contact@ecolaundry.ma',
    phone: '0664755026',
    whatsapp: {
      label: 'Commander sur WhatsApp',
      href: 'https://wa.me/212664755026',
      icon: 'MessageCircle',
    },
  },
  
  // Social media links
  social: [
    { name: 'Instagram', href: 'https://www.instagram.com/eco_laundry22/', icon: 'Instagram' },
    { name: 'Facebook', href: 'https://www.facebook.com/ecolaundrymeknes/', icon: 'Facebook' },
  ],
} as const;

