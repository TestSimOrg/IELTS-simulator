import log from "../lib/logger.js";

const rMatchingTypeValidation = async (req, res, next) => {

    const {rMatching} = req.body;
    log.error('qTypeMatchingInfo')
    try {
        console.log(typeof rMatching.qTypeMatchingInfo === 'undefined')
        if(typeof rMatching.qTypeMatchingInfo === 'undefined'  && rMatching.qTypeList === true || typeof rMatching.qTypeList === 'undefined' && rMatching.qTypeMatchingInfo === true){

            log.error("A Reading Matching question can't be type of Matching Info and Matching List")
            
            return res.status(400).json({
                message: "Bad Request.",
                ok: false,
                status: 404
            });
        }else if(rMatching.qTypeList === true){
            rMatching.qTypeMatchingInfo = false;
            next();
        }else if(this.qTypeMatchingInfo === true){
            rMatching.qTypeList = false;
            next();
        }
        next()
    } catch (err) {
        
        log.error('Error while Validating Reading Matching Question Type.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }
}

export default rMatchingTypeValidation;