import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Test from "./pages/Test";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

function App() {
    return (<div id="content">
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="test" element={<Test />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    </div>
    );
}

export default App;
