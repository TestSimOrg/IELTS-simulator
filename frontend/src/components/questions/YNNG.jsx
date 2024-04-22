import React, { useEffect, useState } from "react";
import { Container, Text } from "@mantine/core";
import { QuestionHeader } from "./commons/QuestionHeader";
import { NumStatement } from "./commons/NumStatement";
import { RadioButtons } from "./commons/RadioButtons";

const options = ["YES", "NO", "NOT GIVEN"];

export const YNNG = ({ q }) => {
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
			{q.numStatements.map((statement, idx) => {
				return (
					<div key={idx} style={{ paddingLeft: "10px" }}>
						<NumStatement statement={statement} />
						<RadioButtons
							options={options}
							value={ansArr[idx]?.ans || ""}
							onChange={(newValue) =>
								handleRadioChange(idx, newValue)
							}
						/>
					</div>
				);
			})}
		</Container>
	);
};
