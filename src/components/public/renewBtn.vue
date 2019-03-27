/
* @description 公共恢复按钮组件
* @author 舒丹彤 
* @date 2019/3/26
* */
<template>
  <a-button type="primary" icon="plus" @click="handleRenew">恢复</a-button>
</template>

<script>
export default {
  name: "NewBtn",
  methods: {
      handleRenew(){
          this.$parent.handleRenew()
      }
  }
};
</script>

<style lang="scss">
</style>