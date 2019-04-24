/**
 * 
 * 新建模态对话框按钮组件
 * @author 舒丹彤 
 * @date 2019/4/18
 * 
 */

 <template>
  <div class="msgModal inlineBlock mrL10">
    <a-button type="primary" @click="showModal">{{params.btnDesc}}</a-button>
  </div>
</template>

<script>
export default {
  name: "newModalBtn",
  props: {
    params: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
      showModal() {
          this.$emit('showModal')
      }
  }
};
</script>

<style lang="scss">
</style>
