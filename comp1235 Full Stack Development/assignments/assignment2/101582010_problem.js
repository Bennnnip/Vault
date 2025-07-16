"use strict";

const _checkS = function(password){
    const passwd = String(password)
    const check = passwd.match(/[a-zA-z]/g)
    if (check !== null)
        return check.length;
    else
        return 0;
}

function _findNumOfDigits(str){
    const findstr = String(str);
    const digits = findstr.match(/\d/g);
    // findstr contain with (input) params then using Regex Match each letters of string and store an arrays of strings
    // that this digit in variable digits
    if (digits !== null)
        return digits.length; // return length of arrays that is digit in string
    else
        return 0; // if no digit match in string = null return will show '0'
}

function _surplus(str){
    const Show_surplus = () => str // using arrow function
    return Show_surplus; // function that use to execute and show return as another function
}

function _strNumbers(array) {
    const filtered = array.filter(str => /[a-zA-z]/.test(str) && /\d/.test(str))
    //filter by using regex to find any alphabet and number that are together in an arrays
    return filtered;
}

const _determineClassGrading = function (array){
        let sum = 0;
        for (let i = 0; i < array.length; i++){
            sum += Number(array[i])
            //find sum of the point in an arrays to calculated average poijnt
        }
        let avg_Point = Number((sum / array.length).toFixed(1))
        //to fixed to fix value to one decimal place
        const pGrade = array.filter(score => score >= 50) //filter score in an array only score => 50
        if (pGrade === [])
            pGrade.length = 0;
        const fGrade = array.length - pGrade.length; //find fail grading by array,length - passgrading
        return [pGrade.length, fGrade, avg_Point]; // return inform of an arrays
}

const _moveCapitalLetters = function (str) {
    const moveWords = str
    const letTers = moveWords.split('') //spit string in to alphabet as an arrays
    const caPital = letTers.filter(char => (/[A-Z]/.test(char))); //filter to see capital letter from spitted string
    const loWer = letTers.filter(char => (/[a-z]/.test(char))); // filter to see lower letter from spitted string
    caPital.join("") //join an arrays that get from filtered of capital letters
    loWer.join("") //join an arrays that get from filtered of lower letters
    return caPital.join("").concat(loWer.join("")).toString() // use concat to combine 2 strings in to one string as return
}

