/**
import func from './vue-temp/vue-editor-bridge';
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
      @ok="handleNew"
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
          <a-form-item
            v-if="newItem.type=='treeSelect'"
            :label="newItem.label"
            v-bind="formItemLayout"
          >
            <a-tree-select
              :placeholder="newItem.placeholder"
              style="width: 300px"
              v-decorator="[`${newItem.name}`, {rules: newItem.rules}]"
              :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
              allowClear
              :treeData="treeSelectData"
            ></a-tree-select>
          </a-form-item>

          <!-- 多选框 -->
          <a-form-item
            v-if="newItem.type=='checkbox'"
            :label="newItem.label"
            v-bind="formItemLayout"
          >
            <a-checkbox-group v-decorator="[`${newItem.name}`, {rules: newItem.rules}]">
              <a-checkbox
                v-for="checkbox in newItem.checkboxComponents"
                :value="checkbox.value"
                :key="checkbox.desc"
              >{{checkbox.desc}}</a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <!-- 单选框 -->
          <a-form-item v-if="newItem.type=='radio'" :label="newItem.label" v-bind="formItemLayout">
            <a-radio-group v-decorator="[`${newItem.name}`, {rules: newItem.rules}]">
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
                  initialValue: 0, rules: newItem.rules}]"
              :min="1"
              :placeholder="newItem.placeholder"
            ></a-input-number>
          </a-form-item>

          <!-- 树形控件 -->
          <a-form-item
            v-if="newItem.type=='tree' && newItem.belong == 'menu'"
            :label="newItem.label"
            v-bind="formItemLayout"
          >
            <a-tree
              showLine
              checkable
              autoExpandParent
              v-model="MenucheckedKeys"
              :treeData="menuTreeData"
              v-decorator="[`${newItem.name}`, {initialValue: MenucheckedKeys}]"
            ></a-tree>
          </a-form-item>
          <a-form-item
            v-if="newItem.type=='tree' && newItem.belong == 'dept'"
            :label="newItem.label"
            v-bind="formItemLayout"
          >
            <a-tree
              showLine
              checkable
              autoExpandParent
              v-model="DeptcheckedKeys"
              :treeData="deptTreeData"
              v-decorator="[`${newItem.name}`, {initialValue: DeptcheckedKeys }]"
            ></a-tree>
          </a-form-item>
        </template>
      </a-form>
    </a-modal>
  </div>
</template>

 <script>
import { constants } from 'crypto';
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
      treeSelectData: [],
      menuTreeData: [],
      deptTreeData: [],
      MenucheckedKeys: [],
      DeptcheckedKeys: []
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
    closeNewForm() {
      this.$emit("closeNewForm");
      this.form.resetFields();
    },
    handleNew(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$emit("submitNew", values);
          // setTimeout(() => {
          //   this.form.resetFields();
          // }, 2000);
        }
      });
    },
    // 获取树选择数据
    getTreeSelectData() {
      let url, urlParam;
      this.newComponent &&
        this.newComponent.forEach(item => {
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
      this.$dataPost(this, `sys/dept/list/v2`, {limit: 10}).then(res => {
        if (res.data.code == 200) {
          this.deptTreeData = this.$setTreeData(res.data.list, "deptId", false);
        }
      });
    }
  },
  mounted() {
    this.getTreeSelectData();
    this.getTreeData();
  },
  watch: {
    $route: {
      handler: function() {
        this.getTreeSelectData();
      },
      deep: true
    },
  }
};
</script>

 <style lang="scss">
</style>
 
 
