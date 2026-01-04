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

function findRepeatedElementSet(arr) {
  const seen = new Set();
  for (let num of arr) {
    if (seen.has(num)) {
      return num
    }
    seen.add(num)
}
}

console.log(findRepeatedElementSet(nums));