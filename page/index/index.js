// page/index/index.js
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

  },
  handlerIndex:function(event){
    console.log(event)
  },
  handlertap:function(){
    //修改组件中myself的数据
    const my_self = this.selectComponent('#self') //拿到组件的初始化数据
    //数据位于my_self对象的data中
    console.log(my_self)
    //设置值
    // my_self.setData({
    //   count: my_self.data.count+1
    // })

    //调用特定的自定义方法
    my_self.incrementCount(10)
  }
})