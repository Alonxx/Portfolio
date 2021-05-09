import {StyledContainer} from './styled';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {FiExternalLink, FiMail} from 'react-icons/fi';
import {SiGmail} from 'react-icons/si';
import {RiArrowRightSLine} from 'react-icons/ri';
import img_gmail from '../../assets/linkedin.png';
import img_linkedin from '../../assets/linkedin.png';

const arrayContact = [
	{
		icon: SiGmail,
		image: img_gmail,
		text: 'alonsodiazlip@gmail.com',
		text2: null,
		action: 'copy',
		link: 'mailto: alonsodiazlip@gmail.com',
		inIcon: FiMail,
		className: 'icon_gmail',
	},
	{
		icon: FaLinkedin,
		image: img_linkedin,
		text: 'Alonso Diaz',
		text2: 'Full Stack Developer',
		action: 'link',
		link: 'https://www.linkedin.com/in/alonsojesusdiaz/',
		inIcon: FiExternalLink,
		className: 'icon_linkedin',
	},
	{
		icon: FaGithub,
		image: img_gmail,
		text: '@Alonxx',
		text2: null,
		action: 'link',
		link: 'https://github.com/Alonxx/',
		inIcon: FiExternalLink,
		className: 'icon_github',
	},
	/* 	{
		icon: BiBookContent,
		image: img_gmail,
		text: 'Resume',
		text2: null,
		action: 'link',
		link: 'AlonsoDiaz-CV.pdf',
		inIcon: BiDownload,
		className: 'icon_github',
	}, */
];

const Contact = () => {
	return (
		<div id='Contact' className='contact'>
			<StyledContainer>
				<div className='title'>
					<div className='div_component_open'>
						<span>{'<'}</span>Contact&nbsp;&nbsp;<span>{'/>'} </span>
					</div>
				</div>
				<div className='content'>
					<div className='div_contact'>
						{arrayContact.map((el, i) => (
							<div key={i + Math.random()} className='div_icon'>
								<el.icon className={el.className} />
								<div className='tooltip'>
									<img
										className='img_perfil'
										src={el.image}
										alt={el.className}
									></img>
									<br />
									<span>
										{el.text}
										<br />
										{el.text2 !== null ? el.text2 : null}
									</span>
									<br />
									<i>
										<a href={el.link} target='_blank' rel='noreferrer'>
											<RiArrowRightSLine className='arrow' />
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
