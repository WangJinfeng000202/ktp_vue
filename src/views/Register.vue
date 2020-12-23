<template>
  <div class="registerBack">
    <div v-if="one" class="menu-main">
      <h3 class="menu-reg">注册账号</h3>
      <p class="identity">请选择您在日常教学中的实际身份</p>
      <div class="choose">
        <div @click="teacherLogin" class="btn-reg">
          <img src="../assets/registerIma/teacher.png" alt="">
          <a>我是老师/助教</a>
        </div>
        <div @click="studentLogin" class="btn-reg">
          <img src="../assets/registerIma/student.png" alt="">
          <a>我是学生</a>
        </div>
      </div>
      <router-link to="/login" class="btn-login">
        <span class="str1">已有账号？</span>
        <span class="str2">去登录</span>
      </router-link>
    </div>
    <div v-if="teacher" class="teacherDiv">
      <div class="register-name" @click="previouseOne">
        <img src="../assets/registerIma/returnReg.png" alt="">
        <span>老师/助教注册</span>
      </div>
      <el-form :model="userInfo" :rules="rules" :ref="userInfo">
        <el-form-item prop="account">
          <el-input type="text" v-model="userInfo.account" placeholder="邮箱/手机"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="userInfo.password" placeholder="密码"/>
        </el-form-item>
        <el-form-item prop="password2">
          <el-input type="password" v-model="userInfo.password2" placeholder="再次输入密码"/>
        </el-form-item>
        <el-form-item prop="username">
          <el-input type="text" v-model="userInfo.username" placeholder="姓名"/>
        </el-form-item>
        <el-form-item prop="school">
          <el-input type="text" v-model="userInfo.school" placeholder="学校"/>
        </el-form-item>
        <el-form-item prop="code">
          <el-input type="text" v-model="userInfo.code" class="captcha" placeholder="验证码"/>
          <div style="float: right;width: 35%;height: 42px;" @click="refreshCode">
            <s-identify  :identifyCode="identifyCode"/>
          </div>
        </el-form-item>
      </el-form>
      <a @click="doRegister" class="btn-btn">注册为老师/助教</a>
      <router-link to="/login" class="btn-login">
        <span class="str1">已有账号？</span><span class="str2">去登录</span>
      </router-link>
    </div>
    <div v-if="student" class="studentDiv">
      <div class="register-name" @click="previouseOne">
        <img src="../assets/registerIma/returnReg.png" alt="">
        <span>学生注册</span>
      </div>
      <el-form :model="userInfo" :rules="rules" :ref="userInfo">
        <el-form-item prop="account">
          <el-input type="text" v-model="userInfo.account" placeholder="邮箱/手机"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="userInfo.password" placeholder="密码"/>
        </el-form-item>
        <el-form-item prop="password2">
          <el-input type="password" v-model="userInfo.password2" placeholder="再次输入密码"/>
        </el-form-item>
        <el-form-item prop="username">
          <el-input type="text" v-model="userInfo.username" placeholder="姓名"/>
        </el-form-item>
        <el-form-item prop="schoolId">
          <el-input type="text" v-model="userInfo.schoolId" placeholder="学号"/>
        </el-form-item>
        <el-form-item prop="school">
          <el-input type="text" v-model="userInfo.school" placeholder="学校"/>
        </el-form-item>
        <el-form-item prop="code">
          <el-input type="text" v-model="userInfo.code" class="captcha" placeholder="验证码"/>
          <div style="float: right;width: 35%;height: 42px;" @click="refreshCode">
              <s-identify :identifyCode="identifyCode"/>
          </div>
        </el-form-item>
      </el-form>
      <a type="primary" @click="doRegister" class="btn-btn">注册为学生</a>
      <router-link to="/login" class="btn-login">
        <span class="str1">已有账号？</span><span class="str2">去登录</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { register } from '@/api/user/user'
