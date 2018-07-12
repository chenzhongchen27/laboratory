exports.done = false;
var a = require('./a.js');
console.log('在 b.js 之中，a.done = %j', a.done);
var a1 = require('./a.js');
console.log('在 b.js 之中，a1.done = %j', a1.done);
exports.done = true;
console.log('b.js 执行完毕');
