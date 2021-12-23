import styled from "styled-components";

export const Nav = styled.nav`
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
`;

export const NavBackGround = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(39, 45, 62, 0.9);
	width: 100%;
	height: 100%;
	z-index: -1;
	box-shadow: inset 1px 1px 10px 1px rgba(29, 25, 52, 0.9);
`;

export const NavColumn = styled.div`
	width: 40%;
	max-width: 400px;
	min-width: 200px;
	height: 100%;
	display: flex;
	justify-content: space-evenly;
`;

export const Content = styled.span`
	line-height: 60px;
	cursor: pointer;
	:hover {
		text-decoration: underline;
	}
`;
