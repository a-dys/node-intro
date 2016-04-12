/**
 * Created by adys on 12.04.16.
 */
var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write("Hello, this is Ada");
    response.end();
}).listen(8080);