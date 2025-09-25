
// CVE-2019-17426

var mg = require('mongoose/lib/cast')
var mg3 = require('mongoose/lib/model')
var Schema = require('mongoose/lib/schema')

console.log(mg('y',{}));

// Call Schema.interpretAsType function
// Parameters: path (string), obj (object), options (object)
var result = Schema.interpretAsType('testPath', { type: String }, { typeKey: 'type' });
console.log('interpretAsType result:', result);