const sumAll = function(a, b) {
    // Check for invalid inputs
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }
    if (a < 0 || b < 0) {
        return "ERROR";
    }

    // Ensure `a` is the smaller number and `b` is the larger number
    let start = Math.min(a, b);
    let end = Math.max(a, b);

    // Calculate the sum
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
