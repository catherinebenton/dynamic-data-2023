//Setup our server
const http = require('http')
const fs = require('fs')

//Define the port the app will be access from (80,8080,888 are default to the domain /)
const port = process.env.PORT || 3000;

const server = http.createServer( (request,response) => {
const path = request.url

const displayPage = (path,res) => {
    fs.readFile(__dirname + path , (errors, content) => {
        if(errors){
            res.writeHead(500,{'Content-type':'text/plain'})
            return res.end('500 - Internal Error')
        }
        res.writeHead(200,{"Content-Type" : "text/html"})
        res.end(content)
    })       
 }
 

 switch(path) {
    case '':
    case '/':
    displayPage('/public/home.html',response)   
    break
    case '/about':
    displayPage('/public/about.html',response)
    break
    case '/contact':
    displayPage('/public/contact.html',response) 
    break
    default:
    displayPage('/public/404.html',response)
    break
}
})
 

//start the server
server.listen(port, () => console.log("server started on port" + port + " press ctrl + c to stop" ))