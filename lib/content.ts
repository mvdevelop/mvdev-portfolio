/**
 * Backward-compatibility re-exports.
 * New code should import directly from lib/i18n/.
 * This file is kept so existing imports don't break during migration.
 */
export {
  type Language,
  type Translations,
  type ResumeContent,
  type ResumeExperience,
  type ResumeEducation,
  type ResumeSkill,
  type ResumeSkillGroup,
  type ProjectsData,
  type SkillsData,
  type NavLinks,
  translations,
} from "./i18n/translations";

export { resumeContent } from "./i18n/resume";
export { projects, skills, featuredProjectCount, type Project, type Skill, type SkillCategory, type SkillId } from "./i18n/projects";

export type ResumeTabId = "experience" | "education" | "skills" | "about";

export const resumeTabIds: ResumeTabId[] = [
  "experience",
  "education",
  "skills",
  "about",
];
