//公共请求接口 管理文件
const base = {
    host: 'http://api.tianapi.com',  //天行数据接口 疫情病毒
    baseUrl: 'https://vyps.api.storeapi.net',//挖数据---
    covInfo: '/ncov/index?key=94cf0cfb56bd8d3257fbfc4515b1e15d',
    chinaData: '/api/94/219?format=json&appid=15740&sign=b19b4b50603e1cda65441645aa4fbee8',//国内疫情接口
    worldData: '/api/94/220?format=json&appid=15740&sign=b19b4b50603e1cda65441645aa4fbee8',//世界疫情数据
    city: '/api/94/221',//城市接口
    swiperBanner: 'http://iwenwiki.com/wapicovid19/ncovimg.php',//轮播图疫情
}
export default base