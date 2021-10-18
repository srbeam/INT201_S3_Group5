import {add,divide,multiply,minus} from './calculate.js';
import historyCal from './function.js'
const test1 = historyCal(1);
const test2 = historyCal(1,2 );
const test3 = historyCal(1, 2, 2);
//test : 1
test1(add)
test1(divide)
console.log(test1());
//test : 2
test2(minus)
test2(multiply)
console.log(test2());
//test : 3
console.log(test3(add));
