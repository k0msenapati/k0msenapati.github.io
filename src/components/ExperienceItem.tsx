import { FaBriefcase } from 'react-icons/fa6';

interface ExperienceItemProps {
	role: string;
	company: string;
	period: string;
	description: string[];
	techUsed: string[];
	icon?: React.ReactNode;
	isLast?: boolean;
}

export const ExperienceItem = ({
	role,
	company,
	period,
	description,
	techUsed,
	icon,
	isLast
}: ExperienceItemProps) => {
	return (
		<div className="relative group">
			{/* Timeline connector line (ends at the last item) */}
			{!isLast && (
				<div className="absolute left-[-32.5px] top-[38px] bottom-[-48px] w-[1px] bg-zinc-800/60"></div>
			)}

			{/* Timeline node with dynamic icon */}
			<div className="absolute -left-[50px] top-0.5 flex items-center justify-center w-9 h-9 rounded-full border border-zinc-800 bg-[#0B0D0E] text-zinc-400 group-hover:border-teal-400/80 group-hover:text-teal-400 transition-all duration-300 shadow-[0_0_10px_rgba(45,212,191,0)] group-hover:shadow-[0_0_10px_rgba(45,212,191,0.15)]">
				{icon || <FaBriefcase size={18} />}
			</div>

			<div className="space-y-3">
				<div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
					<div className="space-y-0.5">
						<h3 className="text-lg sm:text-xl font-serif italic font-normal text-zinc-100 group-hover:text-white transition-colors duration-300">
							{role}
						</h3>
						<p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
							{company}
						</p>
					</div>
					<span className="text-xs font-mono text-zinc-400">
						{period}
					</span>
				</div>

				<ul className="text-sm sm:text-[14.5px] text-zinc-300 space-y-2">
					{description.map((bullet, idx) => (
						<li
							key={idx}
							className="leading-relaxed pl-4 relative font-sans"
						>
							<span className="absolute left-0 text-zinc-500 group-hover:text-teal-400 transition-colors duration-300">
								—
							</span>
							{bullet}
						</li>
					))}
				</ul>

				<div className="flex flex-wrap gap-1.5 pt-1">
					{techUsed.map((tech, idx) => (
						<span
							key={idx}
							className="text-xs font-sans font-medium text-zinc-300 border border-zinc-800/80 bg-zinc-900/40 px-2.5 py-0.5 rounded-full transition-all duration-300 hover:border-teal-500/30 hover:bg-teal-950/10 hover:text-teal-300 cursor-default shadow-sm shadow-black/10"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};
