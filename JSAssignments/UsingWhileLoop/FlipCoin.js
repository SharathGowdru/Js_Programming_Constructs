const head = 0;
const tail = 1;

let heads = 0;
let tails = 0;
while (heads != 11 && tails != 11) {
    var coin = Math.floor(Math.random()*10) % 2;
    if(coin == head) {
        heads++;
    } else {
        tails++;
    }
}
    if(heads == 11) {
        console.log("Head Wins! " + heads);
    } else {
        console.log("Tails Wins! " + tails);
    }