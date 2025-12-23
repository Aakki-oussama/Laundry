// FAQ section configuration - frequently asked questions
export const faqConfig = {
  badge: {
    icon: 'HelpCircle',
    text: 'Questions Fréquentes',
  },
  headline: {
    title: 'Un doute ? On vous répond.',
    subtitle: "L'essentiel à savoir pour votre première commande.",
  },
  items: [
    {
      id: 1,
      question: 'Comment fonctionne le service de ramassage ?',
      answer: 'C\'est très simple. Contactez-nous via WhatsApp ou téléphone pour fixer un créneau. Notre chauffeur passe récupérer votre linge (domicile ou bureau) à Meknès. Une fois lavé, séché et plié, nous vous le ramenons sous 24h à 48h.',
    },
    {
      id: 2,
      question: 'Quels sont les délais de livraison ?',
      answer: 'Pour le linge courant (lavage au kilo), le délai standard est de 24h. Pour les pièces spécifiques (tapis, couettes, cuirs) ou les très gros volumes, cela peut prendre 48h à 72h. Un service Express est disponible sur demande.',
    },
    {
      id: 3,
      question: 'Faut-il trier le linge avant ?',
      answer: 'Non, reposez-vous ! Mettez tout dans les sacs. Nos experts se chargent de trier les couleurs et les matières pour adapter les cycles de lavage. Si vous avez une tache spécifique à traiter, signalez-le simplement au chauffeur.',
    },
    {
      id: 4,
      question: 'Comment se fait le paiement ?',
      answer: 'Le paiement s\'effectue à la livraison, une fois que vous avez récupéré votre linge propre et que vous êtes satisfait. Nous acceptons les espèces et les virements bancaires pour les clients professionnels.',
    },
    {
      id: 5,
      question: 'Lavez-vous les articles délicats ?',
      answer: 'Oui. Nous disposons d\'un équipement de pressing professionnel pour les costumes, robes de soirée et textiles délicats. Ces articles sont traités séparément avec des produits doux et finis manuellement.',
    },
    // Add more FAQs here easily
  ],
} as const;

