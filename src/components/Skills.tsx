import { skillCategories } from '../data/skills';

export const Skills = () => {
	return (
		<section className="py-16 border-b border-zinc-800/80">
			<div className="mb-12">
				<h2 className="text-3xl font-light font-serif text-zinc-100 italic">
					Technical Skills
				</h2>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
				{skillCategories.map((category, catIdx) => (
					<div
						key={catIdx}
						className="p-6 border border-zinc-800/60 bg-zinc-900/10 hover:border-zinc-700/80 transition-colors duration-300 shadow-sm shadow-black/10 rounded-xl"
					>
						<h3 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6 border-b border-zinc-800 pb-2">
							// {category.title}
						</h3>

						<div className="grid grid-cols-2 gap-3">
							{category.skills.map((skill, skillIdx) => (
								<div
									key={skillIdx}
									className="group/skill flex items-center gap-2.5 px-3 py-2 border border-zinc-800 bg-zinc-900/10 text-zinc-300 font-sans text-xs sm:text-sm rounded-lg transition-all duration-200 hover:text-white hover:border-zinc-700 hover:bg-zinc-900/30 hover:shadow-sm"
								>
									<div className="text-zinc-400 group-hover/skill:text-teal-400 transition-colors duration-200">
										{skill.icon}
									</div>
									<span className="truncate">
										{skill.name}
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
