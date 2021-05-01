import {StyledContainer} from './styled';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {FiExternalLink, FiMail} from 'react-icons/fi';
import {SiGmail} from 'react-icons/si';
import img_gmail from '../../assets/perfil.png';
import img_linkedin from '../../assets/linkedin.png';

const arrayContact = [
	{
		icon: SiGmail,
		image: img_gmail,
		text: 'alonsodiazlip@gmail.com',
		action: 'copy',
		link: 'mailto: alonsodiazlip@gmail.com',
		inIcon: FiMail,
		color: '#ca372d',
	},
	{
		icon: FaLinkedin,
		image: img_linkedin,
		text: 'Alonso Diaz',
		text2: 'Full Stack Developer',
		action: 'link',
		link: 'https://www.linkedin.com/in/alonsojesusdiaz/',
		inIcon: FiExternalLink,
		color: '#0a66c2',
	},
	{
		icon: FaGithub,
		image: img_gmail,
		text: '@Alonxx',
		action: 'link',
		link: 'https://github.com/Alonxx/',
		inIcon: FiExternalLink,
		color: '#1c1c1c',
	},
];

const Contact = () => {
	return (
		<div className='contact'>
			<StyledContainer>
				<div className='title'>
					<div className='div_component_open'>
						<span>{'<'}</span>Contact&nbsp;&nbsp;<span>{'/>'} </span>
					</div>
				</div>
				<div className='content'>
					<div className='div_contact'>
						{arrayContact.map((el) => (
							<div className='div_icon'>
								<el.icon style={{color: el.color}} />
								<div className='tooltip'>
									<img
										className='img_perfil'
										src={el.image}
										alt={el.icon}
									></img>
									<br />
									<span>
										{el.text}
										<br/>
										{el.text2 !== null ? el.text2 : null}
									</span>
									<br />
									<i>
										<a href={el.link} target='_blank' rel='noreferrer'>
											<el.inIcon />
										</a>
									</i>
								</div>
							</div>
						))}
					</div>
				</div>
			</StyledContainer>
		</div>
	);
};

export default Contact;
