import { ExperienceItem } from './ExperienceItem';

interface WorkItem {
	company: string;
	role: string;
	period: string;
	description: string[];
	techUsed: string[];
}

const experiences: WorkItem[] = [
	{
		company: 'Quira',
		role: 'Community Moderator',
		period: 'Feb 2025 - Aug 2025',
		description: [
			'Moderating the Quira Discord Community, fostering a positive and engaging environment.',
			'Helping other developers to build better projects.'
		],
		techUsed: ['Community Engagement', 'Community Management']
	}
];

export const Experience = () => {
	return (
		<section className="py-16 border-b border-zinc-800/80">
			<div className="mb-12">
				<h2 className="text-3xl font-light font-serif text-zinc-100 italic">
					Work Experience
				</h2>
			</div>

			<div className="relative border-l border-zinc-800/80 ml-1.5 pl-6 space-y-12">
				{experiences.map((exp, index) => (
					<ExperienceItem
						key={index}
						role={exp.role}
						company={exp.company}
						period={exp.period}
						description={exp.description}
						techUsed={exp.techUsed}
					/>
				))}
			</div>
		</section>
	);
};
