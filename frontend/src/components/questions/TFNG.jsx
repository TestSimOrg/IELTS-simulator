import React, { useState } from 'react';
import { Container } from "@mui/material";
import { QuestionHeader } from './commons/QuestionHeader';
import { NumStatement } from './commons/NumStatement';
import { RadioButtons } from './commons/RadioButtons';

const options = ["TRUE", "FALSE", "NOT GIVEN"];

export const TFNG = ({ q }) => {

  const [values, setValues] = useState(new Array(q.numStatements.length).fill(undefined));

  const handleRadioChange = (idx, newValue) => {
    const newValues = [...values];
    newValues[idx] = newValue;
    setValues(newValues);
  };

  return (
    <Container className='TFNG'>
      <QuestionHeader header={q.questionHeader} />
      {q.numStatements.map((item, idx) => (
        <div key={idx}>
          <NumStatement statement={item} />
          <RadioButtons
            options={options}
            value={values[idx]}
            onChange={(newValue) => handleRadioChange(idx, newValue)}
          />
        </div>
      ))}
    </Container>
  );
};
