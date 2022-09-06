"use strict";
// ASSIGNMENT
let teamDumebiAverage = (96 + 108 + 89) / 3;
console.log(teamDumebiAverage);

let teamCiromaAverage = (88 + 91 + 110) / 3;
console.log(teamCiromaAverage);

if (teamDumebiAverage > teamCiromaAverage) {
  console.log("Team Dumebi wins the trophy!");
} else if (teamDumebiAverage == teamCiromaAverage) {
  console.log("It is a draw.");
} else {
  console.log(`Team Ciroma wins the trophy!`);
}

//BONUS 1

// let teamDumebiBonus1 =(97+112+101)/3;
// console.log(teamDumebiBonus1);

// let teamCiromaBonus1 =(109+95+123)/3;
// console.log(teamCiromaBonus1);

// let minimumScore = 100;

// if(teamDumebiBonus1 > teamCiromaBonus1 && teamDumebiBonus1 >= minimumScore){
//   console.log(`Team Dumebi wins`)
// }
// else if(teamDumebiBonus1 < teamCiromaBonus1 && teamCiromaBonus1 >= minimumScore){
//   console.log(`Team Ciroma wins`)
// }
// else{
//   console.log(`No Winner`)
// }

// // BONUS 2

// let teamDumebiBonus2 =(97+112+101)/3;
// console.log(teamDumebiBonus2)

// let teamCiromaBonus2 =(109+95+106)/3;
// console.log(teamCiromaBonus2)

// if(teamDumebiBonus2 > teamCiromaBonus2 && teamDumebiBonus2 >= minimumScore) {
//   console.log(`Team Dumebi wins`)
// }else if(teamDumebiBonus2 < teamCiromaBonus2 && teamCiromaBonus2 >= minimumScore){
//   console.log(`Team Ciroma wins`)
// }else if(teamCiromaBonus2 === teamDumebiBonus2 && teamCiromaBonus2 >= minimumScore && teamDumebiBonus2 >= minimumScore){
//   console.log(`It ends in a draw`)
// }
// else{
//   console.log(`No winner`)
// }

// // ASSIGNMENT 2

// const score = Number(prompt(`Enter your score`));

// if(score >=81 && score <=100){
//     console.log(`You made an A!`)
// }else if(score >= 60 && score <81){
//     console.log(`You made a B.`)
// }else if(score >=50 && score < 60){
//     console.log(`You made a C.`)
// }else if(score >=45 && score < 50){
//     console.log(`You got a D.`)
// }else if(score >=25 && score < 45){
//     console.log(`You got an E.`)
// }else if(score >=0 && score < 25){
//     console.log(`You got an F.`)
// }else{
//     console.log(`Please,input a valid score!`)
// }

// SWITCH  CASE

// switch (score) {
//   case (`(score)${>=81}`):
//     console.log("You made an A!");
//     break;

// }
// JAVASCRIPT FUNDAMENTALS ASSIGNMENT

const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};
console.log(calcTip(100));

const bills = [125, 155, 44];

const calcTips = function (bills) {
  const tips = bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
  return tips;
};
console.log(calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2]));

const tips = console.log([
  calcTips(bills[0]),
  calcTips(bills[1]),
  calcTips(bills[2]),
]);

// Assignment 2

const isEqual = function (x, y, a, b) {
  if (x + y == 100 || x == 100 || y == 100) {
    console.log(true);
  } else {
    console.log(false);
  }
  if (a + b == 100 || a == 100 || b == 100) {
    console.log(true);
  } else {
    console.log(false);
  }
};
isEqual(0, 100, 10, 0);

// Assignment 3
// const closeTo100 = function(p,q){
//   if((100-p) < (100-q)){
//     console.log(p)
//   }
// }
// closeTo100(99,1)
// const closeTo100 = function(p,q){
//   if((100-p) < (100-q)){
//     console.log(p)
//   }
//   else{console.log(q)}
// }
// closeTo100(49,51)
const closeTo100 = function (p, q) {
  if (100 - p < 100 - q) {
    console.log(p);
  } else if (100 - p == 100 - q) {
    console.log(`They are equal`);
  }
};
closeTo100(50, 50);

// EXTENSIVE ASSIGMENTS

// create an array

const ascendingNum = [1, 2, 3, 4, 5];
const isAscending = function (x) {
  for (let i = 0; i < ascendingNum.length; i++) {
    if (ascendingNum[i + 1] > ascendingNum[i]) {
      return true;
    }
    return false;
  }
};
console.log(isAscending(ascendingNum));

//leap Year

const leapYear = Number(prompt("input a year"));

if (leapYear % 4 == 0) {
  console.log(`${leapYear} is a leapyear`);
} else {
  console.log(`${leapYear} is not a leap year`);
}

//Calculating sum of an array

const givenArray = [1, 2, 3, 4, 5];

const sumOfArray = function (a, b, c, d, e) {
  const sum = a + b + c + d + e;
  console.log(sum);
};
sumOfArray(
  givenArray[0],
  givenArray[1],
  givenArray[2],
  givenArray[3],
  givenArray[4]
);

// Average mean of numbers

const averageMean = function (a, b, c, d, e) {
  const meanCalc = (a + b + c + d + e) / givenArray.length;
  return meanCalc;
};

console.log(
  averageMean(
    givenArray[0],
    givenArray[1],
    givenArray[2],
    givenArray[3],
    givenArray[4]
  )
);

// negative and positive numbers
const myNumbers = [-5, 10, -3, 12, -9, 5, 90, 1];
const positiveNumbers = [];
const isPositive = function (x) {
  for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] > 0) {
      positiveNumbers.push(myNumbers[i]);
    }
  }
  return positiveNumbers;
};
console.log(isPositive(myNumbers));
