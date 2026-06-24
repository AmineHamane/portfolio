export type Locale = "en" | "fr";

/** A string with both language variants. */
export type LS = { en: string; fr: string };
/** A list of strings with both language variants. */
export type LL = { en: string[]; fr: string[] };

export type Accent = "cyan" | "lime" | "purple" | "pink";

export type ProjectCategory =
  | "flagship"
  | "ml"
  | "data-engineering"
  | "web-app"
  | "nlp"
  | "coursework";

export type ProjectStatus =
  | "production"
  | "prototype"
  | "in-progress"
  | "coursework"
  | "experiment";

export type Metric = { label: LS; value: string; note?: LS };

export type PipelineStep = { label: LS; desc: LS };

export type ProjectLink = { label: string; href: string; kind: "github" | "demo" | "external" };

export type Project = {
  id: string;
  /** Project names stay identical across locales. */
  name: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  accent: Accent;
  tagline: LS;
  summary: LS;
  problem: LS;
  approach: LS;
  architecture: LS;
  outcome: LS;
  recruiterPitch: LS;
  /** Tech names are language-neutral. */
  techStack: string[];
  skillsShown: LL;
  features: LL;
  highlights: LL;
  metrics: Metric[];
  /** Optional ordered architecture pipeline (flagship case study). */
  pipeline?: PipelineStep[];
  repoPath: string;
  links?: ProjectLink[];
};

export type SkillGroup = {
  name: LS;
  icon: string;
  blurb: LS;
  skills: string[];
};

export type ExperienceItem = {
  role: LS;
  company: string;
  location: string;
  period: string;
  bullets: LL;
};

export type EducationItem = {
  degree: LS;
  school: string;
  detail: LS;
};

export type Stat = { label: LS; value: string };

export type SiteContent = {
  identity: {
    name: string;
    title: LS;
    location: LS;
    phone: string;
    email: string;
    github: string;
    githubUrl: string;
    languages: LS[];
  };
  hero: {
    eyebrow: LS;
    headline: LS;
    subhead: LS;
    rotatingRoles: LS[];
    ctaPrimary: LS;
    ctaSecondary: LS;
  };
  about: { heading: LS; body: LS };
  stats: Stat[];
  skillGroups: SkillGroup[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: LS[];
  cv: { headline: LS; summary: LS };
  /** UI chrome strings (nav, buttons, section labels). */
  ui: Record<string, LS>;
};
