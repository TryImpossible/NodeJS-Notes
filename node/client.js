var net = require('net');
var client = net.connect({port: 8080}, function(){
    console.log('連接到服務器');
});
client.on('data', function(data){
    console.log(data.toString());
    client.end();
});
client.on('end', function(){
    console.log('斷開與服務器的連接');
});