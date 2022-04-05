//路由文件
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hesuan from '../views/Hesuan.vue'
import Area from '../views/Area.vue'
import Prevention from '../views/Prevention'
import Citys from '../views/Citys'
import Travel from '../views/Travel'
const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/hesuan',
    name: 'Hesuan',
    component: Hesuan
}, {
    path: '/area',
    name: 'Area',
    component: Area
}, {
    path: '/prevention',
    name: 'Prevention',
    component: Prevention
},
{
    path: '/citys/:cityname',
    name: 'Citys',
    component: Citys,
    props: true
}, {
    path: '/travel',
    name: 'travel',
    component: Travel,
}
]
const router = new VueRouter({
    routes
})
export default router