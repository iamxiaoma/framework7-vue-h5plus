<template>
    <div class="home-view">
      <f7-searchbar
        cancel-link="取消"
        placeholder="进口水果"
        :clear-button="true"
      ></f7-searchbar>
      <f7-swiper pagination>
        <f7-swiper-slide>
        <img src="../../static/img/banner01.png"/>
        </f7-swiper-slide>
        <f7-swiper-slide>
        <img src="../../static/img/banner02.jpeg"/>
        </f7-swiper-slide>
        <f7-swiper-slide>
        <img src="../../static/img/banner03.jpg"/>
        </f7-swiper-slide>
      </f7-swiper>

      <f7-grid no-gutter class="menu-list">
        <f7-col width="25">
          <div class="menu-item">
            美食
          </div>
        </f7-col>
        <f7-col width="25">
          <div class="menu-item">
            甜品饮品
          </div>
        </f7-col>
        <f7-col width="25">
          <div class="menu-item">
            商超便利
          </div>
        </f7-col>
        <f7-col width="25">
          <div class="menu-item">
            预订早餐
          </div>
        </f7-col>
        <f7-col width="25">
          <div class="menu-item">
            果蔬生鲜
          </div>
        </f7-col>
        <f7-col width="25">
          <div class="menu-item">
            新店特惠
          </div>
        </f7-col>
        <f7-col width="25">
          <div class="menu-item">
            准时达
          </div>
        </f7-col>
        <f7-col width="25">
          <div class="menu-item">
            晚餐
          </div>
        </f7-col>
      </f7-grid>

      <f7-grid no-gutter class="menu-list">
        <f7-col width="50">
          <div class="menu-item">
            热卖套餐
          </div>
        </f7-col>
        <f7-col width="50">
          <div class="menu-item">
            霸王餐
          </div>
        </f7-col>
        <f7-col width="50">
          <div class="menu-item">
            月末狂欢周
          </div>
        </f7-col>
        <f7-col width="50">
          <div class="menu-item">
            天天特价
          </div>
        </f7-col>
      </f7-grid>

      <f7-list media-list class="goods-group-list">
        <f7-list-group class="goods-group">
          <f7-list-item title="热销" group-title></f7-list-item>
          <li class="item-content goods-item">
              <div class="item-media">
                <img class="post-img" src="../../static/img/goods/01.jpg" alt="logo">
              </div>
              <div class="item-inner">
                  <div class="item-title">进口龙眼</div>
                  <div class="item-after">进口龙眼，500-600g</div>
                  <div class="item-price">¥10.00</div>
              </div>
          </li>
          <li class="item-content goods-item">
              <div class="item-media">
                <img class="post-img" src="../../static/img/goods/02.jpg" alt="logo">
              </div>
              <div class="item-inner">
                  <div class="item-title">进口火龙果</div>
                  <div class="item-after">进口火龙果（一个装），约600g/个</div>
                  <div class="item-price">¥10.00</div>
              </div>
          </li>
          <li class="item-content goods-item">
              <div class="item-media">
                <img class="post-img" src="../../static/img/goods/03.jpg" alt="logo">
              </div>
              <div class="item-inner">
                  <div class="item-title">进口红李</div>
                  <div class="item-after">进口红李，500-600g</div>
                  <div class="item-price">¥10.00</div>
              </div>
          </li>
        </f7-list-group>
        <f7-list-group class="goods-group">
          <f7-list-item title="新款" group-title></f7-list-item>
          <li class="item-content goods-item">
              <div class="item-media">
                <img class="post-img" src="../../static/img/goods/04.jpg" alt="logo">
              </div>
              <div class="item-inner">
                  <div class="item-title">红玫瑰苹果</div>
                  <div class="item-after">红玫瑰苹果，约1.1kg/盒</div>
                  <div class="item-price">¥10.00</div>
              </div>
          </li>
          <li class="item-content goods-item">
              <div class="item-media">
                <img class="post-img" src="../../static/img/goods/05.jpg" alt="logo">
              </div>
              <div class="item-inner">
                  <div class="item-title">莲雾</div>
                  <div class="item-after">莲雾，350-350g</div>
                  <div class="item-price">¥10.00</div>
              </div>
          </li>
          <li class="item-content goods-item">
              <div class="item-media">
                <img class="post-img" src="../../static/img/goods/06.jpg" alt="logo">
              </div>
              <div class="item-inner">
                  <div class="item-title">释迦</div>
                  <div class="item-after">释迦，560g/个</div>
                  <div class="item-price">¥10.00</div>
              </div>
          </li>
          <li class="item-content goods-item">
              <div class="item-media">
                <img class="post-img" src="../../static/img/goods/07.jpg" alt="logo">
              </div>
              <div class="item-inner">
                  <div class="item-title">进口雪梨</div>
                  <div class="item-after">进口雪梨，500g/个</div>
                  <div class="item-price">¥10.00</div>
              </div>
          </li>
        </f7-list-group>
      </f7-list>

    </div>
</template>

<style lang="less">
  @import "../assets/styles/mixins.less";
  .home-view{
    .swiper-container {
      height: 140px;
    }
    .swiper-slide {
      background:#fff;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .swiper-slide span {
      text-align:center;
      display:block;
      margin:20px;
      font-size:21px;
    }
    .menu-list{
      .menu-item{
        text-align: center;
        border: 0.5px solid #ccc;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
      }
    }
    .goods-group-list{
      .goods-group{
        .goods-item{
          .post-img{
            width: 60px;
            height: 60px;
          }
        }
      }
    }
  }
</style>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      timeline: state => state.timeline,
    })
  },
  mounted() {
    this.$nextTick(_ => {
      this.$f7.swiper('.swiper-container', {
        pagination:'.swiper-pagination',
        paginationType: 'bullets',
        direction: 'horizontal',
        loop: true,
        autoplay: 1500
      })
      // this.$f7.showIndicator()
      // this.$store.dispatch('getTimeline', () => {
      //   this.$f7.hideIndicator()
      // })
    })
  },
  methods: {
    routeToPost(data) {
      this.$f7.mainView.router.load({url: `/post/?mid=${data.id}`})
    }
  },
  components: {
  }
}
</script>