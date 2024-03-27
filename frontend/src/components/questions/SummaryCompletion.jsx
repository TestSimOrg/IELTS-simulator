import React from "react";
import { Grid, Typography } from "@mui/material";
import { Question } from "./commons/Question";
import { QuestionInput } from "./commons/QuestionInput";

export const SummaryCompletion = ({ q }) => {
    return (
        <Question questionHeader={q.questionHeader} questionStatment="">
            <Grid container spacing={2}>
                {q.numStatements.map((numStatement, index) => (
                    <Grid item xs={12} key={index}>
                        <Typography variant="body1">{numStatement}</Typography>
                        <QuestionInput
                            numOfWords={q.numOfWords}
                            numOfNum={q.numOfNum}
                        />
                    </Grid>
                ))}
            </Grid>
        </Question>
    );
};
