import { useState } from 'react';
import { AchievementItem } from './AchievementItem';

import { achievements } from '../data/achievements';

export const Achievements = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const displayedAchievements = isExpanded
		? achievements
		: achievements.slice(0, 3);

	return (
		<section className="py-16 border-b border-zinc-800/80">
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
						className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 text-zinc-300 hover:text-teal-300 hover:border-teal-800 bg-zinc-900/10 text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer"
					>
						{isExpanded ? 'Show Less' : 'View All Achievements'}
					</button>
				</div>
			)}
		</section>
	);
};
