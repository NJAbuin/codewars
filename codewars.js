function findOdd(arr) {
  let c = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      c++;
    }
    if (c % 2 != 0) {
      return arr[i];
    }
  }
}

function kebabize(str) {
  let arr = str.split(""),
    answArr = [];
  arr.forEach(function(char) {
    if (char === char.toUpperCase() && isNaN(char)) {
      answArr.push("-");
      answArr.push(char.toLowerCase());
    }
    if (char === char.toLowerCase() && isNaN(char)) {
      answArr.push(char);
    }
  });

  if (answArr[0] === "-") {
    answArr.shift();
  }

  return answArr.join("");
}

kebabize("myCamelCasedString");

const flatObj = (
  obj,
  propString = "",
  valueString = "",
  answObj = { propString: valueString }
) => {
  const hasMin2NestedObjects = obj => {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        for (let key2 in obj[key]) {
          if (typeof obj[key][key2] === "object") {
            return true;
          }
        }
      }
    }
    return false;
  };

  const flatObjOnce = obj => {
    if (hasMin2NestedObjects(obj)) {
      for (let key in obj) {
        propString += key + "_";
        obj = obj[key];
        return obj;
      }
    }
    return false;
  };

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      propString += key;
      valueString += obj[key];
    } else {
      obj = flatObjOnce(obj);
      flatObj(obj, propString, valueString, answObj);
    }
  }

  return answObj;
};

function array_diff(arr1, arr2) {
  return arr1.filter(x => !arr2.includes(x));
  //Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
  //It should remove all values from list a, which are present in list b.
}

function numericals(s) {
  let counters = {};
  for (let i = 0; i < s.length; i++) {}
}

function pyramid(n) {
  if (n === 0) return [];
  let storedN = n;
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push([]);
  }
  console.log(arr);
  for (let i = 0; i <= arr.length; i++) {}
}

function findOdd(arr) {
  let counts = {};
  for (let number of arr) {
    counts.hasOwnProperty(number) ? counts[number]++ : (counts[number] = 1);
  }
  for (let key in counts) {
    if (counts[key] % 2 !== 0) return parseInt(key);
  }
}

function calcFuel(n) {
  let fuelDuration = {
    lava: 800,
    blazeRod: 120,
    coal: 80,
    wood: 15,
    stick: 1
  };
  let fuelNeeded = { lava: 0, blazeRod: 0, coal: 0, wood: 0, stick: 0 };
  let totalTime = n * 11;
  while (totalTime > 0) {
    if (totalTime >= fuelDuration.lava) {
      fuelNeeded.lava++;
      totalTime = totalTime - fuelDuration.lava;
    } else if (totalTime >= fuelDuration.blazeRod) {
      fuelNeeded.blazeRod++;
      totalTime = totalTime - fuelDuration.blazeRod;
    } else if (totalTime >= fuelDuration.coal) {
      fuelNeeded.coal++;
      totalTime = totalTime - fuelDuration.coal;
    } else if (totalTime >= fuelDuration.wood) {
      fuelNeeded.wood++;
      totalTime = totalTime - fuelDuration.wood;
    } else if (totalTime >= fuelDuration.stick) {
      fuelNeeded.stick++;
      totalTime = totalTime - fuelDuration.stick;
    }
  }
  return fuelNeeded;
}

function reverse(str) {
  let arr = str.trim().split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      arr[i]
        .split("")
        .reverse()
        .join("");
    }
  }
  return arr.join(" ");
}

//count lowercase letters, return count in dictionary

const letterCount = s => {
  let dictionary = {};
  s.split("")
    .filter(letter => letter === letter.toLowerCase())
    .forEach(e => {
      !dictionary.hasOwnProperty(e) ? (dictionary[e] = 1) : dictionary[e]++;
    });
  return dictionary;
};

// given a string with '#' standing for a delete input, return string after deletes
const clean_string = s => {
  let arr = [];
  for (let char of s) {
    if (char !== "#") arr.push(char);
    else {
      arr.length ? arr.splice(arr.length - 1, 1) : "";
    }
  }
  return arr.join("");
};

