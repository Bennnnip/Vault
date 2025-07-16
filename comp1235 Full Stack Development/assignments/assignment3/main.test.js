"use strict";

const expect = window.chai.expect;

const {
    Circle = () => { console.warn("Circle is missing, check the function name"); },
    calculateSalary = () => { console.warn("calculateSalary is missing, check the function name"); },
    indexMultiplier = () => { console.warn("indexMultiplier is missing, check the function name"); },
    filteredJSON = () => { console.warn("filteredJSON is missing, check the function name");},
    breakAway = () => { console.warn("breakAway is missing, check the function name");}
} = studentFunctions;


describe('Circle(radius)', () =>  {
    // Circle constructor with area and perimeter

    it("should return area 28.27 for radius 3", () => {
        expect(new Circle(3).area()).to.deep.equal(28.27);
    });

    it("should return perimeter 18.85 for radius 3", () => {
        expect(new Circle(3).perimeter()).to.deep.equal(18.85);
    });

    it("should return area 254.47 for radius 9", () => {
        expect(new Circle(9).area()).to.deep.equal(254.47);
    });

    it("should return perimeter 56.55 for radius 9", () => {
        expect(new Circle(9).perimeter()).to.deep.equal(56.55);
    });
})

describe('calculateSalary(array)', () =>  {
    // this function calculate and returns calculated total gross salary

    it("should return 400 for [8, 8, 8, 8, 8, 0, 0]", () => {
        expect(calculateSalary([8, 8, 8, 8, 8, 0, 0])).to.deep.equal(400);
    });

    it("should return 410 for [10, 10, 10, 0, 8, 0, 0]", () => {
        expect(calculateSalary([10, 10, 10, 0, 8, 0, 0])).to.deep.equal(410);
    });

    it("should return 280 for [0, 0, 0, 0, 0, 12, 0]", () => {
        expect(calculateSalary([0, 0, 0, 0, 0, 12, 0])).to.deep.equal(280);
    });
})

describe('indexMultiplier(array)', () =>  {
    // this function calculates the sum of all items in the array, each multiplied by its index

    it("should return 40 for [1, 2, 3, 4, 5]", () => {
        expect(indexMultiplier([1, 2, 3, 4, 5])).to.deep.equal(40);
    });

    it("should return -2 for [-3, 0, 8, -6]", () => {
        expect(indexMultiplier([-3, 0, 8, -6])).to.deep.equal(-2);
    });

    it("should return -34 for [15, 16, -100, 50]", () => {
        expect(indexMultiplier([15, 16, -100, 50])).to.deep.equal(-34);
    });
})

describe('filteredJSON(array)', () =>  {
    // return filters an array of JSON elements (id greater than 10, username within [M-N])

    it("should return [{id: 11, u: 'spidey'}] for [{id: 1, u: 'batman'}, {id: 11, u: 'spidey'}]", () => {
        expect(filteredJSON([{id: 1, u: "batman"}, {id: 11, u: "spidey"}])).to.deep.equal([{id: 11, u: "spidey"}]);
    });

    it("should return [] for [{id: 1, u: 'batman'}]", () => {
        expect(filteredJSON([{id: 1, u: "batman"}])).to.deep.equal([]);
    });

    it("should return [] for [{id: 11, u: 'batman'}]", () => {
        expect(filteredJSON([{id: 11, u: "batman"}])).to.deep.equal([]);
    });

    it("should return [{id: 11, u: 'spidey'}] for [{id: 11, u: 'spidey'}]", () => {
        expect(filteredJSON([{id: 11, u: "spidey"}])).to.deep.equal([{id: 11, u: "spidey"}]);
    });
})

describe('breakAway', () =>  {
    // This function divides an array (first argument) into chunk of size n (second parameter)

    it("should return [[2, 3]] for ([2, 3], 2)", () => {
        expect(breakAway([2, 3], 2)).to.deep.equal([[2, 3]]);
    });

    it("should return [[2, 3], [4, 5]] for ([2, 3, 4, 5], 2)", () => {
        expect(breakAway([2, 3, 4, 5], 2)).to.deep.equal([[2, 3], [4, 5]]);
    });

    it("should return [[2, 3], [4, 5], [6]] for ([2, 3, 4, 5, 6], 2)", () => {
        expect(breakAway([2, 3, 4, 5, 6], 2)).to.deep.equal([[2, 3], [4, 5], [6]]);
    });

    it("should return [[2, 3, 4], [5, 6, 7]] for ([2, 3, 4, 5, 6, 7], 3)", () => {
        expect(breakAway([2, 3, 4, 5, 6, 7], 3)).to.deep.equal([[2, 3, 4], [5, 6, 7]]);
    });

    it("should return [[2], [3], [4], [5]] for ([2, 3, 4, 5], 1)", () => {
        expect(breakAway([2, 3, 4, 5], 1)).to.deep.equal([[2], [3], [4], [5]]);
    });

    it("should return [[2, 3, 4, 5, 6, 7]] for ([2, 3, 4, 5, 6, 7], 7)", () => {
        expect(breakAway([2, 3, 4, 5, 6, 7], 7)).to.deep.equal([[2, 3, 4, 5, 6, 7]]);
    });
})