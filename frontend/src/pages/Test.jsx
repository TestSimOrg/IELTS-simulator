// just display a MatchingType1 question.
//
// Path: frontend/src/pages/Test.jsx

import React from "react";
import { Container, Typography } from "@mui/material";
import { MatchingType1 } from "../components/questions/specifics/MatchingType1";

export default function Test() {
    const q = {
            startQuestionNum: 21,
            endQuestionNum: 25,
            questionHeader:
                "Write the correct letter, A, B or C next to question 21-25.\nYou may choose any letter more than once.",
            questionOptionRepeatable: true,
            questionStatment:
                "What does Jack tell his tutor about each of the following course option?",
            questionOptions: [
                "A He'll definitely do it.",
                "B He may or may not do it.",
                "C He won't do it.",
            ],
            numStatements: [
                "21 Media Studies _BLANK_",
                "22 Women and Power _BLANK_",
                "23 Culture and Society _BLANK_",
                "24 Identify and Popular Culture _BLANK_",
                "25 Introduction to Culture Theory _BLANK_",
            ],
        };
    
    return (
        <Container>
            <Typography variant="h4">Test</Typography>
            <MatchingType1 q={q} />
        </Container>
    );
}
