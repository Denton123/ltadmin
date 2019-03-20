/*登录页面
* @description 登录页面
* @author 舒丹彤 
* @date 2019/3/5
* */

<template>
  <div class="login">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
          placeholder="Username"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
          type="password"
          placeholder="Password"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
          class="fl"
        >Remember me</a-checkbox>
        <a class="fr" href>Forgot password</a>
        <a-button type="primary" html-type="submit" class="login-form-button">Log in</a-button>
        <a href class="fl">register now!</a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "login",
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        console.log(err)
        console.log(values)
        this.$router.push('/planMenus/inlandRoute')
      });
    }
  }
};
</script>

<style lang="scss">
.login {
  width: 500px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -200px;
}
#components-form-demo-normal-login {
  .login-form {
    max-width: 300px;
  }
  .login-form-button {
    width: 100%;
  }
}
</style>