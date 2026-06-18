import { FaDownload } from 'react-icons/fa6';

export const Header = () => {
	return (
		<header className="relative flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 py-16 border-b border-zinc-900">
			<div className="flex-1 space-y-5 text-left">
				<h1 className="text-5xl sm:text-6xl font-light font-serif text-zinc-100 tracking-tight leading-none">
					Hi, I'm <span className="italic font-normal">Om</span>
				</h1>

				<p className="text-zinc-400 max-w-xl leading-relaxed text-sm sm:text-base font-sans">
					I’m an undergrad student who’s curious about all things
					tech. I enjoy learning how things work, building cool stuff,
					and exploring new ideas. When I’m not doing that, I love
					relaxing with a good movie or getting into a new series.
				</p>

				<div className="pt-2">
					<a
						href="https://drive.google.com/file/d/1BW8ZAgUNZIlLjzKMszZGhcYOvq3Itc_J/view?usp=sharing"
						download
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 bg-zinc-950/20 hover:bg-zinc-900/40 text-xs font-mono uppercase tracking-wider transition-all duration-300"
					>
						<FaDownload className="text-zinc-500" />
						<span>Download Resume</span>
					</a>
				</div>
			</div>

			<div className="flex-shrink-0">
				<div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-zinc-855 bg-zinc-950/20">
					<img
						src="https://github.com/k0msenapati.png"
						alt="Om's avatar"
						className="w-full h-full object-cover grayscale-0 contrast-[1.10] opacity-100 transition-all duration-500"
					/>
				</div>
			</div>
		</header>
	);
};
