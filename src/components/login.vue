<template>
  <div id="login">
    <div class="identity-box" style="display: block;">
      <div style="height:85px;"></div>
      <h3>账号登录</h3>
      <el-form label-width="80px" :model="ruleForm" class="form" ref="ruleForm" :rules="rules">
        <el-form-item prop="account">
          <el-input v-model="ruleForm.account" placeholder="邮箱/手机号/账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" placeholder="密码" show-password @keyup.enter.native="login('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox type="checkBox" v-model="checked" class="rememberPassword">下次自动登录</el-checkbox>
          <span class="forgetPassword">忘记密码?</span>
        </el-form-item>
        <el-form-item class="button">
          <el-button type="primary" @click="login('ruleForm')" style="width:353px">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="btn-login">
        <router-link :to="{name:'Register'}">
          <span class="str1" style="color:grey">还没有账号</span>
          <span class="str2" style="color:blue">去注册</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'SLogin',
    data(){
      return{
        ruleForm:{
          account:'',
          password:''
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
        checked:false,
        UserForm:{
          password:""
        }
      }
    },
    methods: {
      //登录
      login (formName) {
        this.$refs[formName].validate((valid) => {
          console.log(valid)
          if (valid) {
            if (/^[k][0-9]{11}$/.test(this.ruleForm.account)) {
              this.UserForm.account = this.ruleForm.account
            } else if (/^[1][3,4,5,7,8,9][0-9]{9}$/.test(this.ruleForm.account)) {
              this.UserForm.phoneNumber = this.ruleForm.account
            } else if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.ruleForm.account)){
              this.UserForm.email = this.ruleForm.account
            }

            this.UserForm.password = this.ruleForm.password

            this.$axios.post("/LoginController/Login",this.UserForm).then(response => {
              if (response.data != ''){
                this.$store.commit(types.LOGIN,response.data);
                if (response.data.teacher){
                  this.$router.replace("/teacher/index")
                }else {
                  this.$router.replace("/student/index")
                }
              }
              else {
                alert("账号不存在，或者密码错误")
              }
            }, error => {
              console.log('错误', error.message)
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
  #login{
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    overflow-y: auto;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    background-image: url("../assets/loginAndRegister/login-bg2-01.jpg");
  }
  .identity-box {
    margin-top: 80px;
    width: 480px;
    height: 504px;
    padding: 1px 25px 0;
    background: #FFF;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    border-radius: 4px;
  }
  .identity-box h3 {
    position: relative;
    left: 15px;
    bottom: 90px;
    font-size: 32px;
    font-weight: 400;
    color: #3B3D45;
  }
  .el-form-item {
    margin-bottom: 40px;
  }
  .form{
    position: relative;
    right: 40px;
    bottom: 50px;
  }
  .login-box .opt {
    padding: 20px 0;
    height: 24px;
    line-height: 24px;
  }
  a{
    text-decoration: none;
    cursor: pointer;
  }
  .rememberPassword{
    float: left;
  }
  .forgetPassword{
    float: right;
    cursor: pointer;
  }
  .btn-login{
    margin-top: -80px;
    margin-right: 35px;
    float: right;
    cursor: pointer;
  }
</style>
