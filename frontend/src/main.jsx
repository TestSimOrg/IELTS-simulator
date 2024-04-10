import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { MantineProvider } from '@mantine/core';
import HeaderMegaMenu from "./components/Header.jsx" // reference: https://ui.mantine.dev/component/header-mega-menu/
import Footer from "./components/Footer.jsx";

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <MantineProvider>
            < HeaderMegaMenu />
		        <App />
            < Footer />
        </MantineProvider>
	</Router>
);
