import React, { useState, useEffect } from "react";
import { Checkbox, Container, Grid, Text } from "@mantine/core";

const convert = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
    5: "F",
    6: "G",
}



export const MultipleChoiceType2 = ({ q }) => {

    const [values, setValues] = useState([]);
    const [lastArr, setLastArr] = useState([]);
    const [constraint, setConstraint] = useState([]);
    const [ansArr, setAnsArr] = useState([]);

	useEffect(() => {
        const newValues = []
        const newLastArr = []
        const newConstraints = []
        const newAnsArr = []
        for(let i = 0, n = q.questionOptions.length; i < n; i++ ){
            newValues.push(Array(q.questionOptions[i].length).fill(false))
            newLastArr.push([-1]);
            if(q.questionHeader[i].includes("TWO")){
                newConstraints.push(2)
            }else if(q.questionHeader[i].includes("THREE")){
                newConstraints.push(3)
            }
        }
        setValues(() => {return newValues});
        setLastArr(() => {return newLastArr});
        setConstraint(() => {return newConstraints});
        setAnsArr(() => {
            const newAnsArr = []
            for(let j = q.startQuestionNum, n = q.endQuestionNum; j <= n; j++){
                newAnsArr.push({
                    number: j,
                    ans: ""
                });
            }
            return newAnsArr;
        })

	}, []);

    const updateAns = (index, updatedLastArr) => {
        setAnsArr((prevAnsArr) => { //
            const newAnsArr = [...prevAnsArr];
            values[index]
            let i = 0;
            let start = 0;
            while(i<index){
                start += constraint[i]
                i++;
            }
            const end = start + constraint[index]
            for(i = start; i < end; i++){
                if(updatedLastArr[index][i - start] === -1 || typeof updatedLastArr[index][i - start] === "undefined"){
                    newAnsArr[i].ans = ""
                }else{
                    newAnsArr[i].ans = convert[updatedLastArr[index][i - start]]
                }
            }
            return newAnsArr;
        })
    }

	const handleCheckBoxChange = (e, index, optionIndex) => { // 0 0 0 1 0 2
        setValues((prevValues) =>{
            const newValues = [...prevValues];

            if(newValues[index][optionIndex] === true){
                newValues[index][optionIndex] = false;
                setLastArr((prevLastArr) => {
                    let newLastArr = [...prevLastArr]
                    newLastArr[index] = newLastArr[index].filter((element) => element !== optionIndex);
                    newLastArr[index].push(-1)
                    updateAns(index, newLastArr);
                    return newLastArr;
                })
                return newValues;
            }

            const boolArr = newValues[index].map((curr, index) => {
                if(curr) 
                    return index;
                else
                    return null;
            }).filter((elem) => elem !== null) 

            if(boolArr && boolArr.length >= constraint[index]){
                newValues[index][lastArr[index][0]] = false
            }
            newValues[index][optionIndex] = true;
            // This array will always have indices of selected checkbox and if not selected anything then -1
            setLastArr((prevLastArr) => {
                const newLastArr = [...prevLastArr]
                const newIndex = newLastArr[index].indexOf(-1)
                if(newIndex !== -1){
                    newLastArr[index][newIndex]= optionIndex
                }else{
                    newLastArr[index].push(optionIndex)
                }
                if(newLastArr[index].length - 1 >= constraint[index]){
                    newLastArr[index].shift()
                }
                updateAns(index, newLastArr);
                return newLastArr;
                
            })
            
            return newValues;
        })
	};

	return (
		<Container size={"xl"}>
			<Grid gutter="lg">
				{q.numStatements.map((numStatement, index) => (
					<Grid.Col span={{ xs: 12, md: 6 }} key={index}>
						<Text fw={"bold"}>{q.questionHeader[index]}</Text>
						<Text pl={5}>{numStatement}</Text>
						{q.questionOptions[index].map(
							(
								option,
								optionIndex // index = 0, option = "A 16-30 years", optionIndex = 0
							) => (
								<Grid.Col
									span={{ xs: 12, md: 6 }}
									key={optionIndex}
									justify="center"
									p={"10px 0px 10px 20px"}
								>
									<Checkbox
										key={optionIndex}
										label={option}
										color="rgba(0, 255, 8, 1)"
										variant="outline"
                                        onChange={(e) => handleCheckBoxChange(e, index, optionIndex)}
										checked={ values.length === 0 ? false : values[index][optionIndex]}
									></Checkbox>
								</Grid.Col>
							)
						)}
					</Grid.Col>
				))}
			</Grid>
		</Container>
	);
};