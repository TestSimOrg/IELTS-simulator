import { Container, Grid, Text, TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { QuestionHeader } from "./commons/QuestionHeader";
import { QuestionTitle } from "./commons/QuestionTitle";
import { TextInputValidator } from "../../utils/TextInputValidator";

export const FormCompletion = ({ q }) => {
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
			console.log(questionNum);
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
			<Grid>
				{Object.keys(q.questionStatements).map(
					(key, statementIndex) => (
						<React.Fragment key={key}>
							<Grid.Col span={4}>
								<b style={{ paddingLeft: "20%" }}>
									{key}&#8205;:
								</b>
							</Grid.Col>
							<Grid.Col span={8} align="left">
								{q.questionStatements[key].map((str, idx) => {
									if (str.includes("_BLANK_")) {
										let newStr = str.split("_BLANK_");
										return (
											<React.Fragment
												key={`${statementIndex}-${idx}`}
											>
												{newStr[0] + " "}&#8205;
												<TextInput
													placeholder={"Q " + qNum++}
													onChange={(e) => {
														TextInputValidator(
															e,
															q.numOfWords,
															q.numOfNum
														);
														handleInputChange(
															Number(
																e.target.placeholder.slice(
																	1
																)
															) -
																q.startQuestionNum,
															e.target.value
														);
													}}
													style={{
														display: "inline-block",
														width: "auto",
													}}
													size="xs"
												/>
												{newStr[1] + " "}
												<br />
											</React.Fragment>
										);
									} else {
										return (
											<React.Fragment
												key={`${statementIndex}-${idx}`}
											>
												<span>{str}&#8205; </span>
												<br />
											</React.Fragment>
										);
									}
								})}
							</Grid.Col>
						</React.Fragment>
					)
				)}
			</Grid>
		</Container>
	);
};
