<template>
  <div class="login-bg">
    <el-card class="login-card" v-loading.body="loading">
      <div class="login-form">
        <h2 class="login-title">Login</h2>
        <el-form
          :rules="rules"
          :model="loginForm"
          ref="loginForm"
          label-position="top"
          @submit.native.prevent
          @keyup.enter.native="login"
        >
          <el-form-item prop="email">
            <el-input
              type="email"
              v-model="loginForm.email"
              placeholder="Email"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              placeholder="Password"
            />
          </el-form-item>
        </el-form>
        <el-row>
          <el-col>
            <el-button
              type="primary"
              class="login-btn"
              @click="login"
            >
              Login
            </el-button>
          </el-col>
        </el-row>
      </div>
      <el-row class="link-area">
        <el-col>
          <nuxt-link :to="''">
            <p class="link-text">Forgot your password</p>
          </nuxt-link>
        </el-col>
        <el-col>
          <nuxt-link :to="''">
            <p class="link-text">Sign up</p>
          </nuxt-link>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    const passValid = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('パスワードを入力してください'))
      } else if (value.length < 8) {
        callback(new Error('8文字以上で入力してください'))
      } else if (value.search(/^[\x20-\x7e]+$/) === -1 ) {
        callback(new Error('半角英数字で入力してください'))
      } else if (value.search(/\d/) === -1) {
          callback(new Error('英数字混合で入力してください'))
      } else if (value.search(/[a-zA-Z]/) === -1 ) {
          callback(new Error('英数字混合で入力してください'))
      } else if (value.search(/^([a-zA-Z0-9]{8,})$/) === -1 ) {
        callback(new Error('英数字混合で入力してください'))
      } else {
        callback()
      }
    }
    const mailValid = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('メールアドレスを入力してください'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      loginForm: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { validator: mailValid, trigger: 'blur' },
          { type: 'email', message: 'メールの形式で入力してください', trigger: 'blur' }
        ],
        password: [
          { validator: passValid, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.loading = true
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.postLogin()
        } else {
          this.loading = false
          return false
        }
      })
    },
    postLogin () {
      // TODO:: ここにログインの処理を書く
      this.loading = false
      return
    }
  }
}
</script>

<style lang="scss" scoped>
.login-bg {
  background-image: url("~static/login_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 60px 0;
  .login-card {
    width: 400px;
    margin: 0 auto;
    .login-form {
      padding: 30px 0;
      border-bottom: 1px solid #eee;
      .login-title {
        margin-bottom: 20px;
      }
      .login-btn {
        width: 100%;
      }
    }
    .link-area {
      text-align: center;
      padding: 15px 0;
      a {
        text-decoration: none;
      }
      .link-text {
        margin: 6px 0;
      }
    }
  }
}
</style>
