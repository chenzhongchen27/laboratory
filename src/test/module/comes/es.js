let foo = {
  bar: 'bar'
};
export default foo;
console.log('内部foo', foo);
foo = '000';
console.log('置为 null 之后内部foo', foo)
;
export {foo as go}
;
export {foo}
;
