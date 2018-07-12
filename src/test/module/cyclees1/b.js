// b.mjs
/* eslint-disable */
console.log('先执行b');
import {foo} from './a';
export function bar () {
  console.log('bar');
  foo();
  console.log('bar 执行完毕');
}
