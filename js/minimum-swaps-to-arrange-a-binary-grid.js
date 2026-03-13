var minSwaps = function(grid) {
    const n = grid.length;
    const zeros = [];

    // count trailing zeros
    for (let row of grid) {
        let count = 0;
        for (let j = n - 1; j >= 0; j--) {
            if (row[j] === 0) count++;
            else break;
        }
        zeros.push(count);
    }

    let steps = 0;

    for (let i = 0; i < n; i++) {
        let needed = n - i - 1;
        let j = i;

        while (j < n && zeros[j] < needed) {
            j++;
        }

        if (j === n) return -1;

        while (j > i) {
            [zeros[j], zeros[j - 1]] = [zeros[j - 1], zeros[j]];
            steps++;
            j--;
        }
    }

    return steps;
};