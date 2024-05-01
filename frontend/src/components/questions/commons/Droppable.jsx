import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable({ content, index }) {
	const { isOver, setNodeRef } = useDroppable({
		id: `droppable-${index}`,
	});

	const style = {
		backgroundColor: isOver ? "lightblue" : "transparent",
		border: "2px solid black",
		borderRadius: "6px",
		minHeight: "50px",
		width: "20%",
		minWidth: "300px",
		padding: "10px",
		marginLeft: "2%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	return (
		<div ref={setNodeRef} style={style}>
			{content}
		</div>
	);
}
