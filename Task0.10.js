function commonLetters(str1, str2){
    let arrayStr1 = [...str1.toLowerCase()];
    let arrayStr2 = [...str2.toLowerCase()];
    let len = arrayStr1.length;
    let len2 = arrayStr2.length;
    let commons = [];
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
