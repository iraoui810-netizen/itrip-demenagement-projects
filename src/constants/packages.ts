import { MovingPackage } from '../types';

export const PACKAGES_DATA: MovingPackage[] = [
  {
    id: 'essentiel',
    name: 'ESSENTIEL',
    tagline: 'Le transport sécurisé pour les petits budgets',
    description: 'Idéal si vous préférez préparer vos cartons et démonter votre mobilier vous-même, en confiant le transport et la manutention lourde à des professionnels.',
    popular: false,
    recommendedFor: 'Particuliers organisés, petits appartements et étudiants',
    features: [
      'Camion capitonné adapté au volume estimé',
      'Chauffeur professionnel et carburant inclus',
      'Équipe de porteurs pour le chargement et déchargement',
      'Protection de base sous couvertures de déménagement',
      'Arrimage sécurisé dans le camion',
      'Livraison directe à votre nouvelle adresse',
      'Devis clair et transparent sans frais cachés'
    ]
  },
  {
    id: 'confort',
    name: 'CONFORT',
    tagline: 'L’équilibre parfait entre économie et assistance',
    description: 'La formule la plus demandée : nous nous chargeons de la protection complète de vos meubles, du démontage des pièces complexes et du transport.',
    popular: true,
    recommendedFor: 'Familles, appartements T2 à T4, déménagements standards',
    features: [
      'Tous les avantages de la formule ESSENTIEL',
      'Protection renforcée sous couvertures épaisses et film étirable',
      'Démontage et remontage du mobilier principal (lits, tables)',
      'Housses de protection pour matelas et canapés',
      'Mise à disposition anticipée de cartons et adhésifs de qualité',
      'Manutention délicate des objets fragiles',
      'Positionnement des meubles dans les pièces indiquées'
    ]
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    tagline: 'L’accompagnement complet pour zéro contrainte',
    description: 'Une prise en charge intégrale où nos spécialistes s’occupent de tout, de la mise en carton minutieuse jusqu’à la réinstallation finale de votre intérieur.',
    popular: false,
    recommendedFor: 'Villas, grands logements, professionnels très occupés et transferts d’urgence',
    features: [
      'Tous les avantages de la formule CONFORT',
      'Emballage complet de vos effets personnels et penderies pour vêtements',
      'Conditionnement spécifique de la vaisselle sous croisillons antichoc',
      'Démontage intégral et remontage soigné de tout le mobilier modulaire',
      'Déballage des cartons fragiles et mise en place dans vos placards',
      'Gestion et évacuation de tous les emballages et cartons vides',
      'Coordination dédiée avec un chef d’équipe attitré le jour J'
    ]
  }
];
