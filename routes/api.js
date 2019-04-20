var express=require('express');

var router = express.Router();

var user = require('../moudle/user');


// var article = require('../models/article');

// var comments = require('../models/comments');

// var reply=require('../models/reply');

var json = {};

router.use(function (req, res, next) {
    json = {
        id:'',
        code: 0,
        msg: 'success'
    };
    next();
});

router.get('/reg',function (req,res) {
   var nameReg=req.query.nameReg;
   var passReg=req.query.passReg;
   console.log(nameReg);
   user.findOne({username:nameReg}).then(function (info) {
       if (info){
           json.code=1;
           json.msg='账号已经存在！';
           res.send(json);
       }else {
           var users=new user({
               username:nameReg,
               password:passReg
           });
           return users.save();
       }
   }).then(function (userinfo) {
       json.code=2;
       json.msg='注册成功！';
       res.send(json);
       res.end();
   })
});//注册


router.get('/logoin',function (req,res) {
    var name=req.query.name;
    var pass=req.query.pass;
    user.findOne({
        username:name
    }).then(function (info) {
        if (!info){
            json.code=3;
            json.msg='账号错误！';
            return res.send(json);
        } else {
            user.findOne({password:pass}).then(function (infor) {
                if (!infor){
                    json.code=4;
                    json.msg='密码错误！';
                    return res.send(json);
                }else {
                    json.id=infor._id;
                    json.code=5;
                    json.msg='登录成功！';
                    return res.send(json);
                    res.end();
                }
            })
        }
    })
});

module.exports = router;