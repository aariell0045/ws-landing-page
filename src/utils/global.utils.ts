import { WS_CONTACT_MOBILE_URL, WS_CONTACT_WEB_URL } from "../constants/global.constants";

export const removeRoutesWhiteSpaces = (str: string): string => str.replace(/ /g, "");
export const isMobile = (): boolean =>
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export const linkToWhatsapp = (): void => {
	if (isMobile()) window.open(WS_CONTACT_MOBILE_URL);
	else window.open(WS_CONTACT_WEB_URL);
};
