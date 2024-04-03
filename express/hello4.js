const express=require('express')
const app=express()
app.all('/welcome',function(req,res,next){
    console.log('only applied for routes that begin with /welcome')
    next()
})
app.all('/welcome/*',function(req,res,next) {
    console.log('only applied for routes that begin with /welcome/*')
    next()
})
app.get('/hello',function(req,res){
    res.send('hello')
})
app.get('/',function(req,res){
    res.send('welcome')
})
app.listen(3000)