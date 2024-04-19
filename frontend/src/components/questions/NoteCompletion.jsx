// const qNoteCompletion = {
//     startQuestionNum: 11,
//     endQuestionNum: 16,
//     standAlone: true,
//     numOfWords: 3,
//     numOfNum: 1,
//     questionHeader:
//         "Complete the notes below.\nWrite NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
//     questionTitle: "The National Arts Centre",
//     questionStatements: [
//         "Well known for:\t11 _BLANK_.",
//         "Complex consists of:\tconcert rooms\ntheatres\ncinemas\nart galleries\npublic library\nrestaurants\n12 _BLANK_",
//         "Historical background:\t1940 area dostoyed by bombs\n19605 — Centre was 13 _BLANK_\nIn 14 _BLANK_ opened to public",
//         "Managed by:\t15 _BLANK_",
//         "Open:\t16 _BLANK_ days per year",
//     ],
// };

// question/NoteCompletion.jsx
import React from "react";
import { Text, Grid, Container } from "@mantine/core";
import { Question } from "./commons/Question";
import { QuestionInput } from "./commons/QuestionInput";
import { QuestionHeader } from "./commons/QuestionHeader";
import { QuestionStatement } from "./commons/QuestionStatement";
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
