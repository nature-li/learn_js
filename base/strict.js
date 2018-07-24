// 'use strict';


// var obj1 = {};
// Object.defineProperty(obj1, 'x', {value: 42, writable: false});
// obj1.x = 23;
// console.log(obj1.x);
//

// var obj2 = {get x() {return 17;}};
// obj2.x = 5;
// console.log(obj2.x);


var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "phai";
console.log(fixed.newProp);