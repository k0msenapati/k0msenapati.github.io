import { ProjectItem } from './ProjectItem';
import { TbArrowRight } from 'react-icons/tb';

interface Project {
	name: string;
	desc: string;
	techStack: string[];
	githubUrl: string;
	demoUrl?: string;
	isComingSoon?: boolean;
	ytVideoId?: string;
}

const projects: Project[] = [
	{
		name: 'Janus',
		desc: 'AI-powered helpdesk system that automates ticket classification, provides instant AI responses, and offers admin dashboards with knowledge base management using MindsDB.',
		techStack: ['Python', 'Streamlit', 'MindsDB', 'ChromaDB'],
		githubUrl: 'https://github.com/k0msenapati/janus',
		ytVideoId: '5qka_PMJQeY'
	},
	{
		name: 'Recipe Genie AI',
		desc: 'AI-enhanced cooking companion using TheMealDB. Features include ingredient-based recipe discovery, AI-generated recipes, text-to-speech, speech-to-text, and image generation.',
		techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini'],
		githubUrl: 'https://github.com/k0msenapati/Recipe-Genie-AI',
		ytVideoId: 'evX0CTucSA4'
	},
	{
		name: 'Dissi',
		desc: 'High-performance real-time Discord agent powered by Groq and Agno. Supports natural language interactions with Discord servers.',
		techStack: ['Python', 'Groq', 'Agno'],
		githubUrl: 'https://github.com/k0msenapati/dissi',
		ytVideoId: 'pjPW77G3DI0' // Dissi | Quest 25 | Agno
	}
];

export const Projects = () => {
	return (
		<section className="py-16 border-b border-zinc-800/80">
			<div className="mb-12">
				<h2 className="text-3xl font-light font-serif text-zinc-100 italic">
					Featured Projects
				</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project, index) => (
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
				<a
					href="https://github.com/k0msenapati?tab=repositories"
					target="_blank"
					rel="noopener noreferrer"
					className="group inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 text-zinc-300 hover:text-teal-300 hover:border-teal-800 bg-zinc-900/10 hover:bg-zinc-900/40 text-xs font-mono uppercase tracking-wider transition-all duration-300"
				>
					<span>View All Projects</span>
					<TbArrowRight
						size={14}
						className="text-zinc-400 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-transform duration-300"
					/>
				</a>
			</div>
		</section>
	);
};
