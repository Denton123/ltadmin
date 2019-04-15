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
      @ok="handleEdit"
      @cancel="closeNewForm"
      okText="确认"
      cancelText="取消"
    >
      <a-form :form="form" @submit="handleEdit">
        <template v-for="editItem in editComponent">
          <!-- 文本框 -->
          <a-form-item
            :label="editItem.label"
            v-bind="formItemLayout"
            v-if="editItem.type=='text'"
            :type="editItem.inputType"
          >
            <a-input
              v-decorator="[
            `${editItem.name}`, {rules: editItem.rules}
          ]"
              :placeholder="editItem.placeholder"
            />
          </a-form-item>
          <!-- tree选择 -->
          <a-form-item
            v-if="editItem.type=='treeSelect'"
            :label="editItem.label"
            v-bind="formItemLayout"
          >
            <a-tree-select
              :placeholder="editItem.placeholder"
              style="width: 300px"
              v-decorator="[`${editItem.name}`, {rules: editItem.rules}]"
              :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
              allowClear
              :treeData="treeSelectData"
            />
          </a-form-item>
          <!-- 多选框 -->
          <a-form-item
            v-if="editItem.type=='checkbox'"
            :label="editItem.label"
            v-bind="formItemLayout"
          >
            <a-checkbox-group v-decorator="[`${editItem.name}`, {rules: editItem.rules}]">
              <a-checkbox
                v-for="checkbox in editItem.checkboxComponents"
                :value="checkbox.value"
                :key="checkbox.desc"
              >{{checkbox.desc}}</a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <!-- 单选框 -->
          <a-form-item
            v-if="editItem.type=='radio'"
            :label="editItem.label"
            v-bind="formItemLayout"
          >
            <a-radio-group v-decorator="[`${editItem.name}`, {rules: editItem.rules}]">
              <a-radio
                :value="radio.value"
                v-for="radio in editItem.radioComponents"
                :key="radio.desc"
              >{{radio.desc}}</a-radio>
            </a-radio-group>
          </a-form-item>
          <!-- 数字输入框 -->
          <a-form-item v-if="editItem.type=='num'" :label="editItem.label" v-bind="formItemLayout">
            <a-input-number v-decorator="[`${editItem.name}`, {rules: editItem.rules}]" :min="1"/>
          </a-form-item>
          <!-- 树形控件 -->
          <a-form-item
            v-if="editItem.type=='tree' && editItem.belong == 'menu'"
            :label="editItem.label"
            v-bind="formItemLayout"
          >
            <a-tree
              showLine
              checkable
              autoExpandParent
              v-model="MenucheckedKeys"
              :treeData="menuTreeData"
              v-decorator="[`${editItem.name}`, {initialValue: MenucheckedKeys}]"
            ></a-tree>
          </a-form-item>
          <a-form-item
            v-if="editItem.type=='tree' && editItem.belong == 'dept'"
            :label="editItem.label"
            v-bind="formItemLayout"
          >
            <a-tree
              showLine
              checkable
              autoExpandParent
              :treeData="deptTreeData"
              v-model="DeptcheckedKeys"
              v-decorator="[`${editItem.name}`, {initialValue: DeptcheckedKeys}]"
            ></a-tree>
          </a-form-item>
        </template>
      </a-form>
    </a-modal>
  </div>
</template>

 <script>
import { constants } from "crypto";
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
      form: this.$form.createForm(this),
      treeSelectData: [],
      menuTreeData: [],
      deptTreeData: [],
      MenucheckedKeys: ["1"],
      DeptcheckedKeys: []
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
  computed: {
    monitorTwoProperty() {
      const { fields, editComponent } = this;
      return {
        fields,
        editComponent
      };
    }
  },
  methods: {
    closeNewForm() {
      this.$emit("closeEditForm");
    },
    handleEdit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$emit("submitEdit", values);
        }
      });
    },
    // 获取树数据
    getTreeSelectData() {
      let url, urlParam;
      this.editComponent &&
        this.editComponent.forEach(item => {
          if (item.url) {
            url = item.url;
            urlParam = item.urlParam;
          } else if (item.urlParam) {
            urlParam = item.urlParam;
            url = `sys/${item.urlParam}/select/v2`;
          }
        });
      this.$dataGet(this, url).then(res => {
        if (res.data.code == 200) {
          this.treeSelectData = this.$setTreeData(
            res.data.data,
            `${urlParam}Id`,
            true
          );
        }
      });
    },
    // 获取树控件数据
    getTreeData() {
      this.$dataGet(this, `sys/menu/listV2`).then(res => {
        if (res.data.code == 200) {
          this.menuTreeData = this.$setTreeData(res.data.data, "menuId", false);
        }
      });
      this.$dataPost(this, `sys/dept/list/v2`, { limit: 10 }).then(res => {
        if (res.data.code == 200) {
          this.deptTreeData = this.$setTreeData(res.data.list, "deptId", false);
        }
      });
    }
  },
  watch: {
    monitorTwoProperty(val) {
      let fieldsObj = {};
      const { fields, editComponent } = val;
      this.form = this.$form.createForm(this, {
        mapPropsToFields: () => {
          let fieldsObj = {};
          for (let i in fields) {
            // fields值不为数字类型
            if (typeof fields[i] == "number") {
              fields[i] = `${fields[i]}`;
            } else if (fields[i] == null) {
              fields[i] = "";
            }
          }
          editComponent.forEach(v => {
            fieldsObj[v.name] = this.$form.createFormField({
              value: fields[v.name]
            });
          });
          console.log(this.fields);
          // this.MenucheckedKeys = fields['menuIdList']
          // this.DeptcheckedKeys = fields['deptIdList']
          return fieldsObj;
        }
      });
    },
    MenucheckedKeys(val) {
      console.log("onCheck", val);
    },
    DeptcheckedKeys(val) {
      console.log("onCheck", val);
    }
  },
  mounted() {
    this.getTreeSelectData();
    this.getTreeData();
  }
};
</script>

<style lang="scss">
</style>
 