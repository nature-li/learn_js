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
