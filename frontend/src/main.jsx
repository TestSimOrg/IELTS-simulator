import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./styles/index.css";
import Header from "./components/Header.jsx";
import HeaderMegaMenu from "./components/newHeader.jsx" // need to implement this https://ui.mantine.dev/component/header-mega-menu/
import Footer from "./components/Footer.jsx";

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router>
		<Header />
		<App />
		<Footer />
	</Router>,
    document.getElementById("root")
);
