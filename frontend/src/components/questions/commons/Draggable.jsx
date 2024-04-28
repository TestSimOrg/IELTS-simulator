import React from "react";
import { useDraggable } from "@dnd-kit/core";

export function Draggable({ item, index }) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: `draggable-${index}`,
	});

	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
				outline: "none",
		  }
		: { outline: "none" };

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: "2px 0px 2px 0px",
			}}
		>
			<button
				ref={setNodeRef}
				style={style}
				{...listeners}
				{...attributes}
			>
				{item}
			</button>
		</div>
	);
}
