const nums = [2,1,2,5,3,2];

function findRepeatedElement(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length ; i++) {
    if (arr[i] === arr[i-1]){
      return arr[i];
    }
  }
}

console.log(findRepeatedElement(nums));