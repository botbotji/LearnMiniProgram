// page/index/index.js
//导入封装的方法
import request from '../../service/network.js'
Page({
  
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //封装的方法
    request({
        //使用封装的request
        //Promise最大的好处就是防止出现回调地狱
              url:"http://httpbin.org/post",
              method:"post"
            }).then((res) => {
              //成功回调
              console.log(res)
            }).catch(err => {
              //失败回调
              console.log(err)
          })
      //发送网络请求
      // wx.request({
      //   //默认get请求方式
      //   //http://httpbin.org 测试url的开放地址
      //   url: 'http://httpbin.org/post',
      //   success:function(res){
      //     //成功
      //     console.log("--------",res)
      //   },
      //   fail:function(){
      //     //失败
      //   },
      //   data:{
      //     //url上的参数
      //     name: 'codename',
      //     age: 18
      //   },
      //   method: 'post',
      //   header:{
      //     'context-type':'application/json'
      //   },
      //   dataType:{
      //     'context-type':'application/json'
      //   },
      // })
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