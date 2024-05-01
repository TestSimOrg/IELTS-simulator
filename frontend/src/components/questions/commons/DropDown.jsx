import React from "react";
import { Select } from "@mantine/core";
export const DropDown = ({ options }) => {
	return (
		<div>
			<Select
				data={options}
				placeholder="Select an option"
				ml={"15%"}
				mr={"15%"}
				comboboxProps={{
					transitionProps: { transition: "pop", duration: 200 },
					shadow: "md",
				}}
				onChange={(e) => console.log(e)}
			/>
		</div>
	);
};
