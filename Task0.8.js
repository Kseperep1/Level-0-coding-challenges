function timeConversion(time){
    let hours = parseInt(time / 60);
    let minutes = parseInt(time % 60);
    let timeh = ""
    let timem = ""
  
    if (hours >= 0)
        hours == 1 ? timeh = `${hours} hour,` : timeh = `${hours} hours,`;
    if (minutes >= 0)
        minutes == 1 ? timem = `${minutes} minute` : timem = `${minutes} minutes`;
    return `${timeh} ${timem}`;
  }
    
console.log(timeConversion(61));
