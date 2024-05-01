import React, { useState, useEffect } from "react";
import { Text, Grid, Container, TextInput } from "@mantine/core";
import { QuestionHeader } from "./commons/QuestionHeader";
import { QuestionTitle } from "./commons/QuestionTitle";
import { TextInputValidator } from "../../utils/TextInputValidator";

export const NoteCompletion = ({ q }) => {
	const [ansArr, setAnsArr] = useState([]);
	let qNum = q.startQuestionNum;

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
			<Grid>
				{q.questionStatements.map((statement, statementIndex) => (
					<React.Fragment key={statementIndex}>
						<Grid.Col span={4} key={"statement" + statementIndex}>
							<b style={{ paddingLeft: "20%" }}>
								{statement.split(":")[0]}&#8205;:
							</b>
						</Grid.Col>
						<Grid.Col span={8} align="left">
							{statement
								.split(":")[1]
								.split("_BLANK_")
								.map((part, partIndex) => (
									<React.Fragment key={partIndex}>
										<Text
											key={"part" + partIndex}
											style={{ display: "inline" }}
										>
											{part}
										</Text>
										{partIndex !==
											statement.split("_BLANK_").length -
												1 && (
											<TextInput
												key={partIndex}
												placeholder={"Q " + qNum++}
												onChange={(e) => {
													TextInputValidator(
														e,
														q.numOfWords,
														q.numOfNum
													);
													handleInputChange(
														partIndex,
														e.target.value
													);
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
						</Grid.Col>
					</React.Fragment>
				))}
			</Grid>
		</Container>
	);
};
