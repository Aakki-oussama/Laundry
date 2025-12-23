// Navigation link for header menu
export interface NavLink {
    label: string;
    href: string;
  }

// Service link in footer
export interface FooterService {
    name: string;
    href: string;
  }

// Contact information (single source of truth for all contact info)
export interface ContactInfo {
  address: {
    line1: string;
    line2: string;
    country: string;
  };
  email: string;
  phone: string;
  whatsapp: {
    label: string;
    href: string;
    icon: string;
  };
}

// Social media link for footer
export interface SocialLink {
    name: string;
    href: string;
    icon: string;
  }

// Legal link for footer (privacy policy, terms, etc.)
export interface LegalLink {
    label: string;
    href: string;
  }

// Call-to-action button in hero section
export interface HeroButton {
    label: string;
    href: string;
    primary?: boolean;
  }

// Image used in hero section
export interface HeroImage {
    src: string;
    alt: string;
  }

// Badge overlay displayed on hero image
export interface HeroBadge {
    percentage: string;
    title: string;
    subtitle: string;
  }

// Feature card in story/philosophy section
export interface StoryFeature {
    icon: string;
    title: string;
    text: string;
  }

// Service item in services section
export interface ServiceItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    src: string;
    alt: string;
    priceStart?: string;
  }

// Process step in process section
export interface ProcessStep {
    id: string;
    title: string;
    subtitle: string;
    desc: string;
    icon: string;
    color: string;
    shadow: string;
  }

// Testimonial in trust section
export interface Testimonial {
    id: number;
    text: string;
    author: string;
    role: string;
    location: string;
  }

// Stat item in stats section
export interface StatItem {
  id: number;
  icon: string;
  value: number;
  suffix: string;
  label: string;
  subtext: string;
}

// Chat message in CTA section
export interface ChatMessage {
  text: string;
  time: string;
  sender: 'customer' | 'business';
}

// CTA section configuration
// FAQ item for FAQ section
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// FAQ section configuration
export interface FAQSection {
  badge: {
    icon: string;
    text: string;
  };
  headline: {
    title: string;
    subtitle: string;
  };
  items: FAQItem[];
}

// Contact section configuration
export interface ContactSection {
  headline: {
    title: string;
    subtitle: string;
  };
  methods: {
    whatsapp: {
      label: string;
      description: string;
      href: string;
      icon: string;
    };
    phone: {
      label: string;
      description: string;
      href: string;
      icon: string;
    };
    email: {
      label: string;
      description: string;
      href: string;
      icon: string;
    };
  };
  address: {
    title: string;
    line1: string;
    line2: string;
    full: string;
  };
  hours: {
    text: string;
    icon: string;
  };
  social: SocialLink[];
  map: {
    embedUrl: string;
  };
}

export interface CTASection {
  badge: {
    icon: string;
    text: string;
  };
  headline: {
    line1: string;
    highlight: string;
  };
  description: string;
  hours: string;
  chat: {
    avatar: {
      src: string;
      alt: string;
    };
    name: string;
    status: {
      text: string;
      color: string;
    };
    messages: ChatMessage[];
    badge: {
      text: string;
    };
  };
}
  
  // Main site configuration interface - contains all site data
  export interface SiteConfig {
    name: string;
    logo: {
      icon: string;
      text: string;
    };
    navigation: {
      links: NavLink[];
      cta: {
        label: string;
        href: string;
        mobileLabel: string;
      };
    };
    scroll: {
      threshold: number;
    };
    footer: {
      description: string;
      services: FooterService[];
      contact: ContactInfo;
      social: SocialLink[];
      seo: {
        title: string;
        content: string[];
      };
      legal: LegalLink[];
    };
    hero: {
      badge: {
        icon: string;
        text: string;
      };
      headline: {
        line1: string;
        line2: string;
        highlight: string;
      };
      description: string;
      buttons: HeroButton[];
      images: {
        main: HeroImage;
        secondary: HeroImage;
      };
      badgeOverlay: HeroBadge;
    };
    story: {
      headline: {
        line1: string;
        highlight: string;
      };
      description: string;
      features: StoryFeature[];
    };
    services: {
      headline: string;
      items: ServiceItem[];
    };
    process: {
      badge: {
        text: string;
      };
      headline: string;
      endMark: {
        text: string;
        icon: string;
      };
      steps: ProcessStep[];
    };
    trust: {
      headline: {
        line1: string;
        highlight: string;
      };
      description: string;
      badge: {
        title: string;
        text: string;
        icon: string;
      };
      testimonials: Testimonial[];
      images: {
        main: {
          src: string;
          alt: string;
          overlay: {
            title: string;
            text: string;
          };
        };
        secondary: {
          src: string;
          alt: string;
        };
      };
    };
    stats: {
      items: StatItem[];
    };
    cta: CTASection;
    faq: FAQSection;
    contact: ContactSection;
  }