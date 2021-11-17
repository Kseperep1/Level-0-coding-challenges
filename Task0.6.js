function maximum(){
    let max = arguments[0];
    let len = maxLen(arguments);
      
    for (let i = 0; i < len; i++){
      if (arguments[i] >= max)
        max = arguments[i];
    }
    return max;
}

function maxLen(num){
    let i = 0;
    while (num[i])
        i++;
    return i;
}

console.log(maximum(-23,-6,-8,-3,-9,-45));
