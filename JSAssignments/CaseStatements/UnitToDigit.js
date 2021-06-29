const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a Number ? ", function(number) {
    
    switch(number) {
        case '1':
            console.log("Unit");
                    break;
        case '10':
            console.log("Ten");
            break;
        case '100':
            console.log("Hundred");
            break;
        case '1000':
            console.log("Thousand");
            break;
        default:
            console.log("Invalid Input Entered!!");
        }

});