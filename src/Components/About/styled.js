import styled from 'styled-components';
export const StyledContainer = styled.div`
	width: 99vw;
	height: fit-content;
	display: grid;
	padding-top: 5rem;
	grid-template-areas:
		'header header'
		'photo about '
		'photo about';

	.photo {
		grid-area: photo;
		align-self: center;
		justify-self: center;
	}
	.about {
		grid-area: about;
	}

	.header {
		grid-area: header;
	}

	.div_component_open {
		margin-left: 0rem;
		padding-bottom: 3rem;
		padding-left: 16rem;
		font-size: 2rem;
		font-weight: 900;
		color: rgb(225, 170, 99, 1);
		span {
			color: rgba(0, 0, 0, 1);
		}
	}

	.div_avatar {
		width: fit-content;
		height: fit-content;
		padding-top: 20px;

		.img_avatar {
			border-radius: 15px;
		}
		.img_avatar2 {
			display: none;
		}
	}

	.div_about {
		width: 22rem;
		height: fit-content;

		.div_greetings {
			padding-bottom: 2.5rem;
			width: fit-content;
			height: fit-content;
			font-size: 0.9rem;
			hr {
				margin-top: 0.1rem;
				background-color: rgba(222, 226, 230, 0.7);
				border: 1px solid rgba(222, 226, 230, 0.7);
			}
		}
		.div_title {
			padding-bottom: 3rem;
			.span_about {
				line-height: 5rem;
				font-weight: 900;
				font-size: 5.5rem;
				.span_title {
					color: #01caf4;
				}
			}
		}
		.div_description {
			width: fit-content;
			font-size: 0.9rem;
			line-height: 1.5;

			.span_mode {
				color: #4188cf;
			}
		}

		.div_component_close {
			width: 100%;
			font-size: 0.9rem;
			font-weight: 900;
			color: rgba(0, 0, 0, 0.7);
			text-align: right;
		}
	}

	@media screen and (max-width: 719px) {
		grid-template-areas:
			'header'
			'photo'
			'about ';

		.photo {
			grid-area: photo;
		}
		.about {
			grid-area: about;
		}

		.div_component_open {
			margin-left: 0rem;
			padding-bottom: 2rem;
			padding-left: 0.5rem;
			font-size: 2rem;
			font-weight: 900;
			color: rgb(225, 170, 99, 1);
			span {
				color: rgba(0, 0, 0, 1);
			}
		}

		.div_avatar {
			.img_avatar {
				display: none;
			}
			.img_avatar2 {
				display: block;
				width: 120px;
				height: auto;
				border-radius: 100%;
			}
		}

		.div_about {
			width: auto;
			height: fit-content;

			.div_greetings {
				text-align: center;
				padding-top: 1rem;
				padding-bottom: 2rem;
				width: 100%;
				height: fit-content;
				font-size: 0.9rem;

				hr {
					background-color: rgba(222, 226, 230, 0.7);
					border: 1px solid rgba(222, 226, 230, 0.7);
					margin-left: 1.5rem;
					width: 80%;
					margin-top: 0.1rem;
				}
			}

			.div_title {
				padding-bottom: 1.6rem;
				padding-left: 0.5rem;
				.span_about {
					line-height: 4rem;
					font-weight: 900;
					font-size: 3.7rem;
					.span_title {
						color: #01caf4;
					}
				}
			}
			.div_description {
				padding-left: 0.8rem;
			}

			.div_component_close {
				width: 95%;
			}
		}
	}
`;
