import {StyledContainer} from './styled';
import {FiGithub, FiExternalLink} from 'react-icons/fi';

const Card = ({title, description, link}) => {
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
					<span className='span_icon'>
						<FiGithub />
						<span> GitHub</span>
					</span>

					<span className='span_icon'>
						<FiExternalLink />
						<span> Web</span>
					</span>
				</div>
			</div>
		</StyledContainer>
	);
};

export default Card;
