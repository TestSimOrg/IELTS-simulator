/* 
Example params (userAS and AS should be of 40 length):
userAS[5] = [{number : 1,ans : "MARY"},{number : 2,ans : "20"},{number : 3,ans : "B"}, {number : 4,ans : "D"}, {number : 5,ans : "A"}
]

AS[5] = [
    {
        number : 1,
        type : "S",
        ans : "MARY"
    },
    {
        number : 2,
        type : "M",
        ans : ["20","TWENTY"]
    },
    {
        number : 3,
        type : "IEO",
        q_pair : [4]
        ans : ["B","D"]
    },
    {
        number : 4,
        type : "IEO",
        q_pair : [3]
        ans : ["B","D"]
    },
    {
        number : 5,
        type : "L",
        ans : "A"
    }
]
*/



const ansChecker = (userAS, AS) => {
  let result = [];
  let correctCounter = 0;
  for (let i = 0; i < 40; i++) {
    if (AS[i]["type"] === "S") {
      if (userAS[i]["ans"] === AS[i]["ans"]) {
        result.push({
          number: i + 1,
          correct: true /*, 'ans' : userAS[i]['ans']*/,
        });
        correctCounter += 1;
      } else {
        result.push({ number: i + 1, correct: false, ans: AS[i]["ans"] });
      }
    } else if (AS[i]["type"] === "M") {
      let ansArr = AS[i]["ans"];
      let correct = false;
      for (let ans of ansArr) {
        if (userAS[i]["ans"] === ans) {
          result.push({
            number: i + 1,
            correct: true /*, 'ans' : userAS[i]['ans']*/,
          });
          correctCounter += 1;
          correct = true;
          break;
        } else {
          continue;
        }
      }

      if (!correct) {
        result.push({ number: i + 1, correct: false, ans: AS[i]["ans"] });
      }
    } else if (AS[i]["type"] === "IEO") {
      let ansArr = AS[i]["ans"];
      let num = ansArr.length;
      for (let j = 0; j < num; j++) {
        if (ansArr.includes(userAS[i]["ans"])) {
          let index = ansArr.indexOf(userAS[i]["ans"]);
          ansArr.splice(index, 1);
          result.push({
            number: i + 1,
            correct: true /*, 'ans' : userAS[i]['ans']*/,
          });
          correctCounter += 1;
          if(j + 1 < num){
            i++;
          }
        } else {
          result.push({ number: i + 1, correct: false, ans: AS[i]["ans"] });
        }
      }
    } else if (AS[i]["type"] === "L") {
      if (userAS[i]["ans"] === AS[i]["ans"]) {
        result.push({
          number: i + 1,
          correct: true /*, 'ans' : userAS[i]['ans']*/,
        });
        correctCounter += 1;
      } else {
        result.push({ number: i + 1, correct: false, ans: AS[i]["ans"] });
      }
    }
  }

  return { correctCounter, result };
};

export default ansChecker;
