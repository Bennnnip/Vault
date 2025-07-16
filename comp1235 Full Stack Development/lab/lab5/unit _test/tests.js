"use strict";

const chai = window.chai;
const expect = chai.expect;

describe('calculate', () =>  {
    it('the division of 2 num calculated as a return',  () => {
        expect(calculate(100,4)).to.deep.equal(25)
    })
})

/***************************************************************************************
describe('yourFunctionName', () =>  {
    it('please enter your function description here',  () => {
        expect(yourFunctionName(parameters)).to.deep.equal(expected_result)
    })
})
 ***************************************************************************************/