import styled from 'styled-components';
export const StyledContainer = styled.div`
	display: flex;
	position: fixed;
	z-index: 1;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 2.8rem;
	overflow: hidden;
	background-color: ${({theme}) => theme.navBar};
	box-shadow: 0px 1px 15px 2px rgba(0, 0, 0, 0.2);
	a {
		text-decoration: none;
		color: ${({theme}) => theme.text};
	}

	.div_buttons {
		width: 35%;
		display: flex;
		justify-content: space-between;
	}

	@media screen and (max-width: 719px) {
		overflow: hidden;
		.div_buttons {
			width: 90%;
			display: flex;
			justify-content: space-between;
		}
	}
`;
