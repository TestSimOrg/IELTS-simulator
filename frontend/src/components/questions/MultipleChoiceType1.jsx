import React, { useState, useEffect } from "react";
import { Container, Grid, Text } from "@mantine/core";
import { QuestionHeader } from "./commons/QuestionHeader";
import { RadioButtons } from "./commons/RadioButtons";

export const MultipleChoiceType1 = ({ q }) => {
	const [ansArr, setAnsArr] = useState([]);

	useEffect(() => {
		let arr = [];
		for (let i = q.startQuestionNum; i <= q.endQuestionNum; i++) {
			arr.push({
				number: i,
				ans: "",
			});
		}
		setAnsArr(arr);
	}, []);

	const handleRadioChange = (questionNum, newValue) => {
		setAnsArr((prevAnsArr) => {
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
			<QuestionHeader header={q.questionHeader[0]} />
			<Grid gutter="lg">
				{q.numStatements.map((numStatement, index) => (
					<Grid.Col span={{ xs: 12, md: 6 }} key={index} pl={20}>
						<Text>{numStatement}</Text>
						<RadioButtons
							options={q.questionStatements[index]}
							value={ansArr[index]?.ans || ""}
							onChange={(newValue) =>
								handleRadioChange(
									index + q.startQuestionNum,
									newValue
								)
							}
						/>
					</Grid.Col>
				))}
			</Grid>
		</Container>
	);
};
