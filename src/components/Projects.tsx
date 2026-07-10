import { Link } from 'wouter';
import { ProjectItem } from './ProjectItem';
import { TbArrowRight } from 'react-icons/tb';
import { projects } from '../data/projects';

export const Projects = () => {
	const featuredProjects = projects.filter((project) => project.featured);

	return (
		<section className="py-16 border-b border-zinc-800/80">
			<div className="mb-12">
				<h2 className="text-3xl font-light font-serif text-zinc-100 italic">
					Featured Projects
				</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{featuredProjects.map((project, index) => (
					<ProjectItem
						key={index}
						name={project.name}
						desc={project.desc}
						techStack={project.techStack}
						githubUrl={project.githubUrl}
						demoUrl={project.demoUrl}
						isComingSoon={project.isComingSoon}
						ytVideoId={project.ytVideoId}
					/>
				))}
			</div>

			<div className="flex justify-center mt-12">
				<Link
					href="/projects"
					className="group inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 text-zinc-300 hover:text-teal-300 hover:border-teal-800 bg-zinc-900/10 hover:bg-zinc-900/40 text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer"
				>
					<span>View All Projects</span>
					<TbArrowRight
						size={14}
						className="text-zinc-400 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-transform duration-300"
					/>
				</Link>
			</div>
		</section>
	);
};
