<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
    <!-- 版权信息 -->
    <div class="copy">
      <p>CopyRight通达天下@copy2020-2999</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 0 10px 0 0px;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
.copy{
    height: 40px;
    line-height: 20px;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    background: #ececea;
    color: #000;
    font-family: Arial;
    font-size: 14px;
    letter-spacing: 1px;

}
</style>
