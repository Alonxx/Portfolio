import {
	StyledContainer,
	CheckBoxWrapper,
	CheckBoxLabel,
	CheckBox,
} from './styled';

const arrayMenu = ['About', 'Skills', 'Projects', 'Contact'];

const Nav = ({themeToggler, theme}) => {
	return (
		<div className='nav'>
			<StyledContainer>
				<div className='div_container'>
					<div className='div_buttons'>
						{arrayMenu &&
							arrayMenu.map((el) => (
								<div>
									<a href={'#' + el}>{el}</a>
								</div>
							))}
					</div>
					<div className='div_switch'>
						<CheckBoxWrapper>
							<CheckBox
								id='checkbox'
								type='checkbox'
								onClick={themeToggler}
								checked={theme === 'dark' ? true : false}
							/>

							<CheckBoxLabel htmlFor='checkbox' />
						</CheckBoxWrapper>
					</div>
				</div>
			</StyledContainer>
		</div>
	);
};

//<button onClick={themeToggler}>Switch Theme</button>;
export default Nav;
