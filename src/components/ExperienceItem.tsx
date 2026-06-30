interface ExperienceItemProps {
	role: string;
	company: string;
	period: string;
	description: string[];
	techUsed: string[];
}

export const ExperienceItem = ({
	role,
	company,
	period,
	description,
	techUsed
}: ExperienceItemProps) => {
	return (
		<div className="relative group">
			{/* Minimal timeline node */}
			<span className="absolute -left-[27.5px] top-2 w-2 h-2 rounded-full bg-zinc-800 border border-zinc-700 group-hover:bg-teal-400 group-hover:border-teal-450 transition-all duration-300 shadow-[0_0_8px_rgba(45,212,191,0)] group-hover:shadow-[0_0_8px_rgba(45,212,191,0.6)]"></span>

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

				<div className="flex flex-wrap gap-2 pt-1">
					{techUsed.map((tech, idx) => (
						<span
							key={idx}
							className="text-[10px] font-mono text-zinc-400 border border-zinc-850 px-2 py-0.5 bg-zinc-900/30 group-hover:border-zinc-700 group-hover:text-zinc-300 transition-colors duration-300"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};
