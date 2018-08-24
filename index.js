//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    shoufenqinName: '',
    shoufenqinBloo: '',
    did: '',
    arr: ["block", "none", "none", "none"],
    brr: ["active", "", "", ""],
    iip: ''

  },
  abc: function (e) {
    var that = this;
    var tmp = that.data.arr;//存储下来
    var tmp2 = that.data.brr;//存下来
    for (var i = 0; i < tmp.length; i++) {
      tmp[i] = "none"
      tmp2[i] = ""
    }
    tmp[e.target.dataset.kk] = "block"
    tmp2[e.target.dataset.kk] = "active"
    that.setData({ arr: tmp, brr: tmp2 })
  }
})
