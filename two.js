var http = require('http');
var portA = 7000;
var portB = 7500;


function goodRequest(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("Great job you got it working! " + request.url);
}

function badRequest(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("Go away! " + request.url);
}


var server = http.createServer(goodRequest);

server.listen(portA, function () {
    console.log("Server is listening on: http://localhost:%s", portA);
});

var server = http.createServer(badRequest);

server.listen(portB, function () {
    console.log("Server is listening on: http://localhost:%s", portB);
});
