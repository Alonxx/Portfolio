import React from 'react';
import GridLayout from './utils/GridLayout';
import {GlobalStyles} from './GlobalStyles';
import Nav from './Components/Nav';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
	return (
		<GridLayout>
			<GlobalStyles />
			<Nav />
			<About />
			<Skills />
			<Projects />
			<Contact/>
		</GridLayout>
	);
}

export default App;
