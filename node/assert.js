const assert = require('assert');
// assert.ok(false, '不量真值');


// assert.strictEqual(1, 2, 'ajfjdfsk');


// assert.throws(()=>{
//     throw new Error('错误信息');
// }, Error);

// assert.throws(()=>{
//     throw new Error('错误信息');
// },
// /信息/
// );

// assert.throws(()=>{
//     console.log(1);
//     throw new Error('错误信息');
// },
// (err)=>{
//     console.log(2);
//     if ((err instanceof Error) && /错误/.test(err)) {
//         console.log(3);
//         return true;
//     }
// },
// '不是期望的错误');

// assert.throws(()=>{}, /错误信息/, '没有抛出期望的信息');


// assert.deepEqual(Error('a'), Error(11212), '错了');


// assert.doesNotThrow(()=>{
// }, SyntaxError);
//     throw new TypeError('错误信息');

// assert.doesNotThrow(()=>{
//     throw new TypeError('错误信息');
// }, TypeError);


// assert.fail('錯誤信息');
// assert.fail(1,2, '1231', '>');


// assert.ifError(new Error());
