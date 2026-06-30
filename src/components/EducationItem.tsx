import { FaGraduationCap } from 'react-icons/fa6';

interface EducationItemProps {
	degree: string;
	school: string;
	period: string;
	marks: string; // Rendered in green
	icon?: React.ReactNode;
	isLast?: boolean;
}

export const EducationItem = ({
	degree,
	school,
	period,
	marks,
	icon,
	isLast
}: EducationItemProps) => {
	return (
		<div className="relative group">
			{/* Timeline connector line (ends at the last item) */}
			{!isLast && (
				<div className="absolute left-[-32.5px] top-[38px] bottom-[-40px] w-[1px] bg-zinc-800/60"></div>
			)}

			{/* Timeline node with dynamic icon */}
			<div className="absolute -left-[50px] top-0.5 flex items-center justify-center w-9 h-9 rounded-full border border-zinc-800 bg-[#0B0D0E] text-zinc-400 group-hover:border-teal-400/80 group-hover:text-teal-400 transition-all duration-300 shadow-[0_0_10px_rgba(45,212,191,0)] group-hover:shadow-[0_0_10px_rgba(45,212,191,0.15)]">
				{icon || <FaGraduationCap size={18} />}
			</div>

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
