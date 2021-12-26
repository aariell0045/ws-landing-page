import styled from "styled-components";
import WhatsappIconURL from "../../../assets/whatsapp-icon.jpg";
export const Container = styled.div`
	width: 500px;
	height: 100px;
	border: 1px;
	position: fixed;

	right: 0px;
	bottom: 30px;
	z-index: 1;
	border-radius: 30px;
	display: flex;
	justify-content: space-around;
	align-items: center;
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
`;

export const WhatsappIcon = styled.div`
	width: 70px;
	height: 70%;
	background-image: url(${WhatsappIconURL});
	background-position: center;
	background-size: 120%;
	border-radius: 10px;
`;
