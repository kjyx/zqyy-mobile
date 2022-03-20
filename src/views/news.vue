<template>
  <div style="background-color: #fff;">
    <!--    新闻-->
    <div class="home-news">
      <div class="wp">
        <div class="news-box">
          <div class="news-title">
            <img src="@/assets/news1.png" alt="">
          </div>
            <van-tabs v-model="activeName" type="card" @click="handleClick">
              <van-tab title="公司新闻" name="gsxw">
                <div class="wp">
                  <div class="news-list">
                    <ul>
                      <li v-for="item in newsList" :key="item.id" @click="$router.push({path:`/newsInfo/${item.id}`})">
                        <p>{{item.newsTitle}}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </van-tab>
              <van-tab title="行业新闻" name="hyxw">
                <div class="wp">
                  <div class="news-list">
                    <ul>
                      <li v-for="item in newsList" :key="item.id" @click="$router.push({path:`/newsInfo/${item.id}`})">
                        <p>{{item.newsTitle}}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </van-tab>
            </van-tabs>
        </div>
      </div>
    </div>
    <van-pagination
        v-model="pageParmes.pageNum"
        :total-items="total"
        :items-per-page="pageParmes.pageSize"
        @change="getNewsList"
    >
    </van-pagination>
  </div>
</template>

<script>
import {reqNewsList} from "@/api";
export default {
  name: "news",
  data(){
    return{
      activeName: 'gsxw',
      total:0,
      pageParmes:{
        pageNum:1,
        pageSize:3,
        typeId: '2'
      },
      newsList:[]
    }
  },
  mounted() {
    this.getNewsList()
  },
  methods:{
    handleClick(a){
      if(a === 'hyxw'){
        this.pageParmes.typeId = '3'
        this.getNewsList()
      }else {
        this.pageParmes.typeId = '2'
        this.getNewsList()
      }
    },
    async getNewsList( pages = 1){
      this.pageParmes.pageNum = pages
      const result = await reqNewsList(this.pageParmes)
      if(result.code === 200){
        this.newsList = result.data.records
        this.total = result.data.total
      }
    }
  }
}
</script>

<style scoped lang="less">
.home-news{
  position: relative;
  width: 100%;
  .wp{
    width: 8.8rem;
    height: 100%;
    margin: 0 auto;
    .news-box{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      padding-top: 0.667rem;
      .news-title{
        width: 3.5rem;
        height: 1.293rem;
        margin-bottom: 0.8rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .news-list{
        width: 100%;
        //height: 60%;
        ul{
          width: 100%;
          //height: 5.8rem;
          //background-color: pink;

          li{
            width: 100%;
            height: 1.15rem;
            line-height: 1.267rem;
            border-bottom: 1px solid #eee;
            p{
              text-align: center;
              padding: 0 0.4rem;
              font-size: 0.4rem;
              line-height: 1.467rem;
              color: #000000;
              overflow:hidden;
              text-overflow:ellipsis;
              white-space:nowrap
            }
            &:nth-child(5){
              border-bottom: 0;
            }
          }
        }
      }
    }
  }
}
/deep/ .van-tabs__nav--card{
  width: 4rem;
  margin: 0 auto;
  height: 0.667rem;
}
/deep/.van-tabs__wrap{
  height: 0.667rem;
  margin-bottom: 0.133rem;
}
/deep/.van-pagination{
  width: 5rem;
  margin: 0.267rem auto 0 auto;
  padding: 0.5rem 0;
}
/deep/.van-tab__text--ellipsis{
  overflow:visible;
  font-size: 0.333rem;
}
</style>
