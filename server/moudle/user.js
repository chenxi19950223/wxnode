var mongoose=require('mongoose');

var user=require('../schema/user');

module.exports=mongoose.model('user',user);

