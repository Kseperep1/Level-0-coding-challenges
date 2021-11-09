function maximum(){
    let max = 0;
    let curr = 0;
    let len = maxLen(arguments);
    
    for (let i = 0; i < len; i++){
        curr = arguments[i];
        if (curr > max)
            max = curr;
    }
    return max;
}

function maxLen(num){
    let i = 0;
    while (num[i])
        i++;
    return i;
}

console.log(maximum(23,6,8,13,9,45));
