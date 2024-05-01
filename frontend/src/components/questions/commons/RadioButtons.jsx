import React from "react";
import { Radio } from "@mantine/core";

export const RadioButtons = ({ options, value, onChange }) => {
	return (
		<Radio.Group value={value} onChange={onChange} pl={"sm"}>
			{options.map((option, index) => (
				<Radio
					key={index}
					pt={10}
					color={"lime.4"}
					value={option}
					label={option}
				/>
			))}
		</Radio.Group>
	);
};
