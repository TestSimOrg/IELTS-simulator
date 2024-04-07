import { useState } from "react";
import '@mantine/charts/styles.css';
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/nprogress/styles.css';
import "./styles/App.css";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Test from "./pages/Test";
import SignIn from "./pages/SignUp"

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import HeaderMegaMenu from "./components/newHeader";

function App() {
    return (
    
        <HelmetProvider>
            <div id="content">
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="test" element={<Test />} />
                        <Route path="*" element={<PageNotFound />} />
                        <Route path='signIn' element={<SignIn />} />
                    </Route>
                </Routes >
            </div>
        </HelmetProvider>
    );
}

export default App;
