// Factorial function in normal way using for loop:

/* function factorial(number){
    let result = 1;
    for(let i=1; i<=number; i++){
        result = result * i;
    }
    return result;
}
const number = 6;
const fact = factorial(number);
console.log('factorial of', number, 'is :', fact); */







// Factorial function in reverse way using for loop:
/* function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
    }
    return result;
}

const number = 5;
const fact = factorial(number);
console.log('Factorial of ',number, 'is : ', fact); */






// factorial function using while loop in increamenting or normal way

/* function factorial(number){
    let result = 1;
    let i = 1;
    while(i<=number){
        result = result*i;
        i++;
    }
    return result;
}
const number = 4;
const fact = factorial(number);
console.log('Factorial of ',number, 'is : ', fact); */





// factorial function using while loop in decreamenting or reverse way

function factorial(number){
    let result = 1;
    let i = number;
    while(i>=1){
        result = result * i;
        i--;
        console.log(i);
    }
    return result;
}
const number = 5;
const fact = factorial(number);
console.log('Factorial of ',number, 'is : ', fact);
