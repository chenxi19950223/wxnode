var express = require('express');

var router = express.Router();

var fs = require('fs');

var user = require('../moudle/user');

var multer = require('multer');

var upload = multer({dest: 'public/image'});

router.get('/username', function (req, res) {//登录
    var id = req.query.id;
    user.findOne({_id: id}).then(function (info) {
        res.send(info);
        res.end()
    })
});


router.get('/head-portrait',function (req,res) {
    var img='http://localhost:8086/'+req.query.img;
    var id=req.query.id;
    user.update({_id: id}, {headPortrait:img}).then(function (info) {
        console.log(info)
    })

});

router.post('/portrait', upload.single('portrait'), function (req, res) {
    fs.rename('public/image/' + req.file.filename, 'public/image/' + req.file.filename + '.jpg',function (err) {
    });
    res.send('public/image/' + req.file.filename + '.jpg')
});

module.exports = router;