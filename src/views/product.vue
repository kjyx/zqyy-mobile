<template>
<div>
  <div class="product-box">
    <div class="wp">
      <div class="product-img">
        <img src="@/assets/product-1.png" alt="">
        <img src="@/assets/product-2.png" alt="">
        <img src="@/assets/product-3.png" alt="">
        <img src="@/assets/product-4.png" alt="">
        <img src="@/assets/product-5.png" alt="">
        <img src="@/assets/product-6.png" alt="">
      </div>
    </div>
  </div>
  <div class="button">
    <van-button type="primary" @click="phone">立即咨询</van-button>
    <van-button type="primary" @click="$router.push({path:'/case'})">查看案例</van-button>
  </div>
</div>
</template>

<script>
export default {
  name: "product",
  data(){
    return{
      phoneNumber: '40000006890'
    }
  },
  methods:{
    phone(){
      window.location.href = 'tel://' + this.phoneNumber
    }
  }
}
</script>

<style scoped lang="less">
.product-box{
  width: 100%;
  height: 100%;
  background-color: black;
  .wp{
    width: 9rem;
    height: 100%;
    margin: 0 auto;
    .product-img{
      img{
        margin-bottom: 0.667rem;
        &:nth-child(1){
          margin: 1.333rem 0 0.667rem 0;
        }
      }
    }
  }
}
.button{
  display: flex;
  flex-direction: column;
  align-items: center;
  .van-button--primary{
    width: 4rem ;
    margin-bottom: 0.35rem;
    background-color: transparent;
    border: 1px solid white;
    &:nth-child(1){
      margin-top: 0.4rem;
    }
    &:nth-child(2){
      margin-bottom: 0.933rem;
    }
  }
}

</style>
