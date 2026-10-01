export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'devis' | 'emballage' | 'transport' | 'tarifs';
}

export const GENERAL_FAQS: FAQItem[] = [
  {
    id: 'f-1',
    category: 'tarifs',
    question: 'Combien coûte un déménagement à Casablanca ?',
    answer: 'Le tarif dépend de plusieurs paramètres précis : le volume à déménager (en m³), l’accessibilité des logements (étages avec ou sans ascenseur, distance de portage jusqu’au camion), la distance entre les deux adresses et les prestations choisies (transport seul, emballage ou formule complète). Nous proposons des devis 100% gratuits et personnalisés sans aucun engagement pour vous donner un prix ferme et clair.'
  },
  {
    id: 'f-2',
    category: 'devis',
    question: 'Comment obtenir un devis de déménagement auprès d’iTrip ?',
    answer: 'Vous pouvez remplir notre formulaire de devis en ligne en moins de 2 minutes, nous contacter directement par WhatsApp pour envoyer des photos ou vidéos de votre mobilier, ou nous joindre par téléphone. Nous vous transmettons une estimation détaillée sous 24 heures.'
  },
  {
    id: 'f-3',
    category: 'emballage',
    question: 'Est-ce que vous fournissez les cartons et le matériel de protection ?',
    answer: 'Oui. Selon la formule retenue, nous pouvons vous livrer à l’avance des cartons renforcés de déménagement (taille standard et cartons livres pour objets lourds), du scotch adhésif PVC, du papier bulle et des penderies pour vêtements sur cintres.'
  },
  {
    id: 'f-4',
    category: 'emballage',
    question: 'Proposez-vous l’emballage complet des meubles et de la vaisselle ?',
    answer: 'Absolument. Nos formules Confort et Premium incluent la protection intégrale sous couvertures capitonnées et film étirable épais. Nos équipes formées prennent en charge le calage délicat de votre vaisselle et verres dans des croisillons protecteurs.'
  },
  {
    id: 'f-5',
    category: 'emballage',
    question: 'Pouvez-vous démonter et remonter mes meubles ?',
    answer: 'Oui, nos équipes disposent de l’outillage nécessaire pour démonter et remonter vos lits, armoires à portes coulissantes, tables et étagères. Toute la visserie est soigneusement ensachée et numérotée pour un remontage parfait.'
  },
  {
    id: 'f-6',
    category: 'transport',
    question: 'Faites-vous les déménagements entre villes et partout au Maroc ?',
    answer: 'Oui, iTrip assure la couverture de tout le Maroc : liaisons régulières entre Casablanca, Rabat, Marrakech, Tanger, Agadir, Fès, Meknès, Kénitra, Oujda et toutes les villes du Royaume en trajet direct ou groupage.'
  },
  {
    id: 'f-7',
    category: 'transport',
    question: 'Pouvez-vous transporter des meubles fragiles, du marbre ou un piano ?',
    answer: 'Oui, nous disposons de sangles de portage spéciales, de cales en mousse et de véhicules capitonnés adaptés au transport d’objets lourds et délicats (pianos droits, buffets en marbre, tableaux et grands miroirs).'
  },
  {
    id: 'f-8',
    category: 'devis',
    question: 'Combien de temps à l’avance faut-il réserver son déménagement ?',
    answer: 'Il est conseillé de réserver 1 à 2 semaines à l’avance pour choisir la date de votre choix, notamment pour les week-ends ou fins de mois très sollicités. Pour les situations imprévues, nous proposons également un service d’intervention rapide sous 24 à 48 heures selon disponibilité.'
  }
];
