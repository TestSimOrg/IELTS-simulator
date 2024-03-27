// Multiple Choice question:

// There are two types of multiple question:

//     type 1 (single answer)
//     type 2 (multiple answer)

// Type 2 eg:
// mcq img

// for this json will be:

// import mcq from '_path_'

// const q = new mcq({
//     startQuestionNum: 11,
//     endQuestionNum: 14,
//     standAlone: true,
//     numOfWords: 1,
//     numOfNum: 0,
//     qType: 2
//     questionHeader: ['Choose TWO letter, A-E','Choose TWO letter, A-E'],
//     numStatements:['Which TWO age groups are taking increasing numbers of holiday with BC Travel?','Which TWO are the main reasons given for the popularity of activity holidays?'],
//     QuestionOption: [
//         [
//             'A 16-30 years',
//             'B 31-42 years',
//             'C 43-54 years',
//             'D 55-64 years',
//             'E over 65 years'
//         ],
//         [
//             'A Clients make new friends.',
//             'B Clients learn a useful skill.',
//             'C Clients learn about a different culture.',
//             'D Clients are excited by the risk involved.',
//             'E Clients find them value for money.'
//         ]
//     ]
// });

// question/MultipleChoiceType2.jsx
import React from "react";
import { Grid, Typography } from "@mui/material";
import { Question } from "./commons/Question";
import { QuestionCheckbox } from "./commons/QuestionCheckbox";

export const MultipleChoiceType2 = ({ q }) => {
    return (
        <Question questionHeader={q.questionHeader} questionStatment="">
            <Grid container spacing={2}>
                {q.numStatements.map((numStatement, index) => (
                    <Grid item xs={12} key={index}>
                        <Typography variant="body1">{numStatement}</Typography>
                        <QuestionCheckbox QuestionOption={q.questionOptions[index]} />
                    </Grid>
                ))}
            </Grid>
        </Question>
    );
};
