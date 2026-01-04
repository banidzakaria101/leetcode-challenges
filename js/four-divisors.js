const nums = [21,4,7];

var sumFourDivisors = function(nums) {
    let total = 0;
    for (let num of nums) {
        let divisors = new Set();
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                divisors.add(i);
                divisors.add(num / i);
            }
        }
        if (divisors.size === 4) {
            total += Array.from(divisors).reduce((sum, val) => sum + val, 0);
        }
    }
    return total;
};

console.log(sumFourDivisors(nums));