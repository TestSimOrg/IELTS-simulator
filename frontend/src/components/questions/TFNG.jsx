import React, { useEffect, useState } from 'react';
import { Container } from "@mui/material";
import { QuestionHeader } from './commons/QuestionHeader';
import { NumStatement } from './commons/NumStatement';
import { RadioButtons } from './commons/RadioButtons';

const options = ["TRUE", "FALSE", "NOT GIVEN"];

export const TFNG = ({ q }) => {
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
      console.log(newAnsArr)
      return newAnsArr;
    });
  };

  return (
    <Container className='TFNG'>
      <QuestionHeader header={q.questionHeader} />
      {q.numStatements.map((statement, idx) => {
        const questionNum = q.startQuestionNum + idx;
        return (
          <div key={idx}>
            <NumStatement statement={statement} />
            <RadioButtons
              options={options}
              value={ansArr[idx]?.ans || ""}
              onChange={(newValue) => handleRadioChange(questionNum, newValue)}
            />
          </div>
        );
      })}
    </Container>
  );
};
