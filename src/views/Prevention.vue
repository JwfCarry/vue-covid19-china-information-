<template>
  <!-- 防疫物资组件 -->
  <div class="wuzi">
    <!-- 顶部logo -->
    <img src="../assets/images/wuzi.png" width="100%" alt="" />
    <!-- 物资内容 -->
    <div class="wrapper">
      <!-- vant库 tabs -->
      <van-tabs v-model="active" animated>
        <van-tab v-for="item in arr" :title="item.title" :key="item.title">
          <img width="100%" :src="item.img" alt="" />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/images/jiujing.png";
import img2 from "../assets/images/kouzhao.png";
export default {
  name: "Prevention",
  data() {
    return {
      active: 0,
      arr: [
        {
          title: "消毒剂",
          img: img1,
        },
        {
          title: "口罩",
          img: img2,
        },
      ],
    };
  },
};
</script>

<style>
</style>