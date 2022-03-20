<template>
  <div class="container_box" id="video_box">
    <div class="van_swipe">
      <!--vant van-swipe 滑动组件 -->
      <van-swipe :show-indicators="false"  vertical :loop="false">
        <van-swipe-item v-for="(item, index) in caseVideoList" :key="index" class="product_swiper">
          <div class="video_container">
            <p style="color: #fff; font-size: 0.4rem; padding: 0.667rem;  margin-top: 3rem">{{item.caseTitle}}</p>
            <iframe :src="item.caseVideoUrl" class="iframe" style="width: 100%;height: 34%; border: medium none; margin-top: 0.267rem" allowfullscreen='true' scrolling="no" ></iframe>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>

import {reqCaseList} from "@/api";
export default {
  name: "case",
  data() {
    return {
      caseVideoList:[],
      pageParmis:{
        pageNum:1,
        pageSize:20
      }
    };
  },
  mounted() {
    this.getCaseVideoList()
  },
  methods: {
    //发送请求 获取数据
    async getCaseVideoList(){
      const result = await reqCaseList(this.pageParmis)
      if(result.code === 200){
        this.caseVideoList = result.data.records
      }
    },
    // onChange(a){
    //   const index = a+1
    //   console.log(index)
    //   this.caseVideoList.forEach(item=>{
    //     if (index === item.id) {
    //       return  item.caseVideoUrl = item.caseVideoUrl  + '&' + 'autoPlay' + '=' + true
    //     }else {
    //       return item.caseVideoUrl
    //     }
    //   })
    //   console.log(this.caseVideoList)
    // }

  },
};
</script>
<style scoped>

.van_swipe {
  width: 100%;
  height: 100%;
}
.van-swipe {
  width: 100%;
  height: 100%;
}
.container_box {
  width: 100%;
  height: 16rem;
}
.video_container{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
