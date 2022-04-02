//路由文件
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hesuan from '../views/Hesuan.vue'
import Area from '../views/Area.vue'
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
}
]
const router = new VueRouter({
    routes
})
export default router