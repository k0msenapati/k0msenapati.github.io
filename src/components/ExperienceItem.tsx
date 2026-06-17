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
			<span className="absolute -left-[27.5px] top-2 w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-zinc-400 transition-colors duration-300"></span>

			<div className="space-y-3">
				<div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
					<div className="space-y-0.5">
						<h3 className="text-lg font-serif italic font-normal text-zinc-100 group-hover:text-zinc-200 transition-colors duration-300">
							{role}
						</h3>
						<p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
							{company}
						</p>
					</div>
					<span className="text-xs font-mono text-zinc-500">
						{period}
					</span>
				</div>

				<ul className="text-sm text-zinc-455 space-y-2">
					{description.map((bullet, idx) => (
						<li
							key={idx}
							className="leading-relaxed pl-4 relative font-sans"
						>
							<span className="absolute left-0 text-zinc-650">
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
							className="text-[10px] font-mono text-zinc-500 border border-zinc-900 px-2 py-0.5 bg-zinc-950/20"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};
