/* Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers. */


function findOddSum(numbers){
    let oddNumbers = [];
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        let element = numbers[i];

        if(element % 2 !== 0){
            sum = sum + element;
        }
    }
    return sum;
}

const numbers = [5,7,8,10,45,30];
const oddNumberSum = findOddSum(numbers);
console.log(oddNumberSum);