import {StyledContainer} from './styled';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {FiExternalLink} from 'react-icons/fi';
import {SiGmail} from 'react-icons/si';
import {IoMdCopy} from 'react-icons/io';
import img_gmail from '../../assets/perfil.png';
import img_linkedin from '../../assets/linkedin.png';

const arrayContact = [
	{image: img_linkedin, text: 'Alonso Diaz Full Stack Developer', },
	{},
	{},
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
						<div className='div_icon_gmail'>
							<SiGmail />
							<div className='tooltip'>
								<img className='img_perfil' src={img_gmail} alt='perfil'></img>
								<span>alonsodiazlip@gmail.com</span>
								<br />
								<i>
									<IoMdCopy
										onClick={() => {
											navigator.clipboard.writeText('alonsodiazlip@gmail.com');
										}}
									/>
								</i>
							</div>
						</div>
						<div className='div_icon_linkedin'>
							<FaLinkedin />
							<div className='tooltip'>
								<img
									className='img_perfil'
									src={img_linkedin}
									alt='perfil'
								></img>
								<br />
								<span>
									Alonso Diaz
									<br /> Full Stack Developer
								</span>
								<br />
								<i>
									<a
										href='https://www.linkedin.com/in/alonsojesusdiaz/'
										target='_blank'
										rel='noreferrer'
									>
										<FiExternalLink />
									</a>
								</i>
							</div>
						</div>
						<div className='div_icon_github'>
							<FaGithub />
							<div className='tooltip'>
								<img className='img_perfil' src={img_gmail} alt='perfil'></img>
								<br />
								<span>@Alonxx</span>
								<br />
								<i>
									<a
										href='https://github.com/Alonxx/'
										target='_blank'
										rel='noreferrer'
									>
										<FiExternalLink />
									</a>
								</i>
							</div>
						</div>
					</div>
				</div>
			</StyledContainer>
		</div>
	);
};

export default Contact;
