function generatePossibleAnswers() {
    const options = [
        ['50 cm', '50 cms'],
        ['', 'deep', 'high']
    ];

    const results = [];

    const generateCombinations = (index, currentResult) => {
        if (index === options.length) {
            results.push(currentResult.trim());
            return;
        }

        for (let i = 0; i < options[index].length; i++) {
            generateCombinations(index + 1, currentResult + ' ' + options[index][i]);
        }
    };

    generateCombinations(0, '');
    return results;
}
// 50 cm (s) (high/deep)
const possibleAnswers = generatePossibleAnswers();
console.log(possibleAnswers); 

/** prints
 * [
  '50 cm',
  '50 cm  deep',
  '50 cm  high',
  '50 cm s',
  '50 cm s deep',
  '50 cm s high'
]
 */
