<template>
  <div class="login">
    <div class="login2">
      <div class="back" v-if="backShow">
        <div class="back-cont">
          <div class="loginWay">
            <a class="a1" :class="{ 'active':flag1}" @click="isShowAccount">账号登录</a>
            <a class="a1" :class="{ 'active':flag2}" @click="isShowPhone">手机短信登录</a>
            <a class="a2" @click="isShowWeChat">微信登录</a>
          </div>
          <!--密码登录-->
          <div class="loginByAccount" v-if="account">
            <el-form :ref="loginFrom" :model="loginFrom" :rules="rules" >
              <el-form-item style="margin-top:10px" prop="account">
                <el-input type="text" v-model="loginFrom.account"
                          placeholder="邮箱/账号/手机号"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="password" v-model="loginFrom.password" placeholder="密码"></el-input>
              </el-form-item>
              <el-form-item style="margin-top: -27px; height: 50px;">
                <el-checkbox type="checkbox" v-model="check" class="auto-login">下次自动登录</el-checkbox>
                <a class="forget">忘记密码？</a>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="loginAccount" v-loading.fullscreen.lock="loading"> 登录</el-button>
              </el-form-item>
              <el-form-item>
                <router-link to="/register" class="btn-register">
                  <span class="str1">还没有账号？</span><span class="str2">去注册</span>
                </router-link>
              </el-form-item>
            </el-form>
            <a @click="isShowWeChat" class="qr-sj"></a>
          </div>
          <!--短信验证码登录-->
          <div class="loginByPhoneNumber" v-if="phone">
            <el-form ref="phoneForm" label-width="80px">
              <el-form-item>
                <div class="phone-number">
                  <input v-model="phoneForm.phone" placeholder="手机号"/>
                </div>
              </el-form-item>
              <el-form-item>
                <input class="code-input" v-model="phoneForm.code" placeholder="验证码"/>
                <el-button class="code" type="primary" @click="send">{{ verCode.buttonText }}</el-button>
              </el-form-item>
              <el-form-item style="margin-left: -18%; margin-top: -23px;  height: 65px;">
                <el-checkbox type="checkbox" v-model="check" class="auto-login">下次自动登录</el-checkbox>
                <a class="forget">忘记密码？</a>
              </el-form-item>
              <el-form-item>
                <el-button class="btnlogin" type="primary" @click="loginPhone" v-loading.fullscreen.lock="loading">登录
                </el-button>
              </el-form-item>
              <router-link to="/register" class="btn-register">
                <span class="str1">还没有账号？</span><span class="str2">去注册</span>
              </router-link>
              <a @click="isShowWeChat" class="qr-sj"></a>
            </el-form>
          </div>
        </div>
      </div>
      <div class="loginByWeChat" v-if="weChat">
        <div class="title">微信登录</div>
        <div class="yzm">
          <img class="ysm-img" src="../assets/loginAndRegister/login-code.jpg"/>
        </div>
        <div class="p">
          <p>请使用微信扫描二维码登录</p>
          <p>“课堂派”</p>
        </div>
        <a @click="clickBack" class="wechatlogin-return"></a>
      </div>
    </div>
  </div>
</template>

<script>
import userApi from '@/api/user/user'
import { setToken } from '@/utils/auth'
import  { sendCode } from '@/api/verCode/verCode'

