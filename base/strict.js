// 'use strict';


// var obj1 = {};
// Object.defineProperty(obj1, 'x', {value: 42, writable: false});
// obj1.x = 23;
// console.log(obj1.x);
//

// var obj2 = {get x() {return 17;}};
// obj2.x = 5;
// console.log(obj2.x);


// var fixed = {};
// Object.preventExtensions(fixed);
// fixed.newProp = "phai";
// console.log(fixed.newProp);


// delete Object.prototype;

// var o = {p: 1, p: 2};
// console.log(o);


// function sum(a, a, c) {
//     return a + a + c;
// }
// console.log(sum(1, 2, 3));


// 'use strict';
// console.log(0o23);


// 'use strict';
// var sum = 010 + 1;
// console.log(sum);


// (function f() {
//     "use strict";
//     false.true = "";
//     (14).sailing = "home";
//     "with".you = "far away";
// })();


// "use strict";
// var x = 17;
// with (x) {
//     console.log(x);
// }


// eval("var x = 100;");
// console.log(x);

// "use strict";
// eval("var x = 100;");
// console.log(x);


// var x = 17;
// var evalX = eval("var x = 42; x");
// console.log(x);
// console.log(evalX);

// var x = 17;
// var evalX = eval("'use strict'; var x = 42; x");
// console.log(x);
// console.log(evalX);


//
// function strict1(str) {
//     "use strict";
//     eval(str);
// }
// strict1('(function(){console.log(!this)})()');
// strict1('"use strict"; (function(){console.log(!this)})()');
//
// function strict2(f, str) {
//     "use strict";
//     return f(str);
// }
// strict2(eval, "(function(){console.log(!this)})()");
// strict2(eval, "'use strict'; (function(){console.log(!this)})()");
//
// function strict3(str) {
//     return eval(str);
// }
// strict3("(function(){console.log(!this)})()");
// strict3("'use strict'; (function(){console.log(!this)})()");



//
// var x = 10;
// delete(x);
// console.log(x);
//
// 'use strict';
// var x = 10;
// delete(x);
// console.log(x);


// "use strict";
// eval("var y; delete y;");



"use strict";
// eval = 17;
// arguments++;
// ++eval;
// var obj = {set p(arguments){}};
// var eval;
// try {} catch(arguments){}
// function x(eval) {}
// function arguments(){}
// var y = function eval(){};
var f = new Function("arguments", "'use strict';return 17;");
