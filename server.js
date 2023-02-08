// get module from node
const http = require('http');

//creation of a server
const server = http.createServer((request, response) => {
    console.log('request recived');

    const url = request.url.replace('/', ''); 
    if (url === 'hello') {
        response.write('<html><body>hello world</body></html>');
    } else {
        response.write('<html><body>goodbye world</body></html>');
    }

    //in case of response
    response.statusCode = 200;
    response.end();  //tell the broser that the request ended. 
});

//start the server work
server.listen(999);


