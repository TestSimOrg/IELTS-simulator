// question/Question.jsx
import React from "react";
import { Typography } from "@mui/material";

export const Question = ({ questionTitle, questionHeader, questionStatment, children }) => {
	return (
		<div style={{ marginBottom: "100px" }}>
			<Typography variant="h5">{questionTitle}</Typography>
			<Typography variant="h6">{questionHeader}</Typography>
			<Typography variant="body1">{questionStatment}</Typography>
			{children}
		</div>
	);
}