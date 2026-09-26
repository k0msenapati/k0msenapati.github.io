import type { ProfileData } from '@/types';
import {
	FaGithub,
	FaLinkedinIn,
	FaXTwitter,
	FaDev,
	FaRegFileLines
} from 'react-icons/fa6';

export const profile: ProfileData = {
	name: 'K Om Senapati',
	nickname: 'Om',
	bio: 'I’m an undergrad student who’s curious about all things tech. I enjoy learning how things work, building cool stuff, and exploring new ideas. When I’m not doing that, I love relaxing with a good movie or getting into a new series.',
	avatarUrl: 'https://github.com/k0msenapati.png',
	socials: [
		{
			name: 'GitHub',
			url: 'https://github.com/k0msenapati',
			icon: <FaGithub size={22} />,
			iconType: 'github'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/k0msenapati/',
			icon: <FaLinkedinIn size={22} />,
			iconType: 'linkedin'
		},
		{
			name: 'Twitter / X',
			url: 'https://x.com/k0msenapati',
			icon: <FaXTwitter size={22} />,
			iconType: 'twitter'
		},
		{
			name: 'Blog (DEV Community)',
			url: 'https://dev.to/k0msenapati',
			icon: <FaDev size={22} />,
			iconType: 'dev'
		},
		{
			name: 'Download Resume',
			url: 'https://drive.google.com/file/d/196JmgWnE-xKT2Qas0B5tO1CWWLpEUHzi/view?usp=drive_link',
			icon: <FaRegFileLines size={22} />,
			iconType: 'resume'
		}
	]
};
