

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier){
    return function(parameter){
        return fareMultiplier * parameter;
    }
} 
const fareDoubler = function createFareMultiplier(number){
        number *= 2;
        return number;
}

const fareTripler = function createFareMultiplier(number){
        number *= 3;
        return number;
}
function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}
function selectDifferentDrivers(drivers, returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers);
}