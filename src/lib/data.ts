import type { Profile, Skills, Projects, ExperienceData, Config } from '@/types';

import profileData from '@/data/profile.json';
import skillsData from '@/data/skills.json';
import projectsData from '@/data/projects.json';
import experienceData from '@/data/experience.json';
import configData from '@/data/config.json';

export function getProfile(): Profile {
    return profileData as Profile;
}

export function getSkills(): Skills {
    return skillsData as Skills;
}

export function getProjects(): Projects {
    return projectsData as Projects;
}

export function getExperience(): ExperienceData {
    return experienceData as ExperienceData;
}

export function getConfig(): Config {
    return configData as Config;
}

export function getFeaturedProjects() {
    const { projects } = getProjects();
    return projects
        .filter(p => p.featured)
        .sort((a, b) => a.order - b.order);
}
