// Code your solution in this file!
const newArray= [];
const newArray2 = [];
//returns first two drivers in array
const returnFirstTwoDrivers = function(previousArray){
    return previousArray.slice(0,2)
}

//returns last two drivers in array
const returnLastTwoDrivers = function(previousArray){
    return previousArray.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function(){
        return multiplier * multiplier
    }
}

const fareDoubler = function(multipler){
   return multipler * 2
}

const fareTripler = function(multipler){
    return multipler * 3
 }

 const selectDifferentDrivers = function(arrayOfDrivers, functionX){
    switch(functionX){
        case returnFirstTwoDrivers:
            return arrayOfDrivers.slice(0,2)
        case returnLastTwoDrivers:
            return arrayOfDrivers.slice(2,4)
    }
 }
