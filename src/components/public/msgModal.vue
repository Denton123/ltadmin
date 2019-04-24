/**
 * 
 * 模态对话框组件
 * @author 舒丹彤 
 * @date 2019/4/18
 * 
 */

 <template>
  <div class="msgModal">
    <a-modal
      :visible="modalVisible"
      :title="modalParams.title"
      @ok="handleModalOk"
      :confirmLoading="confirmLoading"
      @cancel="hanldModalCancel"
      :okText="modalParams.okText"
      cancelText="取消"
    >
      <h4>{{modalParams.infoTitle}}</h4>
      <a-row>
        <a-col>
          <a-card
            :bordered="false"
            v-for="(item, index) in hotelMatchCardTag"
            :key="index"
            :title="`${item.title}`"
          >
            <template v-for="(value, key) in item.tag">
              <p>
                <strong>{{value}}：</strong>
                <!-- <span>{{}}</span> -->
              </p>
            </template>
          </a-card>
        </a-col>
      </a-row>
    </a-modal>
  </div>
</template>

 <script>
export default {
  name: "msgModal",
  data() {
    return {
    };
  },
  props: {
    modalParams: {
      type: Object,
      default() {
        return {};
      }
    },
    hotelMatchCardTag: {
      type: Array,
      default() {
        return [];
      }
    },
    modalVisible: {
      type: Boolean,
      default(){
        return false
      }
    },
    confirmLoading: {
      type: Boolean,
      default(){
        return false
      }
    }
  },
  methods: {
    handleModalOk() {
      this.$emit('handleModalOk')
    },
    hanldModalCancel() {
      this.$emit('hanldModalCancel')
    }
  }
};
</script>

<style lang="scss">
</style> 