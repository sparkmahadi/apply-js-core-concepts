/* Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes. */

function hourToMinute(hour){
    minutes = hour * 60;
    return minutes;
}

const hour = 5;
const hourToMinuteConverter = hourToMinute(hour);
console.log(hour, 'hours is equal to :' ,hourToMinuteConverter, 'minutes');