import styled from "styled-components";
import WhatsappIconURL from "../../../assets/whatsapp-icon.jpg";
import { FONT_SIZES_MOBILE, FONT_SIZES_WEB } from "../../../styles/fonts.styles";
export const Container = styled.div`
	width: 460px;
	height: 100px;
	border: 1px;
	position: fixed;
	right: -460px;
	bottom: 30px;
	z-index: 1;
	border-radius: 30px;
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media (max-width: 400px) and (max-height: 900px) {
		width: 180px;
		height: 50px;
		right: -490px;
	}
`;

export const Wrapper = styled.div`
	position: fixed;
`;

export const ContainerBackground = styled.div`
	opacity: 1;
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0px;
	top: 0px;
	background-color: rgba(29, 188, 20, 0.9);
	box-shadow: 0 0 50px rgb(0 0 0 / 10%);
	z-index: -1;
	border-radius: 30px;
`;

export const Paragraph = styled.p`
	text-align: center;
	font-size: 50px;
	color: white;
	font-weight: 500;
	font-size: ${FONT_SIZES_WEB.CONTACT};
	@media (max-width: 400px) and (max-height: 900px) {
		font-size: ${FONT_SIZES_MOBILE.CONTACT};
	}
`;

export const WhatsappIcon = styled.div`
	width: 70px;
	height: 70%;
	background-image: url(${WhatsappIconURL});
	background-position: center;
	background-size: 120%;
	border-radius: 10px;
	background-repeat: no-repeat;
	@media (max-width: 400px) and (max-height: 900px) {
		width: 40px;
		height: 70%;
	}
`;
