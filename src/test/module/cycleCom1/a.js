/* eslint-disable */
// a.mjs
console.log('先执行a')

const {bar} = require('./b');
function foo () {
  console.log('foo');
  bar();
  console.log('foo 执行完毕');
}
foo()
;
exports.foo = foo;
