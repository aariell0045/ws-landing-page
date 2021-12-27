import styled from "styled-components";
import { FONT_SIZES_WEB, FONT_SIZES_MOBILE } from "../../../styles/fonts.styles";

export const Container = styled.div`
	width: 100%;
`;

export const TitleContainer = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
	position: relative;
`;

export const TitleLogo = styled.img`
	width: 100%;
`;

export const TitleScreenLogo = styled.img`
	position: absolute;
	width: 15%;
	height: 60%;
	left: 450px;
	top: 60px;
`;

export const ParagraphContainer = styled.div`
	width: 100%;
`;

export const ParagraphTitle = styled.h1`
	text-align: center;
	font-size: ${FONT_SIZES_WEB.HEADER};
	::after {
		content: "? ";
	}
	@media (max-width: 400px) and (max-height: 900px) {
		font-size: ${FONT_SIZES_MOBILE.HEADER};
	}

	/* font-size: 70px; */
`;
export const Paragraph = styled.p`
	text-align: center;
	::after {
		content: ".";
	}
	font-size: ${FONT_SIZES_WEB.PARAGRAPH};

	font-size: 35px;
	@media (max-width: 400px) and (max-height: 900px) {
		font-size: ${FONT_SIZES_MOBILE.PARAGRAPH};
	}
`;

export const Video = styled.video`
	border-radius: 10px;
	@media (max-width: 400px) and (max-height: 900px) {
		width: 100vw;
		height: 250px;
		border-radius: 0px;
	}
`;

export const VideoContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	height: 800px;
	@media (max-width: 400px) and (max-height: 900px) {
		height: 270px;
	}
`;
