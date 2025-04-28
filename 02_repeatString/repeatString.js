const repeatString = function(string,num) {
    if (num < 0) {
        return "ERROR";
    }
let some = "";
for(let i =0;i<num;i++){
    some+=string;
}
    return some;
};

// Do not edit below this line
module.exports = repeatString;
