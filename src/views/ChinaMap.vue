<template>
  <div>
    <div class="title">国内疫情地图</div>
    <!-- 地图容器 -->
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <van-tabs v-model="active" animated @change="change">
      <van-tab title="现存确诊">
        <div id="nowMain" style="width: 7.5rem; height: 7rem"></div>
      </van-tab>
      <van-tab title="累计确诊">
        <div id="main" style="width: 7.5rem; height: 7rem"></div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import api from "../api/index";
export default {
  name: "ChinaMap",
  data() {
    return {
      active: 0,
      arr: [],
    };
  },
  //3. echarts实例-创建地图
  mounted() {
    //获取疫情数据-----------------------------------------------
    api.getChinaData().then((res) => {
      //获取省份数据
      let citys = res.data.retdata;
      let arr = []; //累计
      let nowArr = []; //现存
      for (let i = 0; i < citys.length; i++) {
        let obj = {};
        obj.name = citys[i].xArea;
        obj.value = citys[i].confirm; //累计确诊人数   curConfirm现在确诊人数
        let now = {};
        now.name = citys[i].xArea;
        now.value = citys[i].curConfirm;
        arr.push(obj);
        nowArr.push(now);
      }
      this.arr = arr;
      //vue里面 等待延迟加载
      this.$nextTick(() => {
        //显示累计地图
        // this.$myChart.chinaMap("main", arr);
        //显示现存地图
        this.$myChart.chinaMap("nowMain", nowArr);
      });
    });
  },
  methods: {
    change(title) {
      //name,title
      //   console.log("-----", title);
      if (title == 1) {
        this.$nextTick(() => {
          this.$myChart.chinaMap("main", this.arr);
        });
      }
    },
  },
};
</script>

<style lang='less' scoped>
.title {
  margin: 0.2rem;
  padding-top: 0.2rem;
  border-top: 1px solid #eee;
}
.title::before {
  content: "";
  border-left: 0.1rem solid rgb(9, 60, 202);
  font-size: 0.26rem;
  margin-right: 0.1rem;
}
#main,
#nowMain {
  background: #f5f5f5;
}
</style>