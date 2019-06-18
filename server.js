const http=require('http');
const express=require('express');
const app =express();
const port=process.env.PORT || 5000;

app.get('/', function(req,res){
    res.send('<h1>Hello Manoj Kumar!</h1>');
});

app.listen(port,()=>{
    console.log('Server is running on port: ' + port);
});

