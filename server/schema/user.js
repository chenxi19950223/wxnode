//设计表格；登录注册
var mongoose=require('mongoose');

var schema=mongoose.Schema;

var user=new schema({
    username:String,
    password:String,
    headPortrait:String,
    isAdmin:{
        type:Boolean,
        default:false
    }
});

module.exports=user;