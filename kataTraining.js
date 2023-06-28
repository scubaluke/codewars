///https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

function score(dice) {
  let result = 0;
  const rollObject = {};
  // build object with ammount of each key (side/number)
  dice.forEach((roll) => {
    if (rollObject[roll]) {
      rollObject[roll]++;
      if (rollObject[roll] === 3) {
        if (roll === 1) {
          result += 1000;
        }
        result += roll * 100;
      }
    } else {
      rollObject[roll] = 1;
    }
  });
  console.log(rollObject);
  // check and map score

  if (rollObject[1] === 1) {
    result += 100;
  }

  if (rollObject[5] === 1) {
    result += 50;
  }

  return result;
}
