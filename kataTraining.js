///https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

// function handleSpecialRolls({ roll, winnings }) {
//   if (roll < 3) {
//     return roll * winnings;
//   } else if (roll > 3) {
//     return (roll - 3) * winnings;
//   }
//   return 0;
// }

// function score(dice) {
//   let result = 0;
//   const rollObject = {};
//   // build object with amount of each key (side/number)
//   // and calculate 3 of a kind totals
//   dice.forEach((roll) => {
//     if (rollObject[roll]) {
//       rollObject[roll]++;
//       if (rollObject[roll] === 3) {
//         if (roll === 1) {
//           result += 1000;
//         } else {
//           result += roll * 100;
//         }
//       }
//     } else {
//       rollObject[roll] = 1;
//     }
//   });

//   // check and map score for 1 and 5
//   const rollIs1 = rollObject[1];
//   const rollIs5 = rollObject[5];

//   if (rollIs1) {
//     result += handleSpecialRolls({ roll: rollIs1, winnings: 100 });
//   }
//   if (rollIs5) {
//     result += handleSpecialRolls({ roll: rollIs5, winnings: 50 });
//   }

//   return result;
// }
// console.log(score([1, 1, 1, 1, 3]));

//https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
const MORSE_CODE = require('./helpers/morseCode');
decodeMorse = function (morseCode) {
  const result = morseCode
    .trim()
    .split('  ')
    .map((morse) =>
      morse
        .split(' ')
        .map((symbol) => MORSE_CODE[symbol])
        .join('')
    )
    .join(' ');
  return result;
};

// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
// console.log(decodeMorse('   .... . -.--   '));

//https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function hashTagize(string) {
  const result = string
    .split(' ')
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join('');

  return `#${result}`;
}

function generateHashtag(string) {
  if (!string.trim()) return false;

  const hashed = hashTagize(string);

  if (hashed.length > 140) return false;

  return hashed;
}
// console.log(generateHashtag('Do We have A Hashtag'));

//https://www.codewars.com/kata/529adbf7533b761c560004e5/train/javascript

const memoized = {};
function fibonacci(n) {
  if (n < 2) return n;
  if (!memoized[n]) {
    const result = fibonacci(n - 1) + fibonacci(n - 2);
    memoized[n] = result;
    return result;
  }

  return memoized[n];
}
console.log(fibonacci(8));
