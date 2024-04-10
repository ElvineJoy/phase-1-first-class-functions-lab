// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (){
  console.log(drivers.slice(0,2));
  return drivers.slice(0,2);
}
returnFirstTwoDrivers();

// should return an array of the last two drivers

const returnLastTwoDrivers = function (drivers) {
    console.log(drivers.slice(-2));
    return drivers.slice(-2);
}
returnLastTwoDrivers(drivers);

// This is an array containing two elements: the two functions that we previously defined.

const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
console.log(selectingDrivers);

// 4. a higher-order function that takes in one argument, an integer, and returns a function that will 
// multiply a fare for ride accordingly.

function createFareMultiplier (number) {
    return function (value) {
        return number * value;
    };
};
// 5. faredoubler
const fareDoubler = createFareMultiplier(2);

// 6. tripple fare
const fareTripler = createFareMultiplier(3);

// lastly 
function selectDifferentDrivers (selectingDrivers, aFunc) {
    return aFunc(selectingDrivers);
};