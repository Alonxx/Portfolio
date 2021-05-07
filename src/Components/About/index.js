import React, {useEffect} from 'react';
import {StyledContainer} from './styled';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../../assets/perfil.png';
import img2 from '../../assets/perfilmobile.png';
const About = () => {
	useEffect(() => {
		AOS.init({});
	}, []);

	let media = window.matchMedia('(max-width: 719px)');

	return (
		<div className='main'>
			<a name='About'>
				<StyledContainer>
					<div className='header'>
						<div className='title'>
							<div className='div_component_open'>
								<span>{'<'}</span>About &nbsp;&nbsp;<span>{'/>'} </span>
							</div>
						</div>
					</div>
					<div className='photo'>
						<div
							className='div_avatar'
							data-aos={media.matches ? 'fade-left' : 'fade-right'}
							data-aos-duration='800'
							data-aos-once='true'
						>
							<img className='img_avatar' src={img} alt='perfil'></img>
							<img className='img_avatar2' src={img2} alt='perfil'></img>
						</div>
					</div>

					<div className='about'>
						<div
							className='div_about'
							data-aos={media.matches ? 'fade-right' : 'fade-left'}
							data-aos-duration='800'
							data-aos-once='true'
						>
							<div className='div_greetings'>
								<h2>¡Hey! here Alonso Diaz 👋</h2>
								<div className='div_hr'>
									<hr></hr>
								</div>
							</div>
							<div className='div_title'>
								<span className='span_about'>
									I'm <span className='span_title'>Full Stack Developer</span>.
								</span>
							</div>
						</div>
						<div
							className='div_about '
							data-aos='fade-up'
							data-aos-duration='800'
							data-aos-once='true'
							data-aos-delay='300'
						>
							<div className='div_description'>
								<span>
									Lover of finances and investments 📈 and I currently reside in
									Argentina 🇦🇷.
									<br /> I love challenges, adapt to changes, work as a team,
									and stay in{' '}
									<span className='span_mode'>#StudentModeAlways📚</span>
								</span>
							</div>
						</div>
					</div>
				</StyledContainer>
			</a>
		</div>
	);
};

export default About;
