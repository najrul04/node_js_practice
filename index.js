/* const _ = require('lodash');
const people = require('./people');

console.log(_.last(people)); */
/* const a = 5;
console.log(a);

setTimeout(() => {
    console.log('Test');
}, 3000);

setInterval(() => {
    console.log('Infinite');
}, 5000);

console.log(global);

console.log(__dirname);
console.log(__filename);
 */
/* console.log(people.people);
console.log(people.a);
people.test();
 */

const path = require('path');

const myPath = 'F:/LWR/JavaScript Framework (Node JS)/index.js';

console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));
