// page/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    name:"",
    age:0,
    dataFileA:"",
    dataFileB:""
  },
  handlerCount:function(event){
    console.log(event)
    this.setData({
      count:this.data.count+1,
      //获取组件中传递过来的数据，
       name:event.detail.name,
       age:event.detail.age
    })
  }
})

Component({
  properties: {
    paramA: Number,
    paramB: String,
  },

  methods: {
    //注意页面的生命周期函数必须写在这里面
    onLoad: function() {
      this.data.paramA // 页面参数 paramA 的值
      this.data.paramB // 页面参数 paramB 的值
    }
  }
})