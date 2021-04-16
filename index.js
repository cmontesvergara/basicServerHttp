const http = require('http');


function respondFuntion(req,res){
    res.end('hola gente');

}
const server = http.createServer(respondFuntion);
server.listen('3000');
console.log('listen on port 3000');

