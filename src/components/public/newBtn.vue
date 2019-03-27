/*新增组件
* @description 公共新增按钮组件
* @author 舒丹彤 
* @date 2019/3/5
* */
<template>
  <a-button type="primary" icon="plus" @click="handleNew">新增</a-button>
</template>

<script>
export default {
  name: "NewBtn",
  methods: {
      handleNew(){
          this.$parent.handleNew()
      }
  }
};
</script>

<style lang="scss">
</style>