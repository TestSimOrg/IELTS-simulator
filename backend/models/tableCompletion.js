import mongoose from "mongoose";

const tableCompletionSchema = new mongoose.Schema({
    
    numOfWords : {
        type : Number,
        required : true
    },
    numOfNum : {
        type : Number,
        required : true
    },
    noOfRows : {
        type : Number,
        required: true
    },
    noOfCols : {
        type : Number,
        required: true
    },
    rows: {
        type: [[String]],
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

/* {
    noOfWords : 1, 
    noOfNum : 1, 
    noOfRows : 7,
    noOfCols : 3,
    rows : [['TRANSPORT', 'CASH FARE', 'CARD FARE'], ['Bus','(6) $ _blank_','$1.50'], ['Train (peak)','$10','$10'], ['Train (off-peak) \n -before 5pm or after (7) _blank_ pm','$10','(8) $ _blank_'],['(9) _blank ferry', '$4.50', '$3.55'],['Tourist ferry (10) _blank_', '$35', '-'],['Tourist ferry (whole day)', '$35', '-']],
    startQuestionNum : 6,
    endQuestionNum : 10
} 
_________________________________________________________________
|Transport                   Cash Fare           Card Fare      |
|_______________________________________________________________|
|Bus	                           (6)$......       $1.50	    |
|_______________________________________________________________|
|Train (peak)                    $10                $10         |
|_______________________________________________________________|
|Train (off-peak)                $10	           (8)$.......  |
|— before 5pm or                                                |
|after (7) ......... pm                                         |
|_______________________________________________________________|
|(9).... Ferry	                $4.50	           $3.55        |
|_______________________________________________________________|
|Tourist ferry (10)......	    $35	                -           |
|_______________________________________________________________|
|Tourist ferry (whole day)	    $65                 -           |
|_______________________________________________________________|

*/
const tableCompletion = mongoose.model('tableCompletion', tableCompletionSchema);

export default tableCompletion;