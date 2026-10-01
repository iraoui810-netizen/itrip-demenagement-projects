export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  benefits: string[];
  steps: string[];
  idealFor: string;
  image?: string;
}

export interface MovingPackage {
  id: string;
  name: string;
  tagline: string;
  description: string;
  popular?: boolean;
  features: string[];
  recommendedFor: string;
}

export interface MoroccanCity {
  id: string;
  slug: string;
  name: string;
  region: string;
  heroTagline: string;
  description: string;
  districts: string[];
  movingTips: string[];
  commonRoutes: string[];
  faqs: { question: string; answer: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
  content: {
    heading: string;
    paragraphs: string[];
  }[];
  tableOfContents: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  serviceType: string;
  date: string;
  comment: string;
  rating: number;
}

export interface QuoteFormData {
  serviceType: string;
  departureCity: string;
  departureAddress: string;
  departureFloor: string;
  departureElevator: boolean;
  destinationCity: string;
  destinationAddress: string;
  destinationFloor: string;
  destinationElevator: boolean;
  moveDate: string;
  housingType: string;
  estimatedVolume: string;
  packageTier: string;
  needsPacking: boolean;
  needsDismantling: boolean;
  needsStorage: boolean;
  fragileItems: string[];
  fullName: string;
  phone: string;
  email: string;
  additionalNotes: string;
  agreeTerms: boolean;
}
