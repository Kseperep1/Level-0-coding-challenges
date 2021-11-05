function vowels(str){
    let char = 0;
    let chars = [];
    let lowerStr = str.toLowerCase();
    let arrayStr = [...lowerStr];
    let len = arrayStr.length;

    
    for (let j = 0; j < len; j++) {
        char = arrayStr[j];
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            if (chars.indexOf(char) === -1)
                chars.push(char);
        }
    }
    console.log("Vowels: " + chars);
}
  
vowels("Umuzi");
