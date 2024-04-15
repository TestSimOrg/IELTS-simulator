import React from "react";
import { Grid, Text } from "@mantine/core";
import { Question } from "./commons/Question";
import { QuestionInput } from "./commons/QuestionInput";

export const SummaryCompletion = ({ q }) => {
    return (
        <Question questionHeader={q.questionHeader} questionStatment="">
            <Grid gutter="lg">
                {q.numStatements.map((numStatement, questionIndex) => (
                    <Grid.Col span={{ xs: 12, md: 6 }} key={questionIndex} pr="xl">
                        {/* foreach blank in the statement, place a typography and a QuestionInput component
                         */}
                        {numStatement
                            .split("_BLANK_")
                            .map((part, partIndex) => (
                                <React.Fragment key={`${questionIndex}_${partIndex}`}>
                                    <Text>{part}&#8205;</Text>
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
                    </Grid.Col>
                ))}
            </Grid>
        </Question>
    );
};
