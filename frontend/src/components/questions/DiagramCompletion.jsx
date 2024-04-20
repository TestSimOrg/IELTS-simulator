import React from "react";
import { Container, Grid, Text } from "@mantine/core";
import { QuestionHeader } from "./commons/QuestionHeader";
import { QuestionTitle } from "./commons/QuestionTitle";
import { DropDown } from "./commons/DropDown";
import { QuestionImage } from "./commons/QuestionImage";

export const DiagramCompletion = ({ q }) => {
    return (
        <Container size={"xl"}>
            <QuestionHeader header={q.questionHeader}/>
            <QuestionTitle title={q.questionTitle} />
            <QuestionImage image={q.image} />
            <Grid gutter="lg">
                {q.numStatements.map((numStatement, index) => (
                    <Grid.Col  span={{ xs: 12, md: 6 }}
                      key={index}
                      pr="xl"
                    >
                        <Text ta={"center"} size="sm">{numStatement.replace("_BLANK_", "_______")}</Text>
                        <DropDown options={q.questionOptions} />
                    </Grid.Col>
                ))}
            </Grid>
        </ Container>
    );
}
