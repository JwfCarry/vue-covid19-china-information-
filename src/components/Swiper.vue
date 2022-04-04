<template>
  <div>
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="#0076ff"
      ref="swiperBox"
      @change="changeBtn"
    >
      <van-swipe-item v-for="item in banner" :key="item.title">
        <img :src="item.image" alt="" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图按钮 -->
    <ul class="btn-list">
      <li
        v-for="(item, index) in banner"
        :key="item.title"
        :class="{ active: index == num }"
        @click="changeSwiper(index)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../api/index";
export default {
  name: "Swiper",
  data() {
    return {
      num: 0,
      arr: [1, 2, 3, 4, 5],
      banner: [],
    };
  },
  mounted() {
    //获取轮播图数据
    api.getSwiperBanner().then((res) => {
      console.log(res.data);
      this.banner = res.data.result;
    });
  },
  methods: {
    //点击按钮切换轮播图
    changeSwiper(index) {
      this.num = index;
      this.$refs.swiperBox.swipeTo(index);
    },
    //图片轮播 按钮也变
    changeBtn(index) {
      this.num = index;
    },
  },
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 14px;
  text-align: center;
  background-color: #39a9ed;
}
.btn-list {
  display: flex;
  .active {
    background: rgb(80, 116, 173);
    color: #fff;
  }
  li {
    flex: 1;
    padding: 0.1rem;
    font-size: 0.24rem;
    line-height: 0.32rem;
    margin: 0.1rem;
    background: #eee;
    color: #666;
    text-align: center;
    display: flex;
    align-items: center;
  }
}
</style>