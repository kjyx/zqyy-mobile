<template>
  <div class="min" v-cloak>
    <div class="big_title">
      <span class="font">新闻详情</span>
      <span class="h_bottom_line"></span>
    </div>
    <div  v-html="NewsInfo.newsContent"  class="news"></div>
    <van-button  @click="$router.push({path:'/news'})">返回</van-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button);
import {reqNewssInfo} from "@/api";
export default {
  name: "newsInfo",
  data(){
    return{
      NewsInfo:{}
    }
  },
  mounted() {
    this.getNewsInfo()
  },
  methods:{
    async getNewsInfo(){
     const result = await reqNewssInfo(this.$route.params.id)
      if(result.code === 200){
        this.NewsInfo = result.data
      }
    }
  }
}
</script>

<style scoped lang="less">
// 导航
.min{
  position: relative;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  background-color: #fff;
  .big_title{
    position: relative;
    padding: 0.333rem 0;
    text-align: left;
    border-bottom: 1px solid #dfdfdf;
    .font{
      display: block;
      font-size: 0.4rem;
      font-weight: 700;
    }
    .h_bottom_line{
      display: inline-block;
      width: 70px;
      height: 5px;
      background: #1DAD65;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .news{
    padding: 0.4rem 0 2rem 0;
    /deep/ p{
      line-height: 0.5rem;
      span{
        font-size: 0.3rem !important;
        img{
          margin: 0.3rem 0;
        }
      }
    }
  }

  .van-button{
    position: absolute;
    left: 50% ;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: 0;
    width: 5.333rem;
    font-size: 0.4rem;
    background-color: red;
    color: #fff;
    border-radius: 10px;
    margin-bottom: 0.4rem;
  }
}
</style>
