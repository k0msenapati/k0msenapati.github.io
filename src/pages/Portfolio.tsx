import { Header } from '../components/Header';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Achievements } from '../components/Achievements';
import { Contact } from '../components/Contact';

export const Portfolio = () => {
	return (
		<>
			<title>k0msenapati</title>
			<meta
				name="description"
				content="Portfolio of K Om Senapati - Undergraduate student, developer, and open-source contributor."
			/>
			<Header />
			<Experience />
			<Education />
			<Skills />
			<Projects />
			<Achievements />
			<Contact />
		</>
	);
};
