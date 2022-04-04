<template>
  <div class="home">
    <!-- 1顶部图片 -->
    <img src="../assets/images/yiqingtong.jpg" width="100%" alt="" />
    <!-- 2病毒信息 -->
    <CovInfo />
    <!-- 3疫情小导航 -->
    <div class="list">
      <div>
        <router-link to="/area">
          <img src="../assets/images/1.png" alt="" />
          <div>风险地区</div>
        </router-link>
      </div>
      <div>
        <router-link to="/hesuan">
          <img src="../assets/images/2.png" alt="" />
          <div>核算检测</div>
        </router-link>
      </div>
      <div>
        <router-link to="/prevention">
          <img src="../assets/images/3.png" alt="" />
          <div>防疫物资</div>
        </router-link>
      </div>
      <div>
        <img src="../assets/images/4.png" alt="" />
        <div>出行政策</div>
      </div>
    </div>
    <!-- 4.数据统计 -->
    <cov-number />
    <!-- 5.中国疫情地图 -->
    <china-map />
    <!-- 6世界疫情地图 -->
    <world-map />
    <!-- 轮播图 -->
    <Swiper />
  </div>
</template> 

<script>
import CovInfo from "./CovInfo.vue"; //引入病毒信息组件
import CovNumber from "./CovNumber.vue"; //引入疫情数据数字统计组件
import ChinaMap from "./ChinaMap.vue"; //引入中国疫情信息地图组件
import WorldMap from "./WorldMap";
import Swiper from "../components/Swiper.vue";
export default {
  name: "Home",
  components: {
    CovInfo,
    CovNumber,
    ChinaMap,
    WorldMap,
    Swiper,
  },
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  padding-bottom: 0.3rem;
  div {
    flex: 1;
    text-align: center;
    color: #666;
    img {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
</style>