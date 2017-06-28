<template>
    <div class="order-view">
        <f7-subnavbar>
          <f7-buttons>
            <f7-button tab-link="#unpayed" active>待付款</f7-button>
            <f7-button tab-link="#sending">配送中</f7-button>
            <f7-button tab-link="#finished">已完成</f7-button>
            <f7-button tab-link="#all">全部</f7-button>
          </f7-buttons>
        </f7-subnavbar>
        <f7-tabs>
          <f7-tab id="unpayed" active>
          待付款订单
          </f7-tab>
          <f7-tab id="sending">
          配送中订单
          </f7-tab>
          <f7-tab id="finished">
          已完成订单
          </f7-tab>
          <f7-tab id="all">
            全部订单
          </f7-tab>
        </f7-tabs>
        
    </div>
</template>

<style lang="less">
    .order-view{
        .tabs{
            padding-top: 44px;
        }
        .subnavbar{
            padding: 0px;
            .buttons-row{
                height: 44px;
                line-height: 44px;
                .button{
                    border-radius: 0px;
                    border: none;
                    height: 44px;
                    line-height: 44px;
                    color: #98d13e;
                }
                .button.active{
                    background: #98d13e;
                    color: #fff;
                }
            }
        }
        .list-block{
            margin: 20px 0;
            .iconfont{
                height: 29px;
            }
            .icon-language{
                color: #0099FF;
            }
            .icon-feedback2{
                color: #00CC99;
            }
            .icon-about1{
                color: #FFCC33;
            }
        }
        .user-profile{
            .item-content{
                padding-top: 5px;
                padding-bottom: 5px;
            }
            .avatar{
                width: 65px;
                height: 65px;
                border-radius: 5px;
            }
            .detail{
                .location{
                    color: #858585;
                    font-size: 15px;
                    margin-top: 5px;
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
    })
  }
}
</script>