function anagram(str1, str2) {
  //if str1 and str2 aren't equal return false
  if (str1.length !== str2.length) {
    return false;
  }
  //if str1 and str2 are empty return true
  if (str1.length === "" && str2.length === "") {
    return true;
  }
  //create str 1 object 1
  let frequencyCounterOne = {};
  //create str 2 object 2
  let frequencyCounterTwo = {};
  //iterate over str1 and populate obejct 1 with char as key and frequency as value
  for (let val of str1) {
    frequencyCounterOne[val] = (frequencyCounterOne[val] || 0) + 1;
  }
  //iterate over str2 and populate obejct 2 with char as key and frequency as value
  for (let val of str2) {
    frequencyCounterTwo[val] = (frequencyCounterTwo[val] || 0) + 1;
  }
  //loop over keys of object 1
  for (let keys in frequencyCounterOne) {
    //if key ** 2 doesn't exist in object 2 return false
    if (!(keys in frequencyCounterTwo)) {
      return false;
    }
    //if object 2[key**2] isn't equal to object 1[key] return false
    if (frequencyCounterTwo[keys] !== frequencyCounterOne[keys]) {
      return false;
    }
  }
  //if all fails return true
  return true;
}

console.log(anagram("anagram", "nagaram")); //true
console.log(anagram("", "")); //true
console.log(anagram("anagram", "naggaram")); //false
