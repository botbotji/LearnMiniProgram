// page/index/index.js
Page({
  data: {
    titles:['flex布局','组件','动力']
  },
  bindButton:function(event){
    console.log("点击事件发生了",event)
  },
  halderTouchstart:function(event){
    console.log("手指触摸动作开始",event)
  },
  handlerTouchmove:function(){
    console.log("手指触摸后移动")
  },
  handlertouchend:function(event){
    console.log("手指触摸动作结束",event)
  },
  handlertouchcancel:function(){
    console.log("手指触摸动作被打断，如来电提醒，弹窗")
  
  },
  handlertap:function(){
    console.log("点击事件")
  
  },
  handlerlongtap:function(){
    console.log("手指触摸后，超过350ms在离开，")

  },
  handlerpress:function(){
    console.log("手指触摸后，超过350ms在离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发")
  },
  handlerEventClick:function(event){
    console.log("---------",event)
  },
  handlerInner:function(event){
    console.log(event)
  },
  handlerOuter:function(event){
    console.log(event)
  },
  handler:function(event){
    console.log(event)
    //事件参数传递 wxml组件属性 格式：data-属性名称 
    //在调试窗口console 输出的event对象中的currentTarget和target中的dataset就可以看到
    const itemName = event.currentTarget.dataset.item
    const index = event.currentTarget.dataset.index
    console.log(itemName,index)
  },
  handlerCaptureView1:function(){
    console.log("捕获1")
  },
  handlerCaptureView2:function(){
    console.log("捕获2")
  },
  handlerCaptureView3:function(){
    console.log("捕获3")
  },
  handlerBindView1:function(){
    console.log("冒泡1")
  },
  handlerBindView2:function(){
    console.log("冒泡2")
  },
  handlerBindView3:function(){
    console.log("冒泡3")
  }
})