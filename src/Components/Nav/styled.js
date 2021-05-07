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
	.div_container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		width: 90%;
		height: 2.8rem;
		.div_buttons {
			margin-left: 16rem;
			width: 40%;
			display: flex;
			justify-content: space-between;
		}
		.div_switch {
		}
	}

	@media (min-width: 720px) and (max-width: 1126px) {
		.div_container {
			.div_buttons {
				margin-left: 8rem;
			}
		}
	}

	@media screen and (max-width: 719px) {
		overflow: hidden;
		.div_container {
			position: absolute;
			width: 90%;
			.div_buttons {
				margin-left: 0;
				width: 90%;
				display: flex;
				justify-content: space-between;
			}
			.div_switch {
				position: relative;
				left: 3%;
				top: 6%;
			}
		}
	}
`;

export const CheckBoxWrapper = styled.div`
	margin-top: 4px;
	position: relative;
	@media screen and (max-width: 719px) {
		margin-top: 0;
	}
`;
export const CheckBoxLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 42px;
	height: 26px;
	border-radius: 15px;
	background: #bebebe;
	cursor: pointer;
	&::after {
		content: '';
		display: block;
		border-radius: 50%;
		width: 18px;
		height: 18px;
		margin: 3px;
		background: #ffffff;
		box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
		transition: 0.2s;
	}
`;
export const CheckBox = styled.input`
	opacity: 0;
	z-index: 1;
	border-radius: 15px;
	width: 42px;
	height: 26px;
	&:checked + ${CheckBoxLabel} {
		background: #4fbe79;
		&::after {
			content: '';
			display: block;
			border-radius: 50%;
			width: 18px;
			height: 18px;
			margin-left: 21px;
			transition: 0.2s;
		}
	}
`;
