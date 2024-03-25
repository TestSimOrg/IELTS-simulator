// question/Question.jsx
import React from "react";
import { Typography } from "@mui/material";

export const Question = ({ q, children }) => {
	return (
		<>
			<Typography variant="h6">{q.questionHeader}</Typography>
			<Typography variant="body1">{q.questionStatment}</Typography>
			{children}
		</>
	);
}