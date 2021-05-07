import {
	StyledContainer,
	CheckBoxWrapper,
	CheckBoxLabel,
	CheckBox,
} from './styled';

import {CgSun} from 'react-icons/cg';
import {BiMoon} from 'react-icons/bi'

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
							<span>
								<CgSun />
							</span>
						<CheckBoxWrapper>
							<CheckBox
								id='checkbox'
								type='checkbox'
								onClick={themeToggler}
								checked={theme === 'dark' ? true : false}
							/>

							<CheckBoxLabel htmlFor='checkbox' />
						</CheckBoxWrapper>
							<span>
								<BiMoon />
							</span>
					</div>
				</div>
			</StyledContainer>
		</div>
	);
};

//<button onClick={themeToggler}>Switch Theme</button>;
export default Nav;
