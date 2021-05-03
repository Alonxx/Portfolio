import {StyledContainer} from './styled';

const arrayMenu = ['About', 'Skills', 'Projects', 'Contact'];

const Nav = ({themeToggler}) => {
	return (
		<div className='nav'>
			<StyledContainer>
				<div className='div_buttons'>
					{arrayMenu &&
						arrayMenu.map((el) => (
							<div>
								<a href={'#' + el}>{el}</a>
							</div>
						))}
				</div>
				<button onClick={themeToggler}>Switch Theme</button>
			</StyledContainer>
		</div>
	);
};

	//<button onClick={themeToggler}>Switch Theme</button>;
export default Nav;
