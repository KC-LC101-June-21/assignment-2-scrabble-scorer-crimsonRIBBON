// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }


function initialPrompt() {
    let word = input.question("Let's play some scrabble!\nEnter a word to score: ");
 return word
};

function simpleScore(word) {
 let score = word.length;
return score
}

function vowelBonusScore(word) {
 let vowel = ['A','E','I','O','U','Y'];
 let scoreOfVowels = [];
 let wordUpCase = word.toUpperCase();

  for (let i = 0; i < vowel.length && wordUpCase.length; i++) {
    if (vowel.includes(wordUpCase[i])) { scoreOfVowels =+ scoreOfVowels + 2
   }
 }
  let score = scoreOfVowels + word.length
 return score
}

function scrabbleScore(word) {
  word = word.toLowerCase();
	let letterPoints = 0;
  for (i=0; i<word.length;i++){
    letterPoints = (letterPoints + (newPointStructure[word[i]]));
   } return letterPoints;
  }
	

// let i = 0;
//   while ( word[i] !== newPointStructure[i]) {
//   if (newPointStructure.includes(word[i])) { 
//     letterPoints + newPointStructure[key][i];
//   }
// 	return letterPoints;
//   i++
//  }
// }
  
let simple = {
  name: "Simple Scorer",
  description: "Each letter is worth 1 point.",
  scoringFunction: simpleScore
  };
let vowel = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScore
};
let scrabble = { 
 name: "Scrabble",
 description: "The traditional scoring algorithm.",
 scoringFunction: scrabbleScore
};
  
const scoringAlgorithms = [simple,vowel,scrabble];

function scorerPrompt(word) { 
  let userAlgoSelection = input.question(`Select the way you want to play by entering the gameplay ID. \n Enter 0, for Simple Scorer. \n Enter 1, for Vowel Bonus. \n Enter 2 for Scrabble Scoring.\n\n Enter ID here: ` )
  if (userAlgoSelection == 0) {
    console.log("\nYou chose to play: ", scoringAlgorithms[0].name);
    return console.log("Your word score is...  ", scoringAlgorithms[0].scoringFunction(word));
  } else if (userAlgoSelection == 1) { 
   console.log("\nYou chose to play: ", scoringAlgorithms[1].name);
    return console.log("Your word score is...  ", scoringAlgorithms[1].scoringFunction(word));
  }  else if (userAlgoSelection == 2) {
    console.log("\nYou chose to play: ", scoringAlgorithms[2].name);
    return console.log("Your word score is...  ", scoringAlgorithms[2].scoringFunction(word));
  } else {
    console.log("Please Enter a valid game ID")
    return scorerPrompt(word);
  }
}

function transform(oldPointStructure) {
let newObjects = {};
 for (key in oldPointStructure) {
  for (let i = 0; i < oldPointStructure[key].length; i++) {
 let newKey = oldPointStructure[key][i]
 newObjects[newKey.toLowerCase()] = Number(key)
}
}
 return newObjects
}
// transform old point structure to an object with lowercase letters as keys.
// return object with lowercas letters as keys
// call oldpointstructer[1]
// we want to switch the  value and key so that the letters are keys and the numbers are values.

//loop through all of the keys in old point structure,
//take the values and forward them into new object as keys, give the keys the value of their former key.
//return a new object 

// object to hold function results
/* create object,+
 loop though keys,+?
 create formula to add each value index to new object as key,
 assign new key value to original key

how to declare new key in object: 
obj["key3"] = "value3";


 create object
 from oldScore, go through each key(number), get its array
 from the array, get each letter
 assign letters to be lowercase.
 add to property --> letter as the key and the number as the value
 return new object.
 
*/

let newPointStructure = transform(oldPointStructure);

function runProgram() {
  // Putting declaring initial prompt to = word is like stating the function as a whole to = it's output, so that when we uilize the useranswer that initial prompt retrieves, we can essentially create a universial variable in my program(runprogram)
  let word = initialPrompt();

   scorerPrompt(word);
   
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

