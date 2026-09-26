import type { Project } from '@/types';

export const projects: Project[] = [
	{
		name: 'Invoice Copilot',
		desc: 'An AI-powered web app to scan invoices, extract data, and view them in a dashboard.',
		techStack: ['Python', 'FastAPI', 'React', 'Groq'],
		githubUrl: 'https://github.com/k0msenapati/invoice-copilot',
		ytVideoId: '907lnE1Rn4A',
		featured: true
	},
	{
		name: 'Janus',
		desc: 'An AI-powered helpdesk system that automates ticket classification and provides instant AI responses.',
		techStack: ['Python', 'Streamlit', 'MindsDB', 'ChromaDB'],
		githubUrl: 'https://github.com/k0msenapati/janus',
		ytVideoId: '5qka_PMJQeY',
		featured: true
	},
	{
		name: 'Recipe Genie AI',
		desc: 'An AI-enhanced cooking companion using TheMealDB',
		techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini'],
		githubUrl: 'https://github.com/k0msenapati/Recipe-Genie-AI',
		ytVideoId: 'evX0CTucSA4',
		featured: true
	},
	{
		name: 'Real-time Voting App',
		desc: 'A real-time voting application featuring live updates, powered by Fluvio and Server-Sent Events (SSE).',
		techStack: ['Fluvio', 'SSE', 'React', 'Node.js'],
		githubUrl: 'https://github.com/k0msenapati/real-time-voting-app',
		ytVideoId: 'vIrSBFoPjvk',
		featured: true
	},
	{
		name: 'Dissi',
		desc: 'A real-time Discord agent powered by Groq and Agno. Supports natural language interactions with Discord servers.',
		techStack: ['Python', 'Groq', 'Agno'],
		githubUrl: 'https://github.com/k0msenapati/dissi',
		ytVideoId: 'pjPW77G3DI0',
		featured: false
	},
	{
		name: 'Talk to Page',
		desc: 'An AI-powered tool that allows you to chat directly with any web page URL to extract information and summarize content.',
		techStack: ['Python', 'LangChain', 'Streamlit', 'OpenAI'],
		githubUrl: 'https://github.com/k0msenapati/talk-to-page',
		ytVideoId: 'O0Y2WEqkros',
		featured: false
	}
];
