let num = 5;
let into = 1;
let product = 0; 
let sum = 0;
while(into <= 25){
    product = num * into; 
    // console.log(product);
    console.log(num, "*", into, "=", product);
    into++;
    sum = sum + product; // additional task just the sum of all product
    
}

console.log( "The sum of product:",sum);