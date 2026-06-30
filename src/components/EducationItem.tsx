interface EducationItemProps {
	degree: string;
	school: string;
	period: string;
	marks: string; // Rendered in green
}

export const EducationItem = ({
	degree,
	school,
	period,
	marks
}: EducationItemProps) => {
	return (
		<div className="relative group">
			{/* Minimal timeline node */}
			<span className="absolute -left-[27.5px] top-2 w-2 h-2 rounded-full bg-zinc-800 border border-zinc-700 group-hover:bg-teal-400 group-hover:border-teal-450 transition-all duration-300 shadow-[0_0_8px_rgba(45,212,191,0)] group-hover:shadow-[0_0_8px_rgba(45,212,191,0.6)]"></span>

			<div className="space-y-1">
				<div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
					<div className="space-y-0.5">
						<h3 className="text-lg sm:text-xl font-serif italic font-normal text-zinc-100 group-hover:text-white transition-colors duration-300">
							{degree}
						</h3>
						<p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
							{school}
						</p>
					</div>
					<div className="flex items-center gap-3 text-xs font-mono">
						<span className="text-emerald-400 font-medium">
							{marks}
						</span>
						<span className="text-zinc-600">|</span>
						<span className="text-zinc-400">{period}</span>
					</div>
				</div>
			</div>
		</div>
	);
};
