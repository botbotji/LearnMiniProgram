//编码规范token用常量表示
const TOKEN = 'token'
App({
  //保存在对象中，小程序关闭会被回收
  globalData:{
    token:""
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {

    //1. 先从缓存中获取token，如果没得在登陆
    const token = wx.getStorageSync(TOKEN)
    if(token != null && token.length != 0){
      console.log("-----------",TOKEN)
      //验证token是否过期
      this.check_token(token)
    }else{
    //登录
    this.login()
    }
  },
  check_token(token){
    console.log("执行了验证操作！")
    //用于判断token是否过期
    //注意后台:是通过header头信息的方式传递token的
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      success:(res) =>{
        //有errcode表示验证不成功
        if(res.data.errcode == null){
          this.globalData.token = token;
          console.log(this.globalData.token)
        }else{
          this.login()
        }
        console.log(res)
      },
      fail:(err) =>{
        console.log(err)
      }
    })
  },
  login(){
    console.log("执行了登录操作！")
    wx.login({
      //code 5分钟有效
      success: (res) =>{
        console.log(res)
        //获取code
        const code = res.code
        //将code发送到开发服务器
        wx.request({
          url:'http://123.207.32.32:3000/login',
          method: 'post',
          data:{
            code
          },
          success:(res) =>{
            console.log(res)
            //取出token
            const token = res.data.token
            //将token保存在全局变量中
            this.globalData.token = token;
            console.log(this.globalData.token)
            //进行本地存储 同步存储
            wx.setStorageSync(TOKEN,token)
            //异步
            // wx.setStorage({
            //   data: data,
            //   key: 'key',
            // })
          }
        })
      },
      complete: (res) => {},

    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
