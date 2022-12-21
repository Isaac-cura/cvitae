import { Moment } from "moment";

export interface ProfesionalProfile {
    name: string;
    lastName: string;
    avatarUrl: string;
    description: string;
    phone: string;
    email: string;
    socialNetwork: Array<{
        icon?: string;
        link: string;
    }>
    timeline: Array<Job>;
    skills: Array<Skill>;
    education: Array<Education>;
    certifications: Array<Certification>;
}

export interface Skill {
    iconUrl: string;
    skill: string;
    expertiseLevel: 1 | 2 | 3 | 4 | 5;
}


export interface Education {
    title: string;
    institution: string;
    description?: string;
    startDate?: string;
    endDate?: string;
}

export interface Certification extends Education{}

export interface Job {
    company: string;
    position: string;
    description: string;
    startDate: Moment;
    endDate?: Moment;
}