//Setup our server
const http = require('http');
//Define the port the app will be access from (80,8080,888 are default to the domain /)
const port = process.env.PORT || 3000;

const server = http.createServer( (request,response) => {
// Get the url
const path = request.url;

if( (path == "") || (path == "/") ){
    response.writeHead(200, { "Content-Type": "Text/Plain" })
    response.end("Home Page")
}else if (path == "/about") {
    response.writeHead(200, { "Content-Type": "Text/Plain" })
    response.end("About Page")
}else if(path == "/contact"){
    response.writeHead(200, { "Content-Type": "Text/html" })
    response.end("<h1>Contact Us</h1>")
}else{
    response.writeHead(200, { "Content-Type": "Text/Plain" })
    response.end("Not Found")
}

})

//start the server
server.listen(port, () => console.log("server started on port" + port + " press ctrl + c to stop" ))