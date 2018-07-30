// const buf1 = Buffer.alloc(10);
// console.log(buf1);

// const buf2 = Buffer.alloc(10, 1);
// console.log(buf2);

// const buf3 = Buffer.allocUnsafe(10);
// console.log(buf3);

// const buf4 = Buffer.from([1,2,3]);
// console.log(buf4);

// const buf5 = Buffer.from('test');
// console.log(buf5);

// const buf6 = Buffer.from('test', 'latin1');
// console.log(buf6);

// const buf = Buffer.from('hello world', 'latin1');
// console.log(buf.toString());
// console.log(buf.toString('hex'));
// console.log(buf.toString('base64'));


// const arr = new Uint16Array(2);
// arr[0] = 5000;
// arr[1] = 4000;
// const buf1 = Buffer.from(arr);
// const buf2 = Buffer.from(arr.buffer);
// console.log(buf1);
// console.log(buf2);
// arr[1] = 6000;
// console.log(buf1);
// console.log(buf2);


// const arr = new Uint16Array(20);
// const buf = Buffer.from(arr.buffer, 0, 16);
// console.log(buf.length);


// const buf = Buffer.from([1,2,3]);
// for (const b of buf) {
//     console.log(b);
// }


// const buf1 = new Buffer('buffer');
// const buf2 = new Buffer(buf1);

// buf1[0] = 0x61;

// console.log(buf1.toString());
// console.log(buf2.toString());


// const buf = new Buffer(10);
// console.log(buf.toString());


// const buf1 = new Buffer('this is a test');
// console.log(buf1.toString());
// console.log(buf1.toString('hex'));
// const buf2 = new Buffer('7468697320697320612074c3a97374', 'hex');
// console.log(buf2.toString());


// const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
// console.log(buf);


// const buf = Buffer.allocUnsafe(10);
// console.log(buf);
// buf.fill(0)
// console.log(buf);


// const str = '\u00bd + \u00bc = \u00be';
// console.log(`${str}: ${str.length}个字符，${Buffer.byteLength(str, 'utf8')}个字符`);


// const buf1 = Buffer.from('1234');
// const buf2 = Buffer.from('0123');
// const arr = [buf1, buf2];
// console.log(arr.sort(Buffer.compare));


// const buf1 = Buffer.alloc(10);
// const buf2 = Buffer.alloc(14);
// const buf3 = Buffer.alloc(18);
// const totalLength = buf1.length + buf2.length + buf3.length;
// const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);
// console.log(bufA);
// console.log(bufA.length);


// console.log(Buffer.isBuffer('a'));
// console.log(Buffer.isBuffer(Buffer.from('a')));


// console.log(Buffer.isEncoding('ascii'));


// console.log(Buffer.poolSize);


// const str = 'Node.js';
// const buf = Buffer.allocUnsafe(str.length);
// for (let i = 0; i < str.length; i++) {
//     console.log(str.charCodeAt(i));
//     buf[i] = str.charCodeAt(i);
// }
// console.log(buf.toString('ascii'));


// const buf1 = Buffer.from('ABC');
// const buf2 = Buffer.from('BCD');
// const buf3 = Buffer.from('ABCD');
// console.log(buf1.compare(buf1));
// console.log(buf1.compare(buf2));
// console.log(buf1.compare(buf3));
// console.log(buf2.compare(buf1))
// console.log(buf2.compare(buf3));
// console.log([buf1, buf2, buf3].sort(Buffer.compare));
// const buf1 = Buffer.from([1,2,3,4,5,6,7,8,9]);
// const buf2 = Buffer.from([5,6,7,8,9,1,2,3,4]);
// console.log(buf1.compare(buf2, 5, 6, 0 ,4));
// console.log(buf1.compare(buf2, 0, 6, 4));
// console.log(buf1.compare(buf2, 5, 6, 5));


// const buf1 = Buffer.allocUnsafe(26);
// const buf2 = Buffer.allocUnsafe(26).fill('!');
// for (let i = 0; i < 26; i++) {
//     buf1[i] = i + 97;
// }
// buf1.copy(buf2, 8, 16, 20);
// console.log(buf2.toString('ascii'));
// const buf = Buffer.allocUnsafe(26);
// for (let i = 0; i < 26; i++) {
//     buf[i] = i + 97;
// }
// buf.copy(buf, 0, 4, 10);
// console.log(buf.toString());


// const buf = Buffer.from('buffer');
// for (const pair of buf.entries()) {
//     console.log(pair);
// }


// const buf1 = Buffer.from('ABC');
// const buf2 = Buffer.from('414243', 'hex');
// const buf3 = Buffer.from('ABCD');
// console.log(buf1.equals(buf2));
// console.log(buf1.equals(buf3));


// const b = Buffer.allocUnsafe(50).fill('h');
// console.log(b.toString());
// console.log(Buffer.allocUnsafe(3).fill('\u0222'));


// const buf = Buffer.from('this is a buffer');
// console.log(buf.includes('this'));
// console.log(buf.includes('is'));
// console.log(buf.includes(Buffer.from('a buffer')));
// console.log(buf.includes(97));
// console.log(buf.includes(Buffer.from('a buffer example')));
// console.log(buf.includes(Buffer.from('a buffer example').slice(0 ,8)));
// console.log(buf.includes('this', 4));


// const b = Buffer.from('abcdef');
// console.log(b.indexOf('b', undefined));
// console.log(b.indexOf('b', {}));
// console.log(b.indexOf('b', null));
// console.log(b.indexOf('b', []));


// const buf = Buffer.from('buffer');
// for (const key of buf.keys()) {
//     console.log(key);
// }
// console.log('\n');
// for (const key of buf.values()) {
//     console.log(key);
// }


// const buf = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8]);
// console.log(buf.readDoubleBE());
// console.log(buf.readDoubleLE());
// console.log(buf.readDoubleLE(1));
// console.log(buf.readDoubleLE(1, true));


// const buf1 = Buffer.allocUnsafe(26);
// for (let i = 0; i < 26; i ++) {
//     buf1[i] = i + 97;
// }
// const buf2 = buf1.slice(0, 3);
// console.log(buf2.toString('ascii', 0, buf2.length));
// buf1[0] = 33;
// console.log(buf2.toString('ascii', 0, buf2.length));


// const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
// const json = JSON.stringify(buf);

// // 输出: {"type":"Buffer","data":[1,2,3,4,5]}
// console.log(json);

// const copy = JSON.parse(json, (key, value) => {
//   return value && value.type === 'Buffer' ?
//     Buffer.from(value.data) :
//     value;
// });

// // 输出: <Buffer 01 02 03 04 05>
// console.log(copy);