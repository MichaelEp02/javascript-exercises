const reverseString = function(str) {
   let res = ''
   for(i=0; i<str.length; i++){
        res += str[str.length - 1 -i]
   } 
   return res;
};

// Do not edit below this line
module.exports = reverseString;
