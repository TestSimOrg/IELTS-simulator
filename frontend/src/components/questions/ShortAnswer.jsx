import React, { useEffect, useState } from "react";
import { QuestionHeader } from "./commons/QuestionHeader";
import { Text, Container, TextInput } from "@mantine/core";
import { TextInputValidator } from "../../utils/TextInputValidator";

export const ShortAnswer = ({ q }) => {
	let qWithBlanks = true;
	if (!q.numBlanks) {
		qWithBlanks = false;
	}

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

	let show;
	let qNum = q.startQuestionNum;

	if (qWithBlanks) {
		show = q.numStatements.map((question, idx1) => {
			return (
				<div style={{ paddingLeft: "1%", paddingTop: "1%" }} key={idx1}>
					{question}
					<br />
					{q.numBlanks[idx1].map((str, idx2) => {
						if (str.includes("_BLANK_")) {
							let newStr = str.split("_BLANK_");
							return (
								<div
									style={{
										paddingLeft: "1%",
										paddingTop: "1%",
									}}
									key={`${idx1}-${idx2}`}
								>
									{newStr[0]}
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
												) - q.startQuestionNum,
												e.target.value
											);
										}}
										style={{
											display: "inline-block",
											width: "auto",
										}}
										size="xs"
									/>
									<br />
								</div>
							);
						} else {
							return (
								<div
									style={{
										paddingLeft: "1%",
										paddingTop: "1%",
									}}
									key={`${idx1}-${idx2}`}
								>
									{str}
									<br />
								</div>
							);
						}
					})}
				</div>
			);
		});
	}

	return (
		<Container size={"xl"} pt={"md"}>
			<Text fw={"bold"}>
				Questions {q.startQuestionNum} - {q.endQuestionNum}
			</Text>
			<QuestionHeader header={q.questionHeader} />
			{qWithBlanks && show}
			{!qWithBlanks &&
				q.numStatements.map((question, idx) => (
					<div
						style={{ paddingLeft: "1%", paddingTop: "1%" }}
						key={idx}
					>
						{question}
						<br />
						<div style={{ paddingLeft: "1%", paddingTop: "1%" }}>
							{qNum}
							<TextInput
								placeholder={"Q " + qNum++}
								onChange={(e) => {
									TextInputValidator(
										e,
										q.numOfWords,
										q.numOfNum
									);
									handleInputChange(
										Number(e.target.placeholder.slice(1)) -
											q.startQuestionNum,
										e.target.value
									);
								}}
								style={{
									display: "inline-block",
									width: "auto",
									paddingLeft: "1%",
								}}
								size="xs"
							/>
							<br />
						</div>
					</div>
				))}
		</Container>
	);
};
