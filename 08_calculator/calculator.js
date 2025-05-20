const add = function(a,b) {
	return Number(a)+Number(b);
};

const subtract = function(a,b) {
	return Number(a)-Number(b);
};

const sum = function(array) {
	return array.reduce((total,num) => total+num ,0);
};

const multiply = function(array) {
return array.reduce((total,num) => total*num ,1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	if (a==0) {
    return 1;
  }else{
    let fact = 1;
    for (let i = 1; i <= a; i++) {
      fact *= i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
