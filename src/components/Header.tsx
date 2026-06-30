import { FaDownload } from 'react-icons/fa6';

export const Header = () => {
	return (
		<header className="relative flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 py-16 pt-32 border-b border-zinc-800/80">
			<div className="flex-1 space-y-5 text-left">
				<h1 className="text-5xl sm:text-6xl font-light font-serif text-zinc-100 tracking-tight leading-none">
					Hi, I'm{' '}
					<span className="italic font-normal text-teal-400">Om</span>
				</h1>

				<p className="text-zinc-300 max-w-xl leading-relaxed text-sm sm:text-base md:text-[17px] font-sans">
					I’m an undergrad student who’s curious about all things
					tech. I enjoy learning how things work, building cool stuff,
					and exploring new ideas. When I’m not doing that, I love
					relaxing with a good movie or getting into a new series.
				</p>

				<div className="pt-2">
					<a
						href="https://drive.google.com/file/d/196JmgWnE-xKT2Qas0B5tO1CWWLpEUHzi/view?usp=drive_link"
						download
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 text-zinc-300 hover:text-teal-300 hover:border-teal-800 bg-zinc-900/10 hover:bg-zinc-900/40 text-xs font-mono uppercase tracking-wider transition-all duration-300"
					>
						<FaDownload className="text-zinc-400 group-hover:text-teal-400 transition-colors duration-300" />
						<span>Download Resume</span>
					</a>
				</div>
			</div>

			<div className="flex-shrink-0">
				<div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-zinc-800/80 bg-zinc-900/20 shadow-md shadow-black/40 hover:border-teal-500/80 transition-colors duration-500">
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
