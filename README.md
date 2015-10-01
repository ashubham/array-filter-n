# array-first-n &nbsp;<a>	<img src="https://api.travis-ci.org/ashubham/array-first-n.png"/>  </a>

The firstN() method creates a new array with the first N elements that pass the test implemented by the provided function. Fast!

## Install with [npm](npmjs.org)

```bash
npm i array-first-n --save
```

## Syntax

`firstN(inputArr, N, checkFn[, thisArg])`

The checkFn is the standard EcmaScript:
`function (elem, index, array) {}`

`thisArg` if supplied is set as the `this` context for `checkFn`.

## Examples

```javascript
var firstN = require('array-first-n');

var first4even = firstN([12, 8, 3, 1, 0, 4, 7, 9, 12], 5, function(i) { return !i%2});
// [12, 8, 0, 4]

// works also on strings
var first3nums = firstN('n0d3_R0ck5', 3, function(c) { return !isNaN(parseInt(c)); });
// [0, 3, 0]

// Fastened safety belts
var first4pallindromes = firstN(['aat', 'aba', 'pop'], 5, function (s) { 
    s == s.split('').reverse().join(''); 
  });
// ['aba', 'pop']

var crazy = firstN([1,2,3,4], -3);
// []

var notSoCrazy = firstN([1,2,3,4], 3);
// [1, 2, 3]
```
