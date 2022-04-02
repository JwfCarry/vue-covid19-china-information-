<template>
  <div class="num">
    <div class="content">
      <div class="title">截至{{ covData.modifyTime | times }}全国数据统计</div>
      <ul class="wrap">
        <li>
          <div class="number">
            <span>较昨日</span>{{ covData.currentConfirmedIncr | number }}
          </div>
          <div class="bold">{{ covData.currentConfirmedCount }}</div>
          <strong>现存确诊</strong>
        </li>
        <li>
          <div class="number">
            <span>较昨日</span>{{ covData.suspectedIncr | number }}
          </div>
          <div class="bold">{{ covData.suspectedCount }}</div>
          <strong>境外输入</strong>
        </li>
        <li>
          <div class="number">
            <span>较昨日</span>{{ covData.seriousIncr | number }}
          </div>
          <div class="bold">{{ covData.seriousCount }}</div>
          <strong>现存无症状</strong>
        </li>
        <li>
          <div class="number">
            <span>较昨日</span>{{ covData.confirmedIncr | number }}
          </div>
          <div class="bold">{{ covData.confirmedCount }}</div>
          <strong>累计确诊</strong>
        </li>
        <li>
          <div class="number">
            <span>较昨日</span> {{ covData.deadIncr | number }}
          </div>
          <div class="bold">{{ covData.deadCount }}</div>
          <strong>累计死亡</strong>
        </li>
        <li>
          <div class="number">
            <span>较昨日</span> {{ covData.curedIncr | number }}
          </div>
          <div class="bold">{{ covData.curedCount }}</div>
          <strong>累计治愈</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "../api/index";
export default {
  //定义过滤器
  filters: {
    //判断数字较昨日是曾还是减
    number: function (value) {
      value = value > 0 ? "+" + value : value;
      if (value == 0) {
        return "";
      }
      return value;
    },
    //格式化事件
    times: function (num) {
      num = new Date().toLocaleString(num);
      return num;
    },
  },
  name: "CovNumber",
  data() {
    return {
      //疫情统计数据
      covData: {},
    };
  },
  created() {
    //获取疫情统计数据并赋值
    api.getCovInfo().then((res) => {
      let data = res.data.newslist[0].desc;
      this.covData = {
        currentConfirmedCount: data.currentConfirmedCount,
        confirmedCount: data.confirmedCount,
        suspectedCount: data.suspectedCount,
        curedCount: data.curedCount,
        deadCount: data.deadCount,
        seriousCount: data.seriousCount,
        suspectedIncr: data.suspectedIncr,
        currentConfirmedIncr: data.currentConfirmedIncr,
        confirmedIncr: data.confirmedIncr,
        curedIncr: data.curedIncr,
        deadIncr: data.deadIncr,
        seriousIncr: data.seriousIncr,
        modifyTime: data.modifyTime,
      };
    });
  },
};
</script>

<style lang="less" scoped>
.num {
  background: #f5f5f5;
  padding-top: 0.3rem;
  .content {
    background: #fff;
    padding: 0.3rem;
    min-height: 2rem;
    border-radius: 0.2rem 0.2rem 0 0;
    .title {
      color: #666;
      margin-bottom: 0.2rem;
    }
  }
  .wrap {
    display: flex;
    flex-wrap: wrap;
    padding-top: 0.2rem;
    border-radius: 0.1rem;
    box-shadow: 0 0 3px 2px rgba(194, 192, 192, 0.2);
    li {
      width: 33.33333%;
      text-align: center;
      margin-bottom: 0.24rem;
      position: relative;
      font-size: 0.24rem;
      .number {
        span {
          color: #777;
          font-weight: bold;
        }
      }
      strong {
        color: #333;
      }
    }
    // 1 2  3-  4 5 6-
    li::after {
      content: "";
      display: block;
      position: absolute;
      right: 1px;
      top: 0.2rem;
      height: 0.8rem;
      border-right: 1px solid #eee;
    }
    li:nth-child(3n)::after {
      content: "";
      border-right: 0;
    }
    .bold {
      font-weight: bold;
      font-size: 0.36rem;
    }
    li:nth-child(1) {
      color: red;
    }
    li:nth-child(2) {
      color: rgb(18, 143, 14);
    }
    li:nth-child(3) {
      color: orange;
    }
    li:nth-child(4) {
      color: rgb(189, 19, 98);
    }
    li:nth-child(5) {
      color: rgb(223, 208, 7);
    }
    li:nth-child(6) {
      color: rgb(8, 110, 194);
    }
  }
}
</style>