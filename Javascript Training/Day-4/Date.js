// Create a Date Object

const date = new Date();
console.log(date);

console.log(date.toString());      // Full readable format
console.log(date.toDateString());  // Only date
console.log(date.toTimeString());  // Only time
console.log(date.getFullYear());   // Year
console.log(date.getMonth());      // Month (0-indexed: Jan=0)
console.log(date.getDate());       // Day of the month
console.log(date.getDay());        // Weekday (0=Sunday)
console.log(date.getHours());      // Hour
console.log(date.getMinutes());    // Minutes
console.log(date.getSeconds());    // Seconds

const timeStamp=Date.now();
console.log(timeStamp);


const d = new Date();
const formatted = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
console.log("Formatted:", formatted); // DD/MM/YYYY
