<template>
  <f7-page class="language-page">
    <f7-navbar :title="$t('app.address')" :back-link="$t('app.back')" sliding></f7-navbar>
    <f7-toolbar>
      <f7-link>新增地址</f7-link>
    </f7-toolbar>
  </f7-page>
</template>

<script>
import Vue from 'vue'
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      lang: state => state.lang,
    })
  },
  methods: {
    saveLang() {
      let lang = this.$$('input[name="language-radio"]:checked').val()
      Vue.config.lang = lang
      this.$store.dispatch('setLang', lang)
    }
  }
}
</script>