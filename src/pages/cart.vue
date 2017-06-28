<template>
    <div class="cart-view">
        <f7-list media-list class="goods-group-list">
        <f7-list-group class="goods-group">
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
      .cart-view{
          .goods-group{
            .goods-item{
              .post-img{
                width: 60px;
                height: 60px;
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
      userInfo: state => state.user,
    }),
    avatarMedia() {
      return `<img class='avatar' src='${this.userInfo.avatarUrl}' />`
    }
  }
}
</script>