//管理所有请求接口方法
import axios from 'axios'
import base from './base' //接口地址
const api = {
    //病毒信息获取
    getCovInfo() {
        return axios.get(base.host + base.covInfo)
    }
}
export default api