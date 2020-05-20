// component/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
        type: Array,
        value:['流行','新款','品牌']
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlerIndex:function(event){
      console.log(event)
      //取出index的值
      const index = event.currentTarget.dataset.index
      this.setData({
         currentindex:index
      })
      //通知事件内部的点击时间
      this.triggerEvent('handlerIndex',{index,title:this.properties.titles[index]},{})
    }
  }
})
