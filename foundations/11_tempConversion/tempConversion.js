const convertToCelsius = function(temp) {
  let num = ((temp-32)*(5/9));
  return +num.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  let num = ((temp*(9/5))+32);
  return +num.toFixed(1);
};

console.log(convertToCelsius(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
