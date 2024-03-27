// question/commons/QuestionInput.jsx
import React from "react";
import { TextField } from "@mui/material";

export const QuestionInput = ({ numOfWords, numOfNum, limitIsAnd=false }) => {
    // if limitIsAnd == false :
    //      when we get to any of the two limit, we can't write anymore
    // if limitIsAnd == true :
    //      We count each limit separately

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

        if (limitIsAnd) {
            // if the last entered word is a number
            if (isNaN(words[words.length - 1])) {
                // we check for the number limit
                if (numCount > numOfNum) {
                    e.target.value = e.target.value.slice(0, -1);
                }
            } else {
                // else we check for the word limit
                if (wordCount > numOfWords) {
                    e.target.value = e.target.value.slice(0, -1);
                }
            }
        } else {
            if (wordCount > numOfWords || numCount > numOfNum) {
                e.target.value = e.target.value.slice(0, -1);
            }
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
