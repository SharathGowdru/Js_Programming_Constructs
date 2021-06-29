let min = 999;
let max = 0;
for ( var i = 1; i<=5; i++) {
    let randomNumber= Math.floor(Math.random()*900)+100;
    console.log("the no is :" + randomNumber);
    let number = randomNumber
    if (number < min)
    {
        min = number;
    }
    if (number > max)
    {
        max = number;
    }
       
}
console.log("Minimum is : " + min);
console.log("Maximum is : " + max);