import React from 'react';
import { FaReact, FaPython } from 'react-icons/fa6';
import {
	SiTailwindcss,
	SiNextdotjs,
	SiPostgresql,
	SiJavascript,
	SiSqlite,
	SiExpress,
	SiFlask,
	SiFastapi
} from 'react-icons/si';

export interface Skill {
	name: string;
	icon: React.ReactNode;
}

export interface SkillCategory {
	title: string;
	skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
	{
		title: 'Languages',
		skills: [
			{ name: 'Python', icon: <FaPython size={16} /> },
			{ name: 'JavaScript', icon: <SiJavascript size={16} /> }
		]
	},
	{
		title: 'Database',
		skills: [
			{ name: 'SQLite', icon: <SiSqlite size={16} /> },
			{ name: 'PostgreSQL', icon: <SiPostgresql size={16} /> }
		]
	},
	{
		title: 'Frontend',
		skills: [
			{ name: 'React', icon: <FaReact size={16} /> },
			{ name: 'Next.js', icon: <SiNextdotjs size={16} /> },
			{ name: 'Tailwind CSS', icon: <SiTailwindcss size={16} /> }
		]
	},
	{
		title: 'Backend',
		skills: [
			{ name: 'Express.js', icon: <SiExpress size={16} /> },
			{ name: 'Flask', icon: <SiFlask size={16} /> },
			{ name: 'FastAPI', icon: <SiFastapi size={16} /> }
		]
	}
];
