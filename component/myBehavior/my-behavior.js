//  这里没有引入其他Behavior公用数据以及方法
module.exports = Behavior({
  behavior:[],
  properties:{
    myDataChildrenBehaviors:{
      type:String,
      value:'我是嵌套demoBehaviorJs里面的数据'
    }
  },
  data:{
    myDataOne:'模拟数据',
    myDataTwo: '模拟数据二',
  },
  methods:{
    myClickChildBehavior(){
      console.log('我是嵌套demoBehaviorJs里面的方法')
    }
  }
})