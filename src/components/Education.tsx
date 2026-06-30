import { FaGraduationCap, FaSchool } from 'react-icons/fa6';
import { EducationItem } from './EducationItem';

interface EducationItemData {
	school: string;
	degree: string;
	period: string;
	marks: string;
	icon: React.ReactNode;
}

const educationData: EducationItemData[] = [
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

export const Education = () => {
	return (
		<section className="py-16 border-b border-zinc-800/80">
			<div className="mb-12">
				<h2 className="text-3xl font-light font-serif text-zinc-100 italic">
					Education
				</h2>
			</div>

			<div className="relative ml-4 pl-8 space-y-10">
				{educationData.map((edu, index) => (
					<EducationItem
						key={index}
						degree={edu.degree}
						school={edu.school}
						period={edu.period}
						marks={edu.marks}
						icon={edu.icon}
						isLast={index === educationData.length - 1}
					/>
				))}
			</div>
		</section>
	);
};
