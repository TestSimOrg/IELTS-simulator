import answer from "../models/answer.js";


async function createBlankAns(option = false){
    
    if(option){
            
        const blankStringAns = new answer({
            ansType: 'B',
            answer: '',
        });

        const blankSAID = (await blankStringAns.save())._id;

        return blankSAID;

    }else {

        const blankArrAns = new answer({
        ansType: 'B',
        answer: [''],
        });

        const blankAAID = (await blankArrAns.save())._id;

        return blankAAID;

    }

}

async function createAns(ans){
    
    const filledAns = new answer({
        ansType: ans.ansType,
        qPair: ans.qPair,
        ans: ans.ans,
    });

    const filledAnsID = (await filledAns.save())._id;

    return filledAnsID;
}

const util = {
    createBlankAns, 
    createAns
};

export default util;