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
	{image: html, name: 'HTML'},
	{image: css, name: 'CSS'},
	{image: JS, name: 'JS'},
	{image: react, name: 'React.js'},
	{image: redux, name: 'Redux'},
	{image: tailwind, name: 'Tailwind CSS'},
];

const arrayBack = [
	{image: node, name: 'Node.js'},
	{image: express, name: 'Express.js'},
	{image: postgresql, name: 'PostgreSQL'},
	{image: sequelize, name: 'Sequelize'},
	{image: mongodb, name: 'MongoDB'},
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
								{arrayFront.map((el) => (
									<div>
										<img src={el.image} alt={el.name}></img>
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
								{arrayBack.map((el) => (
									<div>
										<img src={el.image} alt={el.name}></img>
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