export default {
  name: 'login',
  data () {
    return {
      loading: false,
      account: true,
      phone: false,
      weChat: false,
      backShow: true,
      flag1: true,
      flag2: false,
      check: false,
      loginFrom: {
        account: '',
        password: ''
      },
      phoneForm: {
        phone: '',
        code: ''
      },
      verCode: {
        disabled: false,
        buttonText: '获取',
        time: 60
      },
      rules:{
        account :[
          { required: true, message: '请输入账号/邮箱/电话号码', trigger: 'blur' },
          { validator:null,trigger:'blur' }
        ],
        password :[
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { validator:null,trigger:'blur'}
        ]
      },
    }
  },

  methods: {
    isShowAccount () {
      this.account = true
      this.phone = false
      this.weChat = false
      this.flag2 = false
      this.flag1 = true
    },
    isShowPhone () {
      this.account = false
      this.phone = true
      this.weChat = false
      this.flag1 = false
      this.flag2 = true
    },
    isShowWeChat () {
      this.weChat = true
      this.backShow = false
    },
    clickBack () {
      this.weChat = false
      this.backShow = true
    },
    loginAccount () {
      this.$refs[this.loginFrom].validate((valid) => {
        if (valid){
          this.loading = true
          userApi.loginAccount(this.loginFrom)
            .then(res => {
              let token = res.data.token
              //获取返回用户信息，放到cookie里面
              setToken(token)
              this.loading = false
              this.$message.success(res.msg)
              this.$router.push({ path: '/Main' })
            })
            .catch(err => {
              this.loading = false
              this.$message.error(err.msg)
            })
        }
      })
    },
    loginPhone () {
      this.loading = true
      userApi.loginPhone(this.phoneForm)
        .then(res => {
          let token = res.data.token
          //获取返回用户信息，放到cookie里面
          setToken(token)
          this.loading = false
          this.$router.push({ path: '/Main' })
          this.$message.success(res.msg)
        })
        .catch(err => {
          this.loading = false
          this.$message.error(err.msg)
        })
    },
    send () {
      sendCode(this.phoneForm.phone)
        .then(res => {
          this.$message.success(res.msg)
        })
        .catch(err => {
          this.$message.error(err.msg)
        })
      this.verCode.time = 60
      this.timer()
    },
    timer () {
      if (this.verCode.time > 0) {
        this.verCode.disabled = true
        this.verCode.time--
        this.verCode.buttonText = this.verCode.time + 's'
        setTimeout(this.timer, 1000)
      } else {
        this.verCode.time = 0
        this.verCode.buttonText = '获取'
        this.verCode.disabled = false
      }
    }
  }
}
</script>

<style scoped>

a {
  cursor: pointer;
}

.wechatlogin-return {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 40px;
  background: url('../assets/loginAndRegister/qr-sj.png') 0 -80px no-repeat;
  transform: rotateY(180deg);
  border: 10px solid #fff;
}

.btnlogin {
  margin-left: -12% !important;
  width: 103% !important;
}

.phone-number {
  margin-left: -14%;
  width: 95%;
  height: 50px;
  padding: 0 16px;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  display: flex;
  align-items: center;
}

.phone-number:hover {

}

.phone-number input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
}

.el-form-item__error {
  left: 31px
}

.code-input {
  margin-left: -14%;
  width: 56%;
  height: 50px;
  padding: 0 18px;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  outline: none;
}

.code {
  width: 32% !important;
  height: 54px !important;
  position: absolute !important;
  margin-left: 6% !important;
  color: #818181 !important;
  background: #F2F2F2 !important;
  border-radius: 3px !important;
  border: 1px solid #DCDCDC !important;
}

.el-input__inner {
  margin-left: 8%;
  width: 88%;
  height: 50px;
}

.el-button--primary {
  color: #FFF;
  background-color: #409EFF;
  border-color: #409EFF;
  width: 88%;
  margin-left: 8%;
}

.title {
  text-align: center;
  padding: 19px;
  font-size: 17px;
}

.yzm {
  width: 59%;
  height: 56%;
  margin-left: 21%;
  border: 1px solid #E2E2E2;

}

.ysm-img {
  width: 100%;
  height: 100%;
}

.p {
  text-align: center;
  font-size: 13px;
  color: rgb(55, 55, 55);
  margin-top: 13px;
}

p {
  margin: 0 auto;
}

.num {
  margin-bottom: 24px;
  border: 1px solid rgba(226, 230, 237, 1);
  width: 79%;
  height: 54px;
  font-size: 16px;
  padding-left: 13px;
  margin-left: 8%;
  border-radius: 4px;
}

