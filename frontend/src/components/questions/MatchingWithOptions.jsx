import React, { useEffect, useState } from "react";
import { Container, Text } from "@mantine/core";
import { QuestionHeader } from "./commons/QuestionHeader";
import { QuestionStatement } from "./commons/QuestionStatement";
import { Draggable } from "./commons/Draggable";
import { Droppable } from "./commons/Droppable";
import { DndContext, pointerWithin} from "@dnd-kit/core";
import { QuestionTitle } from "./commons/QuestionTitle";

export const MatchingWithOptions = ({ q }) => {
	// State to store the list of options

	const [options, setOptions] = useState(q.questionOptions);
	const [ansArr, setAnsArr] = useState([]);

	const [dropIndex, setDropIndex] = useState(
		Array(q.numStatements.length).fill(-1)
	);

	useEffect(() => {
		let arr = [];
		for (let i = q.startQuestionNum; i <= q.endQuestionNum; i++) {
			arr.push({
				number: i,
				ans: "",
			});
		}
		setAnsArr(arr);
	}, []);

	// Handle drop event
	const handleDrop = (event) => {
		const { over, active } = event;

		if (!over) {
			return;
		}

		const droppedItem = options[active.id.split("-")[1]]; // Get the dropped item
		const droppedArea = Number(over.id.split("-")[1]);

		setDropIndex((prevArr) => {
			let newArr = [...prevArr];
			newArr[droppedArea] = droppedItem;
			return newArr;
		});

		setAnsArr((prevAnsArr) => {
			const newAnsArr = [...prevAnsArr];
			newAnsArr[over.id.split("-")[1]].ans = droppedItem[0];
			return newAnsArr;
		});
	};

	return (
		<Container size={"xl"}>
			<QuestionHeader header={q.questionHeader} />
			<QuestionStatement qStatement={q.questionStatement} />
            <QuestionTitle
				title={q.questionTitle !== "" ? q.questionTitle : ""}
			/>
			<DndContext
				collisionDetection={pointerWithin}
				onDragEnd={handleDrop}
			>
				{/* Render draggable elements */}
				{options.map((str, index) => (
					<Draggable key={index} item={str} index={index} />
				))}
				{/* Render droppable areas */}
				{q.numStatements.map((str, index) => (
					<React.Fragment key={index}>
						<Text>{str.replace("_BLANK_", ":")}</Text>
						{dropIndex[index] === -1 ? (
							<Droppable index={index} />
						) : (
							<Droppable
								content={dropIndex[index]}
								index={index}
							/>
						)}
					</React.Fragment>
				))}
			</DndContext>
		</Container>
	);
};
