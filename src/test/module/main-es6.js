/* import {counter, incCounter} from './lib-es6';
console.log(counter);
incCounter();
console.log(counter);
console.log('this,', this)
;

 */

// import path from './path';

// console.log(path)
// ;
/* eslint-disable */
console.log('import 之前');
import {counter, incCounter} from './lib-es6';
console.log('import 之后');
// const {counter, incCounter} = require('./lib-es6');
console.log(counter);
console.log('调用 counter 之后');
incCounter();
console.log(counter);

// const es6 = require('./lib-es6')
// ;
// console.log(es6);
// console.log(es6.counter);
// es6.incCounter();
// console.log(es6.counter);
