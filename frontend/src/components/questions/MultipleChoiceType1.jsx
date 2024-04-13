// Multiple Choice question:

// There are two types of multiple question:

//     type 1 (single answer)

// Type 1 eg:
// mcq img

// for this json will be:

// import mcq from '_path_'

// const q = new mcq({
//     startQuestionNum: 15,
//     endQuestionNum: 17,
//     standAlone: true,
//     numOfWords: 1,
//     qType: 1
//     questionHeader: ['Choose the correct letter, A, B or C.'],
//     numStatements:[
//         '15 How does BC Travel plan to expand the painting holidays?',
//         '16 Why are BC Travel's cooking holidays unusual?',
//         '17 What does the speaker say about the photography holidays?'
//     ],
//     questionStatements: [
//         [
//             'A by adding to the number of locations',
//             'B by increasing the range of levels',
//             'C by employing more teachers'
//         ],
//         [
//             'A They only use organic foods',
//             'B They have an international focus',
//             'C They mainly involve vegetarian dishes'
//         ],
//         [
//             'A Clients receive individual tution.',
//             'B The tutors are also trained guides.',
//             'C Advice is given on selling photographs.'
//         ],
//     ]
// });

// question/MultipleChoiceType1.jsx
import React from "react";
import { Grid, Text } from "@mantine/core";
import { Question } from "./commons/Question";
import { QuestionRadio } from "./commons/QuestionRadio";

export const MultipleChoiceType1 = ({ q }) => {
    // If there's more than one header, we'll display the corresponding header for each question
    // Or if all the headers are the same
    const oneHeader = (q.questionHeader.length === 1) || (q.questionHeader.every((val, i, arr) => val === arr[0]));
    return (
        <Question questionStatment="" questionHeader={oneHeader ? q.questionHeader[0] : null}>
            <Grid gutter="lg">
                {q.numStatements.map((numStatement, index) => (
                    <Grid.Col span={{ xs: 12, md: 6 }} key={index} pr="xl">
                        <Text>{!oneHeader ? q.questionHeader[index] : null}</Text>
                        <Text>{numStatement}</Text>
                        <QuestionRadio
                            QuestionOption={q.questionStatements[index]}
                        />
                    </Grid.Col>
                ))}
            </Grid>
        </Question>
    );
};
