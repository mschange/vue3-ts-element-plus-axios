<template>
	<!--左侧菜单组件-->
  <el-menu
    default-active="0"
    class="el-menu-vertical-demo"
    @select="menuSelected"
    background-color="#2f3447"
    text-color="#fff"
    active-text-color="#ffd04b">
    <nav-menu :navMenus="menu"></nav-menu>
  </el-menu>
</template>
 
<script lang="ts">
  import NavMenu from './SliderMenu.vue';
	export default{
		components:{
			NavMenu
		},
		setup() {
      const menu = [
        // 三级菜单
        {
          name: "菜单三",
          route: "/",
          children: [
            {
              name: "菜单三__1",
              route: "/",
              children: [
                {
                  name: "菜单三__1-1",
                  route: "/console/one"
                },
                {
                  name: "菜单三__1-2",
                  route: "/console/two"
                }
              ]
            }
          ]
        },
        {
          name: "菜单二",
          route: "/",
          children: [
            {
              name: "菜单二__1",
              route: "/second/one"
            },
            {
              name: "菜单二__2",
              route: "/second/two"
            }
          ]
        },
        // 一级菜单
        {
          name: "菜单一",
          route: "/third"
        },
      ]
      const menuSelected = (key: string, keyPath: string[]) => {
        console.log('当前绑定的index值',key)
        alert(`当前点击的路由名称：${key}`)
				console.log('当前绑定的index与path值',keyPath)
      }
      return {
        menu,
        menuSelected,
      }
    }
	}
</script>
 
<style>
</style>