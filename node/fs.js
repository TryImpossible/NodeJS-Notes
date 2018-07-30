
// var fs = require('fs');
// fs.readFile('input.txt', function(err, data){
//     if (err) {
//         return console.error(err)
//     }
//     console.log('異步讀取：' + data.toString());
// });

// var data = fs.readFileSync('input.txt');
// console.log('同步讀取：' + data.toString());


// var fs = require('fs');
// console.log('準備打開文件');
// fs.open('input.txt', 'r+', function(err, fd){
//     if (err) {
//         return console.error(err);
//     }
//     console.log('文件打開成功！');
// });

// var fs = require('fs');
// fs.stat('input.txt', function(err, stats){
//     console.log(stats);
//     console.log(stats.isFile());
// });

// var fs = require('fs');
// fs.writeFile('input.txt', '我是通過寫入的文件內容！', function(err){
//     if (err) {
//         return console.error(err);
//     }
//     console.log('數據寫入成功！');
//     console.log('-----我是分割線-----');
//     console.log('讀取寫入的數據');
//     fs.readFile('input.txt', function(err, data) {
//         if (err) {
//             return console.error(err)
//         }
//         console.log('異步讀取文件數據：' + data.toString());
//     })
// });

// var fs = require('fs');
// var buf = new Buffer(1024)
// console.log('準備打開已存在的文件！');
// fs.open('input.txt', 'r+', function(err, fd){
//     if (err) {
//         return console.error(err)
//     }
//     console.log('文件打開成功！');
//     console.log('準備讀取文件：');
//     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//         if (err) {
//             console.log(err);
//         }
//         console.log(bytes + '字節被讀取')

//         if (bytes > 0) {
//             console.log(buf.slice(0, bytes).toString());
//         }
//           fs.close(fd, function(err){
//               if (err) {
//                   console.log(err)
//               }
//               console.log('文件關閉成功');
//           })
//     })
// })

// var buf = new Buffer('其實吧')
// console.log(buf.length);

// var fs = require("fs");
// var buf = new Buffer(1024);
// console.log("准备打开文件！");
// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件打开成功！");
//    console.log("截取10字节后的文件内容。");
   
//    // 截取文件
//    fs.ftruncate(fd, 10, function(err){
//       if (err){
//          console.log(err);
//       } 
//       console.log("文件截取成功。");
//       console.log("读取相同的文件"); 
//       fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//          if (err){
//             console.log(err);
//          }

//          // 仅输出读取的字节
//          if(bytes > 0){
//             console.log(buf.slice(0, bytes).toString());
//          }

//          // 关闭文件
//          fs.close(fd, function(err){
//             if (err){
//                console.log(err);
//             } 
//             console.log("文件关闭成功！");
//          });
//       });
//    });
// });


// var fs = require('fs');
// console.log('準備刪除文件');
// fs.unlink('input.txt', function(err){
//     if (err) {
//         return console.error(err);
//     }
//     console.log('文件刪除成功！');
// });


// var fs = require('fs');
// console.log('創建目錄');
// fs.mkdir('/Users/barry/Desktop/fs', function(err){
//     if (err) {
//         return console.error(err)
//     }
//     console.log('目錄創建成功！');
// });

// var fs = require('fs');
// fs.readdir('/Users/barry/Desktop', function(err, files){
//     if (err) {
//         return console.error(err);
//     }
//     files.forEach(function(file){
//         console.log(file);
//     });
// });


// var fs = require('fs');
// fs.rmdir('/Users/barry/Desktop/fs', function(err){
//     if (err) {
//         return console.error(err);
//     }
//     console.log('讀取目錄');
//     fs.readdir('/Users/barry/Desktop', function(err, files){
//         if (err) {
//             return console.error(err);
//         }
//         files.forEach(function(file){
//             console.log(file)
//         });
//     });
// });