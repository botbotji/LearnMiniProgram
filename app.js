App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log("小程序初始化成功！")
    //获取用户信息
    //发送网络请求
    // wx.getUserInfo({
    //    success: function(res){
    //     console.log(res)
    //   }
    // }),
    // wx.openSetting({
    //   success (res) {
    //     console.log(res.authSetting)
    //      res.authSetting = {
    //        "scope.userInfo": true,
    //        "scope.userLocation": true
    //      }
    //   }
    // }),
    
    setTimeout(function(){
      console.log("设置过期时间")
      const err = new Error()
      throw err
    },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log("小程序启动后或者后进入前台：onShow")
    console.log(options)
    //场景值
    switch (options.scene) {
      case 1001:
        //执行某些操作
        break;
      case 1002:
        break;
      default:
        console.log("判断其场景值，做出相应的操作...")
        break;
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("界面被隐藏时会执行：onHide")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("发生异常！")
  }
})
