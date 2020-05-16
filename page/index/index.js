// page/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: 'Hello World',
    age: 18,
    counter: 0,
    student: [
      {id: 10, name: 'keke',age:18},
      {id: 1, name: 'keke0',age:18},
      {id: 0, name: 'keke1',age:18},
      {id: 20, name: 'keke2',age:18}
    ],
    list: []
},
  handleBanClick(){
    console.log('按钮发生点击点击事件')
    this.data.counter += 1
    console.log(this.data.counter)
    this.setData({
      counter: this.data.counter
    })
  },
  handleSubClick(){
    this.setData({
      counter: this.data.counter -1
    })
  },
  handleGetUserInfo(e){
    console.log(e)
  },

  //------------1.监听页面的生命周期函数--------------
  onLoad: function(){
    //生命周期回调—监听页面加载
    wx.request({
      url: 'url',
      success: (res)=>{
          console.log(res)
          const data = res.data.data.list;
          this.setData({
            list: data
          })
      }
    })
  },
  onShow(){
    // 生命周期回调—监听页面显示
  },
  onReady(){
    // 生命周期回调—监听页面初次渲染完成
  },
  onHide: function(){
    // 生命周期回调—监听页面隐藏
  },
  onUnload(){
    // 生命周期回调—监听页面卸载,页面跳转
  }

})