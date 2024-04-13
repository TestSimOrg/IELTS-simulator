// question/Question.jsx
import React from "react";
import { Text } from "@mantine/core";

export const Question = ({ questionNumber, questionTitle, questionHeader, questionStatement, children }) => {
	return (
		<div style={{ marginBottom: "100px" }}>
			<Text ta={"left"} size="lg">{questionTitle}</Text>
			<Text size="md">{questionHeader}</Text>
			<Text size="sm">{questionStatement}</Text>
			<div style={{ marginTop: "10px" }}>
				{children}
			</div>
		</div>
	);
}
