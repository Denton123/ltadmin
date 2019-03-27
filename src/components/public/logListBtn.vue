/
* @description 公共日志列表按钮组件
* @author 舒丹彤 
* @date 2019/3/26
* */
<template>
  <a-button type="danger" icon="plus" @click="handleShowLog" class="fr">日志列表</a-button>
</template>

<script>
export default {
  name: "NewBtn",
  methods: {
      handleShowLog(){
          this.$parent.handleShowLog()
      }
  }
};
</script>

<style lang="scss">
</style>