import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { GlobalStyle } from "./styles/global.styles";
function App() {
	return (
		<>
			<GlobalStyle />
			{/* <Navbar /> */}
			<HomePage />
		</>
	);
}

export default App;
