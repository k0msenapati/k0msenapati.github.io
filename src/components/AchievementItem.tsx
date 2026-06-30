interface AchievementItemProps {
	index: number;
	title: string;
	description: string;
	date: string;
	linkText?: string;
	linkUrl?: string;
}

export const AchievementItem = ({
	index,
	title,
	description,
	date,
	linkText,
	linkUrl
}: AchievementItemProps) => {
	return (
		<div className="group flex gap-6 py-5 border-b border-zinc-900/40 hover:border-zinc-800 transition-all duration-300">
			{/* Minimal Index Number */}
			<div className="font-mono text-xs text-zinc-500 group-hover:text-teal-400 transition-colors duration-300 pt-1.5 select-none">
				0{index + 1}
			</div>

			<div className="flex-1 space-y-1.5">
				<div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
					<h3 className="text-base sm:text-lg font-serif italic font-normal text-zinc-100 group-hover:text-white transition-colors duration-300">
						{title}
					</h3>
					<span className="text-xs font-mono text-zinc-400">
						{date}
					</span>
				</div>
				<p className="text-sm sm:text-[14.5px] text-zinc-300 leading-relaxed max-w-2xl font-sans">
					{description}
					{linkUrl && linkText && (
						<>
							{' — '}
							<a
								href={linkUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-teal-400 hover:text-teal-300 underline underline-offset-4 decoration-teal-900/60 hover:decoration-teal-500 transition-colors duration-200 font-medium"
							>
								{linkText}
							</a>
						</>
					)}
				</p>
			</div>
		</div>
	);
};
