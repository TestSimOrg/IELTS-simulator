// image: {
//            data: buffer,
//            contentType: 'image/png'
//        },

// QuestionImage.jsx
import React from "react";

export const QuestionImage = ({ image }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
        <img
            src={`data:${image.contentType};base64,${image.data}`}
            alt="question"
            style={{ width: "50%" }}
        />
        </div>
    );
}