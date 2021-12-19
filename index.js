/**
 * Declaration of Global properties.
 */
var alphabets = "abcdefghijklmnopqrstuvwxyz";
var alphabetsArr = alphabets.split("");
var groupOfAlphabetsArr = [];
var cityVehicleLists = [];

/**
 * Find the alphabets group's i.e AA,AB,CD etc.
 *
 * @param  [string] alphabet
 * @return [array] groupOfAlphabetsArr  
 */
const checkIfMatch = (alphabet) => {

    const i = alphabetsArr.findIndex((element,index) =>{ 
        var groupOfAlphabets = element+alphabet;
        groupOfAlphabetsArr.push(groupOfAlphabets); 
    });

    return groupOfAlphabetsArr;
}

/**
 * Get the alphabets group's i.e AA,AB,CD etc.
 */
const getTheAlphabetGroups = (alphabetsArr) =>{
    for (let index = 0; index < alphabetsArr.length; index++) {
        const element = alphabetsArr[index];
        checkIfMatch(element);
    }
}

getTheAlphabetGroups(alphabetsArr);


var totalAlphaNonAlphaCanBe = (groupOfAlphabetsArr.length + 26);

var maxNumbersLimit = 9999;

/**
 * Merge the group of alphabetsArr and groupOfAlphabetsArr to make it like A,B,C,AA,AB,CD etc.
 */
var totalAlphabetsArr = [...alphabetsArr,...groupOfAlphabetsArr];

/**
 * Check the number which length is less than four and make them like 0001, 0021 etc.
 *
 * @param  [number] number
 * @return [string] theNumber 
 */
const lengthOfaNumber = (number) =>{
    var str = "" + number
    var pad = "0000"
    var theNumber = pad.substring(0, pad.length - str.length) + str; 
    return theNumber;
}


/**
 * Gather the list of the Vehical numbers across the city of the state
 *
 * @param  [string] stateCode
 * @param  [string] cityCode
 * @param  [boolean|string] alphabet
 * @param  [array] lisOfNumbers
 * @return [array] cityVehicleLists 
 */
const gatherVehicalNumbersList = (stateCode,cityCode,alphabet,lisOfNumbers) =>{
    var cityDetails = '';

    if(!alphabet){
        cityDetails = `${stateCode} ${cityCode} `;
    }else{
        cityDetails = `${stateCode} ${cityCode} ${alphabet.toUpperCase()} `;
    }

    for (let index = 1; index <= lisOfNumbers; index++) {
        var element = index;
        var theNumber = cityDetails + lengthOfaNumber(element);  
        cityVehicleLists.push(theNumber); 
    } 

    return cityVehicleLists;
}

/**
 * Find the list of the Vehical numbers across the city of the state
 *
 * @param  [string] stateCode
 * @param  [string] cityCode
 * @return [array] cityVehicleLists 
 */  
const getVehicalNumbersList = (stateCode,cityCode) =>{

    gatherVehicalNumbersList(stateCode,cityCode,null,maxNumbersLimit);

    for (let index = 0; index < totalAlphabetsArr.length; index++) {
        const element = totalAlphabetsArr[index]; 
        gatherVehicalNumbersList(stateCode,cityCode,element,maxNumbersLimit);
            
    }  

    return cityVehicleLists;
}

/**
 * Call this function to get the list of the Vehical numbers across the city of the state. I am consoling it as of now.
 *
 * @param  [string] stateCode
 * @param  [string] cityCode
 * @return [array] cityVehicleLists 
 */ 
console.log(getVehicalNumbersList("HR","01")); 