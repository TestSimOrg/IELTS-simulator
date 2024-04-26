import React, { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { Column } from "./commons/Column";
import { QuestionTitle } from './commons/QuestionTitle'

export const DragNDrop = ({ q }) => {

    const [tasks, setTasks] = useState(q.questionOptions)

    return (
        <>TODO: DRAG AND DROP LIST FOR MATCHING QUESTION TYPE 2</>
    );
};
