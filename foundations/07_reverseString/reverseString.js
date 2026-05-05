const reverseString = function(string) {
    let reversedString = ""
    const iteration = string.length
    for (let char of string) {
        reversedString = char + reversedString;
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
