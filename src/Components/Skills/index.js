import React from 'react';
import {StyledContainer} from './styled';
import JS from '../../assets/JS.svg';
import react from '../../assets/react.svg';
import redux from '../../assets/redux.svg';
import tailwind from '../../assets/tailwind.svg';
import node from '../../assets/node.svg';
import postgresql from '../../assets/postgresql.svg';
import sequelize from '../../assets/sequelize.svg';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import express from '../../assets/expressjs.svg';
import mongodb from '../../assets/mongodb.svg';

const arrayFront = [
	{image: html, name: 'HTML', link: 'https://en.wikipedia.org/wiki/HTML'},
	{
		image: css,
		name: 'CSS',
		link: 'https://www.w3.org/Style/CSS/Overview.en.html',
	},
	{
		image: JS,
		name: 'JS',
		link: 'https://www.javascript.com/',
	},
	{
		image: react,
		name: 'React.js',
		link: 'https://es.reactjs.org/',
	},
	{
		image: redux,
		name: 'Redux',
		link: 'https://es.redux.js.org/',
	},
	{
		image: tailwind,
		name: 'Tailwind CSS',
		link: 'https://tailwindcss.com/',
	},
];

const arrayBack = [
	{image: node, name: 'Node.js', link: 'https://nodejs.org/es/'},
	{image: express, name: 'Express.js', link: 'https://expressjs.com'},
	{image: postgresql, name: 'PostgreSQL', link: 'https://www.postgresql.org/'},
	{image: sequelize, name: 'Sequelize', link: 'https://sequelize.org/'},
	{image: mongodb, name: 'MongoDB', link: 'https://www.mongodb.com/'},
];

const Skills = () => {
	return (
		<div id='Skills' className='skills'>
			<StyledContainer>
				<div className='title'>
					<div className='div_component_open'>
						<span>{'<'}</span>Skills &nbsp;&nbsp;<span>{'/>'} </span>
					</div>
				</div>

				<div className='div_content'>
					<div className='frontend'>
						<div className='div_frontend_container'>
							<div className='div_skills_title'>
								<h2>Front-end</h2>
								<hr></hr>
							</div>
							<div className='div_frontend'>
								{arrayFront.map((el, i) => (
									<div key={i + Math.random()}>
										<a href={el.link} target='_blank' rel='noreferrer'>
											<img src={el.image} alt={el.name}></img>
										</a>
										<h3>{el.name}</h3>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='backend'>
						<div className='div_backend_container'>
							<div className='div_skills_title'>
								<h2>Back-end</h2>
								<hr></hr>
							</div>
							<div className='div_backend'>
								{arrayBack.map((el, i) => (
									<div key={i + Math.random()}>
										<a href={el.link} target='_blank' rel='noreferrer'>
											<img src={el.image} alt={el.name}></img>
										</a>
										<h3>{el.name}</h3>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</StyledContainer>
		</div>
	);
};

export default Skills;
