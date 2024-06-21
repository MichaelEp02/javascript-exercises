const removeFromArray = function(arr, ...args) {
    const varr = [];
    loop1:
    for (val of arr){
        for(cval of args){
            if(val === cval){
                continue loop1;
            }
        }
        varr.push(val)
    }
    return varr;
};

// Do not edit below this line
module.exports = removeFromArray;