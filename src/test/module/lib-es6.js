console.log('lib 最上面');
export var counter = 3;
console.log('lib 给 counter 赋值之后');
export function incCounter () {
  counter++;
}
export default 'ddd'
;
console.log('lib 最后')
;
