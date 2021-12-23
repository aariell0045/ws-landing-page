import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
`;

export const TitleContainer = styled.header`
	width: 100%;
	height: auto;
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
	::after {
		content: "? ";
	}

	font-size: 70px;
`;
export const Paragraph = styled.p`
	text-align: center;
	::after {
		content: ".";
	}

	font-size: 35px;
`;

export const Video = styled.video`
	border-radius: 10px;
`;

export const VideoContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	height: 800px;
`;
