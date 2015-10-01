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
