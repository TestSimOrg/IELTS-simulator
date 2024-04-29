import React, { useEffect } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export function Draggable({ item, index }) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: `draggable-${index}`,
	});

	const style = transform
		? {
				transform: CSS.Translate.toString(transform),
				outline: "none",
				touchAction: "none",
		  }
		: { outline: "none", touchAction: "none" };

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
