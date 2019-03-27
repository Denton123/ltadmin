/**
import { setTimeout } from 'timers';
 * 
 * 管理系统编辑表单
 * @author 舒丹彤 
 * @date 2019/3/25
 * 
 */

 <template>
  <div>
    <a-modal
      :visible="editFormVisible"
      :title="editFormTitle"
      @ok="handleOk"
      @cancel="closeNewForm"
      okText="确认"
      cancelText="取消"
    >
      <a-form :form="form" @submit="handleEdit">
        <template v-for="editItem in editComponent">
          <a-form-item
            :label="editItem.label"
            v-bind="formItemLayout"
            v-if="editItem.type=='text'"
            :type="editItem.inputType"
          >
            <a-input
              v-decorator="[
            `${editItem.name}`
          ]"
              :placeholder="editItem.placeholder"
            />
          </a-form-item>
          <!-- tree选择 -->
          <a-form-item v-if="editItem.type=='tree'" :label="editItem.label" v-bind="formItemLayout">
            <a-tree-select
              :placeholder="editItem.placeholder"
              style="width: 300px"
              v-decorator="[`${editItem.name}`]"
              :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
              allowClear
              :treeData="editItem.treeData"
            />
          </a-form-item>
          <!-- 多选框 -->
          <a-form-item
            v-if="editItem.type=='checkbox'"
            :label="editItem.label"
            v-bind="formItemLayout"
          >
            <a-checkbox v-decorator="[`${editItem.name}`]">{{editItem.desc}}</a-checkbox>
          </a-form-item>
          <!-- 单选框 -->
          <a-form-item
            v-if="editItem.type=='radio'"
            :label="editItem.label"
            v-bind="formItemLayout"
          >
            <a-radio-group v-decorator="[`${editItem.name}`]">
              <a-radio :value="radio.value" v-for="radio in editItem.radioComponents">{{radio.desc}}</a-radio>
            </a-radio-group>
          </a-form-item>
          <!-- 数字输入框 -->
          <a-form-item v-if="editItem.type=='num'" :label="editItem.label" v-bind="formItemLayout">
            <a-input-number v-decorator="[`${editItem.name}`]" :min="1"/>
          </a-form-item>
        </template>
      </a-form>
    </a-modal>
  </div>
</template>

 <script>
export default {
  name: "editForm",
  data() {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 16 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 16 },
          sm: { span: 16 }
        }
      },
      form: this.$form.createForm(this)
    };
  },
  props: {
    editFormTitle: {
      type: String,
      default() {
        return "";
      }
    },
    editFormVisible: {
      type: Boolean,
      default() {
        return false;
      }
    },
    fields: {
      type: Object,
      default() {
        return {};
      }
    },
    editComponent: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    handleOk(e) {
      console.log("");
      this.handleEdit(e);
    },
    closeNewForm() {
      this.$emit("closeEditForm");
    },
    handleEdit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        // console.log("values");
        // console.log(values);
      });
    }
  },
  created() {
    // this.form = this.$form.createForm(this, {
    //   mapPropsToFields: () => {
    //     let fieldsObj = {};
    //     console.log(this.editComponent);
    //     this.editComponent.forEach(v => {
    //       fieldsObj[v.name] = this.$form.createFormField({
    //         value: this.fields[v.name]
    //       });
    //     });
    //     console.log(fieldsObj, "-------------");
    //     return fieldsObj;
    //   }
    // });
  },
  watch: {
    fields() {
      let fieldsObj = {};
      this.editComponent.forEach(v => {
        fieldsObj[v.name] = this.$form.createFormField({
          value: this.fields[v.name]
        });
      });
    }
  },
  mounted() {
    this.form = this.$form.createForm(this, {
      mapPropsToFields: () => {
        let fieldsObj = {};
        console.log(this.editComponent);
        this.editComponent.forEach(v => {
          fieldsObj[v.name] = this.$form.createFormField({
            value: this.fields[v.name]
          });
        });
        console.log(fieldsObj, "-------------");
        return fieldsObj;
      }
    });
  }
};
</script>

<style lang="scss">
</style>
 