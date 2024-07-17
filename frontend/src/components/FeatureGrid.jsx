import { Grid } from "@mantine/core";
import React from "react";

const FeatureGrid = ({ content }) => {
	{/* TODO: Iterate through elements in content */}
    return (
		<Grid>
			<Grid.Col span={{ base: 12, md: 6, lg: 4 }}>1</Grid.Col>
			<Grid.Col span={{ base: 12, md: 6, lg: 4 }}>2</Grid.Col>
			<Grid.Col span={{ base: 12, md: 6, lg: 4 }}>3</Grid.Col>
			<Grid.Col span={{ base: 12, md: 6, lg: 4 }}>4</Grid.Col>
		</Grid>
	);
};

export default FeatureGrid;
