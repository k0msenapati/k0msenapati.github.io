import { FaGithub } from 'react-icons/fa6';
import { TbPlayerPlay } from 'react-icons/tb';

interface ProjectItemProps {
	name: string;
	desc: string;
	techStack: string[];
	githubUrl: string;
	demoUrl?: string;
	isComingSoon?: boolean;
	ytVideoId?: string;
}

export const ProjectItem = ({
	name,
	desc,
	techStack,
	githubUrl,
	isComingSoon,
	ytVideoId
}: ProjectItemProps) => {
	return (
		<div className="group flex flex-col h-full border border-zinc-900 bg-zinc-950/10 transition-all duration-300 hover:border-zinc-800">
			{/* Media Area */}
			<div className="relative aspect-video w-full bg-zinc-950/80 border-b border-zinc-900 overflow-hidden flex items-center justify-center">
				{isComingSoon ? (
					<span className="font-mono text-xs text-zinc-650 tracking-widest uppercase select-none">
						[ Project Coming Soon ]
					</span>
				) : ytVideoId ? (
					<a
						href={`https://www.youtube.com/watch?v=${ytVideoId}`}
						target="_blank"
						rel="noopener noreferrer"
						className="relative w-full h-full block group/media"
					>
						<img
							src={`https://img.youtube.com/vi/${ytVideoId}/hqdefault.jpg`}
							alt={`${name} thumbnail`}
							className="w-full h-full object-cover opacity-50 group-hover/media:opacity-75 transition-opacity duration-300"
						/>
						{/* Styled play overlay */}
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 text-zinc-400 flex items-center justify-center transition-all duration-300 group-hover/media:scale-105 group-hover/media:border-zinc-600 group-hover/media:text-white">
								<TbPlayerPlay
									size={16}
									className="translate-x-[1px]"
								/>
							</div>
						</div>
					</a>
				) : null}
			</div>

			{/* Info Area */}
			<div className="flex flex-col flex-grow p-6 space-y-4">
				<div className="flex items-center justify-between">
					<h3 className="text-lg font-serif italic font-normal text-zinc-100">
						{name}
					</h3>

					<a
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="p-1 rounded text-zinc-550 hover:text-zinc-200 transition-colors duration-250"
						title="View Source on GitHub"
					>
						<FaGithub size={16} />
					</a>
				</div>

				<p className="text-sm text-zinc-450 leading-relaxed flex-grow font-sans">
					{desc}
				</p>

				{/* Tech Badges */}
				<div className="flex flex-wrap gap-2 pt-2">
					{techStack.map((tech, idx) => (
						<span
							key={idx}
							className="text-[10px] font-mono text-zinc-500 border border-zinc-900 bg-zinc-950/20 px-2 py-0.5"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};
