import React from "react";
import { Text } from "@mantine/core";
export const QuestionHeader = ({ header }) => {
	return (
		<Text fw={"bold"} size="md">
			{header}
		</Text>
	);
};
