import React from "react";
import { Container, Grid, Text } from "@mantine/core";
import { QuestionInput } from "./commons/QuestionInput";
import { QuestionHeader } from "./commons/QuestionHeader";
import { QuestionTitle } from "./commons/QuestionTitle";

export const SummaryCompletion = ({ q }) => {
	return (
		<Container size={"xl"}>
			<Text fw={"bold"}>
				Questions {q.startQuestionNum} - {q.endQuestionNum}
			</Text>
			<QuestionHeader header={q.questionHeader} />
			<QuestionTitle title={!q.QuestionTitle ? q.QuestionTitle : ""} />
			<Grid gutter="lg">
				{q.numStatements.map((numStatement, questionIndex) => (
					<Grid.Col
						span={{ xs: 12, md: 6 }}
						key={questionIndex}
						pr="xl"
					>
						{/* foreach blank in the statement, place a typography and a QuestionInput component
						 */}
						{numStatement
							.split("_BLANK_")
							.map((part, partIndex) => (
								<React.Fragment
									key={`${questionIndex}_${partIndex}`}
								>
									<Text>{part}&#8205;</Text>
									{/* if the part is not the last part, place a QuestionInput component*/}
									{partIndex !==
										numStatement.split("_BLANK_").length -
											1 && (
										<QuestionInput
											numOfWords={q.numOfWords}
											numOfNum={q.numOfNum}
										/>
									)}
								</React.Fragment>
							))}
					</Grid.Col>
				))}
			</Grid>
		</Container>
	);
};
