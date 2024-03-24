const fs = require('fs');
const path = require('path');

// Function to recursively read directory
function readDirectory(directory) {
    const files = fs.readdirSync(directory);
    const jsonFiles = files.filter(file => path.extname(file) === '.json');

    const data = {};
    jsonFiles.forEach(file => {
        const filePath = path.join(directory, file);
        const fileName = path.parse(file).name;

        try {
            // Load JSON file
            const jsonData = require(filePath);
            data[fileName] = jsonData;
        } catch (error) {
            console.error(`Error loading JSON file ${file}:`, error);
        }
    });

    return data;
}

// Example usage
const directory = path.join(__dirname, './public/listening/ans'); // Assuming 'subdirectory' is in the same directory as this script
const jsonData = readDirectory(directory);

describe('Answer type checking', () => {
    for(let ans_sheet in jsonData){
        const ans_array = jsonData[ans_sheet];
        for (let i = 0; i < 40; i++) {
            let element = ans_array[i]
            test(`question number ${element['number']} type correct`, () => {
                if (element['type'] === "S"){
                    expect((typeof element['ans']) === 'string').toBe(true);
                }else if (element['type'] === "M"){
                    expect(element['ans'] instanceof Array).toBe(true);
                }else if (element['type'] === "IEO"){
                    expect(element['ans'] instanceof Array && element['q_pair'] instanceof Array).toBe(true);
                }
                
            });
        }
    }


});


describe('IOE consistency checking', () => {
    for(let ans_sheet in jsonData){
        const ans_array = jsonData[ans_sheet];
        for (let i = 0; i < 40; i++) {
            let element = ans_array[i]
            if(element['type'] === "IEO"){
                test(`IOE consistency`, () => {
                    for(let num of element['q_pair']){
                        let pair_elem = ans_array[num - 1]
                        expect(element['ans']).toEqual(pair_elem['ans']);
                        expect(element['q_pair'].includes(num)).toBe(true);
                        expect(pair_elem['q_pair'].includes(element['number'])).toBe(true);
                    }
                });
            }
        }
    }

});
