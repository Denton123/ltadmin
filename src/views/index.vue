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
        <a-menu class="inlineBlock fr menu_right" mode="horizontal">
          <a-sub-menu>
            <span slot="title">
              <a-icon type="user"/>
              {{username}}
            </span>
            <a-menu-item @click="toModify">修改密码</a-menu-item>
            <a-menu-item @click="logout">退出登录</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-header>

      <!-- 中间内容 -->
      <a-layout-content class="index_content">
        <a-breadcrumb class="index_breadcrumb" separator=">">
          <a-breadcrumb-item>
            <a-icon type="home" class="mrR10"/>首页
          </a-breadcrumb-item>
          <a-breadcrumb-item>{{breadcrumb}}</a-breadcrumb-item>
        </a-breadcrumb>
        <!-- Content -->
        <router-view/>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">版权所有 ©2019 乐途国际</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import antMenu from "@/components/public/antMenu";
import menu from "@/views/basicMsg/menu";
import axios from "axios";
export default {
  name: "index",
  data() {
    return {
      navs: [
        {
          title: "旅游策划",
          name: "hotelMenus"
        },
        {
          title: "系统管理",
          name: "companyMenus"
        }
      ],
      menusData: {},
      menus: [],
      // 初始选中的菜单
      defaultSelectedKeys: [],
      // 当前头部左侧的导航按钮的菜单
      currentNav: [],
      // 当前展开的SubMenu菜单项key数组
      openKeys: [],
      currentKeys: [],
      // 是否展开侧边栏
      collapsed: false,
      logoSrc: require("@/assets/logo.png"),
      // 面包屑
      breadcrumb: "",
      // 用户名
      username: ""
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
      this.currentKeys = [];
      this.menus = this.menusData[nav];
      this.$router.push(`${this.menus[0]["children"][0]["path"]}`);
      this.menus.forEach(menuItem => {
        this.currentKeys.push(menuItem.key);
      });
      localStorage.removeItem("openkey");
    },
    // 退出登录
    logout() {
      this.$router.push("/login");
      localStorage.clear();
    },
    // 修改密码
    toModify() {
      this.defaultSelectedKeys = [];
      this.openKeys = [];
      this.currentKeys = [];
      this.$router.push("/hotelMenus/modifyPwd");
      this.breadcrumb = "修改密码";
      localStorage.removeItem("openkey");
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
      let routeParams;
      if (this.$route.params.lead !== undefined) {
        routeParams = this.$route.params.lead;
        this.menus = this.menusData[routeParams];
        this.currentNav.push(`${routeParams}`);
      } else {
        routeParams = this.$route.path.split("/")[1];
        this.menus = this.menusData[`${routeParams}`];
      }
      // 存储点击侧边栏，刷新之后不变
      if (JSON.parse(localStorage.getItem("openkey")) !== null) {
        let markMenu = JSON.parse(localStorage.getItem("openkey"));
        this.openKeys.push(markMenu.openKey);
        this.defaultSelectedKeys.push(markMenu.selectedKey);
        this.breadcrumb = markMenu.name;
      }
      this.username = window.bdUser["username"]
        ? window.bdUser["username"]
        : "";
      if (this.$route.name === "modifyPwd") {
        this.breadcrumb = "修改密码";
      }
    },
    markMenuClick(openKey, selectedKey, name) {
      let openKeyObj = { openKey, selectedKey, name };
      openKeyObj = JSON.stringify(openKeyObj);
      localStorage.setItem("openkey", openKeyObj);
    }
  },
  mounted() {
    this.initialValue();
  },
  created() {
  },
  watch: {
    $route: {
      handler: function() {
        console.log(this.$route)
        this.menus.forEach(menuItem => {
          menuItem.children.forEach(v => {
            console.log(v.path.split("/")[2])
            if (this.$route.params.model == v.path.split("/")[2] || this.$route.name == v.path.split("/")[2]) {
              this.breadcrumb = v.name;
              console.log(this.breadcrumb)
              console.log(v)
            }
          });
        });
      },
      // 深度观察监听
      deep: true
    }
  },
  beforeMount() {
    // 加载菜单数据
    let allMenus = [];
    this.menusData.hotelMenus = [];
    this.menusData.companyMenus = [];
    this.$dataGet(this, "sys/menu/navV2").then(res => {
      if (res.data.code == 200) {
        let resData = res.data.data;
        resData.forEach(item => {
          allMenus.push({
            name: item.name,
            key: item.menuId,
            icon: item.icon,
            children: []
          });
          allMenus.forEach(allItem => {
            item.list.forEach(subItem => {
              if (subItem.parentId == allItem.key) {
                allItem.children.push({
                  name: subItem.name,
                  key: subItem.menuId,
                  icon: subItem.icon,
                  path: subItem.url
                });
              }
            });
            this.currentKeys.push(allItem.key);
          });
        });
        allMenus.filter(item => {
          if (item.key == 1) {
            this.menusData["companyMenus"].push(item);
          } else {
            this.menusData["hotelMenus"].push(item);
          }
        });
      }
    });
  }
};
</script>
<style lang="scss">
.index_layout {
  overflow: hidden;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    color: #fff;
  }
  .logo {
    font-size: 20px;
    color: #fff;
    height: 64px;
    position: relative;
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
    background:#f0f2f5;
  }
  .layout_right {
    text-align: left;
  }
  .index_breadcrumb {
    padding: 16px;
    box-shadow: 2px 0 6px rgba(0,21,41,.35);
    background: #fff;
    margin-bottom: 10px;
  }
  .ant-menu-horizontal {
    color: #fff;
    background: transparent;
    line-height: 64px;
    font-size: 20px;
  }
  .menu_right {
    .ant-menu-submenu-title {
      color: #fff;
      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
