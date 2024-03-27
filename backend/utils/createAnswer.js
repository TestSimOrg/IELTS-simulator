import answer from "../models/answer.js";
import log from '../lib/logger.js';

async function createBlankAns(option){

    
    if(!option){

        log.info(option)

        const blankStringAns = new answer({
            ansType: 'B1',
            ans: '_TBU_',
        });

        log.info(blankStringAns)

        const blankSAID = (await blankStringAns.save())._id;

        return blankSAID;

    }else {

        const blankArrAns = new answer({
        ansType: 'B2',
        ans: ['_TBU_'], // TO BE UPDATED (placeholder value)
        });

        log.info(blankArrAns)
        
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