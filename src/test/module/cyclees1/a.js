/* eslint-disable */
// a.mjs
console.log('先执行a')
import {bar} from './b';
export function foo () {
  console.log('foo');
  bar();
  console.log('foo 执行完毕');
}
foo()
;
