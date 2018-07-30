// var util = require('util');
// function Base() {
//     this.name = 'base';
//     this.base = 1991;
//     this.sayHello = function() {
//         console.log('Hello:' + this.name);
//     }
// }

// Base.prototype.showName = function() {
//     console.log(this.name);
// }

// function Sub() {
//     this.name = 'sub';
// }

// util.inherits(Sub, Base);
// var objBase = new Base();
// objBase.showName();
// objBase.sayHello();
// console.log(objBase)
// var objSub = new Sub();
// objSub.showName();
// // objSub.sayHello();
// console.log(objSub);


// var util = require('util');
// function Person() {
//     this.name = 'byvoid';
//     this.toString = function() {
//         return this.name;
//     }
// }
// var obj = new Person();
// console.log(util.inspect(obj));
// console.log(util.inspect(obj, true));


// var util = require('util');
// console.log(util.isArray([]));
// console.log(util.isArray(new Array));
// console.log(util.isArray({}));


// var util = require('util');
// console.log(util.isRegExp(/some regexp/));
// console.log(util.isRegExp(new RegExp('another regexp')));
// console.log(util.isRegExp({}));


// var util = require('util');
// console.log(util.isError(new Error()));
// console.log(util.isError(new TypeError()));
// console.log(util.isError({name: 'Error', message: 'an error occurred'}));