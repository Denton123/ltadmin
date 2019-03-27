/
* @description 删除按钮组件
* @author 舒丹彤 
* @date 2019/3/25
* */
<template>
  <a-button type="primary" icon="delete" @click="handleDelete">删除</a-button>
</template>

<script>
export default {
  name: "deleteBtn",
  methods: {
      handleDelete() {
          this.$parent.handleDelete()
      }
  }
};
</script>

<style lang="scss">
</style>