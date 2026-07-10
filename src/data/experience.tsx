import React from 'react';
import { FaLaptopCode } from 'react-icons/fa6';

export interface WorkItem {
	company: string;
	role: string;
	period: string;
	description: string[];
	techUsed: string[];
	icon?: React.ReactNode;
}

export const experiences: WorkItem[] = [
	{
		company: 'Quira',
		role: 'Community Moderator',
		period: 'Feb 2025 - Aug 2025',
		description: [
			'Moderating the Quira Discord Community, fostering a positive and engaging environment.',
			'Helping other developers to build better projects.'
		],
		techUsed: ['Community Engagement', 'Community Management']
	},
	{
		company: 'Quira',
		role: 'Quira Creator',
		period: 'May 2024 - Aug 2025',
		description: [
			'Completed 6+ hackathon-style developer quests building complex Generative AI integrations, agents, and tooling.',
			'Shipped multiple full-stack open-source projects including Recipe Genie AI, Dissi, and KB Manager, earning top community votes and winning multiple quest challenges.',
			'Gained extensive expertise in rapid prototyping, AI agent orchestration (Agno, MindsDB), and open-source collaboration.'
		],
		techUsed: [
			'Generative AI',
			'AI Agents',
			'TypeScript',
			'Python',
			'Rapid Prototyping'
		],
		icon: <FaLaptopCode size={18} />
	},
	{
		company: 'TSCircuit',
		role: 'Open Source Developer',
		period: 'Oct 2024 - Mar 2025',
		description: [
			'Automated core sponsorship operations on tscircuit.com by building a daily CSV payout pipeline, and developed features like real-time star counters and featured snippets to optimize community visibility.',
			'Collaborated across core open-source TypeScript/React repositories to resolve critical UI/UX issues and improve rendering performance in pcb-viewer.'
		],
		techUsed: ['TypeScript', 'React', 'Open Source', 'UI/UX', 'Automation']
	}
];
