import styled from "styled-components";
import verifyIcon from "../../../assets/verify-perfect.png";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	direction: rtl;
	display: flex;
	flex-direction: column;
	gap: 50px;
	position: relative;
`;

export const SectionContainer = styled.div`
	width: 100%;
	position: relative;
	padding: 5px;
`;

export const TitleContainer = styled.header`
	text-align: center;
	line-height: 50px;
	margin-top: 50px;
	margin-bottom: 50px;
`;

export const Title = styled.h1`
	font-size: 70px;
	margin: 0px;
`;

export const UnorderList = styled.ul`
	padding: 50px 0px;
`;

export const ListItem = styled.li`
	margin: 0;
	padding: 36px 60px 36px 84px;
	list-style: none;
	background-image: url(${verifyIcon});
	background-repeat: no-repeat;
	background-position: right;
	background-size: 40px;
	font-size: 35px;
`;

export const Paragraph = styled.p`
	margin: 0;
	padding: 36px 60px 36px 84px;
	list-style: none;
	background-size: 40px;
	font-size: 35px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;
`;

export const DonwloadButton = styled.button`
	background-color: #3bc14a;
	border: 2px solid white;
	text-transform: uppercase;
	width: 30%;
	height: 100px;
	font-size: 25px;
	box-shadow: inset 0 0px 10px #000;
	border-radius: 10px;
	color: white;
	cursor: pointer;
`;
