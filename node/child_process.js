// const {spawn} = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']);
// ls.stdout.on('data', (data) => {
//     console.log(`輸出：${data}`);
// });
// ls.stderr.on('data', (data)=>{
//     console.log(`錯誤:${data}`);
// })
// ls.on('close', (code) => {
//     console.log(`子進程退出碼:${code}`);
// });

// const { spawn } = require('child_process');
// const bat = spawn('cmd.exe', ['/c', 'my.bat']);

// bat.stdout.on('data', (data) => {
//   console.log(data.toString());
// });

// bat.stderr.on('data', (data) => {
//   console.log(data.toString());
// });

// bat.on('exit', (code) => {
//   console.log(`子进程退出码：${code}`);
// });

const {exec} = require('child_process');
exec('cat *.js bad_file | wc -l', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});