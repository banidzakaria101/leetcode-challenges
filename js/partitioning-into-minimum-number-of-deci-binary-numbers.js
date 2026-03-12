minPartitions("32"); // Output: 3

var minPartitions = function(n) {
    let maxDigit = 0;

    for (const char of n) {
        maxDigit = Math.max(maxDigit, Number(char));
    }

     return maxDigit;
}