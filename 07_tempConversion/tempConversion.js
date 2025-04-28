function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
const convertToCelsius = function(i) {
    return round((i-32)/1.8 , 1);
};

const convertToFahrenheit = function(j) {
  return round((j*1.8)+32 , 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
