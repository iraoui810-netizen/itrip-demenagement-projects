import { MoroccanCity } from '../types';

export const CITIES_DATA: MoroccanCity[] = [
  {
    id: 'casablanca',
    slug: 'demenagement-casablanca',
    name: 'Casablanca',
    region: 'Casablanca-Settat',
    heroTagline: 'Votre déménageur de référence à Casablanca',
    description: 'Capitale économique du Maroc, Casablanca concentre un habitat diversifié entre résidences modernes, immeubles anciens art déco et villas prestigieuses. iTrip maîtrise parfaitement la circulation casablancaise, les accès aux résidences fermées et les contraintes d’étage.',
    districts: [
      'Maârif & Gauthier',
      'Anfa & Ain Diab',
      'Bourgogne & Racine',
      'Bouskoura & Ville Verte',
      'Dar Bouazza & Tamaris',
      'Belvédère & Roches Noires',
      'Californie & CIL',
      'Oasis & Polo'
    ],
    movingTips: [
      'Réservez votre stationnement en bas d’immeuble la veille pour faciliter le chargement du camion.',
      'Informez le syndic de copropriété pour réserver l’ascenseur de service et protéger la cabine.',
      'Anticipez les heures de pointe sur les grands boulevards (Zerktouni, Roudani, Autoroute urbaine).'
    ],
    commonRoutes: [
      'Casablanca → Rabat (1h15 via autoroute A1)',
      'Casablanca → Marrakech (2h45 via autoroute A3)',
      'Casablanca → Tanger (3h30 via autoroute A1)',
      'Casablanca → Agadir (4h30 via autoroute A3/A7)'
    ],
    faqs: [
      {
        question: 'Comment réserver le stationnement du camion de déménagement à Casablanca ?',
        answer: 'Nos équipes gèrent le positionnement du camion au plus près de votre entrée. Dans les quartiers denses comme le Maârif ou Bourgogne, nous vous conseillons de prévenir les gardiens ou voisins pour préserver une place dès le matin.'
      },
      {
        question: 'Intervenez-vous dans les résidences fermées et zones périphériques de Casablanca ?',
        answer: 'Oui, nous intervenons régulièrement à Bouskoura Ville Verte, Dar Bouazza, Tamaris, Zenata et toutes les résidences privées avec gardiennage.'
      },
      {
        question: 'Quel est le délai pour obtenir une date d’intervention à Casablanca ?',
        answer: 'Nous pouvons intervenir sous 24 à 48 heures pour les urgences. Pour les fins de mois très demandées, nous vous recommandons de réserver 7 à 10 jours à l’avance.'
      }
    ]
  },
  {
    id: 'rabat',
    slug: 'demenagement-rabat',
    name: 'Rabat',
    region: 'Rabat-Salé-Kénitra',
    heroTagline: 'Déménagement soigné à Rabat et sa région',
    description: 'Ville administrative et capitale du Royaume, Rabat requiert discrétion, ponctualité et respect des normes résidentielles. iTrip dessert tous les quartiers résidentiels de Rabat, Salé et Témara.',
    districts: [
      'Agdal & Haut Agdal',
      'Hay Riad & Ryad Al Andalous',
      'Souissi & Ambassades',
      'Les Orangers & Hassan',
      'Aviation & Mabella',
      'Harhoura & Témara'
    ],
    movingTips: [
      'Dans les quartiers diplomatiques (Souissi), prévoyez les autorisations nécessaires si votre rue comporte des contrôles.',
      'Pour Hay Riad, les allées piétonnes nécessitent parfois des chariots spécifiques que nous fournissons systématiquement.'
    ],
    commonRoutes: [
      'Rabat → Casablanca (1h15 via autoroute A1)',
      'Rabat → Tanger (2h30 via autoroute A1)',
      'Rabat → Fès / Meknès (2h via autoroute A2)'
    ],
    faqs: [
      {
        question: 'Faites-vous les déménagements réguliers entre Casablanca et Rabat ?',
        answer: 'Oui, la liaison Casablanca-Rabat est notre ligne la plus fréquente. Nous assurons des navettes quotidiennes avec possibilité de livraison le jour même.'
      },
      {
        question: 'Proposez-vous le démontage des meubles administratifs ou de bureaux à Rabat ?',
        answer: 'Absolument. Nous travaillons aussi bien pour les particuliers que pour les ministères, ambassades et cabinets professionnels de la capitale.'
      }
    ]
  },
  {
    id: 'marrakech',
    slug: 'demenagement-marrakech',
    name: 'Marrakech',
    region: 'Marrakech-Safi',
    heroTagline: 'Déménagement particulier & riads à Marrakech',
    description: 'De la Palmeraie aux résidences de Guéliz et de l’Hivernage, iTrip assure la transition de vos meubles vers la ville ocre avec un soin particulier face à la chaleur et à la poussière.',
    districts: [
      'Guéliz & Hivernage',
      'Palmeraie & Route de Fès',
      'Targa & Semlalia',
      'Mhamid & Massira',
      'Agdal & Route de l’Ourika'
    ],
    movingTips: [
      'Pour les riads ou quartiers historiques proches de la médina, des véhicules étroits ou transpalettes spécifiques sont déployés.',
      'La poussière étant plus présente, nous doublons l’emballage étirable pour les canapés et textiles.'
    ],
    commonRoutes: [
      'Marrakech → Casablanca (2h45 via A3)',
      'Marrakech → Agadir (2h15 via A7)',
      'Marrakech → Tanger (5h45 via A3/A1)'
    ],
    faqs: [
      {
        question: 'Peut-on déménager un riad ou une maison dans les ruelles étroites à Marrakech ?',
        answer: 'Oui, nous adaptons notre flotte avec des petits utilitaires et organisons un transbordement manuel soigné vers notre grand camion de ligne.'
      },
      {
        question: 'Proposez-vous le stockage temporaire à Marrakech ?',
        answer: 'Oui, nous proposons des solutions de garde-meubles sécurisé si votre nouveau logement n’est pas immédiatement prêt.'
      }
    ]
  },
  {
    id: 'tanger',
    slug: 'demenagement-tanger',
    name: 'Tanger',
    region: 'Tanger-Tétouan-Al Hoceïma',
    heroTagline: 'Votre partenaire déménagement dans le Détroit',
    description: 'Porte d’entrée du Maroc et carrefour international, Tanger connaît une croissance dynamique. iTrip accompagne les familles et professionnels qui s’y installent ou en partent.',
    districts: [
      'Malabata & Baie de Tanger',
      'Centre-ville & Boulevard Pasteur',
      'California & Vieille Montagne',
      'Iberia & Marshan',
      'Gzenaya & Tanger Free Zone'
    ],
    movingTips: [
      'Tanger étant vallonnée, nous sécurisons particulièrement l’arrimage contre les dénivelés et les vents forts.',
      'Pour les expatriés arrivant par Tanger Med, nous coordonnons le transfert direct de vos conteneurs vers votre domicile.'
    ],
    commonRoutes: [
      'Tanger → Casablanca (3h30 via A1)',
      'Tanger → Rabat (2h30 via A1)',
      'Tanger → Fès (3h30 via autoroute/voie express)'
    ],
    faqs: [
      {
        question: 'Assurez-vous les déménagements Tanger-Casablanca en direct ?',
        answer: 'Oui, nos camions relient directement Tanger et Casablanca sans rupture de charge pour garantir une sécurité maximale de vos biens.'
      }
    ]
  },
  {
    id: 'agadir',
    slug: 'demenagement-agadir',
    name: 'Agadir',
    region: 'Souss-Massa',
    heroTagline: 'Déménagement serein à Agadir et la région du Souss',
    description: 'Que ce soit pour une installation balnéaire, une retraite ensoleillée ou un transfert d’activité agricole et touristique, iTrip dessert Agadir, Taghazout, Inezgane et Taghazout Bay.',
    districts: [
      'Sonaba & Founty',
      'Charaf & Haut Founty',
      'Taghazout Bay & Aourir',
      'Dakhla & Salam',
      'Nouveau Talborjt'
    ],
    movingTips: [
      'Prévoyez des housses étanches spéciales bord de mer pour préserver le bois et le cuir de l’air marin.',
      'La traversée de l’Atlas via l’autoroute A7 impose un arrimage de très haute stabilité.'
    ],
    commonRoutes: [
      'Agadir → Casablanca (4h30 via A7/A3)',
      'Agadir → Marrakech (2h15 via A7)',
      'Agadir → Rabat (5h45 via autoroute)'
    ],
    faqs: [
      {
        question: 'Quelle est la durée moyenne d’un trajet Casablanca - Agadir ?',
        answer: 'Le trajet routier en camion de déménagement dure environ 5h30 à 6h avec les temps de pause obligatoires de nos chauffeurs pour une sécurité absolue.'
      }
    ]
  },
  {
    id: 'fes',
    slug: 'demenagement-fes',
    name: 'Fès',
    region: 'Fès-Meknès',
    heroTagline: 'Déménagement traditionnel et moderne à Fès',
    description: 'De la Ville Nouvelle (Champs de Course, Atlas) aux résidences de la Route d’Immouzzer, iTrip organise vos déménagements avec respect des traditions et outillage moderne.',
    districts: [
      'Route d’Immouzzer',
      'Champs de Course & Atlas',
      'Narjiss & Mont Fleuri',
      'Ville Nouvelle & Agdal',
      'Zouagha & Bensouda'
    ],
    movingTips: [
      'Pour les quartiers historiques ou les maisons traditionnelles, notre équipe sait manipuler les meubles en bois ouvragé et les zelliges.',
      'Liaison autoroutière rapide vers Casablanca et Rabat.'
    ],
    commonRoutes: [
      'Fès → Casablanca (3h via A2/A1)',
      'Fès → Rabat (2h via A2)',
      'Fès → Tanger (3h30 via voie express)'
    ],
    faqs: [
      {
        question: 'Proposez-vous le groupage économique vers Fès ?',
        answer: 'Oui, si vous avez un volume modéré (quelques meubles ou cartons), notre formule groupage régulier permet de réduire significativement la facture.'
      }
    ]
  },
  {
    id: 'meknes',
    slug: 'demenagement-meknes',
    name: 'Meknès',
    region: 'Fès-Meknès',
    heroTagline: 'Déménagement efficace à Meknès',
    description: 'Desservant Hamria, Marjane, Belle-Vue et Bassatine, nos équipes assurent un déménagement clé en main pour particuliers et professionnels.',
    districts: ['Hamria', 'Marjane', 'Belle-Vue', 'Bassatine', 'Toulal', 'Mansour'],
    movingTips: ['Privilégiez les départs matinaux pour une arrivée et installation le jour même.'],
    commonRoutes: ['Meknès → Casablanca (2h30)', 'Meknès → Rabat (1h30)'],
    faqs: [
      {
        question: 'Peut-on combiner un déménagement avec garde-meubles entre Meknès et Casablanca ?',
        answer: 'Oui, nous pouvons stocker temporairement vos biens dans notre entrepôt sécurisé avant de livrer à votre convenance.'
      }
    ]
  },
  {
    id: 'kenitra',
    slug: 'demenagement-kenitra',
    name: 'Kénitra',
    region: 'Rabat-Salé-Kénitra',
    heroTagline: 'Déménagement rapide à Kénitra & Mehdia',
    description: 'Proche du pôle industriel Atlantic Free Zone et des plages de Mehdia, Kénitra connaît un afflux régulier de nouveaux résidents que nous accompagnons au quotidien.',
    districts: ['Centre-ville', 'Maamora', 'Bir Rami', 'Alliance Darna', 'Mehdia'],
    movingTips: ['Accès autoroutier A1 direct vers Rabat et Tanger.'],
    commonRoutes: ['Kénitra → Rabat (35 min)', 'Kénitra → Casablanca (1h30)'],
    faqs: [
      {
        question: 'Faites-vous les déménagements d’usines ou cadres à l’Atlantic Free Zone ?',
        answer: 'Oui, nous prenons en charge la réinstallation des cadres expatriés et le transfert logistique d’équipements.'
      }
    ]
  },
  {
    id: 'mohammedia',
    slug: 'demenagement-mohammedia',
    name: 'Mohammedia',
    region: 'Casablanca-Settat',
    heroTagline: 'Déménagement express Casablanca ↔ Mohammedia',
    description: 'La cité des fleurs est reliée en 20 minutes à Casablanca. iTrip réalise de multiples déménagements hebdomadaires vers la corniche, Monica, Mannesmann et le centre.',
    districts: ['Monica & Sablettes', 'Mannesmann', 'Centre & Parc', 'El Alia', 'Riad Salam'],
    movingTips: ['Liaison côtière ou autoroutière très fluide en dehors des pointes matinales.'],
    commonRoutes: ['Mohammedia → Casablanca (25 min)', 'Mohammedia → Rabat (55 min)'],
    faqs: [
      {
        question: 'Le tarif est-il le même que pour un déménagement intra-Casablanca ?',
        answer: 'En raison de la très forte proximité, nos tarifs entre Casablanca et Mohammedia bénéficient de barèmes très compétitifs.'
      }
    ]
  },
  {
    id: 'el-jadida',
    slug: 'demenagement-el-jadida',
    name: 'El Jadida',
    region: 'Casablanca-Settat',
    heroTagline: 'Déménagement à El Jadida & Mazagan',
    description: 'Déménagement pour résidents permanents, résidences secondaires et cadres du pôle de Jorf Lasfar.',
    districts: ['Plateau', 'Plage & Deauville', 'Mazagan Resort', 'Al Qods', 'Nadjah'],
    movingTips: ['1h de trajet seulement depuis Casablanca via l’autoroute A1 prolongée.'],
    commonRoutes: ['El Jadida → Casablanca (1h)', 'El Jadida → Marrakech (2h30)'],
    faqs: [
      {
        question: 'Pouvez-vous équiper les meubles d’une résidence secondaire sans ma présence continue ?',
        answer: 'Oui, nous pouvons réceptionner les clés auprès de votre gardien de confiance et procéder à l’installation avec compte-rendu photo/vidéo.'
      }
    ]
  },
  {
    id: 'settat',
    slug: 'demenagement-settat',
    name: 'Settat',
    region: 'Casablanca-Settat',
    heroTagline: 'Déménagement à Settat et Chaouia',
    description: 'Intervention sur Settat, Berrechid et l’ensemble de la région Chaouia-Ouardigha.',
    districts: ['Centre', 'Hay El Farah', 'Al Khair', 'Mmimouna', 'Haut Settat'],
    movingTips: ['Proximité immédiate de l’autoroute de Casablanca.'],
    commonRoutes: ['Settat → Casablanca (50 min)', 'Settat → Marrakech (2h)'],
    faqs: [
      {
        question: 'Desservez-vous Berrechid et les communes environnantes ?',
        answer: 'Oui, nous couvrons Berrechid, Nouaceur et toutes les localités avoisinantes.'
      }
    ]
  },
  {
    id: 'beni-mellal',
    slug: 'demenagement-beni-mellal',
    name: 'Beni Mellal',
    region: 'Béni Mellal-Khénifra',
    heroTagline: 'Déménagement au pied du Moyen Atlas',
    description: 'Liaisons régulières vers Beni Mellal, Kasba Tadla, Fquih Ben Salah et Khouribga.',
    districts: ['Centre', 'Ain Asserdoun', 'Hay Riyad', 'Al Massira', 'Adouar'],
    movingTips: ['Voies express récentes facilitant le transit sécurisé des camions lourds.'],
    commonRoutes: ['Beni Mellal → Casablanca (2h45)', 'Beni Mellal → Marrakech (2h30)'],
    faqs: [
      {
        question: 'Prenez-vous en charge les fermes ou résidences rurales autour de Beni Mellal ?',
        answer: 'Oui, nos chauffeurs maîtrisent les voies d’accès rurales et les cours de fermes pour charger en toute sécurité.'
      }
    ]
  }
];
