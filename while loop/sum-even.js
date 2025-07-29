let num = 206;
let sum = 0; 
while(num <= 311){
    if(num % 2 == 0){
        console.log("The even num:", num);
        sum = num + sum; 
        console.log("The sum of even number is:", sum);  
    }
    num++
}