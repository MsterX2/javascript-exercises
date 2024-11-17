const sumAll = function(min, max) {
    if (!(Number.isInteger(min) && Number.isInteger(max))) return "ERROR";
    if (!(Math.sign(min) == 1 && Math.sign(max) == 1)) return "ERROR";
    if (min > max)[min, max] = [max, min];
    const cantDeNum = max - min + 1;
    return (max + min) * cantDeNum/2;
};

// Do not edit below this line
module.exports = sumAll;
