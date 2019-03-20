<template>
  <div class="ltIndex">
      <layout-header></layout-header>
      <nav-menu :menus="menus" />
      <router-view />
  </div>
</template>

<script>
import NavMenu from '@/components/public/navMenu'
// import NavMenu from '@/components/public/antMenu'
import LayoutHeader from '@/components/layout/header'

export default {
  name: 'LtIndex',
  data () {
    return {
      // 模拟侧边导航数据
      menus: [
        {
          name: '旅游路线',
          key: 'tour-route',
          icon: 'el-icon-location-outline',
          // icon: 'copy',
          children: [
            {
              name: '国内旅游路线',
              key: 'inlandRoute',
              path: '/message/inlandRoute'
            },
            {
              name: '国外旅游路线',
              key: 'foreign',
              path: '/message/foreignRoute'
            }
          ]
        },
        {
          name: '旅游计划',
          key: 'tour-plan',
          icon: 'el-icon-menu',
          // icon: 'copy',
          children: [
            {
              name: '国内旅游计划',
              key: 'inlandPlan',
              path: '/message/inlandPlan'
            },
            {
              name: '国外旅游计划',
              key: 'foreignPlan',
              path: '/message/foreignPlan'
            }
          ]
        }
      ]
    }
  },
  components: {
    NavMenu,
    LayoutHeader
  }
}
</script>

<style lang="scss">
  .ltIndex{
    width: 100%;
  }
</style>
