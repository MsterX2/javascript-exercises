const removeFromArray = function(array, ...numbers) {
    let resultingArray = array.slice()
    for (let number of numbers) {
        let index = resultingArray.indexOf((number))
        if (index !== -1) {
            resultingArray = resultingArray.filter(
                item => item !== number 
            )
        }
    }
    return resultingArray;

};

// Do not edit below this line
module.exports = removeFromArray;
