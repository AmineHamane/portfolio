import type { ProjectCategory, ProjectStatus } from "@/content/types";

/** Maps a project status to its UI dictionary key. */
export const STATUS_UI: Record<ProjectStatus, string> = {
  production: "statusProduction",
  prototype: "statusPrototype",
  "in-progress": "statusInProgress",
  coursework: "statusCoursework",
  experiment: "statusExperiment",
};

/** Maps a project category to its UI dictionary key. */
export const CATEGORY_UI: Record<ProjectCategory, string> = {
  flagship: "catFlagship",
  ml: "catMl",
  fullstack: "catFullstack",
  "data-engineering": "catData",
  "web-app": "catWeb",
  nlp: "catNlp",
  automation: "catAutomation",
  coursework: "catCoursework",
};
