// pages/ways/ways.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showView: true,
    nameReg:'',//注册账号
    passReg:'',//注册密码
    passsReg:'',//注册确认密码
    namelo:'',//登录账号
    passlo:'',//登录密码
  },
  
  userName_reg:function(e){//注册账号
    var tath=this;
    tath.setData({
      nameReg:e.detail.value
    })
  },
  password_reg:function(e){//注册密码
    var tath=this;
    tath.setData({
      passReg:e.detail.value
    })
  },
  passwords_reg:function(e){//注册确认密码
    var tath=this;
    tath.setData({
      passsReg:e.detail.value
    })
  },
  reg:function(){//注册
    var that=this;
    var nameReg = that.data.nameReg;
    var passReg = that.data.passReg;
    var passsReg = that.datapasssReg;
  if(nameReg===''){
    wx.showToast({
      title: '请输入账号！',
    })
    return;
  }else if (passReg===''){
    wx.showToast({
      title: '请输入密码！',
    })
    return;
  }else if (!passReg === passsReg){
    wx.showToast({
      title: '两次密码不一致',
    })
    return;
  } else{
    wx: wx.request({
      url: 'http://localhost:8086/api/reg',
      data: {
        nameReg: nameReg,
        passReg: passReg,
        passsReg: passsReg
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) { 
        wx.showToast({
          title: res.data.msg,
        })
      }
    })
  }
  },
  logoin_name:function(e){//登录账号
    var that=this;
    that.setData({
      namelo: e.detail.value
    })
  },
  logoin_pass: function (e) {//登录密码
    
    var that = this;
    that.setData({
      passlo: e.detail.value
    })
  },
  logoin:function(){//注册登录
  
    var that=this;
    var name=this.data.namelo;
    var pass=this.data.passlo;
    if(name===''){
      wx.showToast({
        title: '请输入账号！',
      })
    }else if(pass===''){
      wx.showToast({
        title: '请输入密码！',
      })
    }else{
      wx:wx.request({
        url: 'http://localhost:8086/api/logoin',
        data: {
         name:name,
         pass:pass
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          var code=res.data.code;
          var msg=res.data.msg;
          if(code===3){
            wx.showToast({
              title: msg,
            })
          } else if (code == 4) {
            wx.showToast({
              title: msg,
            })
          }else if(code===5){
            var id=res.data.id; 
            wx.setStorage({//缓存注册id
              key: 'key',
              data: id,
              success() {
                wx.getStorage({//获取缓存id
                  key: 'key',
                  success(res) {
                    var id = res.data;
                    app.globalData.id = id;
                  }
                })
              }
            })
            wx:wx.switchTab({
              url: '../my/my',
              success: function(res) {},
              fail: function(res) {},
              complete: function(res) {},
            })
          }
        }
       
      })
    }
  },
  
  // wx_login:function(){//微信登录
  // var that=this;
  //   wx.login({
  //     success(res) {
  //       if (res.code) {
  //         // 发起网络请求
  //         var code = res.code;
  //         var appid = 'wx9852c73359a0d3cc';
  //         var Secret = '76bd831deebeeb3c51b2d138fdf08a8f';
  //         wx.request({
  //           url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + Secret + '&js_code=' + code + '&grant_type=authorization_code',
  //           data: {
  //             code: code
  //           },
  //           success(res) {
  //             var openid = res.data.openid
  //             wx.setStorage({//缓存openid
  //               key: 'key',
  //               data: openid,
  //               success(){
  //                 wx.getStorage({//获取缓存id
  //                   key: 'key',
  //                   success(res) {
  //                     var id=res.data;
  //                     app.globalData.id=id
  //                   }
  //                 })
  //               }
  //             })
  //           },
  //           fail(err) {
  //             console.log(err)
  //           } 
  //         })
  //       } else {
  //         console.log('登录失败！' + res.errMsg)
  //       }
  //     }
  //   })
  // },





















  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    showView: (options.showView == "true" ? true : false)
  },
  reggo: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView),
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})