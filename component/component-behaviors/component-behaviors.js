// component/component-behaviors/component-behaviors.js

var myBehavior = require('../myBehavior/my-behavior.js')
Component({

  behaviors:[myBehavior],
  properties: {
    isTrueOne: {//这里定义了modalHidden属性，属性值可以在组件使用时指定.写法为modal-hidden 
      type: Boolean,
      default:false
    }, 
    isDisableNext:{
      type: Boolean,
      value: false
    }
  },
  attached: function () {
    console.log(this)
   },
  /**
   * 组件的初始数据
   */
  data: {
    isTrue: false
  },

  /**
   * 组件的方法列表
   */
  methods: {}


})
