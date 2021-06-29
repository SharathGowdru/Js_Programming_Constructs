const readline6 = require("readline").createInterface({
    input: process.stdin,
    output:process.stdout
});
  
readline6.question("Enter a number", (number) => {
var InputNum = number;
lowerLimit = 1;
upperLimit = 100;
flag = 0;
mid = 0;

while(flag == 0){
   
    mid = Math.floor(lowerLimit + upperLimit) / 2;

    if(InputNum == mid){
        console.log(InputNum + " is the magic number.");
        flag = 1;
    }
    else if (InputNum > mid) {
        lowerLimit = mid + 1;
    }
    else {
        upperLimit = mid - 1;
    }
}
    readline6.close();
});