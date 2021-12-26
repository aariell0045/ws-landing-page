import { HomePage_Contet_UI_Text } from "../../../constants/HomePage/content.constants";
import { downloadWSWindows } from "../../../utils/HomePage/content.utils";
import * as Style from "./content.styles";

const Content = () => {
	const { whatWeGiveYouTitle, whyWhatsappTitle, automationWhatsapp, whatsappNeed, whatWhatsappGiveYou, whyWhatsapp } =
		HomePage_Contet_UI_Text;

	const text = (text: string) => {
		return <Style.ListItem>{text}</Style.ListItem>;
	};
	return (
		<Style.Container>
			<Style.SectionContainer>
				<Style.TitleContainer>
					<Style.Title>{automationWhatsapp}</Style.Title>
				</Style.TitleContainer>
				<Style.UnorderList>
					<Style.Paragraph>{whatsappNeed}</Style.Paragraph>
				</Style.UnorderList>
			</Style.SectionContainer>
			<Style.SectionContainer>
				<Style.TitleContainer>
					<Style.Title>{whatWeGiveYouTitle}</Style.Title>
				</Style.TitleContainer>
				<Style.UnorderList>{whatWhatsappGiveYou.map(text)}</Style.UnorderList>
			</Style.SectionContainer>
			<Style.SectionContainer>
				<Style.TitleContainer>
					<Style.Title>{whyWhatsappTitle}</Style.Title>
				</Style.TitleContainer>
				<Style.UnorderList> {whyWhatsapp.map(text)}</Style.UnorderList>
			</Style.SectionContainer>
			<Style.ButtonWrapper>
				<Style.DonwloadButton onClick={downloadWSWindows}>Download WS Windows</Style.DonwloadButton>
			</Style.ButtonWrapper>
		</Style.Container>
	);
};

export default Content;
