// Sentence Completion:

// example 1:
// sentence completion img

// for this json will be:

// const q = {
//     startQuestionNum: 9,
//     endQuestionNum: 10,
//     numOfWords: 3,
//     numOfNum: 0,
//     questionHeader: 'Write NO MORE THAN THREE WORDS to complete each space.' ,
//     numStatements: [
//         '9 Samuel's aunt plans to travel to his apartment on _BLANK_.',
//         '10 The journey time is approximately _BLANK_.'
//     ]
// }

// question/SentenceCompletion.jsx
import React from "react";
import { Stack, Text } from "@mantine/core";
import { Question } from "./commons/Question";
import { QuestionInput } from "./commons/QuestionInput";

export const SentenceCompletion = ({ q }) => {
    return (
        <Question questionHeader={q.questionHeader} questionStatment="">
            <Stack>
                {q.numStatements.map((numStatement, questionIndex) => (
                    <div key={questionIndex} style={{ display: "flex" }}>
                        {/* foreach blank in the statement, place a typography and a QuestionInput component */}
                        {numStatement
                            .split("_BLANK_")
                            .map((part, partIndex) => (
                                <React.Fragment key={`${questionIndex}_${partIndex}`}>
                                    <Text>{part}</Text>
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
                    </div>
                ))}
            </Stack>
        </Question>
    );
};
