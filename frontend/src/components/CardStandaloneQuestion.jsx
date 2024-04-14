import React from "react";
import { Link } from "react-router-dom";
import { Card, Text, Badge, Group, Button} from "@mantine/core";
import { AiOutlineLike } from "react-icons/ai";
import classes from "../styles/CardStandaloneQuestion.module.css";
    
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

export default function CardStandaloneQuestion({ question }) {

    return (
        <Card shadow="xs" padding="md" radius="md" className={classes.card}>
            <Link to={`/questions/${question.number}`} className={classes.link}>
                <div className="card-content">
                    <h3>Question {question.number}</h3>
                    <h4>{question.content.questionHeader}</h4>
                </div>
            </Link>
            
            <Group className={classes.group}>
                <Badge color="white" className={classes.badge}>
                    {questionTypes[question.type]}
                </Badge>
                <Button color="blue" variant="outline" className={classes.badge}>
                    <AiOutlineLike />
                </Button>
            </Group>
            
        </Card>

    );
}

