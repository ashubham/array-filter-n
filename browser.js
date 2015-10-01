(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.arrayFirstN = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports =
    
    /**
     * Method to return the first N elements of an Array that satisfy the given
     * conditionFn. If we are not able to find N elements, we return with whatever 
     * was found.
     * This also works for array like objects and strings
     *
     * @param {Array|String|Object} array input array
     * @param {Number} N
     * @param {Function} [conditionFn] condition callback adheres to the standard ES fn(elem, idx, array)
     * @param {Object} [thisArg]
     * @returns {Array}
     */
     
    function(array, N, conditionFn /*, thisArg*/) {
        /* Converts primitives to wrapper Object, e.g. strings => indexed array*/
        var arr = Object(array); 
        /* Gracefully converts non-integer lengths to 32bit UInt */
        var len = arr.length >>> 0; 
        var n = 0;
        
        /* Just return the first N elements if condition is not defined */
        if(typeof conditionFn !== 'function') {
            if(N < 0) N = 0;
            return arr.slice(0, N);
        }

        var res = new Array(N);
        /* initialize thisArg to undefined if not supplied */
        var thisArg = arguments.length >= 4 ? arguments[3] : void 0;

        for(var i = 0; n < N && i < len ; i++) {
            if(i in arr) {
                var val = arr[i];
                if(conditionFn.call(thisArg, val, i, arr)) {
                    res[n] = val;
                    n++;
                }
            }
        }
        
        /* trim the array if shorter than N */
        res.length = n;
        return res;
    }

},{}]},{},[1])(1)
});
