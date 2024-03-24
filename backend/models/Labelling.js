import mongoose from "mongoose";
import image from './image'
const labellingSchema = new mongoose.Schema({

    image: {
        img: image,
        required: true
    },
    questionOptions: {
        type: [String],
        required: true
    },
    questionStatements : {
        type: [String],
        required: true
    },
    startQuestionNum : {
        type : Number,
        required: true
    },
    endQuestionNum : {
        type : Number,
        required: true
    }
});


const labellingQuestion = mongoose.model('labellingQuestion', labellingSchema);
const image = mongoose.model('image', imageSchema);

export default labellingQuestion