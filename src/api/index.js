//管理所有请求接口方法
import axios from 'axios'
import base from './base' //接口地址
import md5 from 'md5-js' //引入md5加密js
const api = {
    //病毒信息获取
    getCovInfo() {
        return axios.get(base.host + base.covInfo)
    },
    //获取国内疫情
    getChinaData() {
        return axios.get(base.baseUrl + base.chinaData)
    },
    //获取国外路径
    getWorldData() {
        return axios.get(base.baseUrl + base.worldData)
    },
    //获取城市数据
    //format=json&appid=15740&city_name=%E6%AD%A6%E6%B1%89&sign=050df0e55b0c1e3bb5599a94f732995d
    //MD5加密字符串：appid15740city_name武汉formatjson+密钥
    //81fd148a441bc1e19c7469374031db45
    getCity(city_name) {

        let rules = md5('appid15740city_name' + city_name + 'formatjson81fd148a441bc1e19c7469374031db45');
        let canshu = 'format=json&appid=15740&city_name=' + city_name + '&sign=' + rules;
        return axios.get(base.baseUrl + base.city + '?' + canshu)
    },
    //获取轮播图数据
    getSwiperBanner() {
        return axios.get(base.swiperBanner);
    },
    //城市数据查询
    getTravel() {
        return axios.get(base.travel)
    },
    //城市出行政策
    getTravelQuery(params) {//params={from:'',to:''}
        return axios.get(base.travelQuery, {
            params
        })
    }

}
export default api