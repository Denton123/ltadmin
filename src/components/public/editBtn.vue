/*编辑组件
* @description 公共编辑按钮组件
* @author 舒丹彤 
* @date 2019/3/5
* */
<template>
  <a-button type="primary" icon="edit" @click="handleEdit">修改</a-button>
</template>

<script>
export default {
  name: "EditBtn",
  methods: {
      handleEdit() {
          this.$parent.handleEdit()
      }
  }
};
</script>

<style lang="scss">
</style>