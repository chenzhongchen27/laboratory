const compose = require('koa-compose');
const i = 1;
function print (ctx, next, j) {
  console.log(`第${i}次调用,参数 %j`, j);
  debugger;/* eslint-disable-line */

  return next(i);
}
debugger;/* eslint-disable-line */

const mids = compose(Array.from({ length: 10 }, () => print));
mids({})
  .then((u) => {
    debugger;/* eslint-disable-line */
  })
  .catch(e => {

  });
