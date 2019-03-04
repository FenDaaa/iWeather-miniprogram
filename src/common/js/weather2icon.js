let wtType = [
  '100', '101', '102', '103', '104',
  '200', '201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213',
  '300', '301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318', '399',
  '400', '401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '499',
  '500', '501', '502', '503', '504', '507', '508', '509', '510', '511', '512', '513', '514', '515',
  '900', '901', '999'
]
var weatherType2Icon = (type) => {
  let classType = ''
  switch (type) {
    // 晴
    case wtType[0]: classType = 'wi-day-sunny'
      break
    // 多云
    case wtType[1]: classType = 'wi-cloudy'
      break
    // 少云
    case wtType[2]: classType = 'wi-day-sunny-overcast'
      break
    // 晴间多云
    case wtType[3]: classType = 'wi-cloudy'
      break
    // 阴
    case wtType[4]: classType = 'wi-cloud'
      break
    // 200~
    // 有风
    case wtType[5]: classType = 'wi-windy'
      break
    // 平静
    case wtType[6]: classType = 'wi-wind-beaufort-0'
      break
    // 微风
    case wtType[7]: classType = 'wi-windy'
      break
    // 和风
    case wtType[8]: classType = 'wi-windy'
      break
    // 清风
    case wtType[9]: classType = 'wi-windy'
      break
    // 强风
    case wtType[10]: classType = 'wi-strong-wind'
      break
    // 疾风
    case wtType[11]: classType = 'wi-strong-wind'
      break
    // 大风
    case wtType[12]: classType = 'wi-strong-wind'
      break
    // 烈风
    case wtType[13]: classType = 'wi-strong-wind'
      break
    // 风暴
    case wtType[14]: classType = 'wi-strong-wind'
      break
    // 狂暴风
    case wtType[15]: classType = 'wi-strong-wind'
      break
    // 飓风
    case wtType[16]: classType = 'wi-hurricane'
      break
    // 龙卷风
    case wtType[17]: classType = 'wi-tornado'
      break
    // 热带风暴
    case wtType[18]: classType = 'wi-strong-wind'
      break
    // 300~
    // 阵雨
    case wtType[19]: classType = 'wi-day-showers'
      break
    // 强阵雨
    case wtType[20]: classType = 'wi-day-showers'
      break
    // 雷阵雨
    case wtType[21]: classType = 'wi-day-storm-showers'
      break
    // 强雷阵雨
    case wtType[22]: classType = 'wi-day-thunderstorm'
      break
    // 雷阵雨伴有冰雹
    case wtType[23]: classType = 'wi-storm-showers'
      break
    // 小雨
    case wtType[24]: classType = 'wi-sprinkle'
      break
    // 中雨
    case wtType[25]: classType = 'wi-showers'
      break
    // 大雨
    case wtType[26]: classType = 'wi-rain'
      break
    // 极端降雨
    case wtType[27]: classType = 'wi-rain'
      break
    // 毛毛雨/细雨
    case wtType[28]: classType = 'wi-day-showers'
      break
    // 暴雨
    case wtType[29]: classType = 'wi-rain-wind'
      break
    // 大暴雨
    case wtType[30]: classType = 'wi-rain-wind'
      break
    // 特大暴雨
    case wtType[31]: classType = 'wi-rain-wind'
      break
    // 冻雨
    case wtType[32]: classType = 'wi-hail'
      break
    // 小到中雨
    case wtType[33]: classType = 'wi-showers'
      break
    // 中到大雨
    case wtType[34]: classType = 'wi-rain'
      break
    // 大到暴雨
    case wtType[35]: classType = 'wi-rain'
      break
    // 暴雨到大暴雨
    case wtType[36]: classType = 'wi-rain'
      break
    // 大暴雨到特大暴雨
    case wtType[37]: classType = 'wi-rain'
      break
    // 雨
    case wtType[38]: classType = 'wi-rain'
      break
    // 400~
    // 小雪
    case wtType[39]: classType = 'wi-snowflake-cold'
      break
    // 中雪
    case wtType[40]: classType = 'wi-snowflake-cold'
      break
    // 大雪
    case wtType[41]: classType = 'wi-snowflake-cold'
      break
    // 暴雪
    case wtType[42]: classType = 'wi-snowflake-cold'
      break
    // 雨夹雪
    case wtType[43]: classType = 'wi-snowflake-cold'
      break
    // 雨雪天气
    case wtType[44]: classType = 'wi-snowflake-cold'
      break
    // 阵雨夹雪
    case wtType[45]: classType = 'wi-snowflake-cold'
      break
    // 阵雪
    case wtType[46]: classType = 'wi-snowflake-cold'
      break
    // 小到中雪
    case wtType[47]: classType = 'wi-snowflake-cold'
      break
    // 中到大雪
    case wtType[48]: classType = 'wi-snowflake-cold'
      break
    // 大到暴雪
    case wtType[49]: classType = 'wi-snowflake-cold'
      break
    // 雪
    case wtType[50]: classType = 'wi-snowflake-cold'
      break
    // 500~
    // 薄雾
    case wtType[51]: classType = 'wi-fog'
      break
    // 雾
    case wtType[52]: classType = 'wi-fog'
      break
    // 霾
    case wtType[53]: classType = 'wi-fog'
      break
    // 扬沙
    case wtType[54]: classType = 'wi-sandstorm'
      break
    // 浮尘
    case wtType[55]: classType = 'wi-dust'
      break
    // 沙尘暴
    case wtType[56]: classType = 'wi-sandstorm'
      break
    // 强沙尘暴
    case wtType[57]: classType = 'wi-sandstorm'
      break
    // 浓雾
    case wtType[58]: classType = 'wi-smog'
      break
    // 强浓雾
    case wtType[59]: classType = 'wi-smog'
      break
    // 中度霾
    case wtType[60]: classType = 'wi-fog'
      break
    // 重度霾
    case wtType[61]: classType = 'wi-fog'
      break
    // 严重霾
    case wtType[62]: classType = 'wi-fog'
      break
    // 大雾
    case wtType[63]: classType = 'wi-fog'
      break
    // 特强浓雾
    case wtType[64]: classType = 'wi-fog'
      break
    // 900~
    // 热
    case wtType[65]: classType = 'wi-hot'
      break
    // 冷
    case wtType[66]: classType = 'wi-snowflake-cold'
      break
    // 未知
    case wtType[67]: classType = 'wi-na'
      break
  }
  return classType
}
var weatherType2DayIcon = (type) => {
  let classDayType = ''
  switch (type) {
    // 晴
    case wtType[0]: classDayType = 'wi-day-sunny'
      break
    // 多云
    case wtType[1]: classDayType = 'wi-day-cloudy'
      break
    // 少云
    case wtType[2]: classDayType = 'wi-day-sunny-overcast'
      break
    // 晴间多云
    case wtType[3]: classDayType = 'wi-day-cloudy'
      break
    // 阴
    case wtType[4]: classDayType = 'wi-cloud'
      break
    // 200~
    // 有风
    case wtType[5]: classDayType = 'wi-day-windy'
      break
    // 平静
    case wtType[6]: classDayType = 'wi-wind-beaufort-0'
      break
    // 微风
    case wtType[7]: classDayType = 'wi-day-windy'
      break
    // 和风
    case wtType[8]: classDayType = 'wi-day-windy'
      break
    // 清风
    case wtType[9]: classDayType = 'wi-day-windy'
      break
    // 强风/劲风
    case wtType[10]: classDayType = 'wi-strong-wind'
      break
    // 疾风
    case wtType[11]: classDayType = 'wi-strong-wind'
      break
    // 大风
    case wtType[12]: classDayType = 'wi-strong-wind'
      break
    // 烈风
    case wtType[13]: classDayType = 'wi-strong-wind'
      break
    // 风暴
    case wtType[14]: classDayType = 'wi-strong-wind'
      break
    // 狂爆风
    case wtType[15]: classDayType = 'wi-strong-wind'
      break
    // 飓风
    case wtType[16]: classDayType = 'wi-hurricane'
      break
    // 龙卷风
    case wtType[17]: classDayType = 'wi-tornado'
      break
    // 热带风暴
    case wtType[18]: classDayType = 'wi-strong-wind'
      break
    // 300~
    // 阵雨
    case wtType[19]: classDayType = 'wi-day-showers'
      break
    // 强阵雨
    case wtType[20]: classDayType = 'wi-day-showers'
      break
    // 雷阵雨
    case wtType[21]: classDayType = 'wi-day-storm-showers'
      break
    // 强雷阵雨
    case wtType[22]: classDayType = 'wi-day-thunderstorm'
      break
    // 雷阵雨伴有冰雹
    case wtType[23]: classDayType = 'wi-day-storm-showers'
      break
    // 小雨
    case wtType[24]: classDayType = 'wi-day-sprinkle'
      break
    // 中雨
    case wtType[25]: classDayType = 'wi-day-showers'
      break
    // 大雨
    case wtType[26]: classDayType = 'wi-day-rain'
      break
    // 极端降雨
    case wtType[27]: classDayType = 'wi-day-rain'
      break
    // 毛毛雨/细雨
    case wtType[28]: classDayType = 'wi-day-showers'
      break
    // 暴雨
    case wtType[29]: classDayType = 'wi-day-rain-wind'
      break
    // 大暴雨
    case wtType[30]: classDayType = 'wi-day-rain-wind'
      break
    // 特大暴雨
    case wtType[31]: classDayType = 'wi-day-rain-wind'
      break
    // 冻雨
    case wtType[32]: classDayType = 'wi-day-hail'
      break
    // 小到中雨
    case wtType[33]: classDayType = 'wi-day-showers'
      break
    // 中到大雨
    case wtType[34]: classDayType = 'wi-day-rain'
      break
    // 大到暴雨
    case wtType[35]: classDayType = 'wi-day-rain'
      break
    // 暴雨到大暴雨
    case wtType[36]: classDayType = 'wi-day-rain'
      break
    // 大暴雨到特大暴雨
    case wtType[37]: classDayType = 'wi-day-rain'
      break
    // 雨
    case wtType[38]: classDayType = 'wi-day-rain'
      break
    // 400~
    // 小雪
    case wtType[39]: classDayType = 'wi-snowflake-cold'
      break
    // 中雪
    case wtType[40]: classDayType = 'wi-snowflake-cold'
      break
    // 大雪
    case wtType[41]: classDayType = 'wi-snowflake-cold'
      break
    // 暴雪
    case wtType[42]: classDayType = 'wi-snowflake-cold'
      break
    // 雨夹雪
    case wtType[43]: classDayType = 'wi-snowflake-cold'
      break
    // 雨雪天气
    case wtType[44]: classDayType = 'wi-snowflake-cold'
      break
    // 阵雨夹雪
    case wtType[45]: classDayType = 'wi-snowflake-cold'
      break
    // 阵雪
    case wtType[46]: classDayType = 'wi-snowflake-cold'
      break
    // 小到中雪
    case wtType[47]: classDayType = 'wi-snowflake-cold'
      break
    // 中到大雪
    case wtType[48]: classDayType = 'wi-snowflake-cold'
      break
    // 大到暴雪
    case wtType[49]: classDayType = 'wi-snowflake-cold'
      break
    // 雪
    case wtType[50]: classDayType = 'wi-snowflake-cold'
      break
    // 500~
    // 薄雾
    case wtType[51]: classDayType = 'wi-day-fog'
      break
    // 雾
    case wtType[52]: classDayType = 'wi-day-fog'
      break
    // 霾
    case wtType[53]: classDayType = 'wi-day-fog'
      break
    // 扬沙
    case wtType[54]: classDayType = 'wi-sandstorm'
      break
    // 浮尘
    case wtType[55]: classDayType = 'wi-dust'
      break
    // 沙尘暴
    case wtType[56]: classDayType = 'wi-sandstorm'
      break
    // 强沙尘暴
    case wtType[57]: classDayType = 'wi-sandstorm'
      break
    // 浓雾
    case wtType[58]: classDayType = 'wi-smog'
      break
    // 强浓雾
    case wtType[59]: classDayType = 'wi-smog'
      break
    // 中度霾
    case wtType[60]: classDayType = 'wi-day-fog'
      break
    // 重度霾
    case wtType[61]: classDayType = 'wi-day-fog'
      break
    // 严重霾
    case wtType[62]: classDayType = 'wi-day-fog'
      break
    // 大雾
    case wtType[63]: classDayType = 'wi-day-fog'
      break
    // 特强浓雾
    case wtType[64]: classDayType = 'wi-day-fog'
      break
    // 900~
    // 热
    case wtType[65]: classDayType = 'wi-hot'
      break
    // 冷
    case wtType[66]: classDayType = 'wi-snowflake-cold'
      break
    // 未知
    case wtType[67]: classDayType = 'wi-na'
      break
  }
  return classDayType
}
var weatherType2NightIcon = (type) => {
  let classNightType = ''
  switch (type) {
    // 晴
    case wtType[0]: classNightType = 'wi-night-clear'
      break
    // 多云
    case wtType[1]: classNightType = 'wi-night-alt-cloudy'
      break
    // 少云
    case wtType[2]: classNightType = 'wi-night-alt-partly-cloudy'
      break
    // 晴间多云
    case wtType[3]: classNightType = 'wi-night-alt-cloudy-high'
      break
    // 阴
    case wtType[4]: classNightType = 'wi-cloud'
      break
    // 200~
    // 有风
    case wtType[5]: classNightType = 'wi-night-alt-cloudy-gusts'
      break
    // 平静
    case wtType[6]: classNightType = 'wi-wind-beaufort-0'
      break
    // 微风
    case wtType[7]: classNightType = 'wi-night-alt-cloudy-gusts'
      break
    // 和风
    case wtType[8]: classNightType = 'wi-night-alt-cloudy-gusts'
      break
    // 清风
    case wtType[9]: classNightType = 'wi-night-alt-cloudy-gusts'
      break
    // 强风/劲风
    case wtType[10]: classNightType = 'wi-strong-wind'
      break
    // 疾风
    case wtType[11]: classNightType = 'wi-strong-wind'
      break
    // 大风
    case wtType[12]: classNightType = 'wi-strong-wind'
      break
    // 烈风
    case wtType[13]: classNightType = 'wi-strong-wind'
      break
    // 风暴
    case wtType[14]: classNightType = 'wi-strong-wind'
      break
    // 狂爆风
    case wtType[15]: classNightType = 'wi-strong-wind'
      break
    // 飓风
    case wtType[16]: classNightType = 'wi-hurricane'
      break
    // 龙卷风
    case wtType[17]: classNightType = 'wi-tornado'
      break
    // 热带风暴
    case wtType[18]: classNightType = 'wi-strong-wind'
      break
    // 300~
    // 阵雨
    case wtType[19]: classNightType = 'wi-night-alt-showers'
      break
    // 强阵雨
    case wtType[20]: classNightType = 'wi-night-alt-showers'
      break
    // 雷阵雨
    case wtType[21]: classNightType = 'wi-night-alt-storm-showers'
      break
    // 强雷阵雨
    case wtType[22]: classNightType = 'wi-night-alt-thunderstorm'
      break
    // 雷阵雨伴有冰雹
    case wtType[23]: classNightType = 'wi-night-alt-storm-showers'
      break
    // 小雨
    case wtType[24]: classNightType = 'wi-night-alt-sprinkle'
      break
    // 中雨
    case wtType[25]: classNightType = 'wi-night-alt-showers'
      break
    // 大雨
    case wtType[26]: classNightType = 'wi-night-alt-rain'
      break
    // 极端降雨
    case wtType[27]: classNightType = 'wi-night-alt-rain'
      break
    // 毛毛雨/细雨
    case wtType[28]: classNightType = 'wi-night-alt-showers'
      break
    // 暴雨
    case wtType[29]: classNightType = 'wi-night-alt-rain-wind'
      break
    // 大暴雨
    case wtType[30]: classNightType = 'wi-night-alt-rain-wind'
      break
    // 特大暴雨
    case wtType[31]: classNightType = 'wi-night-alt-rain-wind'
      break
    // 冻雨
    case wtType[32]: classNightType = 'wi-night-alt-hail'
      break
    // 小到中雨
    case wtType[33]: classNightType = 'wi-night-alt-showers'
      break
    // 中到大雨
    case wtType[34]: classNightType = 'wi-night-alt-rain'
      break
    // 大到暴雨
    case wtType[35]: classNightType = 'wi-night-alt-rain'
      break
    // 暴雨到大暴雨
    case wtType[36]: classNightType = 'wi-night-alt-rain'
      break
    // 大暴雨到特大暴雨
    case wtType[37]: classNightType = 'wi-night-alt-rain'
      break
    // 雨
    case wtType[38]: classNightType = 'wi-night-alt-rain'
      break
    // 400~
    // 小雪
    case wtType[39]: classNightType = 'wi-snowflake-cold'
      break
    // 中雪
    case wtType[40]: classNightType = 'wi-snowflake-cold'
      break
    // 大雪
    case wtType[41]: classNightType = 'wi-snowflake-cold'
      break
    // 暴雪
    case wtType[42]: classNightType = 'wi-snowflake-cold'
      break
    // 雨夹雪
    case wtType[43]: classNightType = 'wi-snowflake-cold'
      break
    // 雨雪天气
    case wtType[44]: classNightType = 'wi-snowflake-cold'
      break
    // 阵雨夹雪
    case wtType[45]: classNightType = 'wi-snowflake-cold'
      break
    // 阵雪
    case wtType[46]: classNightType = 'wi-snowflake-cold'
      break
    // 小到中雪
    case wtType[47]: classNightType = 'wi-snowflake-cold'
      break
    // 中到大雪
    case wtType[48]: classNightType = 'wi-snowflake-cold'
      break
    // 大到暴雪
    case wtType[49]: classNightType = 'wi-snowflake-cold'
      break
    // 雪
    case wtType[50]: classNightType = 'wi-snowflake-cold'
      break
    // 500~
    // 薄雾
    case wtType[51]: classNightType = 'wi-night-fog'
      break
    // 雾
    case wtType[52]: classNightType = 'wi-night-fog'
      break
    // 霾
    case wtType[53]: classNightType = 'wi-night-fog'
      break
    // 扬沙
    case wtType[54]: classNightType = 'wi-sandstorm'
      break
    // 浮尘
    case wtType[55]: classNightType = 'wi-dust'
      break
    // 沙尘暴
    case wtType[56]: classNightType = 'wi-sandstorm'
      break
    // 强沙尘暴
    case wtType[57]: classNightType = 'wi-sandstorm'
      break
    // 浓雾
    case wtType[58]: classNightType = 'wi-smog'
      break
    // 强浓雾
    case wtType[59]: classNightType = 'wi-smog'
      break
    // 中度霾
    case wtType[60]: classNightType = 'wi-night-fog'
      break
    // 重度霾
    case wtType[61]: classNightType = 'wi-night-fog'
      break
    // 严重霾
    case wtType[62]: classNightType = 'wi-night-fog'
      break
    // 大雾
    case wtType[63]: classNightType = 'wi-night-fog'
      break
    // 特强浓雾
    case wtType[64]: classNightType = 'wi-night-fog'
      break
    // 900~
    // 热
    case wtType[65]: classNightType = 'wi-hot'
      break
    // 冷
    case wtType[66]: classNightType = 'wi-snowflake-cold'
      break
    // 未知
    case wtType[67]: classNightType = 'wi-na'
      break
  }
  return classNightType
}
export {weatherType2Icon, weatherType2DayIcon, weatherType2NightIcon}
