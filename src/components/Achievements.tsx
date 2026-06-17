import { useState } from 'react';
import { AchievementItem } from './AchievementItem';

interface Achievement {
	title: string;
	description: string;
	date: string;
	linkText?: string;
	linkUrl?: string;
}

const achievements: Achievement[] = [
	{
		title: 'MindsDB Hacktoberfest 2025',
		description: 'Winner of the Best Blog Content Prize.',
		date: 'Nov 2025',
		linkText: 'X post',
		linkUrl: 'https://x.com/k0msenapati/status/1994597613476483490?s=20'
	},
	{
		title: 'DevFest Competition',
		description: 'Winner of the LLMWare DevFest challenge.',
		date: 'Oct 2025',
		linkText: 'LinkedIn post',
		linkUrl:
			'https://www.linkedin.com/posts/llmware_day-3-of-celebrating-our-devfest-competition-activity-7262464248402866178-UfNy'
	},
	{
		title: 'Full Stack Bootcamp',
		description:
			'Winner of the bootcamp challenge hosted by the Azure Developer Community.',
		date: 'Jun 2025',
		linkText: 'X post',
		linkUrl: 'https://x.com/k0msenapati/status/1930286344904790339?s=20'
	},
	{
		title: 'Octohub Hackathon',
		description: 'Winner of the Octohub 2023 Hackathon.',
		date: 'Oct 2024',
		linkText: 'LinkedIn post',
		linkUrl:
			'https://www.linkedin.com/posts/k0msenapati_octohub2023-opensourcemagic-activity-7144652915033423872--qBB'
	},
	{
		title: 'Code Dex Summer Hackathon 2024',
		description: 'Winner of the summer coding hackathon.',
		date: 'Jul 2024',
		linkText: 'Read blog',
		linkUrl: 'https://www.codedex.io/blog/summer-hackathon-2024-winners'
	},
	{
		title: 'Scaler Node.js Project Challenge',
		description:
			'Top finisher in the backend engineering project showcase.',
		date: 'Mar 2024',
		linkText: 'Watch stream',
		linkUrl: 'https://youtu.be/q189YNqFn0g?t=114'
	}
];

export const Achievements = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const displayedAchievements = isExpanded
		? achievements
		: achievements.slice(0, 3);

	return (
		<section className="py-16 border-b border-zinc-900">
			<div className="mb-12">
				<h2 className="text-3xl font-light font-serif text-zinc-100 italic">
					Achievements
				</h2>
			</div>

			<div className="space-y-6">
				{displayedAchievements.map((ach, index) => (
					<AchievementItem
						key={index}
						index={index}
						title={ach.title}
						description={ach.description}
						date={ach.date}
						linkText={ach.linkText}
						linkUrl={ach.linkUrl}
					/>
				))}
			</div>

			{achievements.length > 3 && (
				<div className="flex justify-center mt-12">
					<button
						onClick={() => setIsExpanded(!isExpanded)}
						className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-900 text-zinc-400 hover:text-zinc-200 hover:border-zinc-800 bg-zinc-950/15 text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer"
					>
						{isExpanded ? 'Show Less' : 'View All Achievements'}
					</button>
				</div>
			)}
		</section>
	);
};
