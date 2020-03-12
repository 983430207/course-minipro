//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username:'',
    content:'',
    msgs:[],
  },
  //获取留言集合
  getMsgs:function(){
    wx.request({
      url: 'http://laravel1024.com/api/v1/msgs',
      // data: e.detail.value,
      header: { 'Accept': 'application/json' },
      method: 'GET',
      success: (data) => {
        this.setData({
          msgs:data.data
        })
        console.log(data.data)
      }
    })    
  },
  onLoad: function () {
    this.getMsgs()
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
          this.getMsgs()
        }else{
          wx.showToast({title:'发表失败',icon:'none'})
        }
        console.log(data)
      }
    })
  }
})
