import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	position: relative;
	margin-top: 100px;
	@media (max-width: 400px) and (max-height: 900px) {
		margin-top: 10px;
	}
`;

export const Background = styled.div`
	position: absolute;
	width: 100%;
	background-color: #f2f4f3;
	height: 100%;
`;
export const Wrapper = styled.div`
	width: 75%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	direction: rtl;
	@media (max-width: 400px) and (max-height: 900px) {
		width: 100%;
	}
`;
