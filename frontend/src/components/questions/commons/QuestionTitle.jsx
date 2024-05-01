import React from "react";
import { Text } from "@mantine/core";
export const QuestionTitle = ({ title }) => {
	return (
		<Text fw={"bold"} ta={"center"} size="xl">
			{title}
		</Text>
	);
};
