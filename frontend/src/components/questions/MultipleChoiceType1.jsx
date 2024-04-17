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
import React,{useState, useEffect} from "react";
import { Container, Grid, Text } from "@mantine/core";
import { QuestionHeader } from "./commons/QuestionHeader";
import { RadioButtons } from "./commons/RadioButtons";
import { Question } from "./commons/Question";
import { QuestionRadio } from "./commons/QuestionRadio";

export const MultipleChoiceType1 = ({ q }) => {

    const [ansArr, setAnsArr] = useState([]);

    useEffect(() => {
      let arr = [];
      for (let i = q.startQuestionNum; i <= q.endQuestionNum; i++) {
        arr.push({
          number: i,
          ans: ""
        });
      }
      setAnsArr(arr);
    }, []);
  
    const handleRadioChange = (questionNum, newValue) => {
      setAnsArr(prevAnsArr => {
        const newAnsArr = [...prevAnsArr];
        newAnsArr[questionNum - q.startQuestionNum].ans = newValue;
        return newAnsArr;
      });
    };

    return (
        <Container size={"xl"}>
            <QuestionHeader header={q.questionHeader[0]} />
                <Grid gutter="lg">
                    {q.numStatements.map((numStatement, index) => (
                        <Grid.Col span={{ xs: 12, md: 6 }} key={index} pl={20}>
                            <Text>{numStatement}</Text>
                            <RadioButtons
                                options={q.questionStatements[index]}
                                value={ansArr[index]?.ans || ""}
                                onChange={(newValue) => handleRadioChange(index + q.startQuestionNum, newValue)}
                            />
                        </Grid.Col>
                    ))}
                </Grid>
    </ Container>
    );
};
