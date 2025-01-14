import React from "react";
import Content from "./Content";
import Header from "./Header";
import PopUpContact from "./PopUpContact";
import * as Style from "./homePage.style";
const HomePage = () => {
	return (
		<>
			<Style.Container>
				<PopUpContact />
				<Style.Wrapper>
					<Header />
				</Style.Wrapper>
			</Style.Container>
			<Style.Container>
				<Style.Wrapper>
					<Style.Background></Style.Background>
					<Content />
				</Style.Wrapper>
			</Style.Container>
		</>
	);
};

export default HomePage;
