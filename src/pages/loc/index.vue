<template>
  <div class="counter-warp">
    <div class="head-search-wrap">
      <div class="head-search">
        <div class="head-search-left">
          <span class="icon ion-ios-search"></span>
        </div>
        <div class="head-search-mid">
          <input type="text" v-model.trim="searchInputModel"  confirm-type="search" focus="true" placeholder="输入市、区、县等">
        </div>
      </div>
      <div class="head-search-right" @click="goToCurrent('cp', locator.ad_info.city_code, locator.ad_info.location.lat, locator.ad_info.location.lng)">
        取消
      </div>
    </div>
    <div class="parting-line"></div>
    <div class="current-locator">
      <div class="current-locator-label">当前定位</div>
      <div class="current-locator-content" @click="goToCurrent('cp', locator.ad_info.city_code, locator.ad_info.location.lat, locator.ad_info.location.lng)">
        <div class="current-locator-street">{{locator.address_component.street}}</div>
        <div class="current-locator-city">{{locator.address_component.city}}  {{locator.address_component.district}}</div>
      </div>
      <div class="parting-line-item"></div>
    </div>
    <div class="search-history-results-wrapped" v-if="historyShow">
      <div class="search-results" v-for="(historyItem, itemIndex) in historyRecords" :key="historyItem.id">
        <div class="search-result-item">
          <div class="search-result-left" @click="goTo('hr', historyItem.id, historyItem.lat, historyItem.lon, historyItem.cityzh, historyItem.leaderzh)">
            <div class="search-result-street">{{historyItem.cityzh}}</div>
            <div class="search-result-city">{{historyItem.leaderzh}}</div>
          </div>
          <div class="search-result-right" @click="deleteHistoryRecord(itemIndex)">
            <div class="icon ion-ios-close search-item-operation"></div>
          </div>
        </div>
        <div class="parting-line-item"></div>
      </div>
    </div>
    <div class="search-results-wrapped">
      <div class="search-results" v-for="searchItem in searchResults1" :key="searchItem._id">
        <div class="search-result-item" @click="goTo('sr', searchItem.id, searchItem.lat, searchItem.lon, searchItem.cityZh, searchItem.leaderZh)">
          <div class="search-result-left">
            <div class="search-result-street">{{searchItem.provinceZh}}, {{searchItem.leaderZh}}, {{searchItem.cityZh}}</div>
          </div>
        </div>
        <div class="parting-line-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {getCurrentLocation, wxRequest} from '@/utils/wxutils.js'
// Use Vuex
const delay = (function () {
  let timer = 0
  return function (callback, ms) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()

export default {
  data () {
    return {
      locator: {},
      searchInputModel: '',
      searchResults: [],
      historyShow: true,
      searchShow: Boolean,
      historyRecords: []
    }
  },
  computed: {
    searchResults1: function () {
      return this.searchResults
    }
  },
  methods: {
    deleteHistoryRecord (index) {
      let historyRecordData = wx.getStorageSync('searchhistory') || []
      historyRecordData.splice(index, 1)
      wx.setStorage({
        key: 'searchhistory',
        data: historyRecordData
      })
      this.historyRecords = JSON.parse(JSON.stringify(historyRecordData))
    },
    getHistoryRecord () {
      let historyRecordData = wx.getStorageSync('searchhistory') || []
      this.historyRecords = JSON.parse(JSON.stringify(historyRecordData))
    },
    async getGeo () {
      let key = 'xxxxx-xxxxx-xxxxx-xxxxx-xxxxx-xxxxx'
      let url = 'https://apis.map.qq.com/ws/geocoder/v1/'
      let gcl = await getCurrentLocation()
      let data = {key: key, output: 'json', 'location': `${gcl.latitude},${gcl.longitude}`}
      let wxrCoordinate = await wxRequest(url, data)
      this.locator = wxrCoordinate.data.result
    },
    async fetchData () {
      wx.showLoading({
        title: '加载中'
      })
      let that = this
      this.searchResults = that.searchResults
      wx.cloud.init()
      const db = wx.cloud.database({env: 'xxx-xxx'})
      db.collection('c001').where({
        'cityZh': db.RegExp({
          regexp: this.searchInputModel,
          options: 'i'
        })
      }).get({
        success: res => {
          if (this.searchInputModel === '') {
            wx.hideLoading()
            that.searchResults = []
          } else {
            wx.hideLoading()
            that.searchResults = res.data
          }
        },
        fail: resf => {
          wx.hideLoading()
        }
      })
      if (this.searchInputModel === '') {
        this.historyShow = true
      } else {
        this.historyShow = false
      }
    },
    goTo (flag, id, lat, lon, city, leader) {
      if (flag === 'sr') {
        let history = {id: id, lat: lat, lon: lon, cityzh: city, leaderzh: leader, time: Date.now()}
        const searchHistory = wx.getStorageSync('searchhistory') || []
        searchHistory.unshift(history)
        wx.setStorage({
          key: 'searchhistory',
          data: searchHistory
        })
      }
      this.searchInputModel = ''
      wx.reLaunch({
        url: '../home/main?id=' + id + '&lat=' + lat + '&lon=' + lon
      })
    },
    goToCurrent (flag, cityid, lat, lon) {
      this.searchInputModel = ''
      wx.reLaunch({
        url: '../home/main?flag=' + flag + '&id=' + cityid + '&lat=' + lat + '&lon=' + lon
      })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getGeo()
  },
  onShow () {
    this.getHistoryRecord()
  },
  watch: {
  // watch title change
    searchInputModel () {
      delay(() => {
        this.fetchData()
      }, 300)
    }
  }
}
</script>

<style>
page{
  height: 100%;
}
.counter-warp {
  background: #6495ed;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x:hidden;
}
.head-search-wrap{
  margin-top: 4%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center
}
.head-search{
  border-radius: 15px;
  width: 80%;
  height: 59rpx;
  margin-left: 3%;
  background: #ffffff;
  display: flex;
  align-items: center;
  /*实现水平居中*/
  justify-content: left;
  text-align: justify;
}
.head-search-left{
  padding-left: 4%;
  width: 2%;
}
.head-search-mid{
  margin-left: 3%;
  width: 90%;
}
.head-search-right{
  display: flex;
  margin-left: 2%;
  width: 12%;
  justify-content: center;
  color: #ffffff
}
.head-search-right:hover{
  background-color: #80808070
}
input {
  margin-left: 10rpx;
}
.parting-line{
  border-top: 1px solid #ffffff;
  margin-top: 4%;
  opacity: 0.5;
}
.parting-line-item{
  border-top: 1px solid #ffffff;
  margin-top: 2%;
  opacity: 0.5;
}
.current-locator{
  color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-left: 3%;
}
.current-locator-label{
  font-size: 80%;
  padding-top: 2%;
  opacity: 0.6;
}
.current-locator-content{
  display: flex;
  flex-direction: row;
}
.current-locator-city{
  padding-left: 2%;
  opacity: 0.6;
}
.search-results{
  display: flex;
  flex-direction: column;
  padding-top: 2%;
  color: #ffffff;
  margin-left: 3%;
  width: 100%;
}
.search-result-item{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%
}
.search-result-left{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 85%;
  align-items: center
}
.search-result-right{
  display: flex;
  flex-direction: row;
  width: 15%;
  align-items: center;
  justify-content: center;
}
.search-item-operation{
  font-size: 160%;
}
.search-result-city{
  padding-left: 2%;
  opacity: 0.6;
  width: 80%
}
</style>
