import React from "react";
import { Link } from "react-router-dom";
import { Card, Text, Badge, Group, Button, Modal, Container} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { AiOutlineLike } from "react-icons/ai";
import classes from "../styles/CardStandaloneQuestion.module.css";

import { Matching } from "../components/questions/Matching";
import { SentenceCompletion } from "../components/questions/SentenceCompletion";
import { MultipleChoiceType1 } from "../components/questions/MultipleChoiceType1";
import { MultipleChoiceType2 } from "../components/questions/MultipleChoiceType2";
import { NoteCompletion } from "../components/questions/NoteCompletion";
import { DiagramCompletion } from "../components/questions/DiagramCompletion";
import { Flowchart } from "../components/questions/Flowchart";
import { YNNG } from "../components/questions/YNNG";
    
const questionTypes = {
    "MultipleChoiceType1": "Multiple Choice",
    "MultipleChoiceType2": "Multiple Choice",
    "DiagramCompletion": "Diagram Completion",
    "SentenceCompletion": "Sentence Completion",
    "NoteCompletion": "Note Completion",
    "Matching": "Matching",
    "FlowChart": "Flow Chart",
    "SummaryCompletion": "Summary Completion"
};

export default function CardStandaloneQuestion({ q }) {
    const [opened, { open, close }] = useDisclosure(false);

    function getQuestionRendered(q) {
        switch (q.type) {
            case "Matching":
                return <Matching q={q.content} />;
            case "SentenceCompletion":
                return <SentenceCompletion q={q.content} />;
            case "MultipleChoiceType1":
                return <MultipleChoiceType1 q={q.content} />;
            case "MultipleChoiceType2":
                return <MultipleChoiceType2 q={q.content} />;
            case "NoteCompletion":
                return <NoteCompletion q={q.content} />;
            case "DiagramCompletion":
                return <DiagramCompletion q={q.content} />;
            case "FlowChart":
                return <Flowchart q={q.content} />;
            case "YNNG":
                return <YNNG q={q.content} />;
            default:
                return <Text>Question type not found</Text>;
        }
    }
    const [renderedQuestion, setRenderedQuestion] = React.useState(null);
    function openModal() {
        setRenderedQuestion(getQuestionRendered(q));
        console.log("open");
        console.log(renderedQuestion);
        open();
    }
    
    return (
        <Card shadow="xs" padding="md" radius="md" className={classes.card}>
            {/* instead of a link, we display the question on a full screen modal */}
            <Container onClick={openModal} className={classes.link}>
                <div className="card-content">
                    <h3>Question {q.content.startQuestionNum} - {q.content.endQuestionNum}</h3>
                    <h4>{q.content.questionHeader}</h4>
                </div>
            </Container>

            
            <Group className={classes.group}>
                <Badge color="white" className={classes.badge}>
                    {questionTypes[q.type]}
                </Badge>
                <Button color="blue" variant="outline" className={classes.badge}>
                    <AiOutlineLike />
                </Button>
            </Group>

            <Modal opened={opened} onClose={close} title={`Question ${q.number}`} centered size="70%">
                {renderedQuestion}
            </Modal>
        </Card>

    );
}

