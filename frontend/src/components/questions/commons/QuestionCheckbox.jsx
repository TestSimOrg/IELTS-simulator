// QuestionCheckbox.jsx

import React from "react";
import { Text, Checkbox, Grid, Group
} from "@mantine/core";

export const QuestionCheckbox = ({ QuestionOption }) => {
    return (
        <Grid >
            {QuestionOption.map((option, optionIndex) => (
                <Grid.Col span={{ xs: 12, md: 6, lg: 4}} key={optionIndex} justify="center">
                    <Checkbox key={optionIndex} label={option}></Checkbox>
                </Grid.Col>
            ))}
        </Grid>
    );
};
