const sumAll = function(a, b) {
    if (a < 0 || b < 0){
        return "ERROR";
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR";
    }
    if (a > b) {
    const temp = b;
    b = a;
    a = temp;
  }
    const length = (b - a)+1;
    let nextNum = a;
    let sum = 0;
    for (let i = 0; i < length; i++){
        sum = (sum + nextNum);
        nextNum = nextNum + 1;
    }
    return sum;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
