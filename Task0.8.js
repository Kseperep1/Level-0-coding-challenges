function timeConversion(time){
    let hours = parseInt(time / 60);
    let minutes = parseInt(time % 60);

    if (hours <= 1 && minutes == 0 || minutes > 1)
        return hours + " hour, " + minutes + " minutes";
    else if (hours <= 1 && minutes <= 1)
        return hours + " hour, " + minutes + " minute";
    else if (hours > 1 && minutes <= 1)
        return hours + " hours, " + minutes + " minute";
    else if (hours > 1 && minutes > 1)
        return hours + " hours, " + minutes + " minutes";
  }
  
  console.log(timeConversion(60));
