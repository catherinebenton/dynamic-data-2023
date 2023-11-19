const express = require('express')

//add the view engine
const expressHandlebars = require('express-handlebars')

const app = express()

//configure our express app to use handlebars
app.engine('handlebars',expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine','handlebars')
//ends handlebar configuration

//Static files or folders are specified before any route
app.use(express.static(__dirname + "/public"))

const port = process.env.port || 3000
//require gallery outside the view because we will use the same in all get requests
const gallery = require('./data/gallery.json')
// Routes go before 404 and 500 
app.get('/', (req,res)=>{
    var data = require('./data/home-data.json')
    res.render('page', {data, gallery})
    
})
app.get('/telluride', (req,res)=>{
    var data = require('./data/telluride-data.json')
    res.render('page', {data, gallery})
    
})
app.get('/boulder', (req,res)=>{
    var data = require('./data/boulder-data.json')
    res.render('page', {data, gallery})
    
})
app.get('/breckenridge', (req,res)=>{
    var data = require('./data/breckenridge-data.json')
    res.render('page', {data, gallery})
    
})

app.get('/vail', (req,res)=>{
    var data = require('./data/vail-data.json')
    res.render('page', {data, gallery})
})
app.get('/about', (req,res)=>{
    res.render('about', {
        title:"About Miami",
        pageTitle:"About Miami Travel",
        image:"miami-1.jpg",
        description:"Miami is a beautiful city"
    })
})
//This generates an error because the parameter names don't match
// request should be response
app.get('/nightlife',(req,res)=>{

    res.render('nightlife')
})

//Error handling -> app.use() basic express route
app.use((req,res) => {
    res.status(404)
    res.render('404')
})

//Server Error 500
app.use((error,req,res,next) => {
    console.log(error.message)
    res.status(500)
    res.render('500')
})


// setup listener
app.listen(port,()=>{
    console.log(`Server started http://localhost:${port}`)
    //console.log('Server started http://localhost:'+port)
    console.log('Toclose pres Ctrl-C')
})
