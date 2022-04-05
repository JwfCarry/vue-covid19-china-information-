<template>
  <div>
    <div class="chaxunbox">
      <div class="title">
        <h2>出行防疫政策查询</h2>
      </div>
      <van-field
        v-model="goCity"
        is-link
        readonly
        label="出发城市"
        placeholder="请选择所在地区"
        @click="show = true"
      />
      <van-popup v-model="show" round position="bottom">
        <van-cascader
          v-model="cascaderValue"
          title="请选择出发城市"
          :options="options"
          @close="show = false"
          @finish="onFinish"
        />
      </van-popup>

      <van-field
        v-model="toCity"
        is-link
        readonly
        label="到达城市"
        placeholder="请选择所在地区"
        @click="show2 = true"
      />
      <van-popup v-model="show2" round position="bottom">
        <van-cascader
          v-model="cascaderValue2"
          title="请选择出发城市"
          :options="options"
          @close="show2 = false"
          @finish="toFinish"
        />
      </van-popup>
      <!-- 查询按钮 -->
      <div class="search">
        <van-button round type="primary" size="normal" @click="search"
          >查询疫情防疫</van-button
        >
      </div>
    </div>
    <div class="info">
      <div class="infotitle"></div>
      <div class="frominfo">{{ from_info }}</div>
      <div class="toinfo">{{ to_info }}</div>
    </div>
  </div>
</template>

<script>
import api from "../api/index";
export default {
  name: "Travel",
  data() {
    return {
      show: false, //弹框状态  false隐藏 true显示
      show2: false, //弹框状态  false隐藏 true显示
      goCity: "", //出发的值
      toCity: "", //到达的值
      from: "", //出发的id
      to: "", //到达的id
      cascaderValue: "",
      cascaderValue2: "",
      from_info: "",
      to_info: "",
      // 城市数据选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ value, selectedOptions }) {
      console.log(value);
      this.from = value;
      this.show = false;
      this.goCity = selectedOptions.map((option) => option.text).join("/");
    },
    toFinish({ value, selectedOptions }) {
      console.log(value);
      this.to = value;
      this.show2 = false;
      this.toCity = selectedOptions.map((option) => option.text).join("/");
    },
    //查询政策按钮
    search() {
      api
        .getTravelQuery({
          from: this.from,
          to: this.to,
        })
        .then((res) => {
          console.log(res.data);
          this.from_info = res.data.result.from_info.low_in_desc;
          this.to_info = res.data.result.to_info.out_desc;
        });
    },
  },
  created() {
    //获取城市数据
    api.getTravel().then((res) => {
      let result = res.data.result;
      //处理数据结构：[{text:'',value:'',children:[{}]},{}]
      let arr = [];
      result.forEach((item) => {
        let obj = {};
        obj.text = item.province; //省份名称
        obj.value = item.province_id; //省份的标识id
        obj.children = []; //二级区域
        item.citys.forEach((ele) => {
          let child = {};
          child.text = ele.city;
          child.value = ele.city_id;
          //追加给obj.children=[]
          obj.children.push(child);
        });
        // -----------
        arr.push(obj);
      });
      //打印处理后的数据
      console.log("打印处理后的数据", arr);
      this.options = arr;
    });
  },
};
</script>

<style lang="less" scoped>
.chaxunbox {
  .title {
  }
  border: 1px solid #efefef;
  padding: 0.2rem;
  margin: 0.2rem;
  border-radius: 2%;
  box-shadow: 0 0 0.03rem #666;
}
.search {
  margin-left: 55%;
  transform: translateX(-50%);
}
.info {
}
</style>