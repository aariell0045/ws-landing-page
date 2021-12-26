import { WS_CONTACT_URL } from "../../../constants/global.constants";
import * as Style from "./popUpContact.styles";

const PopUpContact = () => {
	const text = "צרו איתנו קשר בוואצפ";
	return (
		<Style.Container
			onClick={() => {
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					window.open(WS_CONTACT_URL);

					return true;
				} else window.open(WS_CONTACT_URL);
			}}
		>
			<Style.ContainerBackground></Style.ContainerBackground>
			<Style.Paragraph>{text}</Style.Paragraph>
			<Style.WhatsappIcon></Style.WhatsappIcon>
		</Style.Container>
	);
};

export default PopUpContact;
