import React from "react";
import { Grid, Typography } from "@mui/material";
import { Question } from "./commons/Question";
import { QuestionInput } from "./commons/QuestionInput";

export const SummaryCompletion = ({ q }) => {
    return (
        <Question questionHeader={q.questionHeader} questionStatment="">
            <Grid container spacing={2}>
                {q.numStatements.map((numStatement, questionIndex) => (
                    <Grid item xs={12} key={questionIndex}>
                        {/* foreach blank in the statement, place a typography and a QuestionInput component
                         */}
                        {numStatement
                            .split("_BLANK_")
                            .map((part, partIndex) => (
                                <React.Fragment key={`${questionIndex}_${partIndex}`}>
                                    <Typography variant="body1">
                                        {part}
                                    </Typography>
                                    {/* if the part is not the last part, place a QuestionInput component*/}
                                    {partIndex !==
                                        numStatement.split("_BLANK_").length -
                                            1 && (
                                        <QuestionInput
                                            numOfWords={q.numOfWords}
                                            numOfNum={q.numOfNum}
                                        />
                                    )}
                                </React.Fragment>
                            ))}
                    </Grid>
                ))}
            </Grid>
        </Question>
    );
};
