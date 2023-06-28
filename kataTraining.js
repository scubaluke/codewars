///https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

function handleSpecialRolls({ roll, winnings }) {
  if (roll < 3) {
    return roll * winnings;
  } else if (roll > 3) {
    return (roll - 3) * winnings;
  }
  return 0;
}

function score(dice) {
  let result = 0;
  const rollObject = {};
  // build object with amount of each key (side/number)
  // and calculate 3 of a kind totals
  dice.forEach((roll) => {
    if (rollObject[roll]) {
      rollObject[roll]++;
      if (rollObject[roll] === 3) {
        if (roll === 1) {
          result += 1000;
        } else {
          result += roll * 100;
        }
      }
    } else {
      rollObject[roll] = 1;
    }
  });

  // check and map score for 1 and 5
  const rollIs1 = rollObject[1];
  const rollIs5 = rollObject[5];

  if (rollIs1) {
    result += handleSpecialRolls({ roll: rollIs1, winnings: 100 });
  }
  if (rollIs5) {
    result += handleSpecialRolls({ roll: rollIs5, winnings: 50 });
  }

  return result;
}

// console.log(score([2, 3, 4, 6, 2]));

console.log(score([1, 1, 1, 1, 3]));
