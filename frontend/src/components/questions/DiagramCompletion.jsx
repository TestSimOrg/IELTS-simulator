import React,{useState, useEffect} from "react";
import { Container, Grid, Select, Text } from "@mantine/core";
import { QuestionHeader } from "./commons/QuestionHeader";
import { QuestionTitle } from "./commons/QuestionTitle";
import { QuestionImage } from "./commons/QuestionImage";

export const DiagramCompletion = ({ q }) => {

    let qNum = q.startQuestionNum;

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

    const updateAns = (index, value) => {
        setAnsArr((prevAnsArr) => {
            const newAnsArr = [...prevAnsArr];
            newAnsArr[index].ans = value;
            return newAnsArr;
        });
    }

    return (
        <Container size={"xl"}>
            <Text fw={"bold"}>
				Questions {q.startQuestionNum} - {q.endQuestionNum}
			</Text> 
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
                        <Select
                            key={index}
			            	data={q.questionOptions}
			            	placeholder={"Q " + qNum++}
			            	ml={"15%"}
			            	mr={"15%"}
			            	comboboxProps={{
			            		transitionProps: { transition: "pop", duration: 200 },
			            		shadow: "md",
			            	}}
                            onChange={(val) => updateAns(index, val)}
			            />
                    </Grid.Col>
                ))}
            </Grid>
        </ Container>
    );
}
