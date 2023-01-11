//Naive approach that works
function same(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    let correctIndex = array2.indexOf(array1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    array2.splice(correctIndex, 1);
  }
  return true;
}

//improved solution
function improvedSame(array1, array2) {
  //check if array1 and array2 are equal by length if not return false
  if (array1.length !== array2.length) {
    return false;
  }

  //declare empty object 1 to track array1 elements frequency
  let frequencyCounterOne = {};
  //declare empty object 2 to track array2 elements frequency
  let frequencyCounterTwo = {};

  //loop through array1 and create key from each array1 element and assign frequency as value
  for (let val of array1) {
    frequencyCounterOne[val] = (frequencyCounterOne[val] || 0) + 1;
  }
  //loop through array2 and create key from each array2 element and assign frequency as value
  for (let val of array2) {
    frequencyCounterTwo[val] = (frequencyCounterTwo[val] || 0) + 1;
  }

  // [1,2,3,4,2], [1,4,4,9,16]
  // {1:1, 2:2, 3:1, 4:1} {1:1, 4:2, 9:1, 16:1}

  //loop through keys of object 1
  for (let key in frequencyCounterOne) {
    //if key ** 2  doesn't exist in object 2 return false
    if (!(key ** 2 in frequencyCounterTwo)) {
      return false;
    }
    //if object 2[key**2] is not equal to object 1[key] return false
    if (frequencyCounterTwo[key ** 2] !== frequencyCounterOne[key]) {
      return false;
    }
  }
  //return true
  return true;
}

console.log(improvedSame([1, 2, 1], [1, 1, 4]));
