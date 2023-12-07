let eList = require('../data/emails.json')

const fs = require("fs")

exports.newsletterSignup = (req,res) => {
    res.render('newsletter-signup',{csrf : 'supersecret' })
}

exports.newsletterSignupList = (req,res) => {
    res.render('userspage',{'users': eList.users })
}

exports.newsletterUser = (req,res) =>{
   var userDetails = eList.users.filter((user)=>{
        return user.email == req.params.email
    })
    
    console.log(userDetails)
    res.render('userdetails', {"users": userDetails})
}
exports.newsletterUserDelete = (req,res) =>{
    var users = eList.users.filter((user)=>{
         return user.email !== req.params.email
     })

     var json =JSON.stringify(users)
     fs.writeFile('./data/emails.json',json,'utf8',()=>{})
     console.log(users)
     
     
    res.redirect(303,'/newsletter/list')
 }

exports.newsletterSignupProcess= (req,res) => {
     //Then we do something here
     console.log(req.body)
     //req.body.email
     //req.body.firstname
     //req.body.lastname
     var newUser = {
        'firstname' : req.body.firstname,
        'lastname' : req.body.lastname,
        'address' : req.body.address,
        'city' : req.body.city,
        'state' : req.body.state,
        'zip' : req.body.zip,
        'email' : req.body.email
     }
     //the push method adds items to an array
     eList.users.push(newUser)

     var json = JSON.stringify(eList)

     console.log(json)

     fs.writeFileSync('./data/emails.json',json,'utf8',()=>{})

     res.redirect(303,'/newsletter/thankyou')
     //res.send("you posted something to /process " + req.body.email)
}