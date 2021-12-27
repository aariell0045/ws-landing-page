import logo from "../../../assets/we-send-logo.svg";
import mobileLogo from "../../../assets/mobile-logo.png";
import video from "../../../assets/WhatsApp Video 2021-07-26 at 6.15.58 PM.mp4";
import { HomePage_Header_UI_Text } from "../../../constants/HomePage/header.constants";
import * as Style from "./header.styles";
import { isMobile } from "../../../utils/global.utils";

const Header = () => {
	const { improveYourBussines, improveYourBussinesAnswer } = HomePage_Header_UI_Text;

	return (
		<Style.Container>
			<Style.TitleContainer>
				<Style.TitleLogo src={isMobile() ? mobileLogo : logo} />
			</Style.TitleContainer>
			<Style.ParagraphContainer>
				<Style.ParagraphTitle>{improveYourBussines}</Style.ParagraphTitle>
				<Style.Paragraph>{improveYourBussinesAnswer}</Style.Paragraph>
				<Style.VideoContainer>
					<Style.Video id="download-for-windows" controls loop>
						<source src={video} type="video/mp4" />
					</Style.Video>
				</Style.VideoContainer>
			</Style.ParagraphContainer>
		</Style.Container>
	);
};

export default Header;
