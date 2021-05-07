import {StyledContainer} from './styled';
import {FiGithub, FiExternalLink} from 'react-icons/fi';

const Card = ({title, description, link, github, web}) => {
	return (
		<StyledContainer>
			<div className='div_card'>
				<div className='div_project_title'>
					<h3>{title}</h3>
					<hr></hr>
				</div>
				<div className='div_text'>
					<span>{description}</span>
				</div>
				<iframe
					src={link}
					frameborder='0'
					allow='autoplay; fullscreen'
					title={title}
				></iframe>
				<div className='div_icons'>
					<a href={github} target='_blank' rel='noreferrer'>
						<span className='span_icon'>
							<FiGithub />
							<span> GitHub</span>
						</span>
					</a>
					<a href={web} target='_blank' rel='noreferrer'>
						<span className='span_icon'>
							<FiExternalLink />
							<span> Web</span>
						</span>
					</a>
				</div>
			</div>
		</StyledContainer>
	);
};

export default Card;
