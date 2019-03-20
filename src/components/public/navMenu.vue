/*侧边栏
* @description 主页侧边栏
* @author 舒丹彤 
* @date 2019/3/5
* */

<template>
  <div class="navMenu">
    <el-menu
      :router="true"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu v-for="menu in menus" :index="menu.name" :key="menu.key">
        <template slot="title">
            <i :class="menu.icon" />
            {{menu.name}}
        </template>
        <el-menu-item
          v-for="subMenu in menu.children"
          :index="subMenu.path"
          :key="subMenu.key"
        >{{subMenu.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    menus: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
.navMenu {
  width: 200px;
  float: left;
}
</style>
