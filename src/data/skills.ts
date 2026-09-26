import type { SkillCategory } from '@/types';
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

export const skillCategories: SkillCategory[] = [
	{
		title: 'Languages',
		skills: [
			{ name: 'Python', icon: FaPython },
			{ name: 'JavaScript', icon: SiJavascript }
		]
	},
	{
		title: 'Database',
		skills: [
			{ name: 'SQLite', icon: SiSqlite },
			{ name: 'PostgreSQL', icon: SiPostgresql }
		]
	},
	{
		title: 'Frontend',
		skills: [
			{ name: 'React', icon: FaReact },
			{ name: 'Next.js', icon: SiNextdotjs },
			{ name: 'Tailwind CSS', icon: SiTailwindcss }
		]
	},
	{
		title: 'Backend',
		skills: [
			{ name: 'Express.js', icon: SiExpress },
			{ name: 'Flask', icon: SiFlask },
			{ name: 'FastAPI', icon: SiFastapi }
		]
	}
];
