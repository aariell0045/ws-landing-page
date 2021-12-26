import { linkToWhatsapp } from "../../../utils/global.utils";
import * as Style from "./popUpContact.styles";

const PopUpContact = () => {
	const text = "צרו איתנו קשר בוואצפ";
	return (
		<Style.Container onClick={linkToWhatsapp}>
			<Style.ContainerBackground></Style.ContainerBackground>
			<Style.Paragraph>{text}</Style.Paragraph>
			<Style.WhatsappIcon></Style.WhatsappIcon>
		</Style.Container>
	);
};

export default PopUpContact;
