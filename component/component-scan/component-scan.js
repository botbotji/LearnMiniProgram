// component/component-scan/component-scan.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
        type: String,
        value: "默认标题",
        //监听值得改变,即观察title值得变化
        observer:function(newVal,oldVal){
          console.log(newVal,oldVal)
        }
    }
  },
  //页面改变组件的样式
  externalClasses:['titleclass']
})
