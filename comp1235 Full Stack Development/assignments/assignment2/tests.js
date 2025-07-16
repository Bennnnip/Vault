"use strict";

const expect = window.chai.expect;

describe('_checkS', () =>  {
    it('Check the index of * in the password',  () => {
        expect(_checkS("ibntij53*")).to.deep.equal(6)
    })
})
describe('_findNumOfDigits(str)', () =>  {
    it('determines the amount of digits in the arguments', () => {
        expect(_findNumOfDigits(1000)).to.deep.equal(4)
        expect(_findNumOfDigits("abcd")).to.deep.equal(0)
        expect(_findNumOfDigits(12)).to.deep.equal(2)
        expect(_findNumOfDigits("COMP1235")).to.deep.equal(4)
        expect(_findNumOfDigits("1O2M3P5")).to.deep.equal(4)
    })
})
describe('_surplus(str)', () =>  {
    it('function that return original String that is an parameters of main function', () => {
        expect(_surplus("Orange")()).to.deep.equal("Orange")
        expect(_surplus("Pear")()).to.deep.equal("Pear")
        expect(_surplus("")()).to.deep.equal("")
    })
})
describe('_strNumbers', () =>  {
    it('function return arrays that contain string with number', () => {
        expect(_strNumbers(["1a", "a", "2b", "b"])).to.deep.equal(["1a","2b"])
        expect(_strNumbers(["abc", "abc10"])).to.deep.equal(["abc10"])
        expect(_strNumbers(["abc", "ab10c", "a10bc", "bcd"])).to.deep.equal(["ab10c","a10bc"])
        expect(_strNumbers(["this is a test", "test1"])).to.deep.equal(["test1"])
        expect(_strNumbers(["1a", "a", "2b","2", "b"])).to.deep.equal(["1a","2b"])
        expect(_strNumbers(["a", "a", "b", "b"])).to.deep.equal([])
    })
})

describe('__determineClassGrading(array)',() => {
    it('fucntion determine and return class grading as an array of [pass_grade > 50, fail, avg point]', () => {
        expect(_determineClassGrading(["50", "51", "80", 45])).to.deep.equal([3, 1, 56.5])
        expect(_determineClassGrading(["35", "45", "25", "10", "6", "33"])).to.deep.equal([0, 6, 25.7])
        expect(_determineClassGrading(["80", "90"])).to.deep.equal([2, 0, 85.0])
    })
})

describe('_moveCapitalLetters(str)',() => {
    it('function that move Capital letters to the front and other still order by original string input', () => {
        expect(_moveCapitalLetters("hApPy")).to.deep.equal("APhpy")
        expect(_moveCapitalLetters("moveMENT")).to.deep.equal("MENTmove")
        expect(_moveCapitalLetters("shOrtCAKE")).to.deep.equal("OCAKEshrt")
        expect(_moveCapitalLetters("SumMer")).to.deep.equal("SMumer")
    })
})
/***************************************************************************************
describe('yourFunctionName', () =>  {
    it('please enter your function description here',  () => {
        expect(yourFunctionName(parameters)).to.deep.equal(expected_result)
    })
})
 ***************************************************************************************/