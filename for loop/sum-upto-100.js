let sum = 0; 
for(let i = 1; i++;){
    if(i % 2 == 0){
        
        sum = i + sum;
        if(sum >= 100){
            break;
        }
        console.log("Even Number:", i);
        console.log("The sum is:", sum); 
    }  
}
console.log("You've reach");
