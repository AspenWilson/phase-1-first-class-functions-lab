// Code your solution in this file!
const returnFirstTwoDrivers = function () {
    return ['Antonia','Nuru'];
}

const returnLastTwoDrivers = function () {
    return ['Amari','Mo'];
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier() {
    return function (fare) {
        return fare * 5;
    }
}

function fareDoubler (fare) {
    return fare*2;
}

function fareTripler (fare) {
    return fare*3;
}


const selectDifferentDrivers = (arrayOfDrivers,returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers);
}




