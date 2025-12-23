const repeatString = function(string, num) {
    result = "";
    if (num < 0){
        return 'ERROR';
    }
    for (let i = 0; i < num; i++){
        result = result.concat(string);
    }
    return result;
};
let str = repeatString('hey', 3);
console.log(str);
// Do not edit below this line
module.exports = repeatString;
