const express = require('express')

//add the view engine
const expressHandlebars = require('express-handlebars')

const app = express()

const handler = require('./lib/handler')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

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
    res.render('page', {data})
    
})
// app.get('/thankyou', (req,res)=>{
//     var data = require('./data/thankyou-data.json')
//     res.render('page', {data})
    
// })
app.get('/aboutme', (req,res)=>{
    var data = require('./data/aboutme-data.json')
    res.render('page', {data})
    
})
app.get('/apartments', (req,res)=>{
    var data = require('./data/apartments-data.json')
    res.render('page', {data, gallery})
    
})
app.get('/townhomes', (req,res)=>{
    var data = require('./data/townhomes-data.json')
    res.render('page', {data, gallery})
    
})
app.get('/condos', (req,res)=>{
    var data = require('./data/condos-data.json')
    res.render('page', {data, gallery})
    
})

app.get('/houses', (req,res)=>{
    var data = require('./data/houses-data.json')
    res.render('page', {data, gallery})
})
app.get('/items', (req,res)=>{
    var data = require('./data/items-data.json')
    res.render('page', {data})
    
})

app.get('/cart', (req,res)=>{
    var data = require('./data/cart-data.json')
    res.render('page', {data})
    
})


app.get('/newsletter-signup', handler.newsletterSignup)

app.post('/newsletter-signup/process', handler.newsletterSignupProcess)

app.get('/newsletter/list', handler.newsletterSignupList)

app.get('/newsletter/details/:emails',handler.newsletterUser)

app.post('/newsletter/delete/:emails',handler.newsletterUserDelete)

app.get('/newsletter/thankyou', (req,res)=>{
    res.render('thankyou')
})

// app.post('/cart', handler.addToCartProcess)


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
