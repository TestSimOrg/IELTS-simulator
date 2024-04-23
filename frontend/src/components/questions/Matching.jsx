import React, { useEffect, useState } from "react";
import { Container, Grid, Text } from "@mantine/core";
import { QuestionHeader } from "./commons/QuestionHeader";
import { QuestionStatement } from "./commons/QuestionStatement";
import { RadioButtons } from "./commons/RadioButtons";

export const Matching = ({ q }) => {
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
			newAnsArr[questionNum].ans = newValue;
			return newAnsArr;
		});
	};

	return (
		<Container size={"xl"} pt={"md"}>
            <Text fw={"bold"}>
				Questions {q.startQuestionNum} - {q.endQuestionNum}
			</Text> 
			<QuestionHeader header={q.questionHeader} />
			<QuestionStatement qStatement={q.questionStatement} />
			<Grid gutter="lg">
				{q.numStatements.map((numStatement, index) => (
					<Grid.Col span={{ xs: 12, md: 6 }} key={index} pl={20}>
						<Text size="sm">
							{numStatement.replace("_BLANK_", "_______")}
						</Text>
						<RadioButtons
							options={q.questionOptions}
							value={ansArr[index]?.ans || ""}
							onChange={(newValue) =>
								handleRadioChange(
									index,
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
