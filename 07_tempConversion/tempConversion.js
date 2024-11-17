const convertToCelsius = function(temp) {
  temp = ((temp - 32) * 5 / 9);
  if (temp%1 == 0) return temp;
  return temp.toFixed(1) / 1;
};

const convertToFahrenheit = function(temp) {
  temp = ((temp * 9 / 5) + 32);
  if (temp % 1 == 0) return temp;
  return temp.toFixed(1) / 1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
