import React from "react";
import { Text, Grid, Container } from "@mantine/core";
import { QuestionInput } from "./commons/QuestionInput";
import { QuestionHeader } from "./commons/QuestionHeader";
import { QuestionTitle } from "./commons/QuestionTitle";


export const NoteCompletion = ({ q }) => {
    return (
        <Container size={"xl"}>
        <QuestionHeader header={q.questionHeader} />
        <QuestionTitle title={q.questionTitle} />
            <Grid>
                {q.questionStatements.map((statement, statementIndex) => (
                    <React.Fragment key={statementIndex}>
                        <Grid.Col span={4} key={"statement" + statementIndex}>
                            <b style={{ paddingLeft: "20%"}}>{statement.split(":")[0]}&#8205;:</b>
                        </Grid.Col>
                        <Grid.Col span={8} align="left">
                                {statement.split(":")[1].split("_BLANK_").map((part, partIndex) => (
                                    <React.Fragment key={partIndex}>
                                        <Text key={"part" + partIndex} style={{ display: "inline" }}>{part}</Text>
                                        {partIndex !== statement.split("_BLANK_").length - 1 && (
                                            <QuestionInput
                                                numOfWords={q.numOfWords}
                                                numOfNum={q.numOfNum}
                                                key={partIndex}
                                            />
                                        )}
                                    </React.Fragment>
                                ))}
                        </Grid.Col>
                    </React.Fragment>
                ))} 
            </Grid>
        </Container>
    );
};
