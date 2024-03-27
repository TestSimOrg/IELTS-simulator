// QuestionCheckbox.jsx

import React from "react";
import {
    Grid,
    Typography,
    Checkbox,
    FormControlLabel,
    FormGroup,
} from "@mui/material";

export const QuestionCheckbox = ({ QuestionOption }) => {
    return (
        <FormGroup row>
            {QuestionOption.map((option, optionIndex) => (
                <Grid item xs={4} key={optionIndex}>
                    <FormControlLabel
                        value={optionIndex}
                        control={<Checkbox />}
                        label={option}
                    />
                </Grid>
            ))}
        </FormGroup>
    );
};
