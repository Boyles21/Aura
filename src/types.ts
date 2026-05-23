export interface Project {
  id: string;
  title: string;
  category: string;
  codename: string;
  image: string;
  accentColor: string;
  description: string;
  specs: {
    upper: string;
    midsole: string;
    traction: string;
    weight: string;
  };
  highlights: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  specs: string[];
}

export interface ContactFormInput {
  name: string;
  email: string;
  company: string;
  interest: string;
  timeline: string;
  message: string;
}

