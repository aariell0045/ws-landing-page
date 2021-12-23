import { Link } from "react-router-dom";
import { removeRoutesWhiteSpaces } from "../../utils/global.utils";
import { links, ROUTES } from "../../constants/HomePage/Navbar/navbar.constants";
import * as Style from "./navbar.styles";

const Navbar = () => {
	const maplinks = (labelName: string) => {
		const segmentName = removeRoutesWhiteSpaces(labelName);
		const path = labelName !== "Home" ? `${ROUTES.BACK_SLASH}${segmentName}` : `${ROUTES.BACK_SLASH}`;
		return (
			<Link to={path}>
				<Style.Content key={labelName}>{labelName}</Style.Content>
			</Link>
		);
	};

	return (
		<Style.Nav>
			<Style.NavBackGround></Style.NavBackGround>
			<Style.NavColumn>{links.map(maplinks)}</Style.NavColumn>
		</Style.Nav>
	);
};

export default Navbar;