.nun {
  margin-bottom: 24px;
  border: 1px solid rgba(226, 230, 237, 1);
  width: 54%;
  height: 46px;
  font-size: 16px;
  padding-left: 13px;
  margin-left: 8%;
  border-radius: 4px;

}

.get-yzm {
  float: right;
  width: 89px;
  height: 49px;
  box-sizing: border-box;
  text-align: center;
  line-height: 48px;
  border: 1px solid #DCDCDC;
  background: #F2F2F2;
  border-radius: 3px;
  color: #818181;
  text-decoration: none;
  padding: -31px 0px;
  margin-right: 39px;
}

.forget2 {
  font-size: 12px;
  color: #818181;
  float: right;
  padding-right: 9%;
  margin-top: 20px;
}

.btn {
  display: block;
  height: 48px;
  line-height: 50px;
  background: #32BAF0;
  text-align: center;
  border-radius: 3px;
  color: #fff;
  font-size: 16px;
  margin-top: 25px;
  width: 89%;
  margin-left: 8%;

}

.btn1 {
  display: block;
  height: 48px;
  line-height: 50px;
  background: #32BAF0;
  text-align: center;
  border-radius: 3px;
  color: #fff;
  font-size: 16px;
  margin-top: 25px;
  width: 85%;
  margin-left: 8%;

}

.el-checkbox:last-of-type {
  margin-right: 0;
  padding: 19px 31px;
}

span.el-checkbox__label {
  font-size: 12px;
}

.login {
  background: url("../assets/loginAndRegister/login-bg2-01.jpg");
  background-size: 100% 100%;
  width: 1536px;
  height: 753px;
  margin: 0 auto;
  position: relative;
}

.login2 {
  background: rgba(20, 27, 47, .6);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.qr-sj {
  background: url("../assets/loginAndRegister/半角二维码.png");
  width: 60px;
  height: 60px;
  position: absolute;
  left: -1px;
  bottom: 7px;
  cursor: pointer;

}

.loginWay {
  font-size: 0;
  padding-top: 36px;
  padding-left: 20px;
  padding-bottom: 35px;
}

.a1 {
  font-size: 16px;
  color: #5F6368;
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  padding: 0 15px;
}

.a1.active {
  font-size: 24px;
}

.a2 {
  font-size: 16px;
  color: #5F6368;
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  padding: 0 15px;
}

.a2.active {
  font-size: 26px;
}

.a2::before {
  content: "";
  position: absolute;
  height: 16px;
  width: 1px;
  margin-left: -14px;
  background: #E2E6ED;
  top: 11%;
}

.a2::after {
  content: "";
  position: absolute;
  height: 16px;
  width: 1px;
  background: #E2E6ED;
  top: 11%;
  margin-left: 18px;
}

.auto-login {
  font-size: 12px;
  color: #818181;
  padding-left: 31px;
}

.forget {
  font-size: 12px;
  color: #818181;
  float: right;
  padding-right: 7%;
  margin-top: 20px;

}

.loginByAccount {
  width: 374px;
  height: 342px;
  padding-left: 20px;
}


.btn-register {
  text-align: right;
  display: block;
  padding: 15px 29px;
  text-decoration: none;
  width: 30%;
  margin-left: 58%;
  margin-top: -28px;

}

.str1 {
  color: #AFB1B3;
  font-size: 12px;
}

.str2 {
  color: #32BAF0;
  font-size: 12px;
}

.loginByWeChat {

  /*width: 447px;*/
  background: white;
  height: 500px;
  margin-top: 7%;
  position: absolute;
  margin-left: 36%;
  margin-right: auto;
  border-radius: 8px;
}

.back {
  width: 27%;
  height: 62%;
  background: white;
  margin-top: 7%;
  position: absolute;
  margin-left: 36%;
  margin-right: auto;
  border-radius: 11px;
}

.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  background: white;
  color: black;
  border: 0;
  box-shadow: 0 0;
}

</style>
