// just display a MatchingType1 question.
//
// Path: frontend/src/pages/Test.jsx

import React from "react";
import { Container, Typography } from "@mui/material";
import { Matching } from "../components/questions/Matching";
import { SentenceCompletion } from "../components/questions/SentenceCompletion";
import { MultipleChoiceType1 } from "../components/questions/MultipleChoiceType1";
import { MultipleChoiceType2 } from "../components/questions/MultipleChoiceType2";
import { NoteCompletion } from "../components/questions/NoteCompletion";
import { DiagramCompletion } from "../components/questions/DiagramCompletion";
import { Flowchart } from "../components/questions/Flowchart";
import imgBase64 from "../assets/imgExample";

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
            "9 Samuel's aunt plans to travel to his apartment on _BLANK_. test _BLANK_ test2",
            "10 The journey time is approximately _BLANK_. test",
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
        questionHeader: ["Choose TWO letter, A-E", "Choose THREE letter, A-E"],
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
            data: imgBase64,
            contentType: "image/png",
        },
        questionOptions: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
        numStatements: [
            "14 New traffic lights _BLANK_",
            "15 Pedestrian crossing _BLANK_",
            "16 Parking allowed _BLANK_",
            "17 New 'No Parking' sign _BLANK_",
            "18 New disabled parking spaces _BLANK_",
            "19 Widened pavement _BLANK_",
            "20 Lorry loading/unloading restrictions _BLANK_"
        ],
    };

    const qNoteCompletion = {
        startQuestionNum: 11,
        endQuestionNum: 16,
        standAlone: true,
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
    };

    const qFlowChart = {
        "startQuestionNum": 31,
        "endQuestionNum": 34,
        "standAlone": true,
        "options": false,
        "numOfWords": 2,
        "numOfNum": 2,
        "questionHeader": "You will hear an extract from a university lecture on the topic of economics.\nFirst, look at questions 31 to 34. Now listen carefully and answer questions 31-34.\nQuestions 31-34. Do not write MORE THAN TWO WORDS AND/OR NUMBERS. Complete the chart below.",
        "steps": [
            [
                "Effects of 2020 Pandemic"
            ],
            [
                "31 _BLANK_ changed",
                "33 _BLANK_ went up by 2.4%",
                "Protein went up by 34 _BLANK_",
            ],
            [
                " Demand for 32 _BLANK_ in stores increased"
            ],
            [
                " Demand for 32 _BLANK_ in stores increased"
            ],
            [
                "Prices increased by more than 2%",
            ],
            [
                "33 _BLANK_ went up by 2.4%",
                "Protein went up by 34 _BLANK_",
                "Protein went up by 34 _BLANK_",
                "33 _BLANK_ went up by 2.4%",
                "Protein went up by 34 _BLANK_",
            ],
            [
                "Prices increased by more than 2%",
            ],
            [
                "Prices increased by more than 2%",
            ]
        ],
        "answer": [
            {
                "number": 31,
                "ansType": "S",
                "ans": "consumer habits"
            },
            {
                "number": 32,
                "ansType": "M",
                "ans": ["products", "food"]
            },
            {
                "number": 33,
                "ansType": "S",
                "ans": "cereals"
            },
            {
                "number": 34,
                "ansType": "S",
                "ans": "4.3%"
            }
        ]
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
            <Container>
                <Typography variant="h4">Note Completion</Typography>
                <NoteCompletion q={qNoteCompletion} />
            </Container>
            <Container>
                <Typography variant="h4">Flowchart</Typography>
                <Flowchart q={qFlowChart} />
            </Container>
        </div>
    );
}
