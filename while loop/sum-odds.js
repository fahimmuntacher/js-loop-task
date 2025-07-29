let num = 81; 
let sum = 0; 
while(num <= 131){
    if(num % 2 !== 0){
        console.log("The odd num:", num); 
        sum = sum + num; 
        console.log("The sum of odd num:", sum);
    }
    num++;
}