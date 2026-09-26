import type { ReactNode } from 'react';

export type Project = {
	name: string;
	desc: string;
	techStack: string[];
	githubUrl: string;
	demoUrl?: string;
	isComingSoon?: boolean;
	ytVideoId?: string;
	featured: boolean;
};

export type EducationItemData = {
	school: string;
	degree: string;
	period: string;
	marks: string;
	icon?: ReactNode;
};

export type WorkItem = {
	company: string;
	role: string;
	period: string;
	description: string[];
	techUsed: string[];
	icon?: ReactNode;
};

export type Achievement = {
	title: string;
	description: string;
	date: string;
	linkText?: string;
	linkUrl?: string;
};

export type SocialIconType = 'github' | 'linkedin' | 'twitter' | 'dev' | 'resume';

export type SocialLink = {
	name: string;
	url: string;
	icon: ReactNode;
	iconType: SocialIconType;
};

export type ProfileData = {
	name: string;
	nickname: string;
	bio: string;
	avatarUrl: string;
	socials: SocialLink[];
};

export type Skill = {
	name: string;
	icon: ReactNode;
};

export type SkillCategory = {
	title: string;
	skills: Skill[];
};
