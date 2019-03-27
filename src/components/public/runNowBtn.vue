/
* @description 公共立即执行按钮组件
* @author 舒丹彤 
* @date 2019/3/26
* */
<template>
  <a-button type="primary" icon="plus" @click="handleRunNow">立即执行</a-button>
</template>

<script>
export default {
  name: "NewBtn",
  methods: {
      handleRunNow(){
          this.$parent.handleRunNow()
      }
  }
};
</script>

<style lang="scss">
</style>