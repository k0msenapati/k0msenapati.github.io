import { FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

interface ContactLink {
	name: string;
	url: string;
	icon: React.ReactNode;
}

const contactLinks: ContactLink[] = [
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/k0msenapati/',
		icon: <FaLinkedinIn size={18} />
	},
	{
		name: 'Twitter / X',
		url: 'https://x.com/k0msenapati',
		icon: <FaXTwitter size={18} />
	}
];

export const Contact = () => {
	return (
		<section className="py-16 pb-24">
			<div className="mb-8">
				<h2 className="text-3xl font-light font-serif text-zinc-100 italic">
					Let's Connect
				</h2>
			</div>

			<p className="text-zinc-300 text-sm sm:text-base max-w-lg mb-10 leading-relaxed font-sans font-light">
				I am always open to discussing new projects, part-time work, or
				full-time opportunities. Feel free to reach out.
			</p>

			<div className="flex items-center gap-5">
				{contactLinks.map((link, index) => (
					<a
						key={index}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center w-11 h-11 rounded-full border border-zinc-800 bg-zinc-900/10 text-zinc-400 hover:text-teal-400 hover:border-teal-800 hover:bg-zinc-900/30 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 shadow-sm"
						title={link.name}
						aria-label={link.name}
					>
						{link.icon}
					</a>
				))}
			</div>
		</section>
	);
};
