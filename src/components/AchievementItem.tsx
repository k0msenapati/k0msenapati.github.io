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
		<div className="group flex gap-6 py-4 border-b border-zinc-950 hover:border-zinc-900 transition-all duration-300">
			{/* Minimal Index Number */}
			<div className="font-mono text-xs text-zinc-650 pt-1.5 select-none">
				0{index + 1}
			</div>

			<div className="flex-1 space-y-1.5">
				<div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
					<h3 className="font-serif italic font-normal text-zinc-100 group-hover:text-zinc-200 transition-colors duration-300">
						{title}
					</h3>
					<span className="text-xs font-mono text-zinc-500">
						{date}
					</span>
				</div>
				<p className="text-sm text-zinc-450 leading-relaxed max-w-2xl font-sans">
					{description}
					{linkUrl && linkText && (
						<>
							{' — '}
							<a
								href={linkUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-500 hover:text-zinc-350 underline underline-offset-4 decoration-zinc-850 hover:decoration-zinc-700 transition-colors duration-200"
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
