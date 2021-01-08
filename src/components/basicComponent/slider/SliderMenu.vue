<template>
  <div class="navMenu">
    <label v-for="navMenu in navMenus" :key="navMenu.name">
      <!-- 只有一级菜单 -->
      <el-menu-item
        v-if="!navMenu.children"
        :key="navMenu.name"
        :data="navMenu"
        :index="navMenu.name"
        :route="navMenu.name"
      >
        <!--标题-->
        <template #title>
          <span>{{navMenu.name}}</span>
        </template>
      </el-menu-item>
      <!--有多级菜单-->
      <el-submenu
        v-if="navMenu.children"
        :key="navMenu.name"
        :data="navMenu"
        :index="navMenu.name"
      >
        <template #title>
          <span> {{navMenu.name}}</span>
        </template>
        <!--递归组件，把遍历的值传回子组件，完成递归调用-->
        <nav-menu :navMenus="navMenu.children"></nav-menu>
      </el-submenu>
    </label>
  </div>
</template>
 
<script lang="ts">
  export default {
    name: 'NavMenu', //使用递归组件必须要有
    props: {
      navMenus: {
        type: Array,
        require: true
      }
    }, // 传入子组件的数据
  }
</script>
 
<style scoped>
 
</style>