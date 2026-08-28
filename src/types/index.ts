export type PageRoute =
  | 'home'
  | 'features'
  | 'pricing'
  | 'programs'
  | 'programs/ai'
  | 'programs/cybersecurity'
  | 'programs/digital-skills'
  | 'vibe-coding'
  | 'learning-formats'
  | 'for-organizations'
  | 'resources'
  | 'blog'
  | 'about'
  | 'contact';

export interface PlatformFeature {
  id: string;
  title: string;
  title_sw?: string;
  shortDescription: string;
  shortDescription_sw?: string;
  fullDescription: string;
  fullDescription_sw?: string;
  icon: string;
  badge: string;
  badge_sw?: string;
  points: string[];
  points_sw?: string[];
  swahiliNote?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  name_sw?: string;
  deliveryChannel: string;
  deliveryChannel_sw?: string;
  deliveryType: 'mobile-first' | 'self-paced' | 'virtual-live' | 'in-person-workshop' | 'corporate-onsite' | 'keynote';
  badge?: string;
  badge_sw?: string;
  tagline: string;
  tagline_sw?: string;
  priceTsh: string;
  priceKes: string;
  priceUsd: string;
  billingPeriod: string;
  billingPeriod_sw?: string;
  bandwidthRequirement?: string;
  bandwidthRequirement_sw?: string;
  popular?: boolean;
  features: string[];
  features_sw?: string[];
  notIncluded?: string[];
  notIncluded_sw?: string[];
  ctaText: string;
  ctaText_sw?: string;
  highlightNote?: string;
  highlightNote_sw?: string;
}

export interface ProgramPillar {
  id: string;
  slug: string;
  title: string;
  title_sw?: string;
  badge: string;
  badge_sw?: string;
  tagline: string;
  tagline_sw?: string;
  description: string;
  description_sw?: string;
  extendedDescription: string;
  extendedDescription_sw?: string;
  audience: string[];
  audience_sw?: string[];
  topics: string[];
  topics_sw?: string[];
  modules: {
    title: string;
    description: string;
    practicalSkill: string;
  }[];
  modules_sw?: {
    title: string;
    description: string;
    practicalSkill: string;
  }[];
  outcomes: string[];
  outcomes_sw?: string[];
  deliveryFormats: string[];
  deliveryFormats_sw?: string[];
  durationOptions: string[];
  durationOptions_sw?: string[];
  icon: string;
  ctaText: string;
  ctaText_sw?: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  title_sw?: string;
  category: 'ai' | 'cybersecurity' | 'digital-skills';
  audience: string;
  audience_sw?: string;
  level: 'Beginner' | 'Professional' | 'Educator' | 'Awareness' | 'Executive' | 'All Levels';
  format: string;
  format_sw?: string;
  duration: string;
  duration_sw?: string;
  description: string;
  description_sw?: string;
  highlights: string[];
  highlights_sw?: string[];
  curriculum: string[];
  curriculum_sw?: string[];
  idealFor: string;
  idealFor_sw?: string;
  isPopular?: boolean;
}

export interface LearningFormat {
  id: string;
  number: string;
  title: string;
  title_sw?: string;
  channelName: string;
  channelName_sw?: string;
  category: 'mobile' | 'virtual' | 'in-person';
  description: string;
  description_sw?: string;
  bestFor: string;
  bestFor_sw?: string;
  priceStartingTsh: string;
  priceStartingKes: string;
  priceStartingUsd: string;
  pricingLabel: string;
  pricingLabel_sw?: string;
  bandwidthLevel: string;
  bandwidthLevel_sw?: string;
  features: string[];
  features_sw?: string[];
  icon: string;
}

export interface SmartFrameworkStep {
  letter: string;
  word: string;
  word_sw?: string;
  meaning: string;
  meaning_sw?: string;
  description: string;
  description_sw?: string;
  practicalExample: string;
  practicalExample_sw?: string;
}

export interface TrainingPackage {
  id: string;
  title: string;
  tagline: string;
  durations: string[];
  formats: string[];
  targetAudience: string;
  keyOutcomes: string[];
  category: 'AI' | 'Cybersecurity' | 'Digital Skills' | 'Executive' | 'Institutional';
}

export interface ResourceItem {
  id: string;
  title: string;
  title_sw?: string;
  category: string;
  category_sw?: string;
  format: 'PDF Guide' | 'Checklist' | 'Toolkit' | 'Cheat Sheet';
  format_sw?: string;
  description: string;
  description_sw?: string;
  readingTime: string;
  readingTime_sw?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  level_sw?: 'Mwanzoni' | 'Kati' | 'Mudu';
  targetAudience: string;
  targetAudience_sw?: string;
  keyHighlights: string[];
  keyHighlights_sw?: string[];
  useCases: string[];
  useCases_sw?: string[];
  previewContent?: string[];
  previewContent_sw?: string[];
  downloadName: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  title_sw?: string;
  category: 'AI Literacy' | 'Cybersecurity' | 'Education' | 'Business' | 'Productivity';
  readingTime: string;
  publishedDate: string;
  author: string;
  excerpt: string;
  excerpt_sw?: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      keyTip?: string;
    }[];
    conclusion: string;
  };
  content_sw?: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      keyTip?: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  question_sw?: string;
  answer: string;
  answer_sw?: string;
  category: 'General' | 'Enrollment' | 'Organizations' | 'Delivery' | 'Course Access' | 'Payment & Mobile Money' | 'Technical Support';
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  role_sw?: string;
  specialtyBadge: string;
  specialtyBadge_sw?: string;
  experience: string;
  experience_sw?: string;
  bio: string;
  bio_sw?: string;
  avatarInitials: string;
  avatarGradient?: string;
  avatarImage?: string;
  expertise: string[];
  expertise_sw?: string[];
  coursesCount: number;
  featuredCourses: string[];
  featuredCourses_sw?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface CorporateOffering {
  id: string;
  badge: string;
  badge_sw?: string;
  title: string;
  title_sw?: string;
  description: string;
  description_sw?: string;
  points: string[];
  points_sw?: string[];
}

export interface IndustrySolution {
  id: string;
  name: string;
  name_sw?: string;
  description: string;
  description_sw?: string;
  criticalNeeds: string[];
  criticalNeeds_sw?: string[];
  recommendedPrograms: string[];
  recommendedPrograms_sw?: string[];
  icon: string;
}

export interface TrainingProcessStep {
  id: string;
  step: string;
  name: string;
  name_sw?: string;
  title: string;
  title_sw?: string;
  description: string;
  description_sw?: string;
}
