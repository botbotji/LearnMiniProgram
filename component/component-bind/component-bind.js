// component/component-bind/component-bind.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlerCount:function(){
      //这里要把发生在组件内部的事件传出去
      //console.log("-----------")
      //第一个参数为事件名，第二个参数为数据，第三个为额外的选项
      this.triggerEvent("count",{name:"mimi",age:18},{})
    }
  }

})
