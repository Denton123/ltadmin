/
* @description sql监控页面
* @author 舒丹彤 
* @date 2019/3/30
* */

<template>
  <div>
    <iframe src="/api/druid/sql.html" width="100%" frameborder="0" height="894px" scrolling="yes"/>
  </div>
</template>

<script>
export default {
  name: "sqlMonitor"
};
</script>

<style lang="scss">
iframe {
    margin: 0 20px;
}
</style>
