/**
 *  
 * 页面中间层内容基壳组件
 * @description 中间内容
 * @author 舒丹彤
 * @date 2019/3/5
 * 
 */ 
<template>
  <div class="basic">
    <basic-content/>
  </div>
</template>

 <script>
import BasicContent from "./basic-content";
export default {
  name: "Basic",
  components: {
    BasicContent
  }
};
</script>

 <style lang="scss">
 @import '@/sass/mixins/_mixins.scss';
.basic {
  // float: right;
  // width: calc(100% - 210px);
  @include mgT(10px);
}
</style>
 