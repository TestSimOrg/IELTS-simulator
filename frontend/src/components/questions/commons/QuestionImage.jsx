// image: {
//            data: buffer,
//            contentType: 'image/png'
//        },

// QuestionImage.jsx
import React from "react";
import { Typography } from "@mui/material";

export const QuestionImage = ({ image }) => {
    return (
        <img
            src={`data:${image.contentType};base64,${image.data}`}
            alt="question"
            style={{ width: "100%" }}
        />
    );
}