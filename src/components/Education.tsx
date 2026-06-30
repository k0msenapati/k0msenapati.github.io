import { useState } from 'react';
import { FaGraduationCap, FaSchool, FaPlus } from 'react-icons/fa6';
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
	const [isOpen, setIsOpen] = useState(true);

	return (
		<section className="py-16 border-b border-zinc-800/80">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex items-center justify-start gap-4 text-left cursor-pointer group"
			>
				<h2 className="text-3xl font-light font-serif text-zinc-100 italic">
					Education
				</h2>
				<FaPlus
					size={20}
					className={`text-zinc-400 group-hover:text-teal-400 transition-all duration-300 ${
						isOpen ? 'rotate-45 text-teal-400' : ''
					}`}
				/>
			</button>

			{isOpen && (
				<div className="relative ml-4 pl-8 space-y-10 mt-12 animate-fadeIn">
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
			)}
		</section>
	);
};
