/*侧边栏
* @description 主页侧边栏
* @author 舒丹彤 
* @date 2019/3/7
* */

<template>
  <div class="navMenu">
    <a-menu
      mode="inline"
      :defaultSelectedKeys="defaultSelectedKeys"
      class="a_menu"
      :defaultOpenKeys="defaultOpenKeys"
    >
      <template v-for="menu in menus">
        <a-sub-menu :key="menu.key">
          <span slot="title">
            <a-icon :type="menu.icon"/>
            <span>{{menu.name}}</span>
          </span>
          <template v-for="subMenu in menu.children">
            <a-menu-item :key="subMenu.key">
              <router-link :to="subMenu.path">{{subMenu.name}}</router-link>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "AntMenu",
  data() {
    return {
      collapsed: false
    };
  },
  props: {
    menus: {
      type: Array,
      default() {
        return [];
      }
    },
    defaultSelectedKeys: {
      type: Array,
      default () {
        return []
      }
    },
    defaultOpenKeys: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  },
  mounted() {
    console.log(this.$route);
    console.log(this.menus);
  }
};
</script>

<style lang="scss">
.navMenu {
  .a_menu {
    height: 100%;
    border-right: 0;
  }
}
</style>
