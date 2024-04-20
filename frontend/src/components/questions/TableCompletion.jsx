import React, { useEffect, useState } from "react";
import { Container, Table, Text, TextInput } from "@mantine/core";
import { QuestionHeader } from "./commons/QuestionHeader";
import { TextInputValidator } from "../../utils/TextInputValidator";

export const TableCompletion = ({ q }) => {
	if (!q.rows || !(Array.isArray(q.rows) || !(q.rows.length > 0))) {
		throw Error("Table Completion Question should have rows.");
	}

	const headers = q.rows[0].map((header, idx) => (
		<Table.Th key={idx}>{header}</Table.Th>
	));

    const [ansArr, setAnsArr] = useState([]);

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

	const handleInputChange = (questionNum, newValue) => {
		setAnsArr((prevAnsArr) => {
			const newAnsArr = [...prevAnsArr];
			newAnsArr[questionNum - q.startQuestionNum].ans = newValue;
			return newAnsArr;
		});
	};

	const rowsWithoutHeader = q.rows.slice(1);

    let qNum = q.startQuestionNum;

	const rows = rowsWithoutHeader.map((row, idx) => (
		<Table.Tr key={idx}>
			{row.map((data, ridx) => (
				<Table.Td key={ridx}>
					{typeof data === "string"
						? data.split("_BLANK_").map((segment, index) => (
								<React.Fragment key={index}>
									{segment}&#8205;
									{index !==
										data.split("_BLANK_").length - 1 && (
										<TextInput
											key={index}
											placeholder={"Q " + qNum++}
											onChange={(e) => {
												TextInputValidator(
													e,
													q.numOfWords,
													q.numOfNum
												);
												handleInputChange(
													idx + q.startQuestionNum,
													e.target.value
												);
											}}
											style={{
												display: "inline-block",
												width: "auto",
											}}
											size="xs"
										/>
									)}
								</React.Fragment>
						  ))
						: data}
				</Table.Td>
			))}
		</Table.Tr>
	));

	return (
		<Container size={"xl"}>
			<Text fw={"bold"}>
				Questions {q.startQuestionNum} - {q.endQuestionNum}
			</Text> 
            <QuestionHeader header={q.questionHeader} />
			<Table mt={"1%"} highlightOnHover withTableBorder withColumnBorders>
				<Table.Thead>
					<Table.Tr>{headers}</Table.Tr>
				</Table.Thead>
				<Table.Tbody>{rows}</Table.Tbody>
			</Table>
		</Container>
	);
};
