// Trust section configuration - testimonials and trust content
export const trustConfig = {
  headline: {
    line1: 'La confiance se mérite,',
    highlight: 'vêtement après vêtement.',
  },
  description: 'Nous ne sommes pas une franchise anonyme. Nous sommes une équipe de Meknès passionnée par le travail bien fait. Nous savons que confier ses vêtements personnels demande de la confiance.',
  badge: {
    title: 'Garantie Qualité',
    text: 'Si un article ne vous satisfait pas, nous le relavons gratuitement.',
    icon: 'Star',
  },
  testimonials: [
    {
      id: 1,
      text: 'Un service impeccable ! En vacances à Meknès, nous nous sommes retrouvés sans vêtements propres. La laverie était très occupée, mais le propriétaire a fait preuve d\'une gentillesse incroyable en acceptant de s\'occuper de notre linge le jour même pour nous dépanner',
      author: 'anissa Nissa.',
      role: 'Cliente fidèle',
      location: 'Meknès',
    },
    {
      id: 2,
      text: 'Professional service with helpful and flexible staff. I really recommended them. The pick up and delivery service is a huge help too, and the price is affordable. I would give more than 5 stars if I could.',
      author: 'Dénes Paragi.',
      role: 'Client fidèle',
      location: 'Meknès',
    },
    {
      id: 3,
      text: 'Je recommande vraiment cette laverie. Nous y sommes allés et l\'accueil et le service ont été parfait ! Très professionnels !.',
      author: 'COLLET Christophe.',
      role: 'Client fidèle',
      location: 'Meknès',
    },
    {
      id: 4,
      text: 'Pressing rapide et rapport qualité prix Je le recommande.',
      author: 'Mouna Sayer.',
      role: 'Client fidèle',
      location: 'Meknès',
    },
    {
      id: 5,
      text: 'Super good service. They wash and dry everything in 3 hours, price is 45 MAD per big bucket. Result is excellent and they even opened on a Friday for us. Only 10 minutes by car from the centre of Meknes. Recommended.',
      author: 'Raffaele Gricinella.',
      role: 'Client fidèle',
      location: 'Meknès',
    },
    
    // Add more testimonials here easily
  ],
  images: {
    main: {
      src: '/images/Trust/Avis1.webp',
      alt: 'Service de repassage professionnel',
      overlay: {
        title: 'Hygiène Absolue',
        text: 'Désinfection systématique de chaque machine entre les cycles.',
      },
    },
    secondary: {
      src: '/images/Trust/Avis.webp',
      alt: 'Linge plié au carré',
    },
  },
} as const;

