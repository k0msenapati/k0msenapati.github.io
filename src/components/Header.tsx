import { profile } from '../data/profile';

export const Header = () => {
	return (
		<header className="relative flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 py-16 pt-32 border-b border-zinc-800/80">
			<div className="flex-1 space-y-5 text-left">
				<h1 className="text-5xl sm:text-6xl font-light font-serif text-zinc-100 tracking-tight leading-none">
					Hi, I'm{' '}
					<span className="italic font-normal text-teal-400">
						{profile.nickname}
					</span>
				</h1>

				<p className="text-zinc-300 max-w-xl leading-relaxed text-sm sm:text-base md:text-[17px] font-sans">
					{profile.bio}
				</p>

				<div className="flex items-center gap-5 pt-3">
					{profile.socials.map((link, index) => {
						const Icon = link.icon;
						return (
							<a
								key={index}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-400 hover:text-teal-400 transition-all duration-200 hover:scale-105"
								title={link.name}
								aria-label={link.name}
							>
								<Icon size={22} />
							</a>
						);
					})}
				</div>
			</div>

			<div className="flex-shrink-0">
				<div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-zinc-800/80 bg-zinc-900/20 shadow-md shadow-black/40 hover:border-teal-500/80 transition-colors duration-500">
					<img
						src={profile.avatarUrl}
						alt={`${profile.nickname}'s avatar`}
						className="w-full h-full object-cover grayscale-0 contrast-[1.10] opacity-100 transition-all duration-500"
					/>
				</div>
			</div>
		</header>
	);
};
