import { useState } from 'react';
import { ExperienceItem } from './ExperienceItem';
import { FaPlus } from 'react-icons/fa6';

import { experiences } from '../data/experience';

export const Experience = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<section className="py-16 border-b border-zinc-800/80">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex items-center justify-start gap-4 text-left cursor-pointer group"
			>
				<h2 className="text-3xl font-light font-serif text-zinc-100 italic">
					Experience
				</h2>
				<FaPlus
					size={20}
					className={`text-zinc-400 group-hover:text-teal-400 transition-all duration-300 ${
						isOpen ? 'rotate-45 text-teal-400' : ''
					}`}
				/>
			</button>

			{isOpen && (
				<div className="relative ml-4 pl-8 space-y-12 mt-12 animate-fadeIn">
					{experiences.map((exp, index) => (
						<ExperienceItem
							key={index}
							role={exp.role}
							company={exp.company}
							period={exp.period}
							description={exp.description}
							techUsed={exp.techUsed}
							icon={exp.icon}
							isLast={index === experiences.length - 1}
						/>
					))}
				</div>
			)}
		</section>
	);
};
