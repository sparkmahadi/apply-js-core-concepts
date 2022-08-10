/* Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result. */

function findLeapYear(year){
    let leapYears = [];
    for(let i=0; i<year.length; i++){
        let index = i;
        let element = year[index];
        console.log(element);

        if(element %4 === 0){
            leapYears.push(element);
        }
    }
    return leapYears;
}

const year = [2023,2024,2025,2028,2030,2031]
const isLeapYear = findLeapYear(year);
console.log(isLeapYear);