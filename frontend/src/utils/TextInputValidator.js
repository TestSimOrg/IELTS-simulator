export const TextInputValidator = (event, maxWords, maxNumbers, limitIsAnd = false) => {
    const inputValue = event.target.value;
    let wordCount = 0;
    let numberCount = 0;
    const words = inputValue.split(" ");

    words.forEach((word) => {
        if (word !== "" && isNaN(word)) {
            wordCount++;
        } else if (word !== "") {
            numberCount++;
        }
    });

    if (limitIsAnd) {
        const lastWord = words[words.length - 1];
        if (isNaN(lastWord)) {
            if (numberCount > maxNumbers) {
                event.target.value = inputValue.slice(0, -1);
            }
        } else {
            if (wordCount > maxWords) {
                event.target.value = inputValue.slice(0, -1);
            }
        }
    } else {
        if (wordCount > maxWords || numberCount > maxNumbers) {
            event.target.value = inputValue.slice(0, -1);
        }
    }
};
