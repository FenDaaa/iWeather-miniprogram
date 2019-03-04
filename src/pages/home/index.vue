<template>
    <div class="container-1">
        <div class="weather-container">
            <div class="weather-wrapped">
                <div class="locator-search" v-if="cShow">
                    <navigator url="../../pages/loc/main" class="locator-navi">
                        <p class="_p locator-road">{{locator.street+'附近'}}</p>&nbsp;<p class="_p locator-city-region">{{locator.city}} {{locator.district}}  ></p>
                    </navigator>
                </div>
                <div class="locator-search" v-if="jShow">
                    <navigator url="../../pages/loc/main" class="locator-navi">
                        <p class="_p locator-road">{{locator.district}}  {{locator.city}}  ></p>
                    </navigator>
                </div>
                <div class="weather-info">
                    <ul class="_ul">
                        <div class="first-info">
                            <h1 class="_h1">{{weatherToday1.tmp}}℃</h1>
                            <h1 :class="['_h', 'wi', classType, 'wi-flip-vertical']"></h1>
                        </div>
                        <li>
                            <h2 class="_h2">{{weatherToday1.cond_txt}}</h2>
                        </li>
                        <li><p class="_p">{{weatherToday1.wind_dir}}{{weatherToday1.wind_sc}}级</p></li>
                        <li><p class="_p">相对湿度 {{weatherToday1.hum}}%</p></li>
                        <li><p class="_p">空气质量 {{airToday1.aqi}} {{airToday1.qlty}}</p></li>
                    </ul>
                </div>
            </div>
            <div class="weather-forecast">
                <div class="forecast2hour">
                    <div class="_p">
                        <p class="_p">{{twoHour}}</p>
                    </div>
                </div>
            </div>
            <div class="per-hour-wrapped">
                <div class="per-hour-container">
                    <div class="per-hour-lable">
                        逐小时预报
                    </div>
                    <div class="forecast-per-hour">
                        <div class="per-hour-1" v-for="hour in hourlyToday1" :key="hour.id">
                            <div>{{hour.time}}</div>
                            <div :class="['wi', hour.style, 'wi-flip-vertical']"></div>
                            <div>{{hour.tmp}}℃</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="weather-forecast-future-15-wrapped">
                <div class="weather-forecast-future-15-container">
                    <div class="future-15day-lable">
                        未来5天
                    </div>
                    <div class="forecast-15-day">
                        <div class="day15" v-for="dailyItem in dailyForcast1" :key="dailyItem.id">
                            <div>{{dailyItem.week}}</div>
                            <div class="forecast-date"><p>{{dailyItem.dateFormat}}</p></div>
                            <div :class="['wi', dailyItem.style_d, 'wi-flip-vertical']"></div>
                            <div>{{dailyItem.cond_txt_d}}</div>
                        </div>
                    </div>
                    <div id="chart-demo" class="echarts-wrap">
                        <mpvue-echarts lazyload :echarts="echarts" :onInit="initChart" canvasId="demo-canvas" />
                    </div>
                    <div class="forecast-15-day forecast-15-day-2">
                        <div class="day15" v-for="dailyItem in dailyForcast1" :key="dailyItem.ids">
                            <div :class="['wi', dailyItem.style_n, 'wi-flip-vertical']"></div>
                            <div>{{dailyItem.cond_txt_n}}</div>
                            <div class="wind-dir-sc wind-dir">{{dailyItem.wind_dir}}</div>
                            <div class="wind-dir-sc">>{{dailyItem.wind_sc}}级</div>
                        </div>
                    </div>
                    <div class="forecast-15-day forecast-15-day-2">
                        <div class="day15" v-for="airForecastItem in airForecast1" :key="airForecastItem.unk">
                            <div>{{airForecastItem.qlty}}</div>
                        </div>
                    </div>
                    <div class="view-forecast-15day">
                        <!--<div class="bottom-lable">
                            查看全部未来7天预报>
                        </div>-->
                    </div>
                </div>

                <div class="life-index-wrapped">
                    <div class="life-index-container">
                        <div class="life-index-label">
                            生活指数
                        </div>
                        <div class="life-index-list">
                            <div class="life-index-item" v-for="life in lifeIndex1" :key="life.id">
                                <div class="icon ion-ios-car" v-show="true" v-if="life.type === 'cw'">&nbsp;&nbsp;&nbsp;{{life.brf}}洗车</div>
                                <div class="icon ion-ios-baseball" v-if="life.type === 'sport'">&nbsp;&nbsp;&nbsp;{{life.brf}}运动</div>
                                <div class="icon ion-ios-medkit" v-if="life.type === 'flu'">&nbsp;&nbsp;&nbsp;{{life.brf}}感冒</div>
                                <div class="icon ion-ios-flower" v-if="life.type === 'ag'">&nbsp;&nbsp;&nbsp;{{life.brf}}过敏</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="weather-forward">
                    <button open-type="share">转发天气</button>
                </div>

                <div class="weather-bottom">
                    <div class="last-item wi wi-day-sunny wi-flip-vertical">&nbsp;中国无锡天气</div>
                    <div class="last-item-1">本服务由中国气象局公共气象服务中心提供</div>
                    <div class="last-item-1">客服热线： 400-6000-121</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container-1{
    background: #6495ed;
    position: relative;
    width: 100%;
    overflow-x:hidden;
} 

