const numms = [1, 5]; 
const head = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var modifiedList = function(nums, head) {
    const numSet = new Set(nums);
    return filtredList = head.filter(value => !numSet.has(value));
};

console.log(modifiedList(numms, head));