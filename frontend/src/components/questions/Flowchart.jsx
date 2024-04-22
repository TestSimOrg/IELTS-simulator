// question/Flowchart.jsx
import React from "react";
import { Text, Grid, Container } from "@mantine/core"; 
import { QuestionInput } from "./commons/QuestionInput";
import { QuestionHeader } from "./commons/QuestionHeader";
import { QuestionStatement } from "./commons/QuestionStatement";

import { useState, useEffect } from "react";

export const Flowchart = ({ q }) => {
    // If there are multiple string in a step, we display them next to each other
    // else we display them in a new line
    // We edit the size taken by the grid item based on the number of strings in the step

    // Each __BLANK__ in the step will be replaced by a QuestionInput component


    var result = (
        <Container size={"xl"} pt={"md"}>
        <Text fw={"bold"}>
			Questions {q.startQuestionNum} - {q.endQuestionNum}
		</Text> 
        <QuestionHeader header={q.questionHeader} />
        <QuestionStatement qStatement={q.questionStatment} />
            <Grid gutter={2}>
                {q.steps.map((step, stepIndex) => (
                    <React.Fragment key={stepIndex}>
                        {step.map((rectange, rectangeIndex) => (
                            <Grid.Col span={(12 / step.length)} key={`${stepIndex}_${rectangeIndex}`}>
                                {/* we take note of the index of the step and the index of the rectangle 
                                so that we can draw the arrow in javascript later */}

                                <div style={{ 
                                    border: "2px solid black", 
                                    borderRadius: "5px",
                                    padding: "15px", 
                                    width: "fit-content",  
                                    margin: " 15px auto"
                                }}  
                                    data-step-index={[stepIndex, rectangeIndex]}
                                >
                                    {rectange.split("_BLANK_").map((part, partIndex) => (
                                        <React.Fragment key={`${stepIndex}_${rectangeIndex}_${partIndex}`}>
                                            <Text style={{ display: "inline" }}>{part}</Text>
                                            {partIndex !== rectange.split("_BLANK_").length - 1 && (
                                                <QuestionInput
                                                    numOfWords={q.numOfWords}
                                                    numOfNum={q.numOfNum}
                                                />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </Grid.Col>
                        ))}
                    </React.Fragment>
                ))}
            </Grid>
        </Container>
    );
    

    function drawArrows() {
        // we take the center of each rectangle(s) for each step, and draw an arrow to the next step(s)
        // we will use the data-step-index to get the center of the rectangle
        var _arrows = []
        for (var i = 0; i < q.steps.length - 1; i++) { // i is the step index
            for (var j = 0; j < q.steps[i].length; j++) { // j is the rectangle index
                for (var k = 0; k < q.steps[i + 1].length; k++) { // k is the next rectangle index
                    var item1 = document.querySelector(`[data-step-index="${i},${j}"]`)
                    var item2 = document.querySelector(`[data-step-index="${i + 1},${k}"]`) // next step number k
                    if (item1 === null || item2 === null) {
                        continue
                    }
                    var x1 = item1.offsetLeft + item1.offsetWidth / 2
                    var y1 = item1.offsetTop + item1.offsetHeight
                    var x2 = item2.offsetLeft + item2.offsetWidth / 2
                    var y2 = item2.offsetTop
                    _arrows.push(<line x1={x1} y1={y1} x2={x2} y2={y2} className="arrow" key={`${i}_${j}_${k}`}/>)   
                }
            }
        }
        setArrows(_arrows)
    }

    function hideArrows() {
        document.querySelectorAll('.arrow').forEach((arrow) => {
            arrow.style.display = 'none'
        })
    }
    function showArrows() {
        document.querySelectorAll('.arrow').forEach((arrow) => {
            arrow.style.display = 'block'
        })
    }

    const [arrows, setArrows] = useState([])
    useEffect(() => {
        // inside a setTimeout so that it renders after the component is mounted
        setTimeout(() => {
            drawArrows()
        }, 0)
    }, [q.steps])

    var timer = null
    window.addEventListener('resize', () => {
        if (timer === null) {
            // hide the arrows while resizing
            // without calling setArrows([]), as it would trigger a render loop
            hideArrows()
        }
        else {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            drawArrows()
            timer = null
            // show the arrows after resizing, on the next render loop to avoid flickering
            setTimeout(() => {
                showArrows()
            }, 0)
        }, 100)
    })

    return (
        <>
            {result}
            <svg className="arrow-container">
                {arrows}
            </svg>
        </>
    );

}

