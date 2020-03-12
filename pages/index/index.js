//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username:'',
    content:''
  },
  onLoad: function () {

  },
  saveGbook: function (e) {
    console.log(e.detail.value)
    wx.request({
      url: 'http://laravel1024.com/api/v1/msgs',
      data: e.detail.value,
      header: { 'Accept': 'application/json' },
      method: 'POST',
      success: (data) => {
        if(data.statusCode==200){
          this.setData({
            username:'',
            content:''            
          })
          wx.showToast({title:'发表成功'})
        }else{
          wx.showToast({title:'发表失败',icon:'none'})
        }
        console.log(data)
      }
    })
  }
})