import SIdentify from '@/components/SIdentify'
export default {
  name: 'register',
  components:{
    SIdentify
  },
  data () {
    return {
      one: true,
      teacher: false,
      student: false,
      mark: 0,
      code:'',
      identifyCode:'',
      identifyCodes:[0,1,2,3,4,5,6,7,8,9],
      password: '',
      userInfo: {},
      rules:{
        account: [{required: true,message:'请输入邮箱/手机',trigger: 'blur'},{validator:null,trigger:'blur'}],
        password:[{required: true,message:'请输入密码',trigger: 'blur'},{validator:null,trigger:'blur'}],
        password2:[{required: true,message:'请再次输入密码',trigger: 'blur'},{validator:null,trigger:'blur'}],
        username:[{required: true,message:'请输入姓名',trigger:'blur'},{validator:null,trigger:'blur'}],
        schoolId: [{required: true,message:'请输入学号',trigger: 'blur'},{validator:null,trigger:'blur'}],
        school:[{required: true,message:'请输入学校',trigger: 'blur'},{validator:null,trigger:'blur'}],
        code:[{required: true,message:'请输入验证码',trigger: 'blur'},{validator:null,trigger:'blur'}]
      }
    }
  },
  created () {
    this.refreshCode()
  },
  methods: {
    // 生成随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 切换验证码
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    // 生成四位随机验证码
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
      }
      console.log(this.identifyCode);
    },
    teacherLogin () {
      this.one = false
      this.teacher = true
      console.log('teacher+ ')
    },
    studentLogin () {
      this.one = false
      this.student = true
    },
    previouseOne () {
      this.one = true
      this.student = false
      this.teacher = false
    },
    doRegister () {
      this.$refs[this.userInfo].validate((valid) => {
        if (valid) {
          if (this.userInfo.password !== this.userInfo.password2){
            this.$message.error("密码输入不一致")
          }
          else if (this.userInfo.code!==this.identifyCode){
            this.$message.error("验证码错误")
          }else{
            this.userInfo.identityRole = this.teacher ? '教师' : '学生'
            register(this.userInfo)
              .then(res => {
                this.userInfo = {}
                this.$message.success(res.msg)
              })
              .catch(err => {
                this.$message.error(err.msg)
              })
          }

        }
      })
    }
  }
}
</script>

<style scoped>

.captcha {
  width: 60%;
}

.btn-btn{
  display: block;
  text-decoration: none;
  height: 48px;
  background-color: #32BAF0;
  text-align: center;
  color: #FFFFFF;
  line-height: 48px;
  border-radius: 3px;
  cursor: pointer;
}

.btn-login {
  padding: 12px 26px;
  text-align: right;
  display: block;
  text-decoration: none;
}

.registerBack {
  background: url("../assets/registerIma/register.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  padding-top: 40px;
  margin: 0 auto;
}

.teacherDiv, .studentDiv {
  width: 400px;
  height: auto;
  background: white;
  border-radius: 4px;
  padding: 20px 40px;
  margin: 0 auto;
}


.register-name {
  display: flex;
  align-items: center;
  line-height: 48px;
  margin-bottom: 20px;
}
.register-name img{
  display: block;
}
.register-name  span{
  font-size: 32px;
  color: #3B3D45;
  margin-left: 20px;
}

.menu-main {
  width: 420px;
  height: 504px;
  padding: 30px 30px 0;
  background: #FFF;
  border-radius: 4px;
  margin: 0 auto;
}

.menu-main .menu-reg{
  font-size: 32px;
  color: #3B3D45;
  font-weight: normal;
  margin: 0;
}
.menu-main .identity {
  margin-top: 20px;
  color: #707070;
}

.btn-reg {
  width: 100%;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn-reg img{
  display: block;
  width: 60px;
  height: 60px;
}

.btn-reg a{
  display: block;
  width: 330px;
  font-size: 16px;
  color: #fff;
  line-height: 64px;
  text-align: center;
  background: #32BAF0;
  border-radius: 4px;
}
</style>
