import styled from 'styled-components';
const Container = styled.div`
	justify-items: stretch;
	align-items: stretch;
	justify-content: stretch;
	align-content: stretch;

	@media (max-width: 719px) {
		//mobile
		display: grid;
		width: 100%;
		height: 100vh;
		margin: 0;
		padding: 0;
		grid-template-columns: 100%;
		grid-template-rows: 10% 70% 20%;

		.top {
			grid-row: 1;
			grid-column-start: 1;
			grid-column-end: 2;
		}
		.mid {
			grid-row: 2;
			grid-column-start: 1;
			grid-column-end: 2;
		}
		.bot {
			grid-row: 3;
			grid-column-start: 1;
			grid-column-end: 2;
		}
	}
	@media (min-width: 720px) and (max-width: 1023px) {
		//Tablet
		display: grid;
		width: 100%;
		height: 100vh;
		margin: 0;
		padding: 0;
		grid-template-columns: 20% 60% 20%;
		grid-template-rows: 10% 70% 20%;

		.top {
			grid-row: 1;
			grid-column-start: 1;
			grid-column-end: 4;
		}
		.mid {
			grid-row: 2;
			grid-column-start: 1;
			grid-column-end: 4;
		}
		.bot {
			grid-row: 3;
			grid-column-start: 1;
			grid-column-end: 4;
		}
	}

	@media (min-width: 1024px) {
		//Deskop
		display: grid;
		width: 100%;
		height: 100vh;
		margin: 0;
		padding: 0;
		grid-template-columns: 25% 25% 25% 25%;
		grid-template-rows: 10% 70% 20%;

		.top {
			grid-row: 1;
			grid-column-start: 1;
			grid-column-end: 5;
		}
		.mid {
			grid-row: 2;
			grid-column-start: 1;
			grid-column-end: 5;
		}
		.bot {
			grid-row: 3;
			grid-column-start: 1;
			grid-column-end: 5;
		}
	}
`;

export default Container;
