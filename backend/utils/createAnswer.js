import answer from "../models/answer.js";
import log from '../lib/logger.js';

async function createBlankAns(){

    const blankStringAns = new answer({
        number: 0,
        ansType: 'B1',
        ans: '_TBU_', // TO BE UPDATED (placeholder value)
    });

    const blankSAID = (await blankStringAns.save()).toJSON()._id;

    return blankSAID;

}

async function createBlankAnsArr(){
    
    const blankArrAns = new answer({
    number: 0,
    ansType: 'B2',
    ans: ['_TBU_'], // TO BE UPDATED (placeholder value)
    });
  
    const blankAAID = (await blankArrAns.save()).toJSON()._id;

    return blankAAID;

}

async function createAns(ans){
    
    let ansIDArr = [];

    let filledAnsDocs;

    try {

        const promiseArr = [];

        for (let a of ans) {

            const filledAns = new answer({
                number: a.number,
                ansType: a.ansType,
                qPair: a.qPair,
                ans: a.ans,
            });

            const filledAnsPromise = filledAns.save();

            promiseArr.push(filledAnsPromise);

        }
    
        filledAnsDocs = await Promise.all(promiseArr);

    } catch (error) {
        log.error('Error while saving answers:', error);
    }

    ansIDArr = filledAnsDocs.map(doc => doc.toJSON()._id);

    return ansIDArr;

}


export {
    createBlankAns, 
    createBlankAnsArr,
    createAns
};