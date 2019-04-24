/
* @description 公共暂停按钮组件
* @author 舒丹彤 
* @date 2019/3/26
* */
<template>
  <a-button type="primary" icon="plus" @click="handlePause">暂停</a-button>
</template>

<script>
export default {
  name: "pauseBtn",
  methods: {
      handlePause(){
          this.$parent.handlePause()
      }
  }
};
</script>

<style lang="scss">
</style>