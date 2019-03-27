/
* @description 返回按钮组件
* @author 舒丹彤 
* @date 2019/3/26
* */
<template>
  <a-button type="primary" @click="handleBack">返回</a-button>
</template>

<script>
export default {
  name: "NewBtn",
  methods: {
      handleBack(){
          this.$router.go(-1)
      }
  }
};
</script>

<style lang="scss">
</style>