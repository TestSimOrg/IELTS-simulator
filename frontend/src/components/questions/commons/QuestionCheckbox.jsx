// QuestionCheckbox.jsx

import React from "react";
import { Text, Checkbox, Grid, Group } from "@mantine/core";

export const QuestionCheckbox = ({ QuestionOption }) => {
	return (
		<Grid>
			{QuestionOption.map((option, optionIndex) => (
				<Grid.Col
					span={{ xs: 12, md: 6 }}
					key={optionIndex}
					justify="center"
					p={"10px 0px 10px 20px"}
				>
					<Checkbox
						key={optionIndex}
						label={option}
						color="rgba(0, 255, 8, 1)"
						variant="outline"
					></Checkbox>
				</Grid.Col>
			))}
		</Grid>
	);
};
