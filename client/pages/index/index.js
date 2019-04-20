//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    the_current_city:'点击获取位置'
  },
  getrig: function () {
    var that =this;
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        var latitude = res.latitude
        var longitude = res.longitude
       
        that.loadCity(longitude, latitude)
        // wx.openLocation({
        //   latitude,
        //   longitude,
        //   scale: 18
        // })
      }
    })
  },
  loadCity:function(longitude, latitude){
    
  var that=this;
  wx.request({
    url: 'https://api.map.baidu.com/geocoder/v2/?ak=jPRxpEmGGfkkT2L91uwXoPrGIsjrfu1Q&location=' + latitude + ','+longitude + '&output=json',
    data:{},
    header: { 'Content-Type': 'application/json'},
    success:function(res){
      console.log(res)
      that.setData({
        the_current_city: res.data.result.addressComponent.city
      })
    }
  })
  }
})
