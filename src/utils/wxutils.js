var getCurrentLocation = (params) => {
  return new Promise((resolve, reject) => {
    wx.getLocation({
      type: 'wgs84',
      success: geo => {
        resolve(geo)
      },
      fail: function (error) {
        reject(error)
      }
    })
  })
}

var wxRequest = (url, sdata) => {
  wx.showLoading({
    title: '加载中'
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: sdata,
      success: (res) => {
        wx.hideLoading()
        resolve(res)
      },
      fail: function (error) {
        wx.hideLoading()
        reject(error)
      }
    })
  })
}

var getCurrentSetting = (params) => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: (res) => {
        resolve(res)
      },
      faild: (error) => {
        reject(error)
      }
    })
  })
}
export {getCurrentLocation, wxRequest, getCurrentSetting}
