// component/component-tag-name/component-tag-name.js
Component({
  options:{
      multipleSlots: true //启用多slot插槽支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    propa: {
      type:String,
      vallue:"默认值prop-a值",
      observer:function(newVal,oldVal){
          console.log(newVal,oldVal)
      }
    },
    propb:{
      type:String,
      vallue:"默认值prop-b的值",
      observer:function(newVal,oldVal){
          console.log(newVal,oldVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   //私有数据，用于模板的渲染
  },

  /**
   * 组件的方法列表
   */
  methods: {
    lifetimes:{
      //定义方法名
    },
    onMyButtonTap:function(){
      this.setData({

      })
    },
    //组件内部的方法在name前添加_下划线
    _myPrivateMethod:function(){
      this.setData({
        "A[0].B":"myProvateDate"
      })
    },
    //有参
    _myPrivateChange:function(newVal,oldVal){

    }

  },
  lifetimes:{
    //生命周期函数，可以为函数定义函数名
    attached:function(){
      //在组件实例进入页面节点数
    },
    moved:function(){}
  },
  //注意这里定义的函数会被lifetimes中定义的函数覆盖
  attached:function(){},
  pageLifetimes:{
    //组件所在页面的生命周期函数，
    //特殊的生命周期，它们并非与组件有很强的关联，但有时组件需要获知，以便组件内部处理。这样的生命周期称为“组件所在页面的生命周期”，在 pageLifetimes 定义段中定义
    show:function(){},
    hide:function(){},
    resize:function(){},
  },
  
})
