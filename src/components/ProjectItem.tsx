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
		<div className="group flex flex-col h-full border border-zinc-800/80 bg-zinc-900/10 transition-all duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/20 shadow-sm shadow-black/20">
			{/* Media Area */}
			<div className="relative aspect-video w-full bg-zinc-950/90 border-b border-zinc-800/80 overflow-hidden flex items-center justify-center">
				{isComingSoon ? (
					<span className="font-mono text-xs text-zinc-500 tracking-widest uppercase select-none">
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
							<div className="w-11 h-11 rounded-full border border-zinc-700 bg-zinc-900/90 text-zinc-300 flex items-center justify-center transition-all duration-300 group-hover/media:scale-105 group-hover/media:border-teal-500 group-hover/media:text-white group-hover/media:bg-zinc-950 shadow-md shadow-black/30">
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
					<h3 className="text-lg sm:text-xl font-serif italic font-normal text-zinc-100 group-hover:text-white transition-colors duration-300">
						{name}
					</h3>

					<a
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="p-1 rounded text-zinc-400 hover:text-teal-400 transition-colors duration-300"
						title="View Source on GitHub"
					>
						<FaGithub size={16} />
					</a>
				</div>

				<p className="text-sm sm:text-[14.5px] text-zinc-300 leading-relaxed flex-grow font-sans">
					{desc}
				</p>

				{/* Tech Badges */}
				<div className="flex flex-wrap gap-2 pt-2">
					{techStack.map((tech, idx) => (
						<span
							key={idx}
							className="text-[10px] font-mono text-zinc-400 border border-zinc-800 bg-zinc-900/30 px-2 py-0.5 group-hover:border-zinc-700/60 group-hover:text-zinc-300 transition-colors duration-300"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};
