const nums = [2,7,11,15,0,1,3];
let target = 10;

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] + nums[j] === target && i !== j) {
          return [i, j];
        }
      }
    }
};

var twoSum2 = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement) ,i ];
    } else {
      map.set(nums[i], i)
    }
  }
  return [];
};

console.log(twoSum2(nums, target));