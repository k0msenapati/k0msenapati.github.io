import { Route, Switch, useLocation } from 'wouter';
import { useEffect } from 'react';
import { Wrapper } from './components/Wrapper';
import { Footer } from './components/Footer';
import { SmoothCursor } from './components/ui/SmoothCursor';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Portfolio } from './pages/Portfolio';
import { ProjectsPage } from './pages/ProjectsPage';

const ScrollToTop = () => {
	const [location] = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return null;
};

function App() {
	useSmoothScroll();

	return (
		<Wrapper>
			<ScrollToTop />
			<Switch>
				<Route path="/" component={Portfolio} />
				<Route path="/projects" component={ProjectsPage} />
				<Route>
					<div className="py-32 text-center space-y-4">
						<h2 className="text-3xl font-light font-serif text-zinc-100 italic">
							Page Not Found
						</h2>
						<p className="text-zinc-400 font-sans text-sm">
							The page you are looking for doesn't exist.
						</p>
						<a
							href="/"
							className="inline-block text-xs font-mono text-teal-400 hover:text-teal-300 uppercase tracking-wider pt-2"
						>
							Go Back Home
						</a>
					</div>
				</Route>
			</Switch>
			<Footer />
			<SmoothCursor />
		</Wrapper>
	);
}

export default App;
