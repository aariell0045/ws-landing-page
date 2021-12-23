import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
function App() {
	return (
		<>
			<Navbar />
			<HomePage />
		</>
	);
}

export default App;
