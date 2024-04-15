// Listening schema explainations:

// 1. Matching :
//    1. Type 1 example:

//         <img src="../public/listening/matchingType1.png" alt="matching type 1 img" style="width:400px;"/>

//         for this the json will be :
// const q = {
//     startQuestionNum: 21,
//     endQuestionNum: 25,
//     questionHeader:
//         "Write the correct letter, A, B or C next to question 21-25.\nYou may choose any letter more than once.",
//     questionOptionRepeatable: true,
//     questionStatment:
//         "What does Jack tell his tutor about each of the following course option?",
//     QuestionOption: [
//         "A He'll definitely do it.",
//         "B He may or may not do it.",
//         "C He won't do it.",
//     ],
//     numStatements: [
//         "21 Media Studies _BLANK_",
//         "22 Women and Power _BLANK_",
//         "23 Culture and Society _BLANK_",
//         "24 Identify and Popular Culture _BLANK_",
//         "25 Introduction to Culture Theory _BLANK_",
//     ],
// };

// question/Maching.jsx
import React from "react";
import { Grid, Text } from "@mantine/core";
import { Question } from "./commons/Question";
import { QuestionRadio } from "./commons/QuestionRadio";

export const Matching = ({ q }) => {
    return (
        <Question
            questionTitle={q.questionHeader}
            questionHeader={q.questionStatment}
        >
        <Grid gutter="lg">
                {q.numStatements.map((numStatement, index) => (
                    <Grid.Col span={{ xs: 12, md: 6 }} key={index} pr="xl">
                        <Text size="sm">{numStatement.replace("_BLANK_", "_______")}</Text>
                        <QuestionRadio QuestionOption={q.questionOptions} />
                    </Grid.Col >
                ))}
            </Grid>
        </Question>
    );
};