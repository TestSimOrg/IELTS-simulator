// question/commons/QuestionInput.jsx
import React from "react";
import { TextField } from "@mui/material";

export const QuestionInput = ({ q, index }) => {
    // numOfWords: 3,
    // 'Write NO MORE THAN THREE WORDS to complete each space.'
	// numOfNum: 0,
	// 'Don't write any number

	// -> can only write words until numOfWords + numbers until numOfNum

	const handleChange = (e) => {
		const answer = e.target.value;
		
		var wordCount = 0;
		var numCount = 0;
		var words = answer.split(" ");

		words.forEach((word) => {
			if (word !== "") {
				if (isNaN(word)) {
					wordCount++;
				} else {
					numCount++;
				}
			}
		});

		if (wordCount > q.numOfWords || numCount > q.numOfNum) {
			e.target.value = e.target.value.slice(0, -1);
		}
	};

	return (
		<TextField
			fullWidth
			label="Answer"
			variant="outlined"
			onChange={handleChange}
		/>
	);

};
