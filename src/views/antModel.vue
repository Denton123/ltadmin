<template>
  <a-layout class="index_layout">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo"> 御道管理系统</div>
      <ant-Menu
        :menus="menus"
        :defaultSelectedKeys="defaultSelectedKeys"
        :defaultOpenKeys="defaultOpenKeys"
      />
    </a-layout-sider>
    <a-layout class="layout_right">
      <a-layout-header style="background: #fff; padding: 0">
        <!-- 折叠按钮 -->
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
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

      <a-breadcrumb class="index_breadcrumb">
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>旅游路线</a-breadcrumb-item>
        <a-breadcrumb-item>旅游路线导航</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content class="index_content">
        <!-- Content -->
        <router-view/>
      </a-layout-content>
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
          title: "内部管理",
          name: "companyMenus"
        }
      ],
      menusData: menuObj,
      menus: [],
      defaultSelectedKeys: [],
      defaultOpenKeys: [],
      currentNav: []
    };
  },
  components: {
    antMenu
  },
  methods: {
    toggleNav(nav) {
      this.menus = this.menusData[nav];
      localStorage.setItem("nav", nav);
      this.defaultOpenKeys.push(`${nav}`);
      this.defaultSelectedKeys.push(`${this.menus[0]["children"][0]["key"]}`);
    },
    logout() {
      this.$router.push("/login");
      localStorage.clear();
    }
  },
  mounted() {
    let navTag = localStorage.getItem("nav");
    console.log(navTag);
    console.log(this.$route.params.lead);
    if (navTag !== null) {
      this.menus = this.menusData[navTag];
    } else if (this.$route.params.lead !== undefined) {
      this.menus = this.menusData[this.$route.params.lead];
    } else {
      this.menus = this.menusData["planMenus"];
    }
    this.defaultOpenKeys.push(`${navTag}`);
    this.defaultSelectedKeys.push(`${this.menus[0]["children"][0]["key"]}`);
    this.currentNav.push(`${navTag}`);
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
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    height: 32px;
    background: #000;
    margin: 16px;
  }
  .ant-layout-sider {
    background: #fff;
  }
  .layout_right {
    text-align: left;
  }
  .index_breadcrumb {
    margin: 16px;
  }
  .index_content {
    margin: 16px;
    padding: 24px;
    background: #fff;
    min-height: 280px;
  }
  .ant-menu-horizontal {
    line-height: 64px;
  }
}
</style>
