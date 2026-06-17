import { Wrapper } from './components/Wrapper';
import { Header } from './components/Header';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
	return (
		<Wrapper>
			<Header />
			<Experience />
			<Education />
			<Skills />
			<Projects />
			<Achievements />
			<Contact />
			<Footer />
		</Wrapper>
	);
}

export default App;
