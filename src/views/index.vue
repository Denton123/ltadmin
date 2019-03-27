/
* @description 首页框架
* @author 舒丹彤 
* @date 2019/3/14
* */
<template>
  <a-layout class="index_layout">
    <a-layout-sider collapsible v-model="collapsed" width="280" :trigger="null">
      <div class="logo">
        <img :src="logoSrc" alt>
      </div>
      <ant-Menu
        :menus="menus"
        :defaultSelectedKeys="defaultSelectedKeys"
        :defaultOpenKeys="defaultOpenKeys"
        :openKeys="openKeys"
        @onOpenChange="onOpenChange"
        @markMenuClick="markMenuClick"
      />
    </a-layout-sider>
    <a-layout class="layout_right">
      <a-layout-header>
        <!-- 折叠按钮 -->
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="handleFold"
        />
        <!-- 头部左侧nav -->
        <a-menu mode="horizontal" class="inlineBlock" v-model="currentNav">
          <a-menu-item
            v-for="nav in navs"
            :key="nav.name"
            @click="toggleNav(nav.name)"
          >{{nav.title}}</a-menu-item>
        </a-menu>

        <!-- 头部右侧nav -->
        <a-menu class="inlineBlock fr" mode="horizontal">
          <a-sub-menu>
            <span slot="title">
              <a-icon type="user"/>sdt
            </span>
            <a-menu-item>个人中心</a-menu-item>
            <a-menu-item @click="logout">退出登录</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-header>

      <!-- 中间内容 -->
      <a-layout-content class="index_content">
        <!-- Content -->
        <router-view/>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import antMenu from "@/components/public/antMenu";
import menuMsg from "@/views/basicMsg/menu";

export default {
  name: "antModel",
  data() {
    let menuObj = {};
    Object.assign(menuObj, menuMsg);
    return {
      collapsed: false,
      navs: [
        {
          title: "旅游策划",
          name: "planMenus"
        },
        {
          title: "系统管理",
          name: "companyMenus"
        }
      ],
      menusData: menuObj,
      menus: [],
      // 初始选中的菜单
      defaultSelectedKeys: [],
      // 默认打开的菜单
      defaultOpenKeys: [],
      // 当前头部左侧的导航按钮的菜单
      currentNav: [],
      // 当前展开的SubMenu菜单项key数组
      openKeys: [],
      currentKeys: [],
      collapsed: false,
      logoSrc: require("@/assets/logo.png")
    };
  },
  components: {
    antMenu
  },
  methods: {
    // 点击头部导航切换
    toggleNav(nav) {
      this.defaultSelectedKeys = [];
      this.openKeys = [];
      this.menus = this.menusData[nav];
      this.$router.push(`${this.menus[0]["children"][0]["path"]}`);
      localStorage.setItem("nav", nav);
      this.$router.push(`${this.menus[0]["children"][0]["path"]}`);
      this.menus.forEach(menuItem => {
        this.currentKeys.push(menuItem.key);
      });
    },
    // 退出登录
    logout() {
      // this.$dataGet(this, 'sys/logoutV2').then(res => {
      //   console.log(res)
      // })
      this.$router.push("/login");
      localStorage.clear();
    },
    // 点击当前菜单折叠其他菜单
    onOpenChange(keys) {
      const lastestOpenKey = keys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      if (this.currentKeys.indexOf(lastestOpenKey) === -1) {
        this.openKeys = keys;
      } else {
        this.openKeys = lastestOpenKey ? [lastestOpenKey] : [];
      }
    },
    // 头部导航折叠按钮
    handleFold() {
      this.collapsed = !this.collapsed;
      this.logoSrc = this.collapsed
        ? require("@/assets/small_logo.png")
        : require("@/assets/logo.png");
    },
    // 初始化菜单选项
    initialValue() {
      let navTag = localStorage.getItem("nav");
      let routeParams = this.$route.params.lead;
      if (navTag !== null) {
        this.menus = this.menusData[navTag];
        this.currentNav.push(`${navTag}`);
      } else if (routeParams !== undefined) {
        this.menus = this.menusData[routeParams];
        this.currentNav.push(`${routeParams}`);
      } else {
        this.menus = this.menusData[Object.keys(this.menusData)[0]];
        this.currentNav.push(`${Object.keys(this.menusData)[0]}`);
      }
      this.menus.forEach(menuItem => {
        this.currentKeys.push(menuItem.key);
      });
      // 存储点击侧边栏，刷新之后不变
      if (JSON.parse(localStorage.getItem("openkey")) !== null) {
        let markMenu = JSON.parse(localStorage.getItem("openkey"));
        this.openKeys.push(`${markMenu.openKey}`);
        this.defaultSelectedKeys.push(`${markMenu.selectedKey}`);
      }
    },
    markMenuClick(openKey, selectedKey) {
      let openKeyObj = { openKey, selectedKey };
      openKeyObj = JSON.stringify(openKeyObj);
      localStorage.setItem("openkey", openKeyObj);
    }
  },
  mounted() {
    this.initialValue();
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {},
      // 深度观察监听
      deep: true
    }
  }
};
</script>
<style lang="scss">
.index_layout {
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    color: #fff;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    font-size: 20px;
    color: #fff;
    height: 64px;
    position: relative;
    // padding-left: 24px;
    overflow: hidden;
    line-height: 64px;
    transition: all 0.3s;
    background: url("../../src/assets/header_left_bg.png");
    text-align: center;
    img {
      vertical-align: middle;
    }
  }
  .ant-layout-sider {
    background: #fff;
    min-height: 100vh;
  }
  .ant-layout-header {
    background: url("../../src/assets/header_right_bg.png");
    padding: 0;
  }
  .ant-layout-content {
    background: #fff;
  }
  .layout_right {
    text-align: left;
  }
  .index_breadcrumb {
    margin: 16px;
  }
  .index_content {
    // margin: 0 16px 16px 16px;
    // padding: 24px;
    // background: #fff;
    // min-height: 280px;
  }
  .ant-menu-horizontal {
    color: #fff;
    background: transparent;
    line-height: 64px;
    font-size: 20px;
  }
  .ant-menu-submenu-title,
  .ant-menu-sub {
    // text-align: center;
  }
}
</style>
