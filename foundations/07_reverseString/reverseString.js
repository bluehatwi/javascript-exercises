const reverseString = function(string) {
    const length = string.length;
    let reversed = ""
    for (let i = length-1; i > -1; i--){
        reversed = reversed + string[i];
    }
    return reversed;
};

let ayo = reverseString('hello there');
console.log(ayo);
// Do not edit below this line
module.exports = reverseString;
