<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <f7-navbar theme="white">
          <f7-nav-left>
          </f7-nav-left>
          <f7-nav-center sliding>{{navbarTitle}}</f7-nav-center>
        </f7-navbar>
        <f7-pages>
          <f7-page toolbar-fixed navbar-fixed>
            <f7-toolbar tabbar labels>
              <f7-link icon="iconfont icon-ios7homeoutline" :text="$t('app.home')" tab-link="#home" active></f7-link>
              <f7-link icon="iconfont icon-ios7chatbubbleoutline" :text="$t('app.cart')" tab-link="#cart"></f7-link>
              <f7-link icon="iconfont icon-thumbup" :text="$t('app.order')" tab-link="#order"></f7-link>
              <f7-link icon="iconfont icon-comment" :text="$t('app.member')" tab-link="#member"></f7-link>
            </f7-toolbar>
            <f7-tabs>
              <f7-tab id="home" active @tab:show="tabActived('home')">
                <home-view></home-view>  
              </f7-tab>
              <f7-tab id="cart" @tab:show="tabActived('cart')">
                <cart-view></cart-view>
              </f7-tab>
              <f7-tab id="order" @tab:show="tabActived('order')">
                <order-view></order-view>
              </f7-tab>
              <f7-tab id="member" @tab:show="tabActived('member')">
                <member-view></member-view>
              </f7-tab>
            </f7-tabs>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

    <!-- Comment, publisher Popup -->

  </div>
</template>

<script>
import HomeView from './pages/home.vue'
import CartView from './pages/cart.vue'
import OrderView from './pages/order.vue'
import MemberView from './pages/member.vue'

export default {
  data() {
    return {
      activedTab: 'home'
    }
  },
  computed: {
    navbarTitle() {
      switch(this.activedTab) {
      case 'home':
        return this.$t('app.app_name')
      case 'cart':
        return this.$t('app.cart')
      case 'order':
        return this.$t('app.order')
      case 'member':
        return this.$t('app.member')
      }
    }
  },
  methods: {
    tabActived(tab) {
      this.activedTab = tab
    }
  },
  components: {
    HomeView,
    CartView,
    OrderView,
    MemberView
  }
}
</script>