//MINECRAFT KATA OWN
function distanceTravelled(entryCoords, exitCoords) {
  entryCoords.x = entryCoords.x / 8;
  entryCoords.z = entryCoords.z / 8;
  exitCoords.x = exitCoords.x / 8;
  exitCoords.z = exitCoords.z / 8;
  return Math.floor(
    Math.sqrt(
      Math.pow(exitCoords.x - entryCoords.x, 2) +
        Math.pow(exitCoords.z - entryCoords.z, 2)
    )
  );
}
//kata tests
//example test cases
let entryCoords = { x: 8, z: 8 };
let exitCoords = { x: 80, z: 80 };

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("distanceTravelled", function() {
  it(`should be a function`, function() {
    assert.typeOf(distanceTravelled, "function");
  });

  it(`given entryCoords= {x: 8, z: 8} exitCoords=  {x: 80, z: 80} should return 10`, function() {
    assert.deepEqual(distanceTravelled(entryCoords, exitCoords), 12);
  });

  it(`should return an integer`, function() {
    assert.typeOf(distanceTravelled(entryCoords, exitCoords), "number");
    assert.deepEqual(distanceTravelled(entryCoords, exitCoords) % 1, 0);
  });
});

//random tests
const chai = require("chai");
const assert = chai.assert;
let entryCoords = { x: 0, z: 0 };
let exitCoords = { x: 0, z: 0 };
let distanceTravel = 0;

describe("Random Cases", function() {
  before(function() {
    entryCoords = {
      x: Math.floor(Math.random() * 30000),
      z: Math.floor(Math.random() * 30000)
    };
    exitCoords = {
      x: Math.floor(Math.random() * 30000),
      z: Math.floor(Math.random() * 30000)
    };
    distanceTravel = Math.floor(
      Math.sqrt(
        Math.pow(exitCoords.x - entryCoords.x, 2) +
          Math.pow(exitCoords.z - entryCoords.z, 2)
      )
    );
  });

  for (let i = 0; i <= 100; i++) {
    it("should work for random coordinates", function() {
      assert.deepEqual(
        distanceTravelled(entryCoords, exitCoords),
        distanceTravel
      );
    });
  }
});
/////////////////////////////////////////////////////////////////////

const firstDup = s => {
  for (let i = 0; i < s.length; i++) {
    for (let j = 1; j < s.length; j++) {
      if (s[i] === s[j]) return s[i];
    }
  }
  return undefined;
};

class Magic {
  constructor() {
    this.stack = [];
  }

  spellStack(spell) {
    if (spell) {
      if (spell.type === "sorcery" && this.stack.length) {
        throw new Error(
          "Cannot add sorcery spells before instant spells resolve"
        );
      } else {
        this.stack.push(spell);
        return this.stack.length;
      }
    } else {
      if (!this.stack.length) throw new Error("Spell Stack is empty");
      return this.stack.pop();
    }
  }
}

//unfinished: https://www.codewars.com/kata/create-a-frame/train/javascript
const frame = (text, char) => {
  let frame = "";
  const lengthChecker = textArr => {
    let longest = Number.NEGATIVE_INFINITY;
    textArr.forEach(e => {
      if (e.length > longest) longest = e.length;
    });
    return longest;
  };
  const generateLowerUpperBorders = length => {
    for (let i = 0; i < lengthChecker(text) + 4; i++) {
      frame += char;
    }
  };
  generateLowerUpperBorders(lengthChecker(text));
  for (let i = 0; i < text.length; i++) {
    frame += "\n" + char + " " + text[i] + " " + char;
  }
  frame += "\n";
  generateLowerUpperBorders(lengthChecker(text));

  return frame;
};
let textArr = ["Hola", "Bye", "Yea"];
frame(textArr, "*");

/*To complete this Kata you need to make a function multiplyAll/multiply_all
   which takes an array of integers as an argument. This function must return another function, 
   which takes a single integer as an argument and returns a new array.
The returned array should consist of each of the elements from the first array multiplied by the integer.
Example:
multiplyAll([1, 2, 3])(2) = [2, 4, 6];*/

