function timeConversion(time){
  let hours = parseInt(time / 60);
  let minutes = parseInt(time % 60);
  let timeh = ""
  let timem = ""

  if (hours >= 0){
    if (hours == 1)
      timeh = `${hours} hour,`;
    else
      timeh = `${hours} hours,`;
  }
  if (minutes >= 0){
    if (minutes == 1)
      timem = `${minutes} minute`;
    else
      timem = `${minutes} minutes`;
  }
  return `${timeh} ${timem}`;
}
  
console.log(timeConversion(1));