.weather-container{
    width: 100%;
    height: 100%;
    margin: 0 auto;
}

@media only screen and (max-width: 600px) {
    .weather-container{
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
}

.weather-wrapped{
    padding-top: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0px;
}

.locator-search{
    width: 80%;
    height: 30px;
    background: #4141a0;
    text-align: center;
    border-radius: 15px;
}

.locator-search p{
    position: relative;
    color: #f0f8ff;
    display: inline-block;
    margin: 4px;
}

.locator-city-region{
    opacity: 0.5;
}

.locator-navi{
    border-radius: 15px;
}

.weather-info{
    width: 100%;
    color: #f0f8ff;
    align-self: flex-start;
}

@media only screen and (max-width: 600px) {
    .weather-info{
        color: #f0f8ff;
        margin-left: 10%;
        align-self: flex-start;
    }
    
}

.first-info{
    width:80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;  
}

._h1{
    font-size: 2em;
    margin: 21.440px 0px 21.440px 0px;
}

._h2{
    font-size: 1.5em;
    margin: 10px 0px 10px 0px;
}

._ul{
    margin: 16px 0px 16px 0px;
}

._p{
    margin: 16px 0px 16px 0px;
}

.weather-forecast{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}

.forecast2hour{
    text-align: left;
    color: #f0f8ff;
    background: #4141a0;
    width: 90%;
    height: 60px;
    border-radius: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5%;
}

.per-hour-wrapped{
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.per-hour-container{
    margin-top: 5%;
    width: 95%;
    color: #f0f8ff;
    background: #4141a0;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
}

.per-hour-lable{
    padding-left: 5%;
    padding-top: 2%;
    font-size: 20px;
}

.forecast-per-hour{
    text-align: center;
    color: aliceblue;
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.per-hour-1 div:first-child{
    padding:6px 0px 10px 0px;
}

.per-hour-1 div:last-child{
    padding:10px 0px 6px 0px;
}

.per-hour-1 div:first-child + div{
    font-size: 30px;
}

.weather-forecast-future-15-wrapped{
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.weather-forecast-future-15-container{
    margin-top: 5%;
    width: 95%;
    color: #f0f8ff;
    background: #4141a0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
}

.future-15day-lable{
    padding-left: 5%;
    padding-top: 2%;
    padding-bottom: 2%;
    font-size: 20px;
}

.view-forecast-15day{
    border-top: solid 1px;
    font-size: 20px;
    text-align: center;
    opacity: 0.8;
    height: 5%;
    margin-bottom: 3%
}

.bottom-lable{
    margin-top: 1%;
    padding-bottom: 1%;
}

.forecast-15-day{
    text-align: center;
    color: #f0f8ff;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 1%;
}

.forecast-date >p{
    margin-top: 2px;
}

.day15{
    width: 100%;
}

.life-index-wrapped{
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.life-index-container{
    margin-top: 5%;
    width: 95%;
    color: #f0f8ff;
    background: #4141a0;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
}

.life-index-label{
    padding-left: 5%;
    padding-top: 2%;
    padding-bottom: 2%;
    font-size: 20px;
}

.life-index-list{
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    margin-left: 6%;
    padding-bottom: 1%;
    font-size: 15px;
}

.life-index-item{
    width: 50%;
    height: 10%;
    padding-bottom: 15px;
}

.weather-forward{
    margin-top: 5%;
    width: 100%;
    color: #f0f8ff;
    display: flex;
    justify-content: center;
    flex-direction: row;
}

.weather-forward button{
    font-size: 25px;
    background: #4141a0;
    border-radius: 15px;
    border: 1px solid white;
    width: 35%;
    color: #f0f8ff;
    line-height: 1.3;
    text-align: center;
}

.weather-bottom{
    color: #f0f8ff;
    margin: 5%;
    font-size: 14px;
    font-weight: thin;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.last-item{
    margin-bottom: 2%;
}

.last-item-1{
    opacity: 0.7;
}

.xcharts{
    width: 100%;
    background: #4141a0;
}

.echarts-wrap {
  width: 100%;
  height: 220px;
}

.wind-dir-sc{
  font-size: 80%;
  opacity: 0.6;
}
.wind-dir{
  padding-top: 5%;
}
</style>


<script>
import echarts from '../../../node_modules/echarts/dist/echarts.min.js'
import mpvueEcharts from 'mpvue-echarts'
import {weatherType2Icon, weatherType2DayIcon, weatherType2NightIcon} from '@/common/js/weather2icon.js'
import {getCurrentLocation, wxRequest} from '@/utils/wxutils.js'

let chart = null

export default {
  components: {
    mpvueEcharts
  },
  data () {
    return {
      echarts,
      locator: {},
      city: '',
      option: null,
      weatherToday: {},
      airToday: {},
      hourlyToday: [],
      lifeIndex: [],
      dailyForcast: [],
      airForecast: [],
      topData: [],
      cShow: Boolean,
      jShow: Boolean,
      coordinateLat: '',
      coordinatelon: ''
    }
  },
  props: {
    topDataa: {
      type: Array,
      default: () => []
    },
    lowDataa: {
      type: Array,
      default: () => []
    }
  },
  onPullDownRefresh () {
    // to doing..
    this.topDataa = []
    this.lowDataa = []
    this.getGeo1(this.coordinateLat, this.coordinatelon)
    // 停止下拉刷新
    wx.stopPullDownRefresh()
  },
  onShow (options) {
    if ('lat' in this.$mp.query) {
      this.topDataa = []
      this.lowDataa = []
      if ('flag' in this.$mp.query) {
        this.cShow = true
        this.jShow = false
      } else {
        this.cShow = false
        this.jShow = true
      }
      this.getGeo1(this.$mp.query.lat, this.$mp.query.lon)
    }
  },
  methods: {
    initChartData () {
      this.option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          show: false,
          data: []
        },
        yAxis: {
          type: 'value',
          show: false,
          axisLabel: {
            formatter: '{value} °C'
          }
        },
        series: [
          {
            name: '最高气温',
            type: 'line',
            data: this.topDataa,
            lineStyle: {
              color: '#ee8b33'
            },
            itemStyle: {
              normal: {
                color: '#ee8b33',
                label: {
                  show: true
                }
              }
            }
          },
          {
            name: '最低气温',
            type: 'line',
            data: this.lowDataa,
            lineStyle: {
              color: '#2ec7c9'
            },
            itemStyle: {
              normal: {
                color: '#2ec7c9',
                label: {
                  show: true
                }
              }
            }
          }
        ]
      }
      this.chart.setOption(this.option)
    },
    initChart (canvas, width, height) {
      this.chart = echarts.init(canvas, null, {
        width: width,
        height: height
      })
      canvas.setChart(chart)
      return this.chart // 返回 chart 后可以自动绑定触摸操作
    },
    getGeo (lat, lon) {
      console.log(lat)
      console.log(lon)
    },
    async getGeo1 (lat, lon) {
      let key = 'xxxxx-xxxxx-xxxxx-xxxxx-xxxxx'
      let url = 'https://apis.map.qq.com/ws/geocoder/v1/'
      let tqurl = 'https://api.heweather.net/s6/weather/'
      let airurl = 'https://api.heweather.net/s6/air/now'
      let airForecastUrl = 'https://api.heweather.net/s6/air/forecast'
      let tqkey = 'xxxxx-xxxxx-xxxxx-xxxxx-xxxxx'
      let gcl = await getCurrentLocation()
      this.coordinateLat = lat === 'cLat' ? gcl.latitude : lat
      this.coordinateLon = lon === 'cLon' ? gcl.longitude : lon
      let data = {key: key, output: 'json', 'location': `${lat === 'cLat' ? gcl.latitude : lat},${lon === 'cLon' ? gcl.longitude : lon}`}
      let tqdata = {key: tqkey, output: 'json', 'location': `${lon === 'cLon' ? gcl.longitude : lon},${lat === 'cLat' ? gcl.latitude : lat}`}
      let wxrCoordinate = await wxRequest(url, data)
      this.locator = wxrCoordinate.data.result.address_component
      let tqwWeather = await wxRequest(tqurl, tqdata)
      this.weatherToday = tqwWeather.data.HeWeather6[0].now
      this.hourlyToday = tqwWeather.data.HeWeather6[0].hourly
      this.lifeIndex = tqwWeather.data.HeWeather6[0].lifestyle
      this.dailyForcast = tqwWeather.data.HeWeather6[0].daily_forecast
      console.log('this.dailyForcast')
      console.log(this.dailyForcast)
      for (let iterator of tqwWeather.data.HeWeather6[0].daily_forecast.slice(0, 5)) {
        this.topDataa.push(iterator.tmp_max)
        this.lowDataa.push(iterator.tmp_min)
      }
      this.initChartData()
      let airWeather = await wxRequest(airurl, tqdata)
      this.airToday = airWeather.data.HeWeather6[0].air_now_city
      let airForecastWeather = await wxRequest(airForecastUrl, tqdata)
      this.airForecast = airForecastWeather.data.HeWeather6[0].air_forecast
    }
  },
  onLoad () {
    console.log('onLoad')
  },
  created () {
    console.log('created')
    // 调用应用实例的方法获取全局数据
    this.cShow = true
    this.jShow = false
    this.getGeo1('cLat', 'cLon')
  },

  mounted (x) {
    console.log('mounted')
    // this.initChartData()
  },
  computed: {
    weatherToday1: function () {
      return this.weatherToday
    },
    airToday1: function () {
      return this.airToday
    },
    hourlyToday1: function () {
      let hourlyToday = JSON.parse(JSON.stringify(this.hourlyToday))
      for (let iterator of hourlyToday) {
        iterator.time = iterator.time.split(' ')[1]
        iterator.style = weatherType2Icon(iterator.cond_code)
      }
      return hourlyToday.slice(0, 5)
    },
    lifeIndex1: function () {
      let lifeIndex = JSON.parse(JSON.stringify(this.lifeIndex))
      lifeIndex = lifeIndex.filter(item => item.type === 'cw' || item.type === 'flu' || item.type === 'ag' || item.type === 'sport')
      return lifeIndex
    },
    dailyForcast1: function () {
      let dailyForcast = JSON.parse(JSON.stringify(this.dailyForcast)).slice(0, 5)
      for (let iterator of dailyForcast) {
        iterator.dateFormat = iterator.date.split('-')[1] + '/' + iterator.date.split('-')[2]
        iterator.week = new Date(iterator.date).getDay()
        iterator.style_d = weatherType2DayIcon(iterator.cond_code_d)
        iterator.style_n = weatherType2NightIcon(iterator.cond_code_n)
        if (new Date().getDate() === parseInt(iterator.date.split('-')[2])) {
          iterator.week = '今天'
        }
        if (new Date().getDate() + 1 === parseInt(iterator.date.split('-')[2])) {
          iterator.week = '明天'
        } else {
          if (iterator.week === 0) {
            iterator.week = '周日'
          }
          if (iterator.week === 1) {
            iterator.week = '周一'
          }
          if (iterator.week === 2) {
            iterator.week = '周二'
          }
          if (iterator.week === 3) {
            iterator.week = '周三'
          }
          if (iterator.week === 4) {
            iterator.week = '周四'
          }
          if (iterator.week === 5) {
            iterator.week = '周五'
          }
          if (iterator.week === 6) {
            iterator.week = '周六'
          }
        }
      }
      return dailyForcast
    },
    airForecast1: function () {
      let airForecast = JSON.parse(JSON.stringify(this.airForecast)).slice(0, 5)
      return airForecast
    },
    twoHour: function () {
      if (this.hourlyToday1[0]) {
        if (this.hourlyToday1[0].cond_txt === this.hourlyToday1[1].cond_txt) {
          return '未来两小时天气（' + this.hourlyToday1[0].cond_txt + '）'
        } else {
          return '未来两小时天气（' + this.hourlyToday1[0].cond_txt + '转' + this.hourlyToday1[1].cond_txt + '）'
        }
      }
    },
    classType: function () {
      return weatherType2Icon(this.weatherToday.cond_code)
    }
  }
}
</script>