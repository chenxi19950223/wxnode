// pages/my/my.js
var app=getApp();
wx.getStorage({//获取缓存id
  key: 'key',
  success(res) {
    var id = res.data;
    app.globalData.id = id;
  }
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'点击登录',
    admin:'请登录',
    uaerId: NaN,
    pepople:'--',//关注个人
    merchants:'--',//关注的商户
    record:'--',//日常记录
    balance:'--',//余额
    preferential:'--',//优惠券
    members:'--',//会员卡
    top_up:'--',//充值
    head_portrait:'../../img/47.jpg'//头像路径
  },
  logoin:function(){
    
    wx.navigateTo({
      url: '../logoin/logoin',
      opentype:'navigate'
      
    })
   
  },
  service:function(){
    wx.navigateTo({
      url: '../service/service',
      opentype: 'navigate'

    })
  },
  aaaaaa:function(){
    var that=this;
    var head_portrait = that.data.head_portrait;
    wx.chooseImage({
      success: function(res) {
      var tempFilePaths=res.tempFilePaths
      wx.uploadFile({
         url: 'http://localhost:8086/main/portrait',
         filePath:tempFilePaths[0],
         name: 'portrait',
         success(res) {
           console.log(res)
           var img=res.data;
           var id = app.globalData.id;
           wx.request({
             url: 'http://localhost:8086/main/head-portrait',
             data:{
               img:img,
               id:id
             },
             success(res){
               console.log(res)
             }
           })
         }
       })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    var that = this;
    var id = app.globalData.id; 
    console.log(id)
    if(id===''){
      
    }else{ 
      that.setData({
        uaerId:id
      })
      wx:wx.request({
        url: 'http://localhost:8086/main/username',
        data: {
         id:id
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success:function(res){
          var name=res.data.username
          var img=res.data.headPortrait
          var head_portrait=that.data.head_portrait
          that.setData({
            userName:name,
            head_portrait:img
          })
        }
      })
    }
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