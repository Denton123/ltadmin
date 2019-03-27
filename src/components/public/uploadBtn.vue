/
* @description 公共上传文件按钮组件
* @author 舒丹彤 
* @date 2019/3/26
* */
<template>
  <a-upload name="file" :action="params.uploadAction" @change="hanldeUpload">
    <a-button>
      <a-icon type="plus" />上传文件
    </a-button>
  </a-upload>
</template>

<script>
export default {
  name: "uploadBtn",
  props: {
    params: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
      hanldeUpload(){
          this.$parent.hanldeUpload()
      }
  }
};
</script>

<style lang="scss">
.ant-upload-list{
  display: none;
}
</style>