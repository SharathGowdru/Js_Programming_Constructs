readline=require("readline-sync")
let base=readline.question("Enter the base range :")
let top=readline.question( "Enter the upper range :")
let flag=1;
for (let i=top+1; i <= top-1; i++ )
{
    let flag=0;
      for ( let j=2; j <= i-1; j++ )
        {
          if ( i % j == 0 )
            {
               flag=1;
               break;
            }
        }
                if  (flag == 0 )
                console.log( "The  prime  numbers are :" + i);
                
    }
    if(flag == 1)
    console.log("No prime numbers in the range");