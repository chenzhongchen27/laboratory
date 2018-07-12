/* disable-eslint */
// const es_namespace = require('./es');
// console.log(es_namespace.default)

import voo, {go, foo} from './es';

console.log(voo);
delete require.cache.es;
console.log('go', go);
console.log('foo', foo)
;
