import { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { TbArrowLeft, TbSearch } from 'react-icons/tb';
import { ProjectItem } from '../components/ProjectItem';
import { projects } from '../data/projects';

export const ProjectsPage = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedTag, setSelectedTag] = useState('All');

	const allTags = useMemo(() => {
		const tags = new Set<string>();
		projects.forEach((p) => {
			p.techStack.forEach((t) => tags.add(t));
		});
		return ['All', ...Array.from(tags).sort()];
	}, []);

	const filteredProjects = useMemo(() => {
		return projects.filter((project) => {
			const matchesSearch =
				project.name
					.toLowerCase()
					.includes(searchQuery.toLowerCase()) ||
				project.desc
					.toLowerCase()
					.includes(searchQuery.toLowerCase()) ||
				project.techStack.some((t) =>
					t.toLowerCase().includes(searchQuery.toLowerCase())
				);

			const matchesTag =
				selectedTag === 'All' ||
				project.techStack.includes(selectedTag);

			return matchesSearch && matchesTag;
		});
	}, [searchQuery, selectedTag]);

	return (
		<div className="py-16 pt-32 min-h-screen">
			<title>k0msenapati | projects</title>
			<meta
				name="description"
				content="An archive of open-source projects, web apps, and AI integrations built by K Om Senapati."
			/>

			<div className="mb-8">
				<Link
					href="/"
					className="group inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-teal-400 uppercase tracking-wider transition-colors duration-300"
				>
					<TbArrowLeft
						className="group-hover:-translate-x-1 transition-transform duration-300"
						size={14}
					/>
					<span>Back to Home</span>
				</Link>
			</div>

			<div className="mb-12 space-y-4">
				<h1 className="text-4xl sm:text-5xl font-light font-serif text-zinc-100 italic">
					All Projects
				</h1>
				<p className="text-zinc-400 max-w-xl leading-relaxed text-sm sm:text-base font-sans">
					An archive of my open-source work, hacking experiments, and
					developer quest projects.
				</p>
			</div>

			<div className="mb-10 space-y-6">
				<div className="relative max-w-md">
					<input
						type="text"
						placeholder="Search projects by name, tech..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full bg-zinc-900/20 border border-zinc-800/80 rounded-lg px-4 py-2.5 pl-10 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-teal-500/50 focus:bg-zinc-900/40 transition-all duration-300 font-sans"
					/>
					<TbSearch
						className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
						size={16}
					/>
				</div>

				<div className="flex flex-wrap gap-2 pt-2">
					{allTags.map((tag) => (
						<button
							key={tag}
							onClick={() => setSelectedTag(tag)}
							className={`text-xs font-mono px-3 py-1.5 border transition-all duration-300 cursor-pointer ${
								selectedTag === tag
									? 'border-teal-500/50 bg-teal-950/20 text-teal-300 font-medium'
									: 'border-zinc-800/80 bg-zinc-900/20 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
							}`}
						>
							{tag}
						</button>
					))}
				</div>
			</div>

			{filteredProjects.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
					{filteredProjects.map((project, index) => (
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
			) : (
				<div className="py-20 text-center border border-dashed border-zinc-800/50 rounded-xl bg-zinc-900/5">
					<p className="text-zinc-500 text-sm font-mono">
						No projects match your criteria.
					</p>
				</div>
			)}
		</div>
	);
};
