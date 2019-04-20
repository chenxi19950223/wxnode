var express=require('express');

var cookies=require('cookies');

var mongoose=require('mongoose');

var app=express();

var user=require('./moudle/user');

// var admin = require('./route/admin');

var api = require('./routes/api');

var main = require('./routes/main');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/public', express.static(__dirname + '/public'));//文件托管



app.use('/api',api);

app.use('/main',main);

mongoose.connect('mongodb://localhost:27018/db', { useNewUrlParser: true } ,function (err) {
    if (err){

    } else {
        console.log('连接成功！')
        app.listen(8086);
    }
});

