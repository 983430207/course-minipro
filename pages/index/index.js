//index.js

import api from "../../utils/api"

//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  onLoad: function () {
    api.courses({
      success:(data)=>{
        console.log(data)
      }
    })
    api.course(5,{
      success:(data)=>{
        console.log(data)
      }
    })
    api.resource(5,9,{
      success:(data)=>{
        console.log(data)
      }
    })
  },
})
