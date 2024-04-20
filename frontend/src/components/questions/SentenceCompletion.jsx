import React,{ useEffect, useState} from "react";
import { Container, Stack, Text } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { TextInputValidator } from '../../utils/TextInputValidator.js'
import { QuestionHeader } from "./commons/QuestionHeader";

export const SentenceCompletion = ({ q }) => {

    const questionArr = q.numStatements.map((str, idx) => {
        return str.split('_BLANK_')
    });
    
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

    const handleInputChange = (questionNum, newValue) => {
        setAnsArr(prevAnsArr => {
          const newAnsArr = [...prevAnsArr];
          newAnsArr[questionNum - q.startQuestionNum].ans = newValue;
          return newAnsArr;
        });
    };

    
    return (
        <Container size={"xl"}>
            <Text fw={"bold"}>
				Questions {q.startQuestionNum} - {q.endQuestionNum}
			</Text> 
            <QuestionHeader header={q.questionHeader} />
            <Stack p={"10px"}>
                {questionArr.map((qArr, idx) => (
                    <Text span key={idx} size="md">
                    {qArr[0]}&#8205;
                    <TextInput
                        key={idx}
                        onChange={(e) => {
                                TextInputValidator(e, q.numOfWords, q.numOfNum); 
                                handleInputChange(idx + q.startQuestionNum, e.target.value)
                            }
                        }
                        placeholder={"Q " + (q.startQuestionNum + idx)}
                        style={{
                            display: "inline-block",
                            width: "auto",
                        }}
                        size="xs"
                    />
                    {qArr[1]}
                    </Text>
                ))}
            </Stack>
        </ Container>
    );
};

export default SentenceCompletion;
