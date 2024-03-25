// Listening schema explainations:

// 1. Matching :
//    1. Type 1 example:

//         <img src="../public/listening/matchingType1.png" alt="matching type 1 img" style="width:400px;"/>

//         for this the json will be :
// const q = {
//     startQuestionNum: 21,
//     endQuestionNum: 25,
//     questionHeader:
//         "Write the correct letter, A, B or C next to question 21-25.\nYou may choose any letter more than once.",
//     questionOptionRepeatable: true,
//     questionStatment:
//         "What does Jack tell his tutor about each of the following course option?",
//     questionOptions: [
//         "A He'll definitely do it.",
//         "B He may or may not do it.",
//         "C He won't do it.",
//     ],
//     numStatements: [
//         "21 Media Studies _BLANK_",
//         "22 Women and Power _BLANK_",
//         "23 Culture and Society _BLANK_",
//         "24 Identify and Popular Culture _BLANK_",
//         "25 Introduction to Culture Theory _BLANK_",
//     ],
// };

// question/MachingType1.jsx
import React from "react";
import { Grid, Typography } from "@mui/material";
import { Question } from "../Question";
import { QuestionOption } from "../QuestionOption";

export const MatchingType1 = ({ q }) => {
	return (
		<Question q={q}>
			<Grid container spacing={2}>
				{q.numStatements.map((numStatement, index) => (
					<Grid item xs={12} key={index}>
						<Typography variant="body1">{numStatement}</Typography>
						<QuestionOption q={q} index={index} />
					</Grid>
				))}
			</Grid>
		</Question>
	);
};
