/
* @description 返回按钮组件
* @author 舒丹彤 
* @date 2019/3/26
* */
<template>
  <a-button type="primary" @click="handleBack" class="fr">返回</a-button>
</template>

<script>
export default {
  name: "BackBtn",
  methods: {
      handleBack(){
          this.$router.go(-1)
      }
  }
};
</script>

<style lang="scss">
</style>