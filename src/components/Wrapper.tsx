export const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative min-h-screen bg-[#0B0D0E] text-zinc-300 font-sans selection:bg-zinc-800 selection:text-zinc-100">
			<div className="max-w-3xl mx-auto px-6 sm:px-8">{children}</div>
		</div>
	);
};
