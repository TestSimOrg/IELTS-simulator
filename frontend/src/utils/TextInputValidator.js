export const TextInputValidator = (e, numOfWords, numOfNum, limitIsAnd = false) => {
    
    const answer = e.target.value;

    var wordCount = 0;
    var numCount = 0;
    var words = answer.split(" ");

    words.forEach((word) => {
        if (word !== "") {
            if (isNaN(word)) {
                wordCount++;
            } else {
                numCount++;
            }
        }
    });

    if (limitIsAnd) {
        // if the last entered word is a number
        if (isNaN(words[words.length - 1])) {
            // we check for the number limit
            if (numCount > numOfNum) {
                e.target.value = e.target.value.slice(0, -1);
            }
        } else {
            // else we check for the word limit
            if (wordCount > numOfWords) {
                e.target.value = e.target.value.slice(0, -1);
            }
        }
    } else {
        if (wordCount > numOfWords || numCount > numOfNum) {
            e.target.value = e.target.value.slice(0, -1);
        }
    }
};