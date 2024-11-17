const removeFromArray = function(arr,...args) {
    let newArr = arr
    for (let arg of args) {
        while (newArr.includes(arg)){
            newArr = newArr.toSpliced(newArr.indexOf(arg),1);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
