<template>
  <div class="basicComponent">
    <div class="sliderLeft">
      <Menu></Menu>
    </div>
    <div class="contentWrapper">
      <div class="headerWrapper"></div>
      <div class="contentBox">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Menu from './slider/menu.vue'
export default {
  components: {
    Menu,
  }
}
</script>
<style lang="less" scope>
  .basicComponent {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    .sliderLeft {
      width: 256px;
      height: 100vh;
      background-color: #2f3447;
    }
    .contentWrapper {
      width: 100%;
      height: 100vh;
      .headerWrapper {
        width: 100%;
        height: 56px;
      }
      .contentBox {
        width: 100%;
        height: calc(100vh - 56px);
      }
    }
  }
</style>