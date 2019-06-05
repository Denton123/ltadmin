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
      @cancel="handleModalCancel"
      :okText="modalParams.okText"
      cancelText="取消"
    >
      <h4>{{modalParams.infoTitle}}</h4>
      <a-row>
        <a-col :span="12" v-for="(item, index) in modalParams.hotelMatchCardTag" :key="index">
          <a-card :bordered="false" :title="`${item.title}`">
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
    return {};
  },
  props: {
    modalParams: {
      type: Object,
      default() {
        return {};
      }
    },
    modalVisible: {
      type: Boolean,
      default() {
        return false;
      }
    },
    confirmLoading: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  methods: {
    handleModalOk() {
      this.$emit("handleModalOk");
    },
    handleModalCancel() {
      this.$emit("handleModalCancel");
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss">
.msgModal {
  .ant-modal-title {
    color: #000;
    font-weight: 600;
  }
  .ant-card-head {
    border-bottom: none !important;
    padding: 0 !important;
    font-weight: 600;
  }
}
</style> 