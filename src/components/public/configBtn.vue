/
* @description 云存储配置按钮组件
* @author 舒丹彤 
* @date 2019/3/26
* */
<template>
  <a-button type="danger">
      <a-icon type="setting" @click="handleCloudConfig"/>云存储配置
  </a-button>
</template>

<script>
export default {
  name: "configBtn",
  methods: {
      handleCloudConfig(){
          this.$parent.handleCloudConfig()
      }
  }
};
</script>

<style lang="scss">
</style>