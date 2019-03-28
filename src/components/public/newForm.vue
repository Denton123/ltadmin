/**
import { constants } from 'fs';
 * 
 * 管理系统新增表单
 * @author 舒丹彤 
 * @date 2019/3/25
 * 
 */
 
 <template>
  <div>
    <a-modal
      :visible="newFormVisible"
      :title="newFormTitle"
      @ok="handleOk"
      @cancel="closeNewForm"
      okText="确认"
      cancelText="取消"
    >
      <a-form :form="form" @submit="handleNew">
        <template v-for="newItem in newComponent">
          <!-- 文本框 -->
          <a-form-item v-if="newItem.type=='text'" :label="newItem.label" v-bind="formItemLayout">
            <a-input
              :placeholder="newItem.placeholder"
              v-decorator="[`${newItem.name}`, {rules: newItem.rules}]"
              :type="newItem.inputType"
            ></a-input>
          </a-form-item>
          <!-- tree选择 -->
          <a-form-item v-if="newItem.type=='tree'" :label="newItem.label" v-bind="formItemLayout">
            <a-tree-select
              :placeholder="newItem.placeholder"
              style="width: 300px"
              v-decorator="[`${newItem.name}`]"
              :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
              allowClear
              :treeData="treeData"
            ></a-tree-select>
            <span v-decorator="[`${newItem.parentName}`, {
                  initialValue: '上级部门'
              }]"></span>
          </a-form-item>

          <!-- 多选框 -->
          <a-form-item
            v-if="newItem.type=='checkbox'"
            :label="newItem.label"
            v-bind="formItemLayout"
          >
            <a-checkbox v-decorator="[`${newItem.name}`]">{{newItem.desc}}</a-checkbox>
          </a-form-item>
          <!-- 单选框 -->
          <a-form-item v-if="newItem.type=='radio'" :label="newItem.label" v-bind="formItemLayout">
            <a-radio-group v-decorator="[`${newItem.name}`]">
              <a-radio
                :value="radio.value"
                v-for="radio in newItem.radioComponents"
                :key="radio.desc"
              >{{radio.desc}}</a-radio>
            </a-radio-group>
          </a-form-item>
          <!-- 数字输入框 -->
          <a-form-item v-if="newItem.type=='num'" :label="newItem.label" v-bind="formItemLayout">
            <a-input-number
              v-decorator="[`${newItem.name}`, {
                  initialValue: 0}]"
              :min="1"
              :placeholder="newItem.placeholder"
            ></a-input-number>
          </a-form-item>
        </template>
      </a-form>
    </a-modal>
  </div>
</template>

 <script>
export default {
  name: "newForm",
  data() {
    return {
      form: this.$form.createForm(this),
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
      treeData: []
    };
  },
  props: {
    newFormTitle: {
      type: String,
      default() {
        return "";
      }
    },
    newFormVisible: {
      type: Boolean,
      default() {
        return false;
      }
    },
    newComponent: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    handleOk(e) {
      console.log("");
      this.handleNew(e);
    },
    closeNewForm() {
      this.$emit("closeNewForm");
    },
    handleNew(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if(!err) {
          // console.log(values);
          this.$dataPost(this,'/sys/dept/save/v2', values, false).then(res => {
            if (res.data.code == 200) {
              this.$message.success("新增数据成功");
              this.newFormVisible = false
            }
          })
        }
      });
    }
  },
  mounted() {
    // console.log(this.newComponent);
  }
};
</script>

 <style lang="scss">
</style>
 
 
