// even numbers sum
let sum = 0;
for(let i = 51; i <= 85; i++){
    if(i % 2 == 0){
        // console.log("The even num is:", i);
        sum = i + sum;   
    }
}
// console.log("The sum of even number is:", sum);


// odd numbers sum 

let summation = 0;
for(let i = 91; i <= 129; i++){
    if(i % 2 !== 0){
        console.log("The even num is:", i);
        summation = i + summation;   
        console.log("The summation of even number is:", summation);
    }
}
// console.log("The summation of even number is:", summation);