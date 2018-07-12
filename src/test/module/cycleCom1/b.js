// b.mjs
/* eslint-disable */
console.log('先执行b');
const {foo} = require('./a');
function bar () {
  console.log('bar');
  foo();
  console.log('bar 执行完毕');
}
exports.bar = bar;
