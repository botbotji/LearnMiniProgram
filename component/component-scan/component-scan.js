// component/component-scan/component-scan.js
Component({
  options:{
      styleIsolation:"isolated" //属性隔离
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    title:"主题",
    message:"自定义组件"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap:function(){
      var myEventDetail ={} //detail对象，提供给事件监听函数
      var myEventOption ={} //触发事件的选项
      this.triggerEven('myevent',myEventDetail,myEventOption)
    }
  }
})
