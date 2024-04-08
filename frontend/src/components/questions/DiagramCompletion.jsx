// Diagram Completion:

// In this type of question there will be an image with options given. You have to listening and label the appropriate question statement with a label from option.
// labelling img

// for this json will be:


//  import planMapDiagramLabellingQuestion from '_path_';

//  const q = new planMapDiagramLabellingQuestion({
//      startQuestionNum: 14,
//      endQuestionNum: 20,
//      standAlone: true,
//      options: true,
//      questionHeader: 'Label the map below.\nWrite the correct letter, A-I, next to Questions 14-20',
//      questionTitle: 'Proposed traffic changes in Granford',
//      image: {
//          data: buffer,
//          contentType: 'image/png'
//      },
//      questionOptions: [
//          'A',
//          'B',
//          'C',
//          'D',
//          'E',
//          'F',
//          'G',
//          'H',
//          'I'
//      ],
//      numStatements: [
//          '14 New traffic lights _BLANK_',
//          '15 Pedestrain crossing _BLANK_',
//          '16 Parking allowed _BLANK_'
//          '17 New 'No Parking' sign _BLANK_'
//          '18 New disabled parking spaces _BLANK_',
//          '19 Widened pavement _BLANK_',
//          '20 Lorry loading/unloading restrictions _BLANK_'
//      ]
//  });

//  question/DiagramCompletion.jsx
import React from "react";
import { Grid, Text } from "@mantine/core";
import { Question } from "./commons/Question";
import { QuestionRadio } from "./commons/QuestionRadio";
import { QuestionImage } from "./commons/QuestionImage";

export const DiagramCompletion = ({ q }) => {
    return (
        <Question questionHeader={q.questionHeader} questionStatment="">
            <QuestionImage image={q.image} />
            <Grid gutter="lg">
                {q.numStatements.map((numStatement, index) => (
                    <Grid.Col span={{ xs: 12, md: 6, lg: 4}}
                    key={index}>
                        <Text size="sm">{numStatement.replace("_BLANK_", "_______")}</Text>
                        <QuestionRadio QuestionOption={q.questionOptions} />
                    </Grid.Col>
                ))}
            </Grid>
        </Question>
    );
}
