
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
// myEmitter.on('event', (a, b)=>{
//     console.log('觸發了一個事件！');
//     console.log(a, b, this);
// });
// myEmitter.emit('event', 'a', 'b');

// myEmitter.on('event', (a, b) => {
//     setImmediate(()=>{
//         console.log('這個是異步發生的');
//     });
// });
// myEmitter.emit('event', 'a', 'b');

// let m = 0;
// myEmitter.on('event', () => {
//   console.log(++m);
// });
// myEmitter.emit('event');
// // 打印: 1
// myEmitter.emit('event'); 

// let m = 0;
// myEmitter.once('event', () => {
//   console.log(++m);
// });
// myEmitter.emit('event');
// // 打印: 1
// myEmitter.emit('event'); 

// process.on('uncaughtException', (err) => {
//     console.error('有錯誤');
// });
// myEmitter.emit('error', new Error('whoops!'));

// myEmitter.once('newListener', (event, listener) => {
//     if (event === 'event') {
//         myEmitter.on('event', () => {
//             console.log('B');
//         });
//     }
// });
// myEmitter.on('event', ()=>{
//     console.log('A');
// });
// myEmitter.emit('event');

// myEmitter.on('event', () => { });
// myEmitter.on('event', () => { });
// console.log(EventEmitter.listenerCount(myEmitter, 'event'))

// myEmitter.setMaxListeners(myEmitter.getMaxListeners() + 1);
// myEmitter.once('event', () => {
//     myEmitter.setMaxListeners(Math.max(myEmitter.getMaxListeners() - 1, 0));
// })

// myEmitter.on('foo', () => {});
// myEmitter.on('bar', () => {});

// const sym = Symbol('symbol');
// myEmitter.on(sym, () => {});
// console.log(myEmitter.eventNames);


