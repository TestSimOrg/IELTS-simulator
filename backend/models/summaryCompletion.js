import mongoose from "mongoose";

const summaryCompletionSchema = new mongoose.Schema({
    startQuestionNum : {
        type : Number,
        required: true
    },
    endQuestionNum : {
        type : Number,
        required: true
    },
    numOfWords : {
        type : Number,
        required : true
    },
    numOfNum : {
        type : Number,
        required : true
    },
    qType : {
        type: Number,
        enum: [1, 2],
        required: true
    },
    questionHeader : {
        type : String,
        required: true,
    },
    questionTitle : {
        type : String,
        required: true,
    },
    summary : {
        type : String,
        required: true,
    },
    questoinOptions: {
        type: [String],
        required: function validate(){
            return this.qType === 2 ? true : false;
        }
    }
    

});

/* 
{
    noOfWords : 1, 
    noOfNum : 0, 
    questionTitle : Sydney Opera House,
    summary: "Sydney Opera House is famous for its roof's architecture resembling (32) _blank_ .The opera house was designed by Jorn Utzon from Denmark and it was built between 1959 and 33 _blank_. \n\n The roof is covered with more than 1 million roof tiles which were manufactured in (34) _blank_ .Everyevening the roof is litupina (35) _blank_ spectacle. \n\nThe opera house has a variety of performance halls and theatre and exhibition spaces.
    More than (36) _blank_ shows are staged there every week. Every year, more than 8 million visitors visit this Australian landmark.",
    startQuestionNum : 32,
    endQuestionNum : 36
} 

Questions 32-36

Complete the summary below.

Write ONLY ONE WORD for each answer.

Sydney Opera House

Sydney Opera House is famous for its roof's architecture resembling 32 ................ .
The opera house was designed by Jorn Utzon from Denmark and it was built between
1959and33................ ...

The roof is covered with more than 1 million roof tiles which were manufactured in

34 ................ . Every evening the roof is litupina 35 ................ spectacle.

The opera house has a variety of performance halls and theatre and exhibition spaces.
More than 36 ................ shows are staged there every week. Every year, more than 8
million visitors visit this Australian landmark.

*/

const summaryCompletionQuestion = mongoose.model('summaryCompletionQuestion', summaryCompletionSchema);

export default summaryCompletionQuestion;