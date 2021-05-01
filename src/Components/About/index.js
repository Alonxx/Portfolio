import {StyledContainer} from './styled';
import img from '../../assets/img.png';
import img2 from '../../assets/perfil.png';
const About = () => {
	return (
		<div className='main'>
			<StyledContainer>
				<div className='header'>
					<div className='title'>
						<div className='div_component_open'>
							<span>{'<'}</span>About &nbsp;&nbsp;<span>{'/>'} </span>
						</div>
					</div>
				</div>
				<div className='photo'>
					<div className='div_avatar'>
						<img className='img_avatar' src={img} alt='perfil'></img>
						<img className='img_avatar2' src={img2} alt='perfil'></img>
					</div>
				</div>
				<div className='about'>
					<div className='div_about'>
						<div className='div_greetings'>
							<h2>¡Hey! Aqui Alonso Diaz 👋</h2>
							<div className='div_hr'>
								<hr></hr>
							</div>
						</div>
						<div className='div_title'>
							<span className='span_about'>
								Soy <span className='span_title'>Full Stack Developer</span>.
							</span>
						</div>

						<div className='div_description'>
							<span>
								Amante de las finanzas e inversiones 📈 y resido actualmente en
								Argentina 🇦🇷.
								<br /> Me encantan los retos, adaptarme a los cambios, trabajar
								en equipo, y mantenerme en{' '}
								<span className='span_mode'>#ModoEstudianteSiempre📚</span>
							</span>
						</div>
					</div>
				</div>
			</StyledContainer>
		</div>
	);
};


export default About;
