//Setup our server
const http = require('http');
//Define the port the app will be access from (80,8080,888 are default to the domain /)
const port = process.env.PORT || 3000;

const server = http.createServer( (request,response) => {
    response.writeHead(200, { "Content-Type": "Text/Plain" })
    response.end("Hello World")
})

//start the server
server.listen(port, () => console.log("server started on port" + port + " press ctrl + c to stop" ))