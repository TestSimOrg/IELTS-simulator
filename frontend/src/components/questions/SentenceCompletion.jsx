import React, { useEffect, useState } from "react";
import { Container, Stack, Text } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { TextInputValidator } from "../../utils/TextInputValidator.js";
import { QuestionHeader } from "./commons/QuestionHeader";
import { QuestionTitle } from "./commons/QuestionTitle.jsx";

export const SentenceCompletion = ({ q }) => {
	const questionArr = q.numStatements.map((str, idx) => {
		return str.split("_BLANK_");
	});

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

	return (
		<Container size={"xl"} pt={"md"}>
			<Text fw={"bold"}>
				Questions {q.startQuestionNum} - {q.endQuestionNum}
			</Text>
			<QuestionHeader header={q.questionHeader} />
			<QuestionTitle
				title={q.questionTitle !== "" ? q.questionTitle : ""}
			/>
			<Stack p={"10px"}>
				{questionArr.map((qArr, idx) => (
					<Text span key={idx} size="md">
						{qArr[0]}&#8205;
						<TextInput
							key={idx}
							onChange={(e) => {
								TextInputValidator(e, q.numOfWords, q.numOfNum);
								handleInputChange(idx, e.target.value);
							}}
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
		</Container>
	);
};

export default SentenceCompletion;
