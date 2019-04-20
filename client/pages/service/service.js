// pages/ways/ways.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    add_sheng:false,
    add_province:['河南','湖南','湖北','sdghf','sdfg','sdfgsd','sdfgsdfg','sdfg','sdfgsdf','dsfgs'],//省份
    add_p:'请选择省份',//省份选择值
    province:'--',//省份选择值
    sheng: false,//省份下拉选择框
    add_city:['郑州','长沙','sdfg','sdfg','sdfg','sdfg','sdfg','sdfg'],//城市
    add_c:'请选择城市',
    city:'--',//城市选择值
    shi: false,//城市下拉选择框
    add_county:['荥阳','上街','asdf','asdf','asd','asdf','asdf','asd','asdf'],//区域
    add_o:'请选择区域',
    county:'--',//区域选择值
    qu:false,//区域下拉选择框
    address_ways:false,//服务下拉选框
    model:['两室一厅','一室一厅','三室一厅','四室一厅'],//户型
    vmodel:'--',//户型选择值
    model_d:false,//户型下拉框
    model_m:false,//平方下拉
    vmeters:'--',//平方输入值
    /* 日历 */
    year: 0,
    month: '-',
    lunarMonth:'-月',
    day:'-',
    date: ['日', '一', '二', '三', '四', '五', '六'],
    dateArr: [],
    isToday: 0,
    isTodayWeek: false,
    todayIndex: 0,
    dayStyle: [
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#AAD4F5' },
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#AAD4F5' }
    ],
    
    /* 日历 */
    // 日期选择下拉框
    calendar:false,
  },
  add_sheng:function(){
    var that=this;
    var sheng = this.data.sheng;
    that.setData({
      sheng: !sheng
    })
  },//省份下拉框
  add_shi:function(){
    var that = this;
    var shi = this.data.shi;
    that.setData({
      shi: !shi
    })
  },//城市下拉框
  add_qu:function(){

    var that = this;
    var qu = this.data.qu;
    that.setData({
      qu: !qu
    })
  },//区域下拉框
  coose_province:function(e){
    var that=this;
    that.setData({
      province: e.currentTarget.dataset.province,
      add_p: e.currentTarget.dataset.province
    })
  },//获取省份
  coose_city:function(e){
    var that = this;
    that.setData({
      city: e.currentTarget.dataset.city,
      add_c: e.currentTarget.dataset.city
    })
  },//获取城市
  coose_county:function(e){
    var that = this;
    that.setData({
      county: e.currentTarget.dataset.county,
      add_o: e.currentTarget.dataset.county
    })
  },//获取区域
  address_ways:function(){
    var that = this;
    var address_ways = that.data.address_ways;
    that.setData({
      address_ways: !address_ways
    })
  },//服务地址
  address_is:function(){
    var that = this;
    var address_ways = that.data.address_ways;
    that.setData({
      address_ways: !address_ways
    })
  },//确定提交服务地址
  door_model:function(e){
    var that=this;
    var arr=e.detail.value[0]
    var model=that.data.model;
    that.setData({
      vmodel:model[arr]
    })
  },//获取户型
  model_d:function(){
    var that = this;
    var model_d = that.data.model_d;
    
    that.setData({
      model_d: !model_d
    })
  },//户型
  model_m: function () {
    var that = this;
    var model_m = that.data.model_m;
    that.setData({
      model_m: !model_m
    })
  },//平米下拉框
  meters:function(e){
    var that=this;
    that.setData({
      vmeters: e.detail.value
    })
  },//文本值
  square_meters:function(){
    var that = this;
    var model_m = that.data.model_m;
    that.setData({
      model_m: !model_m
    })
  },//平米下拉框
  dayClick:function(event){
    let clickDay = event.detail.day;
    let changeBgColor = `dayStyle[0].color`;
    let changeBg = `dayStyle[0].background`;
    let changeDay = `dayStyle[1].day`;
    let changeEndBg = `dayStyle[1].background`;
    
    
    var that=this;
    that.setData({
      lunarMonth: event.detail.lunarMonth,
      day: event.detail.day,
      [changeDay]: clickDay,
      [changeBg]: "rgba(255,255,255,0)",
      [changeBgColor]: "black",
      [changeEndBg]: "#AAD4F5"

    })
  },//日历
  calendar:function(){
    var that = this;
    var calendar = that.data.calendar;
    that.setData({
      calendar: !calendar
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