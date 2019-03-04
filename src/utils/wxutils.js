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
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: sdata,
      success: (res) => {
        resolve(res)
      },
      fail: function (error) {
        reject(error)
      }
    })
  })
}
export {getCurrentLocation, wxRequest}
