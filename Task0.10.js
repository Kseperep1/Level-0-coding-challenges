function commonLetters(str1, str2){
    let lowerStr1 = str1.toLowerCase();
    let lowerStr2 = str2.toLowerCase();
    let arrayStr1 = [...lowerStr1];
    let arrayStr2 = [...lowerStr2];
    let commons = [];
    let len = arrayStr1.length;
    let len2 = arrayStr2.length;
    let strChar1;
    let strChar2;

    for (let i = 0; i < len; i++) {
        strChar1 = arrayStr1[i];
        for (let j = 0; j < len2; j++){
            strChar2 = arrayStr2[j];
            if (strChar2 === strChar1){
                if (commons.indexOf(strChar2) === -1)
                    commons.push(strChar2);
            }
        }
    }
    console.log("Common letters: " + commons);
}
  
commonLetters("Kamogelo", "Umuzi");
