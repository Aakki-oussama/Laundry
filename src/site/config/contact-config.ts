// Contact section configuration - contact information and map
// Uses coreConfig for contact info to avoid duplication
import { coreConfig } from './core-config';

export const contactConfig = {
  headline: {
    title: 'Parlons de votre linge',
    subtitle: 'Une question spécifique ? L\'équipe EcoLaundry vous répond rapidement.',
  },
  // Contact methods - using coreConfig to avoid duplication
  methods: {
    whatsapp: {
      label: 'WhatsApp',
      description: 'Chat direct & Photos',
      href: coreConfig.contact.whatsapp.href,
      icon: 'MessageCircle',
    },
    phone: {
      label: 'Téléphone',
      description: coreConfig.contact.phone,
      href: `tel:${coreConfig.contact.phone.replace(/\s/g, '')}`,
      icon: 'Phone',
    },
    email: {
      label: 'Email',
      description: coreConfig.contact.email,
      href: `mailto:${coreConfig.contact.email}`,
      icon: 'Mail',
    },
  },
  // Address information - using coreConfig
  address: {
    title: 'Atelier EcoLaundry',
    line1: coreConfig.contact.address.line1,
    line2: coreConfig.contact.address.country,
    full: `${coreConfig.contact.address.line1}, ${coreConfig.contact.address.country}`,
  },
  // Business hours
  hours: {
    text: 'Ouvert: 09h - 21h',
    icon: 'Clock',
  },
  // Social media - using coreConfig to avoid duplication
  social: coreConfig.social,
  // Google Maps embed URL
  // Coordinates: 33.85839407888286, -5.576250495404383
  map: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.968662997636!2d-5.576250495404383!3d33.85839407888286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUxJzMwLjIiTiA1wrAzNCczNC41Ilc!5e0!3m2!1sfr!2sma!4v1735689600000!5m2!1sfr!2sma',
  },
} as const;

