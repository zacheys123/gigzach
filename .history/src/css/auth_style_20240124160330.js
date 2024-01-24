import styled from 'styled-components';

export const FormContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: navy-blue;

	.auth__left {
		padding: 1rem;
		flex: 0.4;

		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		h4 {
			text-align: center;
			font-size: 20px;
			font-family: georgia;
		}
		.typo {
			font-family: monospace;
			font-size: 1.4rem;
			padding: 0.4rem;
		}

		h5 {
			font-family: 'soffia' serif;
			font-size: 1rem;
			padding: 0.9rem;
			font-family: monospace;
		}
	}
	.auth__right {
		flex: 0.8;
		background: #16222d;
		.img {
			height: 400px;
			width: 400px;
		}
		.img1 {
			height: 100px;
			width: 100px;
			z-index: 999;
		}
		.button {
			cursor: pointer;
			transition: all 0.5s ease-in-out;
			&:hover {
				background: greenyellow;
				font-weight: bold;
				font-family: sans;
				color: red;
			}
		}
		.form-container {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			.header {
				span {
					color: black;
					font-size: 0.5rem;
					background: lightblue;
					padding: 0.6rem;
					margin-right: 0.5rem;
					border-radius: 99%;
					&:hover {
						cursor: pointer;
						opacity: 0.7;
					}
				}
			}
		}
		form {
			background: inherit;
			width: 70%;
			height: 65%;
			box-shadow: 0px 0px 4px #444;
			padding: 0.7rem;

			div {
				input[type='text'],
				input[type='password'] {
					margin: 0.9rem auto;
					width: 80%;
					padding: 0.8rem;
					border: none;
					outline: none;
					background: transparent;
					border-bottom: 1px solid white;
					transition: all 1s ease-in-out;
					color: white;

					&:focus-visible {
						border-color: greenyellow;
					}
				}
				select {
					padding: 0.3rem;
					font-family: sans-serif;
				}
				h5 {
					color: white;
					font-family: monospace;
				}
			}
		}
	}
`;
