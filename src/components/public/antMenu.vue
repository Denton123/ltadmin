/*侧边栏
* @description 主页侧边栏
* @author 舒丹彤 
* @date 2019/3/7
* */

<template>
  <div class="navMenu">
    <a-menu
      class="a_menu"
      mode="inline"
      :defaultSelectedKeys="defaultSelectedKeys"
      :openKeys="openKeys"
      @openChange="onOpenChange"
    >
      <template v-for="menu in menus">
        <a-sub-menu :key="menu.key">
          <span slot="title">
            <!-- <a-icon :type="menu.icon"/> -->
            <span>{{menu.name}}</span>
          </span>
          <template v-for="subMenu in menu.children">
            <a-menu-item
              :key="subMenu.key"
              @click="handleMenuItem(menu.key, subMenu.key, subMenu.name)"
            >
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
      default() {
        return [];
      }
    },
    openKeys: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    onOpenChange(openKeys) {
      this.$emit("onOpenChange", openKeys);
    },
    handleMenuItem(menuKey, subMenuKey, name) {
      this.$emit("markMenuClick", menuKey, subMenuKey, name);
    }
  },
  mounted() {
    // console.log(this.$route);
    // console.log(this.menus);
  }
};
</script>

<style lang="scss">
.navMenu {
  .ant-menu-submenu-title {
    font-size: 16px;
  }
  .ant-menu-submenu-arrow {
    right: 65px !important;
  }
  height: 100%;
  // border-right: 2px solid #e5e5e5;
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
}
.ant-menu-horizontal {
  .ant-menu-item-selected {
    color: #ffffff;
  }
  .ant-menu-item:hover {
    color: #ffffff;
  }
}
.ant-menu-inline,
.ant-menu-vertical,
.ant-menu-vertical-left {
  border-right: none !important;
}
</style>
