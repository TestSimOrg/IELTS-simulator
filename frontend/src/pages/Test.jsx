// just display a MatchingType1 question.
//
// Path: frontend/src/pages/Test.jsx

import React from "react";
import { Container, Typography } from "@mui/material";
import { Matching } from "../components/questions/Matching";
import { SentenceCompletion } from "../components/questions/SentenceCompletion";
import { MultipleChoiceType1 } from "../components/questions/MultipleChoiceType1";
import { MultipleChoiceType2 } from "../components/questions/MultipleChoiceType2";
import { DiagramCompletion } from "../components/questions/DiagramCompletion";

export default function Test() {
    var qMatching = {
        startQuestionNum: 21,
        endQuestionNum: 25,
        standAlone: true,
        numOfWords: 1,
        numOfNum: 0,
        questionHeader:
            "Write the correct letter, A, B or C next to question 21-25.\nYou may choose any letter more than once.",
        questionOptionRepeatable: true,
        questionStatment:
            "What does Jack tell his tutor about each of the following course option?",
        questionOptions: [
            "A He'll definitely do it.",
            "B He may or may not do it.",
            "C He won't do it.",
        ],
        numStatements: [
            "21 Media Studies _BLANK_",
            "22 Women and Power _BLANK_",
            "23 Culture and Society _BLANK_",
            "24 Identify and Popular Culture _BLANK_",
            "25 Introduction to Culture Theory _BLANK_",
        ],
    };

    var qSentenceCompletion = {
        startQuestionNum: 9,
        endQuestionNum: 10,
        standAlone: true,
        numOfWords: 3,
        numOfNum: 0,
        questionHeader:
            "Write NO MORE THAN THREE WORDS to complete each space.",
        questionTitle: "",
        numStatements: [
            "9 Samuel's aunt plans to travel to his apartment on _BLANK_.",
            "10 The journey time is approximately _BLANK_.",
        ],
    };

    var qMultipleChoiceType1 = {
        startQuestionNum: 15,
        endQuestionNum: 17,
        standAlone: true,
        numOfWords: 1,
        qType: 1,
        questionHeader: ["Choose the correct letter, A, B or C."],
        numStatements: [
            "15 How does BC Travel plan to expand the painting holidays?",
            "16 Why are BC Travel's cooking holidays unusual?",
            "17 What does the speaker say about the photography holidays?",
        ],
        questionStatements: [
            [
                "A by adding to the number of locations",
                "B by increasing the range of levels",
                "C by employing more teachers",
            ],
            [
                "A They only use organic foods",
                "B They have an international focus",
                "C They mainly involve vegetarian dishes",
            ],
            [
                "A Clients receive individual tution.",
                "B The tutors are also trained guides.",
                "C Advice is given on selling photographs.",
            ],
        ],
    };

    var qMultipleChoiceType2 = {
        startQuestionNum: 11,
        endQuestionNum: 14,
        standAlone: true,
        numOfWords: 1,
        numOfNum: 0,
        qType: 2,
        questionHeader: ["Choose TWO letter, A-E", "Choose TWO letter, A-E"],
        numStatements: [
            "Which TWO age groups are taking increasing numbers of holiday with BC Travel?",
            "Which TWO are the main reasons given for the popularity of activity holidays?",
        ],
        questionOptions: [
            [
                "A 16-30 years",
                "B 31-42 years",
                "C 43-54 years",
                "D 55-64 years",
                "E over 65 years",
            ],
            [
                "A Clients make new friends.",
                "B Clients learn a useful skill.",
                "C Clients learn about a different culture.",
                "D Clients are excited by the risk involved.",
                "E Clients find them value for money.",
            ],
        ],
    };

    const qDiagramCompletion = {
        startQuestionNum: 14,
        endQuestionNum: 20,
        standAlone: true,
        options: true,
        questionHeader:
            "Label the map below.\nWrite the correct letter, A-I, next to Questions 14-20",
        questionTitle: "Proposed traffic changes in Granford",
        image: {
            data: "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
            contentType: "image/png",
        },
        questionOptions: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
        numStatements: [
            "14 New traffic lights _BLANK_",
            "15 Pedestrain crossing _BLANK_",
            "16 Parking allowed _BLANK_",
            "17 New 'No Parking' sign _BLANK_",
            "18 New disabled parking spaces _BLANK_",
            "19 Widened pavement _BLANK_",
            "20 Lorry loading/unloading restrictions _BLANK_"
        ],
    };

    return (
        <div>
            <Container>
                <Typography variant="h4">Matching</Typography>
                <Matching q={qMatching} />
            </Container>
            <Container>
                <Typography variant="h4">Sentence Completion</Typography>
                <SentenceCompletion q={qSentenceCompletion} />
            </Container>
            <Container>
                <Typography variant="h4">Multiple Choice Type 1</Typography>
                <MultipleChoiceType1 q={qMultipleChoiceType1} />
            </Container>
            <Container>
                <Typography variant="h4">Multiple Choice Type 2</Typography>
                <MultipleChoiceType2 q={qMultipleChoiceType2} />
            </Container>
            <Container>
                <Typography variant="h4">Diagram Completion</Typography>
                <DiagramCompletion q={qDiagramCompletion} />
            </Container>
        </div>
    );
}
