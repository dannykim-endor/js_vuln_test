
// CVE-2019-17426

var mg = require('mongoose/lib/cast')
var mg3 = require('mongoose/lib/model')
console.log(mg('y',{}));
mg3.mapReduce()
