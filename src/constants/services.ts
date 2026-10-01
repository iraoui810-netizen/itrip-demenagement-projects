import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'particulier',
    slug: 'demenagement-particulier',
    title: 'Déménagement particulier',
    shortDescription: 'Déménagement d’appartements, duplex et villas avec prise en charge soignée de votre mobilier.',
    fullDescription: 'Que vous déménagiez d’un studio ou d’une grande villa familiale, notre équipe assure le conditionnement, le transport et la réinstallation de vos biens avec un soin méticuleux. Nous adaptons le cubage et le nombre d’intervenants à vos contraintes de temps et d’accès.',
    iconName: 'Home',
    benefits: [
      'Protection intégrale du mobilier sous couvertures capitonnées et film étirable',
      'Équipe courtoise, expérimentée et habituée aux accès complexes (escaliers étroits, résidences sécurisées)',
      'Possibilité de formule clé en main incluant mise sous carton et déballage',
      'Matériel de manutention professionnel (chariots pneumatiques, sangles, monte-meubles sur demande)'
    ],
    steps: [
      'Visite technique ou estimation à distance par photos/visio',
      'Fourniture du matériel d’emballage avant le jour J',
      'Protection soignée des meubles et chargement optimisé',
      'Transport sécurisé et mise en place dans votre nouveau logement'
    ],
    idealFor: 'Familles, couples, personnes seules changeant de logement à Casablanca ou entre villes marocaines.',
    image: '/src/assets/images/hero_moving_truck_1790793862875.jpg'
  },
  {
    id: 'entreprise',
    slug: 'demenagement-entreprise',
    title: 'Déménagement entreprise & bureaux',
    shortDescription: 'Transfert de bureaux, locaux commerciaux et parcs informatiques avec interruption minimale d’activité.',
    fullDescription: 'La continuité de vos opérations est notre priorité absolue. Nous planifions et réalisons le déménagement de vos espaces professionnels en horaires décalés ou le week-end, avec étiquetage rigoureux des postes de travail et protection renforcée du matériel informatique.',
    iconName: 'Building2',
    benefits: [
      'Planification logistique détaillée et coordination avec vos chefs de projet',
      'Conditionnement spécifique du matériel informatique et serveurs sous bacs scellés',
      'Transfert d’archives avec respect strict de la confidentialité',
      'Intervention possible de nuit ou le week-end pour zéro perte de productivité'
    ],
    steps: [
      'Audit préalable des volumes, accès et contraintes techniques',
      'Fourniture de bacs plastique sécurisés et étiquettes par service',
      'Démontage des postes de travail et conditionnement IT',
      'Transport, déchargement et réinstallation selon plan d’implantation'
    ],
    idealFor: 'PME, grands comptes, agences, cabinets d’avocats, banques et commerces.',
    image: '/src/assets/images/office_relocation_1790793885549.jpg'
  },
  {
    id: 'transport-meubles',
    slug: 'transport-de-meubles',
    title: 'Transport de meubles & objets lourds',
    shortDescription: 'Acheminement rapide et sécurisé de mobilier individuel, canapés, tables, lits ou électroménager.',
    fullDescription: 'Besoin de transporter un canapé volumineux, un buffet en bois massif, un réfrigérateur américain ou des achats magasin ? iTrip met à votre disposition un camion adapté avec porteurs pour déplacer vos meubles d’un point A à un point B en toute tranquillité.',
    iconName: 'Truck',
    benefits: [
      'Camions capitonnés équipés de sangles d’arrimage et hayon élévateur',
      'Manutention délicate pour éviter toute rayure sur les murs ou sols',
      'Tarification claire au trajet ou à l’heure selon vos besoins',
      'Prise en charge de pièces uniques ou encombrantes (pianos droits, marbre)'
    ],
    steps: [
      'Précision des dimensions et adresses de départ / arrivée',
      'Emballage sous film bulle et couvertures renforcées',
      'Arrimage méthodique dans le camion',
      'Déchargement et pose dans la pièce de votre choix'
    ],
    idealFor: 'Achats de meubles, livraisons urgentes, redistribution de mobilier entre proches.',
    image: '/src/assets/images/team_packing_furniture_1790793875976.jpg'
  },
  {
    id: 'emballage',
    slug: 'emballage-protection',
    title: 'Emballage & protection haute sécurité',
    shortDescription: 'Mise sous carton méthodique, housses pour literie et protection antichoc pour vaisselle et objets précieux.',
    fullDescription: 'Un déménagement réussi repose avant tout sur la qualité du conditionnement. Nos déménageurs utilisent des matériaux professionnels (cartons renforcés, croisillons vaisselle, papier kraft, film bulles haute densité) pour préserver l’intégrité absolue de vos effets personnels.',
    iconName: 'PackageCheck',
    benefits: [
      'Fourniture de cartons standards, cartons livres et penderies pour vêtements sur cintres',
      'Emballage individuel de la vaisselle, verres fins et objets fragiles',
      'Housses étanches et hygiéniques pour matelas et canapés',
      'Étiquetage systématique pièce par pièce pour un déballage rapide'
    ],
    steps: [
      'Livraison des consommables avant la prestation si nécessaire',
      'Emballage méthodique pièce par pièce par nos préparateurs',
      'Marquage précis du contenu et de la destination',
      'Contrôle final avant mise en camion'
    ],
    idealFor: 'Particuliers en manque de temps ou possédant de nombreux objets fragiles.',
    image: '/src/assets/images/team_packing_furniture_1790793875976.jpg'
  },
  {
    id: 'demontage-remontage',
    slug: 'demontage-remontage',
    title: 'Démontage & remontage de meubles',
    shortDescription: 'Prise en charge experte de vos armoires, dressings, lits coffres et étagères modulaires.',
    fullDescription: 'Certains meubles imposants ne passent pas les portes ou les cages d’escalier sans être démontés. Nos techniciens disposent de l’outillage adapté pour démonter avec méthode vos meubles et les remonter à l’identique dans votre nouvelle demeure sans perte de visserie.',
    iconName: 'Wrench',
    benefits: [
      'Outillage professionnel électroportatif complet',
      'Ensachage et étiquetage soigné de toute la visserie et des quincailleries',
      'Habitude de tous types de mobilier moderne (IKEA, Kitea, Mobilia) et traditionnel',
      'Gain de temps précieux pour votre emménagement'
    ],
    steps: [
      'Inspection du meuble et repérage des fixations',
      'Démontage précautionneux et regroupement des éléments',
      'Transport protégé des panneaux de bois et ferrures',
      'Remontage, nivellement et ajustement des portes et tiroirs'
    ],
    idealFor: 'Armoires à portes coulissantes, grands dressings, lits superposés, bureaux modulaires.',
    image: '/src/assets/images/team_packing_furniture_1790793875976.jpg'
  },
  {
    id: 'garde-meubles',
    slug: 'garde-meubles-maroc',
    title: 'Garde-meubles sécurisé',
    shortDescription: 'Espaces de stockage temporaires ou longue durée propres, ventilés et surveillés 24/7.',
    fullDescription: 'Entre deux baux, pendant des travaux de rénovation ou lors d’une transition professionnelle, stockez vos meubles et cartons en toute sérénité. Nos box et entrepôts offrent une sécurité maximale contre l’humidité, la poussière et les intrusions.',
    iconName: 'ShieldCheck',
    benefits: [
      'Surveillance vidéo continue 24h/24 et 7j/7 avec contrôle d’accès strict',
      'Espaces traités contre l’humidité et maintenus à température constante',
      'Box privatifs plombés et scellés en votre présence',
      'Durée de location modulable au mois le mois sans engagement excessif'
    ],
    steps: [
      'Estimation du cubage nécessaire pour optimiser votre coût',
      'Inventaire détaillé à l’entrée en entrepôt',
      'Mise en caisse bois ventilée ou box sécurisé',
      'Restitution à la date convenue directement à votre nouvelle adresse'
    ],
    idealFor: 'Période de transition de logement, travaux de rénovation, expatriation temporaire.',
    image: '/src/assets/images/storage_facility_1790793895597.jpg'
  },
  {
    id: 'national',
    slug: 'demenagement-national',
    title: 'Déménagement national (Inter-villes)',
    shortDescription: 'Liaisons régulières et directes entre Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir et tout le Maroc.',
    fullDescription: 'Changer de ville implique une organisation logistique sans faille. iTrip opère des trajets quotidiens à travers l’ensemble du réseau autoroutier marocain. Nous assurons un horaire de départ et d’arrivée garanti avec suivi permanent de votre chargement.',
    iconName: 'Compass',
    benefits: [
      'Couverture de toutes les régions du Royaume du Nord au Sud',
      'Véhicules capitonnés récents parfaitement entretenus pour les longues distances',
      'Option trajet dédié direct ou groupage économique pour petits volumes',
      'Chauffeurs routiers expérimentés et respectueux du code de la route'
    ],
    steps: [
      'Planification de l’itinéraire et des créneaux de chargement / déchargement',
      'Arrimage ultra-sécurisé adapté aux vibrations de la route',
      'Acheminement autoroutier direct avec communication régulière',
      'Livraison ponctuelle et installation soignée à destination'
    ],
    idealFor: 'Mutations professionnelles, retours régionaux, déménagements longue distance.',
    image: '/src/assets/images/hero_moving_truck_1790793862875.jpg'
  },
  {
    id: 'international',
    slug: 'demenagement-international',
    title: 'Déménagement international',
    shortDescription: 'Accompagnement pour vos départs et arrivées au Maroc avec gestion logistique et conseils douaniers.',
    fullDescription: 'Vous vous installez au Maroc ou vous partez pour l’étranger ? iTrip prend en charge la préparation de vos effets selon les standards maritimes et aériens, en coordination avec des transitaires réputés pour faciliter vos formalités de dédouanement.',
    iconName: 'Globe',
    benefits: [
      'Emballage export haute densité pour supporter les contraintes maritimes',
      'Conseil sur l’inventaire valorisé et les formalités administratives douanières',
      'Coordination du fret maritime en conteneur complet (FCL) ou de groupage (LCL)',
      'Prise en charge à l’arrivée au port ou aéroport marocain jusqu’au domicile'
    ],
    steps: [
      'Audit volumétrique précis et vérification des réglementations douanières',
      'Conditionnement aux normes internationales (emballage bois traité NIMP15)',
      'Prise en charge transport jusqu’au terminal portuaire ou logistique',
      'Livraison finale et assistance au déballage à destination'
    ],
    idealFor: 'Expatriés, diplomates, familles rentrant ou partant du Maroc.',
    image: '/src/assets/images/hero_moving_truck_1790793862875.jpg'
  }
];
