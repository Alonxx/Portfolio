import styled from 'styled-components';
export const StyledContainer = styled.div`
	width: 99vw;
	height: fit-content;
	display: grid;
	padding-top: 7rem;
	grid-template-areas:
		'title'
		'content';

	.title {
		grid-area: title;
		justify-self: start;
		padding-left: 16rem;
		padding-bottom: 3rem;
	}

	.content {
		grid-area: content;
		justify-self: center;
		padding-bottom: 2rem;
	}

	.div_title {
		font-size: 2rem;
	}

	.div_component_open {
		margin-left: 0rem;
		font-size: 2rem;
		font-weight: 900;
		color: rgb(225, 170, 99, 1);
		span {
			color: rgba(0, 0, 0, 1);
		}
	}
	.tooltip {
		border: 1px solid whitesmoke;
		font-size: 0.6rem;
		visibility: hidden;
		width: 10rem;
		background: #fdfeff;
		color: black;
		text-align: center;
		border-radius: 6px;
		padding: 0.5rem 0.3rem 0 0.3rem;
		position: absolute;
		z-index: 1;
		bottom: 115%;
		left: -113%;
		opacity: 0;
		transition: opacity 0.3s;
		box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		img {
			width: 2rem;
			height: auto;
			border-radius: 100%;
		}
		i {
			font-size: 0.8rem;
		}
		a {
			color: #1c1c1c;
			text-decoration: none;
		}
		&:after {
			content: '';
			position: absolute;
			top: 100%;
			left: 50%;
			margin-left: -0.5rem;
			border-width: 0.5rem;
			border-style: solid;
			border-color: #fdfeff transparent transparent transparent;
		}
	}

	.div_contact {
		width: 20rem;
		display: flex;
		justify-content: space-between;
		font-size: 3rem;
		color: #1c1c1c;
		
		.div_icon_gmail {
			color: #ca372d;
			position: relative;
			cursor: pointer;

			&:hover .tooltip {
				visibility: visible;
				opacity: 1;
			}
		}

		.div_icon_linkedin {
			color: #0a66c2;
			position: relative;
			cursor: pointer;

			&:hover .tooltip {
				visibility: visible;
				opacity: 1;
			}
		}
		.div_icon_github {
			position: relative;
			cursor: pointer;

			&:hover .tooltip {
				visibility: visible;
				opacity: 1;
			}
		}
	}
`;
