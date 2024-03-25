// question/QuestionOption.jsx
import React from "react";
import { Grid, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export const QuestionOption = ({ q, index }) => {
	return (
		<RadioGroup row>
			{q.questionOptions.map((option, optionIndex) => (
				<Grid item xs={4} key={optionIndex}>
					<FormControlLabel
						value={optionIndex}
						control={<Radio />}
						label={option}
					/>
				</Grid>
			))}
		</RadioGroup>
	);
}