// Profile Types
export interface Location {
    city: string;
    country: string;
    note?: string;
}

export interface Contact {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
}

export interface Bio {
    tagline: string;
    description: string[];
}

export interface Availability {
    status: 'available' | 'busy' | 'unavailable';
    for: string[];
    responseTime: string;
}

export interface Profile {
    name: string;
    title: string;
    location: Location;
    contact: Contact;
    profileImage: string;
    bio: Bio;
    availability: Availability;
}

// Skills Types
export interface SkillCategory {
    name: string;
    skills: string[];
    tools?: string[];
    projects?: string;
}

export interface Language {
    name: string;
    proficiency: 'Native' | 'Fluent' | 'Conversational' | 'Basic';
}

export interface Skills {
    categories: SkillCategory[];
    languages: Language[];
}

// Projects Types
export interface ProjectLinks {
    github?: string | null;
    demo?: string | null;
    docs?: string | null;
    website?: string | null;
    instagram?: string | null;
    catalog?: string | null;
    store?: string | null;
}

export interface Project {
    id: string;
    name: string;
    tagline: string;
    description: string;
    features: string[] | null;
    status: string;
    statusDetail: string;
    tech: string[] | null;
    links: ProjectLinks;
    images: string[];
    featured: boolean;
    order: number;
}

export interface Projects {
    projects: Project[];
}

// Experience Types
export interface Experience {
    title: string;
    period: string;
    description: string;
    responsibilities: string[];
    highlights: string[];
    current: boolean;
}

export interface Approach {
    title: string;
    philosophy: string;
    process: string[];
    values: string;
}

export interface ExperienceData {
    experiences: Experience[];
    approach: Approach;
}

// Config Types
export interface SiteConfig {
    title: string;
    description: string;
    url: string;
    lastUpdated: string;
}

export interface ThemeConfig {
    primaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
}

export interface FeaturesConfig {
    darkMode: boolean;
    analytics: boolean;
    contactForm: boolean;
    blog: boolean;
}

export interface SocialConfig {
    showGithub: boolean;
    showLinkedIn: boolean;
    showTwitter: boolean;
    showInstagram: boolean;
}

export interface SeoConfig {
    keywords: string[];
    author: string;
    ogImage: string;
}

export interface Config {
    site: SiteConfig;
    theme: ThemeConfig;
    features: FeaturesConfig;
    social: SocialConfig;
    seo: SeoConfig;
}
