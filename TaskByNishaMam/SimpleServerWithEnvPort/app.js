const http = require('http');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;


console.log(port);
const server = http.createServer((req, res) => {

    res.writeHead(200);
    res.end("sucess");

}).listen(port, (err) => {
    if (err) {
        console.log('err');
    } else { console.log('server listen sucessfully... on: ' + server.address().port); }
});