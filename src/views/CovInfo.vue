<template>
  <!-- 病毒信息组件 -->
  <div class="info">
    <!-- 病毒介绍 -->
    <div class="cov">
      <div class="title">病毒信息</div>
      <p>{{ covMsg.note1 }}</p>
      <p>{{ covMsg.note2 }}</p>
      <p>{{ covMsg.note3 }}</p>
      <p>{{ covMsg.remark1 }}</p>
      <p>{{ covMsg.remark2 }}</p>
      <p>{{ covMsg.remark3 }}</p>
    </div>
    <!-- 疫情热点 -->
    <div class="hot">
      <div class="title">
        <img src="../assets/images/hot.png" width="55px" alt="" />
        <a href="##">查看更多<img src="../assets/images/more.png" alt="" /></a>
      </div>
      <ul class="list">
        <li v-for="item in hotNews" :key="item.id">
          <span>最新</span>{{ item.title }}
          <img src="../assets/images/right.png" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "../api/index";
export default {
  name: "CovInfo",
  data() {
    return {
      //病毒信息数据
      covMsg: {
        note1: "病毒：SARS-CoV-2,其导致疾病命名为COVID-19",
        note2: "传染源：新冠肺炎的患者。无症状感染者也可能成为传染源",
        note3:
          "传播途经：经呼吸道飞沫、接触传播是主要的传播途经。气溶胶传播和消化道等传播途经尚待明确",
        remark1:
          "易感人群：人群普遍易感。老年人及有基础疾病者感染后病情较重，儿童及婴幼儿也有发病",
        remark2:
          "潜伏期：一般为3~7天，最长不超过14天，潜伏期内可能存在传染性，其中无症状病例传染性非常罕见",
        remark3: "宿主：野生动物,可能为 中华菊头蝠",
      },
      //疫情热点新闻数据
      hotNews: [],
    };
  },
  created() {
    //请求病毒信息接口
    api.getCovInfo().then((res) => {
      this.hotNews = res.data.newslist[0].news;
    });
  },
};
</script>

<style lang='less' scoped>
.info {
  padding: 0.2rem;
  .title {
    margin-bottom: 0.2rem;
    font-size: 0.3rem;
    font-weight: bold;
    color: #666;
    a {
      float: right;
      font-weight: normal;
      color: #4169e2;
      font-size: 0.26rem;
      img {
        width: 0.26rem;
      }
    }
  }
  .title::before {
    content: "";
    border-left: 0.1rem solid rgb(9, 60, 202);
    font-size: 0.26rem;
    margin-right: 0.1rem;
  }
  p {
    line-height: 0.5rem;
    color: #666;
  }
  .hot {
    padding-top: 0.2rem;
    border-bottom: 1px solid #eee;
    .icon {
      width: 1.2rem;
      vertical-align: top;
    }
    .list {
      li {
        line-height: 0.44rem;
        margin-bottom: 0.2rem;
        letter-spacing: 0.03rem;
        font-size: 0.3rem;
        color: #666;
      }
      span {
        background: #ff5555;
        color: #fff;
        font-size: 0.26rem;
        padding: 0.02rem 0.06rem;
        border-radius: 0.06rem;
      }
      img {
        float: right;
        width: 0.24rem;
        padding-right: 0.2rem;
        margin-top: 0.1rem;
      }
    }
  }
}
</style>