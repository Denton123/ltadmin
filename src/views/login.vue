/*登录页面
* @description 登录页面
* @author 舒丹彤 
* @date 2019/3/5
* */

<template>
  <div class="login_wrap">
    <div class="login_content">
      <img src="@/assets/login_logo.png" class="mrB10 logo_img">
      <div class="login">
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleLogin"
        >
          <a-form-item>
            <a-input-group compact>
              <a-button class="user_name_icon"></a-button>
              <a-input
                class="user_input"
                v-decorator="[
          'username',
          { rules:  [{ required: true, message: '请输入用户名称!' }] }
        ]"
                placeholder="请输入用户名称"
              />
            </a-input-group>
          </a-form-item>
          <a-form-item>
            <a-input-group compact>
              <a-button class="password_icon"></a-button>
              <a-input
                class="password_input"
                v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入登录密码!' }] }
        ]"
                type="password"
                placeholder="请输入登录密码"
              ></a-input>
            </a-input-group>
          </a-form-item>
          <a-form-item>
            <span class="code_pic fr" @click="getCode">
              <img :src="codeSrc" alt>
            </span>
            <a-input
              v-decorator="[
          'captcha',
          { rules: [{ required: true, message: '请输入验证码!' }] }
        ]"
              class="inlineBlock fl codeInput"
              placeholder="请输入验证码"
            />
          </a-form-item>
          <a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      // 验证码图片
      codeSrc: ""
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    // 登录
    handleLogin(e) {
      console.log(e)
      e.preventDefault();
      console.log(this.form)
      this.form.validateFields((err, values) => {
        console.log('wwww')
        if (!err) {
          this.$dataPost(this, "sys/loginV2", values, false).then(res => {
            if (res.data.code == 200) {
              this.$message.success("登录成功");
              this.$store.commit("setLogin", true);
              this.$router.push({
                path: "/hotelMenus/e-longHotelList"
              });
              // this.$store.dispatch('getUser')
            } else if (res.data.code == 500) {
              this.$message.error(res.data.msg);
            }
          });
        }
      });
    },
    // 获取验证码
    getCode() {
      axios
        .get("/captchaV2.jpg", {
          responseType: "arraybuffer"
        })
        .then(response => {
          if (response.status == 200) {
            return (
              "data:image/png;base64," +
              btoa(
                new Uint8Array(response.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ""
                )
              )
            );
          }
        })
        .then(data => {
          this.codeSrc = data;
        });
    }
  },
  mounted() {
    this.getCode();
  }
};
</script>

<style lang="scss">
.login_wrap {
  background: url("../../src/assets/login_bg.png");
  width: 100%;
  height: 100vh;
  .login_content {
    width: 520px;
    height: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -260px;
    margin-top: -300px;
    text-align: center;
    .logo_img {
      margin-bottom: 35px;
    }
  }
  .login {
    width: 520px;
    height: 420px;
    padding: 80px 75px 80px 68px;
    border-radius: 4px;
    background: #4dbdf6;
    text-align: left;
  }
  #components-form-demo-normal-login {
    .login-form {
      max-width: 300px;
    }
    .login-form-button {
      width: 100%;
      height: 52px;
      border-radius: 30px;
      font-size: 20px;
      background-color: #0271f1;
      border-color: #0271f1;
    }
  }
  .ant-input-affix-wrapper {
    height: 49px;
  }
  .codeInput {
    width: 160px;
    height: 48px;
  }
  .user_input,
  .password_input {
    width: 308px;
    height: 49px;
  }
  .user_name_icon,
  .password_icon {
    background-repeat: no-repeat;
    background-position: center;
    background-color: #fff;
    width: calc(100% - 308px);
    height: 49px;
  }
  .user_name_icon {
    background-image: url("../../src/assets/login_user.png");
  }
  .password_icon {
    background-image: url("../../src/assets/login_password.png");
  }
  .code_pic {
    width: 168px;
    height: 48px;
    display: inline-block;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>