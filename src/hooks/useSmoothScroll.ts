import { useEffect } from 'react';
import Lenis from 'lenis';

export function useSmoothScroll() {
	useEffect(() => {
		// Only initialize on desktop/fine pointers to avoid interfering with mobile touch scroll
		const isDesktop = window.matchMedia(
			'(any-hover: hover) and (any-pointer: fine)'
		).matches;
		if (!isDesktop) return;

		const lenis = new Lenis({
			duration: 1.5,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true
		});

		let rafId: number;
		function raf(time: number) {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		}

		rafId = requestAnimationFrame(raf);

		// Handle smooth scrolling for anchor links using Lenis scrollTo
		const handleAnchorClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const anchor = target.closest('a');
			if (
				anchor &&
				anchor.hash &&
				anchor.origin === window.location.origin &&
				!anchor.getAttribute('download') &&
				anchor.getAttribute('target') !== '_blank'
			) {
				const targetElement = document.querySelector(
					anchor.hash
				) as HTMLElement | null;
				if (targetElement) {
					e.preventDefault();
					lenis.scrollTo(targetElement, {
						offset: -20, // Optional offset to leave some breathing room at the top
						duration: 1.2
					});
				}
			}
		};

		window.addEventListener('click', handleAnchorClick);

		return () => {
			lenis.destroy();
			cancelAnimationFrame(rafId);
			window.removeEventListener('click', handleAnchorClick);
		};
	}, []);
}
