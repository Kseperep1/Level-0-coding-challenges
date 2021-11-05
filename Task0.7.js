function toFahrenheit(temp){
    let fahren = (temp * 9/5) + 32;
    return +fahren.toFixed(2) + "°f";
}

function toCelsius(temp){
    let celsius = (temp - 32) * 5/9;
    return +celsius.toFixed(2) + "°c";
}

console.log(toCelsius(80));
console.log(toFahrenheit(0));
