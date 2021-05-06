import React, {useEffect} from 'react';
import {StyledContainer} from './styled';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skeleton from 'react-loading-skeleton';
import Card from '../Card/index';

/* PASAR A UTILS */

const myProjects = [
	{
		title: 'Pokemon Companion App',
		description: `Web application to search, obtain information and add Pokemons.
        Created with React.js, Redux, Express, Sequelize, PostgreSQL.`,
		link:
			'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6792079534683410432?compact=1',
		github: 'https://github.com/Alonxx/Pokemon-Companion-App',
		web: 'https://pokemon-companion-app.herokuapp.com/',
	},
	{
		title: 'The Quizz App',
		description:
			'Trivia game web application. Created with React.js consuming data from a public API.',
		link:
			'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6792576405097062400?compact=1',
		github: 'https://github.com/Alonxx/quizzapp',
		web: 'https://alonxx.github.io/quizzapp/',
	},
];

const Projects = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id='Projects' className='projects'>
			<StyledContainer>
				<div className='title'>
					<div className='div_component_open'>
						<span>{'<'}</span>Projects &nbsp;&nbsp;<span>{'/>'} </span>
					</div>
				</div>
				<div className='project'>
					<div className='div_project_container'>
						{myProjects &&
							myProjects.map((el, i) => (
								<Card
									title={el.title}
									description={el.description}
									link={el.link}
									github={el.github}
									web={el.web}
								/>
							))}
					</div>
				</div>
			</StyledContainer>
		</div>
	);
};

export default Projects;
