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
import Test, { qMultipleChoiceType2 } from "./pages/Test";
import SignIn from "./pages/SignUp"

import StandaloneQuestions from "./pages/StandaloneQuestions";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SentenceCompletion } from "./components/questions/SentenceCompletion";
import { TFNG } from "./components/questions/TFNG";
import { YNNG } from "./components/questions/YNNG";
import { MultipleChoiceType1 } from "./components/questions/MultipleChoiceType1";
import { Matching } from "./components/questions/Matching";
import { qSentenceCompletion, qTFNG, qYNNG, qMultipleChoiceType1, qMatching } from "./pages/Test";
import { MultipleChoiceType2 } from "./components/questions/MultipleChoiceType2";


function App() {
    return (
    
        <HelmetProvider>
            <div id="content">
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="test" element={<Test />} />
                        <Route path="questions" element={<StandaloneQuestions />} />
                        <Route path="*" element={<PageNotFound />} />
                        <Route path='signIn' element={<SignIn />} />
                        <Route path='sc' element={<SentenceCompletion q={qSentenceCompletion} />} />
                        <Route path='ynng' element={<YNNG q={qYNNG} />} />
                        <Route path='tfng' element={<TFNG q={qTFNG} />} />
                        <Route path='mcq1' element={<MultipleChoiceType1 q={qMultipleChoiceType1} />} />
                        <Route path='mcq2' element={<MultipleChoiceType2 q={qMultipleChoiceType2} /> } />
                        <Route path='matching' element={<Matching q={qMatching} /> } />
                        {/*<Route path='fc' element={<SignIn />} />
                        <Route path='tc' element={<SignIn />} />
                        <Route path='formc' element={<SignIn />} />
                        <Route path='dc' element={<SignIn />} /> */}
                    </Route>
                </Routes >
            </div>
        </HelmetProvider>
    );
}

export default App;
