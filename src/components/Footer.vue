<template>
  <div>
    <footer>
      <div class="wp">
        <div class="foober-box">
          <div class="footer-logo">
            <div class="image">
              <img src="@/assets/logo.png" alt="">
            </div>
          </div>
          <div class="footer-list">
            <ul>
              <li>
                <p>品牌电话</p>
                <span>4000006890</span>
              </li>
              <li>
                <p>公司地址</p>
                <span>周口市川汇区国贸10楼1010</span>
              </li>
              <li>
                <p>公司邮箱</p>
                <span>4000006890@qq.com</span>
              </li>
            </ul>
          </div>
          <div id="footer-map"></div>
          <p>版权所有@中后数智备案号XXXXX</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    this.map()
  },
  methods:{
    map(){
      var map = new BMapGL.Map("footer-map");    // 创建Map实例
      var point = new BMapGL.Point(114.671202,33.616546);
      map.centerAndZoom(point, 17);
// 创建点标记
      var marker = new BMapGL.Marker(point);
      map.addOverlay(marker);
      var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
      map.addControl(scaleCtrl);
      var zoomCtrl = new BMapGL.ZoomControl();  // 添加比例尺控件
      map.addControl(zoomCtrl);
// 创建信息窗口
      var opts = {
        width: 200,
        height: 50,
        title: '河南中启影业'
      };
      var infoWindow = new BMapGL.InfoWindow('地址：河南省周口市川汇区交通大道国贸10楼1010室', opts);
// 点标记添加点击事件
      map.openInfoWindow(infoWindow, point); // 开启信息窗口
    }
  }
}
</script>

<style scoped lang="less">
.wp{
  width: 9.813rem;
  height: 100%;
  margin: 0 auto;
}
footer{
  width: 100%;
  height: 10.133rem;
  background-color: #fff;
  .foober-box{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    //background-color: pink;
    .footer-logo{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 2.507rem;
      //background-color: green;
      .image{
        width: 3.333rem;
        height: 1.067rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .footer-list{
      width: 100%;
      height: 1.467rem;
      border: 1px solid #ccc;
      box-sizing: border-box;
      margin-bottom: 0.267rem;
      ul{
        display: flex;
        width: 100%;
        height: 100%;
        li{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 1;
          border-right: 1px solid #ccc;
          &:nth-child(3){
            border: 0;
          }
          p{
            font-weight: 800;
            padding-bottom: 0.133rem;
            color: #E62129;
          }
          span{
            font-size: 0.25rem;
          }
        }
      }
    }
    #footer-map{
      width: 100%;
      height: 4rem;
      //border: 1px solid black;
      margin-bottom: 0.587rem;
      box-sizing: border-box;
    }
    p{
      margin: 0 auto;
      font-size: 0.27rem;
      color: #BEBEBE;
    }
  }
}
</style>
