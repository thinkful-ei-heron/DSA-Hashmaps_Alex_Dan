/* eslint-disable strict */
//Question One

const HashMap = require(`./hashmap`);

function main() {
  const lotr = new HashMap();
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  // lotr.set('Hobbit', 'Bilbo');
  // lotr.set('Hobbit', 'Frodo');
  // lotr.set('Wizard', 'Gandalf');
  // lotr.set('Human', 'Aragorn');
  // lotr.set('Elf', 'Legolas');
  // lotr.set('Maiar', 'The Necromancer');
  // lotr.set('Maiar', 'Sauron');
  // lotr.set('RingBearer', 'Gollum');
  // lotr.set('LadyOfLight', 'Galadriel');
  // lotr.set('HalfElven', 'Arwen');
  // lotr.set('Ent', 'Treebeard');

  // console.log(lotr.get('Maiar'));
  // console.log(lotr.get('Hobbit'));

  // display(lotr);

  //removeDupes('google');
  //removeDupes('google all that you think can think of');

  console.log(palindrome('xxxe'));
  console.log(palindrome('racecar'));
  console.log(palindrome('dad'));
  console.log(palindrome('abdbdba'));
  console.log(palindrome('tattarrattat'));
}

function display(map) {
  for (let i = 0; i < map._hashTable.length; i++) {
    if (map._hashTable[i]) console.log(map._hashTable[i]);
  }
  console.log(map._capacity);
}

main();

//All of the items in the series of .set calls were not returned when the
//hash map was displayed.

//The value of 'Maiar' is 'Sauron' and the value of 'Hobbit' is 'Frodo'.
//When we go through and set all of the above key-value pairs in our
//hash map, the second time we set 'Maiar' and 'Hobbit' will overwrite
//the current value connected to those keys, erasing 'The Necromancer'
//and 'Bilbo'.

//The capacity after all of the items have been hashed is 24. We resize
//from the initial capacity of 8 and the size ratio has been set in
//the main function to three, which increases the capacity by three times
//once the number of items hits five.

//Question 2
//This function demonstrates what happens when keys are the same when
//inserting into a hash map. The output at the end should read 20 and
//then 10 because each instance of the .set function has the same key
//value, so the last .set call for each hash map resets the value for that
//key.

//Question 3
//   0  1   2   3  4 5  6  7  8  9  10
//   22|88|___|___|4|15|28|17|59|31|10|

// 0    1 2 3   4   5 6   7  8   9
// ___|28|20|12|___|5|15|___|17|___|
//      19            33
//      10

//Question 4

function removeDupes(input) {
  const dupes = new HashMap(input.length * 2);
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;
  let newString = '';
  for (let i = 0; i < input.length; i++) {
    // if(!dupes.get(input[i])) {
    //   dupes.set(input[i]);
    //   newString = newString + input[i];
    // }
    try {
      dupes.get(input[i]);
    } catch (error) {
      dupes.set(input[i]);
      newString = newString + input[i];
    }
  }
  console.log(newString);
  return newString;
}

function palindrome(input) {
  const palinCheck = new HashMap(input.length * 2);
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;
  let repeatCount = 0;
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
    try {
      let val = palinCheck.get(input[i]);
      if (val) repeatCount += 2;
      else repeatCount++;
      palinCheck.set(input[i], false);
    } catch (error) {
      palinCheck.set(input[i], true);
    }
  }

  console.log(repeatCount);

  if (input.length % 2 !== 0 && repeatCount === input.length - 1) {
    return true;
  } else if (repeatCount === input.length) {
    return true;
  }

  return false;
}
