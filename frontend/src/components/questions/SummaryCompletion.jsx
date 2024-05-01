import React, { useEffect, useState } from "react";
import { Container, Grid, Text, TextInput } from "@mantine/core";
import { QuestionInput } from "./commons/QuestionInput";
import { QuestionHeader } from "./commons/QuestionHeader";
import { QuestionTitle } from "./commons/QuestionTitle";
import { TextInputValidator } from "../../utils/TextInputValidator";

export const SummaryCompletion = ({ q }) => {
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

	const handleInputChange = (questionNum, newValue) => {
		setAnsArr((prevAnsArr) => {
			const newAnsArr = [...prevAnsArr];
			newAnsArr[questionNum].ans = newValue;
			return newAnsArr;
		});
	};

	let qNum = q.startQuestionNum;

	return (
		<Container size={"xl"} pt={"md"}>
			<Text fw={"bold"}>
				Questions {q.startQuestionNum} - {q.endQuestionNum}
			</Text>
			<QuestionHeader header={q.questionHeader} />
			<QuestionTitle
				title={q.questionTitle !== "" ? q.questionTitle : ""}
			/>
			{q.summary.split("_BLANK_").map((str, index, array) => (
				<React.Fragment key={index}>
					<Text style={{ display: "inline" }}>{str}</Text>
					{index !== array.length - 1 && (
						<TextInput
							placeholder={"Q " + qNum++}
							onChange={(e) => {
								e.persist(); // Preserve the event object for asynchronous use
								TextInputValidator(e, q.numOfWords, q.numOfNum);
								handleInputChange(index, e.target.value);
							}}
							style={{
								display: "inline-block",
								width: "auto",
							}}
							size="xs"
						/>
					)}
				</React.Fragment>
			))}
		</Container>
	);
};
