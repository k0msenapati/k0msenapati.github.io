import type { EducationItemData } from '@/types';
import { FaGraduationCap, FaSchool } from 'react-icons/fa6';

export const educationData: EducationItemData[] = [
	{
		school: 'Odisha University of Technology and Research',
		degree: 'B.Tech in Computer Science and Engineering',
		period: '2023 - 2027',
		marks: 'CGPA: 8.56',
		icon: <FaGraduationCap size={18} />
	},
	{
		school: 'Guidance English Medium School',
		degree: 'Higher Secondary Education',
		period: '2021 - 2023',
		marks: 'Percentage: 93.2%',
		icon: <FaSchool size={18} />
	},
	{
		school: 'Guidance English Medium School',
		degree: 'Secondary Education',
		period: '2011 - 2021',
		marks: 'Percentage: 96%',
		icon: <FaSchool size={18} />
	}
];
