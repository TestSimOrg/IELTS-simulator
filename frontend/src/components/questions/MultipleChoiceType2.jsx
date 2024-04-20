import React, { useState, useEffect } from "react";
import { Checkbox, Container, Grid, Text } from "@mantine/core";

const convert = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
    5: "F",
    6: "G",
};

export const MultipleChoiceType2 = ({ q }) => {
    const [answersArray, setAnswersArray] = useState(
        q.numStatements.map(() => [])
    );
    const numberOfAnswers = q.questionHeader.map((header) => {
        if (header.includes("TWO")) {
            return 2;
        } else if (header.includes("THREE")) {
            return 3;
        } else {
            return 1;
        }
    });

    const formattedAnswers = [];
    answersArray.forEach((answers, index) => {
        answers.forEach((answer) => {
            formattedAnswers.push({
                number: q.startQuestionNum + index,
                ans: convert[answer],
            });
        });
    });

    const setAnswer = (statementIndex, optionIndex) => {
        // if the answer is already checked, uncheck it
        if (answersArray[statementIndex].includes(convert[optionIndex])) {
            answersArray[statementIndex] = answersArray[statementIndex].filter(
                (AnswerLetter) => AnswerLetter !== convert[optionIndex]
            );
        }
        // if we have reached the maximum number of answers, remove the first answer and add the new one
        else if (
            answersArray[statementIndex].length ===
            numberOfAnswers[statementIndex]
        ) {
            answersArray[statementIndex].shift(); // remove the first element
            answersArray[statementIndex].push(convert[optionIndex]);
        }
        // else add the new answer
        else {
            answersArray[statementIndex].push(convert[optionIndex]);
        }
        setAnswersArray([...answersArray]);
    }

    return (
        <Container size={"xl"}>
            <Text fw={"bold"}>
				Questions {q.startQuestionNum} - {q.endQuestionNum}
			</Text> 
            <Grid gutter="lg">
                {q.numStatements.map((numStatement, index) => (
                    <Grid.Col span={{ xs: 12, md: 6 }} key={index}>
                        <Text fw={"bold"}>{q.questionHeader[index]}</Text>
                        <Text pl={5}>{numStatement}</Text>
                        {q.questionOptions[index].map((
                            option,
                            optionIndex // index = 0, option = "A 16-30 years", optionIndex = 0
                        ) => (
                            <Grid.Col
                                span={{ xs: 12, md: 6 }}
                                key={optionIndex}
                                justify="center"
                                p={"10px 0px 10px 20px"}
                            >
                                <Checkbox
                                    key={optionIndex}
                                    label={option}
                                    color="rgba(0, 255, 8, 1)"
                                    variant="outline"
                                    onChange={() =>
                                        setAnswer(index, optionIndex)
                                    }
                                    checked={answersArray[index].includes(
                                        convert[optionIndex]
                                    )}
                                ></Checkbox>
                            </Grid.Col>
                        ))}
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
};