const multiplyAll = arr => i => arr.map(n => i * n);

String.prototype.camelCase = function() {
  if (!this.length) return "";
  let arr = this.trim().split("");
  arr[0] = arr[0].toUpperCase();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      arr[i] = "#";
      arr[i + 1] = arr[i + 1].toUpperCase();
    }
  }
  return arr.filter(e => e !== "#").join("");
};

//"1plus2plus3plus4"  --> "10"
//"1plus2plus3minus4" -->  "2"

//Array helpers
/*
numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
*/

Array.prototype.square = function() {
  return this.map(n => Math.pow(n, 2));
};
Array.prototype.cube = function() {
  return this.map(n => Math.pow(n, 3));
};
Array.prototype.sum = function() {
  return this.reduce((a, b) => a + b, 0);
};
Array.prototype.average = function() {
  return this.sum(this) / this.length;
};
Array.prototype.even = function() {
  return this.filter(n => n % 2 === 0);
};
Array.prototype.odd = function() {
  return this.filter(n => n % 2 !== 0);
};

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

const number = arr => arr.map((e, i) => (e = `${i}: ${e}`));

//https://www.codewars.com/kata/dashatize-it/train/javascript
/*
Given a number, return a string with dash'-'marks before and after each odd integer, 
but do not begin or end the string with a dash mark.
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/
const dashatize = num => {
  if (isNaN(num)) return NaN;
  let string = "";
  const cleanDashes = str => {
    while (str[0] === "-") {
      str = str
        .split("")
        .shift()
        .join("");
    }
    while (str[str.length - 1 === "-"]) {
      str = str
        .split("")
        .pop()
        .join("");
    }
  };

  cleanDashes(num.toString());

  num
    .toString()
    .split("")
    .forEach(e => {
      if (parseInt(e) % 2 !== 0) {
        string[string.length - 1] === "-"
          ? (string += `${e}-`)
          : (string += `-${e}-`);
      } else {
        string += e;
      }
    });
  cleanDashes(string.toString());
  return string;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://www.codewars.com/kata/codewars-style-ranking-system/train/javascript

/*var user = new User()
user.rank // => -8
user.progress // => 0
user.incProgress(-7)
user.progress // => 10
user.incProgress(-5) // will add 90 progress
user.progress # => 0 // progress is now zero
user.rank # => -7 // rank was upgraded to -7*/

class User {
  constructor() {
    this.allRanks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8]; //list of ranks for reference
    this.rankIndex = 0; //i=0 means kyu -8, i=1 k:-7,(...), MAX RANK at i=15 kyu +8, 0 is skipped i=7 => kyu -1 i=8 kyu 1

    this.rank = this.allRanks[this.rankIndex]; //-8 MIN/+8 MAX, skips 0
    this.progress = 0; //starts at 0, after 100 resets and increases rank index, extra should carry over after reset
  }

  incProgress(actLvl) {
    if (!this.allRanks.includes(actLvl))
      throw new RangeError("Invalid Kata Lvl"); //level out of range

    //should output error ir act lvl is not in allRanks
    //receives the level of an activity, changes user progress according to rules
    const actLvlIndex = this.allRanks.indexOf(actLvl),
      ownLvlIndex = this.allRanks.indexOf(this.rank);

    const checkLvlUp = (currProg, incProg) => {
      //returns arr [bool,progressOverflow]
      if (currProg + incProg >= 100) return [true, currProg + incProg - 100];
      return [false, null];
    };

    switch (this.allRanks[actLvlIndex] - this.allRanks[ownLvlIndex]) {
      case 0:
        const incProgress = 3;
        if (checkLvlUp(this.progress, incProgress)[0]) {
          this.rankIndex++; //lvl up
          this.progress = checkLvlUp(this.progress, incProgress)[1]; //replaces progress with lvl overflow
        } else {
          this.progress += incProgress;
        }
        break;
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
