import { useEffect, useRef } from "react";
import { linkToWhatsapp } from "../../../utils/global.utils";
import * as Style from "./popUpContact.styles";

const PopUpContact = () => {
	const text = "צרו איתנו קשר בוואצפ";
	const divEl = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (divEl.current?.style) {
			divEl.current.style.transform = `translateX(-500px)`;
			divEl.current.style.transition = `1s`;
		}
	}, []);

	return (
		<Style.Container ref={divEl} onClick={linkToWhatsapp}>
			<Style.ContainerBackground></Style.ContainerBackground>

			<Style.Paragraph>{text}</Style.Paragraph>
			<Style.WhatsappIcon></Style.WhatsappIcon>
		</Style.Container>
	);
};

export default PopUpContact;
