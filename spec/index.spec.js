"use strict";

var firstN = require("../index.js");

describe('firstN elements', function() {
    it('should work without conditionFn', function () {
        expect(firstN([1,2,3], 2)).toEqual([1,2]);
        expect(firstN([1,2,3], -3)).toEqual([]);
    });
    it('should work for strings', function() {
        expect(firstN('abcdaae', 2, function(val) {return val === 'a';})).toEqual(['a','a']);
    });
    it('should ignore holes in the array', function() {
        expect(firstN([1,2,,,5, 6], 2, function(val) {return val % 2 === 0;})).toEqual([2,6]);
    });
    it('should return less elements if N not found', function () {
        expect(firstN([1,2,3,4,5,6,7,9], 4, function(val) {return val %2 === 0;})).toEqual([2,4,6]);
    });
    it('should return N elements if more than N present', function () {
        expect(firstN([1,2,3,4,5,6,8,9, 10], 4, function(val) {return val %2 === 0;})).toEqual([2,4,6,8]);
    });
    it('should work when thisArg passed to the conditionFn', function() {
        expect(firstN([1,2,3,4,5,6,7,8, 10], 4, function(val) {
            return val % this.divisor === 0;
        }, {divisor: 2})).toEqual([2,4,6, 8]);
    });
});
