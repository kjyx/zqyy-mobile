<template>
    <header style="z-index: 9999;">
      <div class="wp">
        <div class="box-header">
          <div class="images" @click="$router.push({path:'/home'})">
            <img src="@/assets/logo.png" alt="">
          </div>
          <div class="header-button iconfont icon-list" @click="drawer = true"></div>
        </div>
      </div>
      <van-popup  v-model="drawer" position="right" :style="{height:'100%',width: '100%'}" closeable>
        <div class="drawer">
          <ul>
            <li @click="$router.push({path:'/home'});drawer=false">
              <p>回到首页</p>
            </li>
            <li @click="$router.push({path:'/product'});drawer=false">
              <p>产品中心</p>
            </li>
            <li @click="$router.push({path:'/case'});drawer=false">
              <p>案例中心</p>
            </li>
            <li @click="$router.push({path:'/news'});drawer=false">
              <p>新闻中心</p>
            </li>
          </ul>
        </div>
      </van-popup>
    </header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      drawer:false,
      direction: 'rtl'
    }
  }
}
</script>

<style scoped lang="less">
.wp{
  width: 8.8rem;
  margin: 0 auto;
}
header{
  width: 100%;
  height: 1.827rem;
  margin: 0 auto;
  background-color: #fff;
  //background-color: pink;
  .wp{
    height: 100%;
  }
  .box-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    .images{
      width: 2.173rem;
      height: 0.627rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .header-button{
      width: 0.587rem;
      height: 0.44rem;
      padding-bottom: 0.133rem;
      //background-color: pink;
    }
  }
  /deep/.van-popup{
    background-color: #000;
  }
  /deep/.van-popup__close-icon--top-right{
    top: 1.333rem;
    right: 1.333rem;
    font-size: 0.6rem;
  }
  .drawer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    ul{
      display: flex;
      flex-direction: column;
      width: 8rem;
      height: 8.5rem;
      //background-color: pink;
      li{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        p{
          font-size: 0.467rem;
          color: #fff;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
