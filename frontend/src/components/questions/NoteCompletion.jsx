const q = new noteCompletionQuestion({
    startQuestionNum: 11,
    endQuestionNum: 16,
    standAlone: true
    numOfWords: 3,
    numOfNum: 1,
    questionHeader: 'Complete the notes below.\nWrite NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.',
    questionTitle: 'The National Arts Centre',
    questionStatements: 
    [
        'Well known for:\t11 _BLANK_.',
        'Complex consists of:\tconcert rooms\ntheatres\ncinemas\nart galleries\npublic library\nrestaurants\n12 _BLANK_',
        'Historical background:\t1940 area dostoyed by bombs\n19605 — Centre was 13 _BLANK_\nIn 14 _BLANK_ opened to public',
        'Managed by:\t15 _BLANK_',
        'Open:\t16 _BLANK_ days per year'
    ],
});


// question/NoteCompletion.jsx
import React from "react";
import { Grid, Typography } from "@mui/material";
import { Question } from "./commons/Question";
import { QuestionInput } from "./commons/QuestionInput";

export const NoteCompletion = ({ q }) => {
    return (
        <Question questionHeader={q.questionHeader} questionStatment="" questionTitle={q.questionTitle}>
            <Grid container spacing={2}>
                {q.numStatements.map((numStatement, index) => (
                    <Grid item xs={12} key={index}>
                        <Typography variant="body1">{numStatement}</Typography>
                        <QuestionInput
                            numOfWords={q.numOfWords}
                            numOfNum={q.numOfNum}
							limitIsAnd={true}
                        />
                    </Grid>
                ))}
            </Grid>
        </Question>
    );
};
