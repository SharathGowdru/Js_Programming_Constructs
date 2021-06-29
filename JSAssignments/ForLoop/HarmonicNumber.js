readline=require("readline-sync")
let n =readline.question("Enter a number : " )
let harmonic = "";
for (let i = 1; i <= 5; i++) {
  console.log(harmonic + "1/" + i + " or " + 1 / i);
}
