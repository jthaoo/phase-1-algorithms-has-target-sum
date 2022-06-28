function hasTargetSum(array, target) {
  
  let sum = [];

  let hashTable = {};

  for (let x = 0; x < array.length; x++) {
      let sumMinus = target - array[x];

      if (hashTable[sumMinus.toString()] !== undefined) {
          sum.push([array[x]], sumMinus);
          return true;


      }
      hashTable[array[x].toString()] = array[x];
  }
  return false;
}
hasTargetSum([3, 8, 12, 4, 11, 7], 10);

if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;