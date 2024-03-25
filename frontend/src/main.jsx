import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
		<Header />
		<App />
		<Footer />
	</Router>
);
