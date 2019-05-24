/**
 * 
 * 忘记密码
 * @author 舒丹彤 
 * @date 2019/5/13
 * 
 */

 <template>
  <div class="modifyPwd whiteblock">
    <a-form :form="form" @submit="handleModify">
      <!-- 账号 -->
      <a-form-item label="账号" v-bind="formItemLayout">
        <a-tag color="blue">{{username}}</a-tag>
      </a-form-item>
      <!-- 原密码 -->
      <a-form-item label="原密码" v-bind="formItemLayout">
        <a-input
          v-decorator="['password', {
            rules: [{
                required: true, message: '请输入原密码'
            }, {
                validator: validateToNextPassword
            }]
        }]"
          type="password"
        ></a-input>
      </a-form-item>
      <!-- 新密码 -->
      <a-form-item label="新密码" v-bind="formItemLayout">
        <a-input
          v-decorator="[
          'confirm',
          {
            rules: [{
              required: true, message: '请确认您的密码!',
            }, {
              validator: compareToFirstPassword,
            }],
          }
        ]"
          type="password"
          @blur="handleConfirmBlur"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" :style="{textAlign: 'right'}">
        <a-button type="primary" html-type="submit">确认修改</a-button>
        <a-button @click="handleReset" :style="{ marginLeft: '8px' }">取消</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

 <script>
export default {
  name: "modifyPwd",
  data() {
    return {
      username: "",
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
      confirmDirty: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    // 确认修改
    handleModify(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
        }
      });
    },
    // 确认密码失焦
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
      console.log(this.confirmDirty);
    },
    // 验证新密码
    compareToFirstPassword(rule, value, callback) {
      console.log(rule);
      const form = this.form;
      console.log(value);
      console.log(form.getFieldValue("password"));
      if (value && value !== form.getFieldValue("password")) {
        callback("两个密码不一致");
      } else {
        callback();
      }
    },
    // 验证原始密码
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    },
    // 取消/重置
    handleReset() {
      this.form.resetFields();
    }
  },
  mounted() {
    this.username = window.bdUser["username"] ? window.bdUser["username"] : "";
  }
};
</script>

 <style lang="scss">
.modifyPwd {
  margin: 10px;
  padding: 40px !important;
  .ant-form-item {
    width: 500px;
  }
}
</style>