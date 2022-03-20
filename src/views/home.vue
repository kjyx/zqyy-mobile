<template>
  <div>
<!--    轮播图-->
    <div class="carousel"></div>
<!--    轮播图下面的图片-->
    <div class="banner">
      <img src="@/assets/00.jpg" alt="">
    </div>
<!--    关于-->
    <div class="home_about">
      <div class="wp">
        <div class="about-title">
          <img src="@/assets/about.png" alt="">
        </div>
        <div class="about-content">
          <p>中后影业有限公司是中后数智旗下一家多元化、立体式的影视传媒公司。公司提供电影、电视剧、微电影、品牌宣传片、企业形象片的拍摄制作与动画制作。在“做更有意义的影像作品，为品牌传递价值”企业使命感召下，中后影业将建设成具有卓越竞争力和创新成长力的影视企业，在影视宣传方面站好自己岗位，不断深耕可视化内容，品牌宣传等，为企业创造价值做努力，中后影业做更有价值、更有意义的影像作品生产商。</p>
        </div>
      </div>
    </div>
<!--    业务-->
    <div class="home-business">
      <div class="wp">
        <div class="title">
          <img src="@/assets/yewu.png" alt="">
        </div>
        <div class="bussiness-list">
          <ul>
            <li v-for="item in imageList" :key="item.id" @click="$router.push({path:'/product'})">
              <img :src="item.image" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
<!--    新闻-->
    <div class="home-news">
      <div class="wp">
        <div class="news-box">
          <div class="news-title">
            <img src="@/assets/news.png" alt="">
          </div>
          <div class="news-list">
            <ul>
              <li v-for="item in newsList" :key="item.id" @click="$router.push({path:`/newsInfo/${item.id}`})">
                <p>{{item.newsBrief}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
<!--    过度-->
    <div class="images">
      <img src="@/assets/guodu.png" alt="">
    </div>
  </div>
</template>

<script>
import {reqNewsList} from "@/api";
export default {
  name: "Home",
  data(){
    return{
      imageList:[
        {
          id:1,
          image: require('@/assets/01.jpg')
        },
        {id:2,image: require('@/assets/02.jpg')},
        {id:3,image: require('@/assets/03.jpg')},
        {id:4,image: require('@/assets/04.jpg')},
        {id:5,image: require('@/assets/05.jpg')},
        {id:6,image: require('@/assets/06.jpg')}
      ],
      pageParmes:{
        pageNum:1,
        pageSize:5,
        typeId: '2'
      },
      newsList:[]
    }
  },
  mounted() {
    this.getNewsList()
  },
  methods:{
    async getNewsList( pages = 1){
      this.pageParmes.pageNum = pages
      const result = await reqNewsList(this.pageParmes)
      if(result.code === 200){
        this.newsList = result.data.records
      }
    }
  }
}
</script>

<style scoped lang="less">
.carousel{
  width: 100%;
  height: 7.067rem;
  background-color: #ccc;
  margin-bottom: 0.4rem;
}
.banner{
  width: 100%;
  height: 1.333rem;
  margin-bottom: 0.467rem;
  img{
    width: 100%;
    height: 100%;
  }
}
.home_about{
  width: 100%;
  height: 6.4rem;
  margin-bottom: 1.06rem;
  .wp{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 9.067rem;
    height: 100%;
    margin: 0 auto;
    //background-color: pink;
    .about-title{
      width: 3.867rem;
      height: 1.28rem;
      margin-bottom: 0.8rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .about-content{
      width: 100%;
      height: 4.307rem;
      p{
        font-size: 0.32rem;
        line-height: 0.57rem;
        font-weight: 600;
        color: #fff;
      }
    }
  }
}
.home-business{
  width: 100%;
  height: 20.8rem;
  margin-bottom: 0.8rem;
  .wp{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 8.6rem;
    height: 100%;
    margin: 0 auto;
    .title{
      width: 2.9rem ;
      height: 1.333rem;
      margin-bottom: 1.333rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .bussiness-list{
      width: 100%;
      height: 100%;
      //background-color: pink;
      ul{
        width: 100%;
        height: 100%;
        li{
          width: 100%;
          height: 2.827rem;
          margin-bottom: 0.25rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
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
        height: 60%;
        ul{
          width: 100%;
          height: 5.8rem;
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
              color: white;
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
.images{
  background-color: #fff;
  width: 100%;
  height: 1.467rem;
}
</style>
