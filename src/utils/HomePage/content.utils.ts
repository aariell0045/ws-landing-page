import { WS_WINDOWS_DOWNLOAD_URL } from "../../constants/global.constants";

export const downloadWSWindows = () => {
	const link = document.createElement("a");
	link.href = WS_WINDOWS_DOWNLOAD_URL;
	link.click();
};
