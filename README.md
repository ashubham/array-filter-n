# array-filter-n 	

<a href="https://travis-ci.org/ashubham/array-filter-n">
  <img src="https://api.travis-ci.org/ashubham/array-filter-n.svg?branch=master" class="badge">
</a>

The filterN() method creates a new array with the first N elements that pass the test implemented by the provided function. Fast!

## Syntax

`filterN(inputArr, N, checkFn[, thisArg])`

The checkFn is the standard EcmaScript `function (elem, index, array)`

`thisArg` if supplied is set as the `this` context for `checkFn`.

## Usage

```javascript
var filterN = require('array-filter-n');

var filter4even = 
    filterN([12, 8, 3, 1, 0, 4, 7, 9, 12], 4, function(i) { return !i%2});
//=> [12, 8, 0, 4]

// works also on strings
var filter3nums = 
    filterN('n0d3_R0ck5', 3, function(c) { return !isNaN(parseInt(c)); });
//=> [0, 3, 0]

// Fastened safety belts
var first4pallindromes = 
    filterN(['aat', 'aba', 'pop'], 5, function (s) { 
        s == s.split('').reverse().join(''); 
    });
//=> ['aba', 'pop']

var crazy = filterN([1,2,3,4], -3);
//=> []

var notSoCrazy = filterN([1,2,3,4], 3);
//=> [1, 2, 3]
```
