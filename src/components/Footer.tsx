export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="py-12 border-t border-zinc-950 text-center text-xs font-mono text-zinc-600 flex flex-col sm:flex-row items-center justify-between gap-4">
			<p>© {currentYear} K Om Senapati. All rights reserved.</p>
		</footer>
	);
};
