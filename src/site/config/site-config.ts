// Main site configuration - contains all site data
import { trustConfig } from './trust-config';
import { coreConfig } from './core-config';
import { faqConfig } from './faq-config';
import { contactConfig } from './contact-config';

export const SITE_CONFIG = {
    // Site name and logo - imported from core config
    name: coreConfig.name,
    logo: coreConfig.logo,
    // Navigation menu for header
    navigation: {
      // Main navigation links
      links: [
        { label: 'Accueil', href: '#' },
        { label: 'Services', href: '#services' },
        { label: 'Processus', href: '#process' },
        { label: 'Avis', href: '#trust' },
      ],
      // Call-to-action button in header
      cta: {
        label: 'Commander',
        href: '#contact',
        mobileLabel: 'Commander maintenant',
      },
    },
    // Scroll threshold for navbar behavior
    scroll: {
      threshold: 50, // pixels to scroll before navbar changes
    },
    // Footer section content
    footer: {
      // Footer description text
      description: 'La référence du soin du linge à Meknès. Technologie moderne, produits écologiques et service client attentionné.',
      // Service links in footer
      services: [
        { name: 'Lavage au Kilo', href: '#services' },
        { name: 'Pressing & Repassage', href: '#services' },
        { name: 'Nettoyage Tapis', href: '#services' },
        { name: 'Service Entreprises', href: '#services' },
      ],
      // Contact information - imported from core config (single source of truth)
      contact: coreConfig.contact,
      // Social media links - imported from core config
      social: coreConfig.social,
      // SEO content for footer
      seo: {
        title: 'EcoLaundry : Votre partenaire propreté à Meknès',
        content: [
          'Située au cœur de la ville, EcoLaundry réinvente le service de blanchisserie à Meknès. Que vous habitiez à Hamria, Plaisance, ou Belle Vue, notre service de pressing avec livraison vous simplifie la vie. Spécialistes du lavage au Kilo, nous traitons aussi bien le linge quotidien que les articles volumineux comme les tapis et couettes.',
          'Notre engagement : offrir aux habitants de Meknès une alternative moderne, écologique et rapide aux pressings traditionnels. Fini les corvées, bonjour le temps libre. Profitez de nos services de nettoyage à sec, repassage et blanchisserie industrielle adaptés aux particuliers et professionnels.',
        ],
      },
      // Legal links (privacy policy, terms, etc.)
      legal: [
        { label: 'Mentions Légales', href: '#' },
        { label: 'Politique de confidentialité', href: '#' },
      ],
    },
    // Hero section (landing page main section)
    hero: {
      // Badge displayed at top of hero
      badge: {
        icon: 'Sparkles',
        text: 'Blanchisserie Nouvelle Génération',
      },
      headline: {
        line1: 'Meknès respire',
        line2: 'la fraîcheur.',
        highlight: 'la fraîcheur.',
      },
      // Hero description text
      description: 'Redécouvrez le plaisir du linge propre sans l\'effort. Lavage au kilo, soin expert et livraison à domicile partout à Meknès.',
      // Call-to-action buttons
      buttons: [
        { label: 'Ramassage à domicile', href: '#contact', primary: true },
        { label: 'Voir les tarifs', href: '#services', primary: false },
      ],
      // Hero section images
      images: {
        main: {
          src: '/images/hero/EcoLaundry-main.webp',
          alt: 'Linge frais et repassé',
        },
        secondary: {
          src: '/images/hero/Ecolaundry-Second.webp',
          alt: 'lavage au kilo',
        },
      },
      // Badge overlay on hero image
      badgeOverlay: {
        percentage: '100%',
        title: 'Satisfaction',
        subtitle: 'Garantie',
      },
    },
    // Story/Philosophy section content
    story: {
      // Section headline
      headline: {
        line1: 'Plus qu\'une blanchisserie,',
        highlight: 'un style de vie.',
      },
      // Section description
      description: 'À Meknès, la vie est riche et vibrante. Ne la passez pas devant votre machine à laver. EcoLaundry a été créé pour redonner de la valeur à votre temps libre tout en offrant une qualité de nettoyage professionnelle introuvable à la maison.',
      // Feature cards displayed in story section
      features: [
        {
          icon: 'Clock',
          title: 'Le temps retrouvé',
          text: 'La lessive prend en moyenne 4h par semaine. Imaginez ce que vous pourriez faire à Meknès pendant ce temps.',
        },
        {
          icon: 'Leaf',
          title: 'Écologie sensée',
          text: 'Nos machines haute performance consomment moins d\'eau et nos lessives sont biodégradables. Propre pour vous, doux pour le Maroc.',
        },
        {
          icon: 'Heart',
          title: 'Le soin du détail',
          text: 'Chaque vêtement est inspecté. Taches traitées, boutons vérifiés, pliage au carré. Comme si c\'était le nôtre.',
        },
      ],
    },
    // Services section content
    services: {
      // Section headline
      headline: 'Nos Formules',
      // Service items displayed in services section
      items: [
        {
          id: 'kilo',
          title: 'Lavage au Kilo',
          subtitle: 'Le quotidien, simplifié.',
          description: 'Idéal pour votre linge de tous les jours (t-shirts, jeans, draps). Lavé, séché, plié au carré. Simple et économique.',
          icon: 'Weight',
          src: '/images/service/Lavages-au-kg.webp',
          alt: 'Lavage au Kilo',
          priceStart: 'Dès 15 DH/kg',
        },
        {
          id: 'piece',
          title: 'Soin Délicat',
          subtitle: 'Repassage',
          description: 'Traitement expert pour vos chemises, costumes, robes et textiles délicats. Détachage manuel et repassage vapeur finition main.',
          icon: 'Shirt',
          src: '/images/service/Repassage.webp',
          alt: 'Soin Délicat',
          priceStart: 'Dès 5dh/pièce',
        },
        {
          id: 'volume',
          title: 'Gros Volumes',
          subtitle: 'Couettes & Tapis',
          description: 'Redonnez de l\'éclat à vos tapis marocains, couettes d\'hiver et rideaux. Nettoyage en profondeur pour éliminer acariens et poussière.',
          icon: 'Package',
          src: '/images/service/Tapiss.webp',
          alt: 'Gros Volumes',
          priceStart: 'Prix par m²',
        },
        {
          id: 'delivery',
          title: 'Collecte & Livraison',
          subtitle: 'On vient à vous.',
          description: 'Service de ramassage à domicile ou au bureau partout à Meknès. Planifiez un créneau, on s\'occupe du reste.',
          icon: 'Truck',
          src: '/images/service/EcoLoundry-Laivraison.webp',
          alt: 'Collecte & Livraison',
          priceStart: 'Gratuit > 100 DH',
        },
      ],
    },
    // Process section content
    process: {
      badge: {
        text: 'Processus Simplifié',
      },
      headline: 'Comment ça marche ?',
      endMark: {
        text: 'Cycle terminé',
        icon: 'SmilePlus',
      },
      steps: [
        {
          id: '01',
          title: 'La Commande',
          subtitle: 'Simple comme un clic',
          desc: 'Réservez votre créneau via WhatsApp ou téléphone. Précisez le type de linge et l\'adresse. C\'est tout.',
          icon: 'Smartphone',
          color: 'bg-blue-500',
          shadow: 'shadow-blue-500/30',
        },
        {
          id: '02',
          title: 'La Collecte',
          subtitle: 'On vient à vous',
          desc: 'Notre agent EcoLaundry passe chez vous avec nos sacs dédiés. Inutile de trier, nous nous en chargeons.',
          icon: 'Truck',
          color: 'bg-indigo-500',
          shadow: 'shadow-indigo-500/30',
        },
        {
          id: '03',
          title: 'Le Soin',
          subtitle: 'Expertise & Hygiène',
          desc: 'Lavage haute qualité, désinfection, séchage doux et repassage manuel. Chaque fibre est respectée.',
          icon: 'Droplets',
          color: 'bg-sky-500',
          shadow: 'shadow-sky-500/30',
        },
        {
          id: '04',
          title: 'La Livraison',
          subtitle: 'Retour à la fraîcheur',
          desc: '24h à 48h plus tard, votre linge revient plié, filmé et prêt à être rangé dans votre armoire.',
          icon: 'SmilePlus',
          color: 'bg-teal-500',
          shadow: 'shadow-teal-500/30',
        },
      ],
    },
    // Trust section - imported from separate file for easier testimonial management
    trust: trustConfig,
    // Stats section content
    stats: {
      // Statistics displayed in stats section
      items: [
        {
          id: 1,
          icon: 'Users',
          value: 370,
          suffix: '+',
          label: 'Clients Fidèles',
          subtext: 'Particuliers & Pros à Meknès',
        },
        {
          id: 2,
          icon: 'Scale',
          value: 150,
          suffix: 'T',
          label: 'Linge Traité',
          subtext: 'Tonnes lavées et pliées',
        },
        {
          id: 3,
          icon: 'Calendar',
          value: 5,
          suffix: 'Ans',
          label: "D'Expérience",
          subtext: 'Savoir-faire artisanal',
        },
        {
          id: 4,
          icon: 'Heart',
          value: 99,
          suffix: '%',
          label: 'Satisfaction',
          subtext: 'Clients recommandent',
        },
      ],
    },
    // CTA (Call-to-Action) section content
    cta: {
      // Badge displayed at top of CTA section
      badge: {
        icon: 'Clock',
        text: 'Réponse en moins de 5 min',
      },
      // Headline for CTA section
      headline: {
        line1: 'Laissez-nous faire',
        highlight: 'le sale boulot.',
      },
      // Description text
      description: 'Profitez de Meknès, de votre famille ou de votre café. Nous récupérons, lavons et livrons votre linge en 24h.',
      // Business hours text
      hours: 'Ouvert 7j/7 • 09h00 - 21h00',
      // Chat interface simulation (for visual side)
      chat: {
        avatar: {
          src: '/images/logo/Ecolaundry-logo.webp',
          alt: 'EcoLaundry Meknès',
        },
        name: 'EcoLaundry Meknès',
        status: {
          text: 'En ligne',
          color: '#25D366',
        },
        messages: [
          {
            text: "Salam ! J'ai 2 sacs de linge à laver. C'est possible pour demain ?",
            time: '10:42',
            sender: 'customer',
          },
          {
            text: 'Wa alaikom salam ! Bien sûr. Notre chauffeur arrive dans 30min à Hamria. 🚚',
            time: '10:43',
            sender: 'business',
          },
          {
            text: 'Parfait, merci ! 👍',
            time: '10:44',
            sender: 'customer',
          },
        ],
        badge: {
          text: 'Réponse immédiate',
        },
      },
    },
    // FAQ section - imported from separate file for easier FAQ management
    faq: faqConfig,
    // Contact section - imported from separate file, uses coreConfig to avoid duplication
    contact: contactConfig,
  } as const;