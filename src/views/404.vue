/*404组件
* @description 访问不存在的路由都会定向到这个组件页面
* @author 舒丹彤 
* @date 2019/3/5
* */
<template>
  <div>
    <div class="content">404</div>
  </div>
</template>

<script>
export default {
  name: "NoFound"
};
</script>

<style lang="scss">
div.content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 52px;
  height: 41px;
  font-size: 80px;
  color: #9e9e9e;
}
</style>