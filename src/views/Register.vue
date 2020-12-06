<template>
  <div class="registerBack">
    <div class="back-ground">
      <div v-if="one">
        <h3 class="h3">注册账号</h3>
        <p class="p">请选择您在日常教学中的实际身份</p>
        <div class="choose">
          <a @click="teacherLogin" class="teacher">我是老师/助教</a>
          <a @click="studentLogin" class="student">我是学生</a>
        </div>
        <router-link to="/login" class="btn-login">
          <span class="str1">已有账号？</span>
          <span class="str2">去登录</span>
        </router-link>
      </div>
      <div v-if="teacher" class="teacherDiv">
        <div class="title clearfix" @click="previouseOne">
          <a class="return"></a>
          <h3 class="fl">老师/助教注册</h3>
        </div>
        <div class="padding-cont">
          <input type="text" v-model="userInfo.account" class="inputbox" placeholder="邮箱/手机">
          <input type="password" v-model="userInfo.password" class="inputbox" placeholder="密码">
          <input type="password" v-model="password" class="inputbox" placeholder="再次输入密码">
          <input type="text" v-model="userInfo.username" class="inputbox" placeholder="姓名">
          <input type="text" v-model="userInfo.school" class="inputbox" placeholder="学校">
          <div class="haveCode">
            <input type="text" class="inputbox1" placeholder="验证码">
            <div style="float: right;width: 35%;height: 42px;">
              <img alt="点击切换" src="../assets/registerIma/verify1.png" style="width: 100%;height: 100%"/>
            </div>
          </div>
        </div>
        <a href="javascript:;" @click="doRegister" class="btn-btn">注册为老师/助教</a>
        <router-link to="/login" class="btn-login">
          <span class="str1">已有账号？</span><span class="str2">去登录</span>
        </router-link>
      </div>

      <div v-if="student" class="studentDiv">

        <div class="title clearfix" @click="previouseOne">
          <a class="return"></a>
          <h3 class="fl2">学生注册</h3>
        </div>
        <div class="padding-cont">
          <input type="text" v-model="userInfo.account" class="inputbox" placeholder="邮箱/手机">
          <input type="password" v-model="userInfo.password" class="inputbox" placeholder="密码">
          <input type="password" v-model="password" class="inputbox" placeholder="再次输入密码">
          <input type="text" v-model="userInfo.username" class="inputbox" placeholder="姓名">
          <input type="text" v-model="userInfo.schoolId" class="inputbox" placeholder="学号">
          <input type="text" v-model="userInfo.school" class="inputbox" placeholder="学校">
          <div class="haveCode2">
            <input type="text" class="inputbox1" placeholder="验证码">
            <div style="float: right;width: 35%;height: 42px;">
              <img alt="点击切换" src="../assets/registerIma/verify1.png" style="width: 100%;height: 100%">
            </div>
          </div>
          <a href="javascript:;" @click="doRegister" class="btn-btn2">注册为学生</a>
          <router-link to="/login" class="btn-login">
            <span class="str1">已有账号？</span><span class="str2">去登录</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from '@/api/user/user'

export default {
  name: 'register',
  data () {
    return {
      one: true,
      teacher: false,
      student: false,
      mark: 0,
      password: '',
      userInfo: {}
    }
  },
  methods: {
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
      this.userInfo.identityRole = this.teacher ? '教师' : '学生'
      register(this.userInfo)
        .then(res => {
          this.$message.success(res.msg)
        })
        .catch(err => {
          this.$message.error(err.msg)
        })
    }
  }
}
</script>

<style scoped>

a {
  cursor: pointer;
}

.btn-btn {
  text-align: center;
  border-radius: 3px;
  color: #fff;
  display: block;
  margin-top: -7px;
  height: 48px;
  background: #32BAF0;
  line-height: 48px;
  font-size: 16px;
  text-decoration: none;
  width: 83%;
  margin-left: 33px;

}

.btn-btn2 {
  width: 100%;
  margin-left: 0px;
  text-align: center;
  border-radius: 3px;
  color: #fff;
  display: block;
  margin-top: -7px;
  height: 48px;
  background: #32BAF0;
  line-height: 48px;
  font-size: 16px;
  text-decoration: none;
}

.haveCode {
  width: 100%;
  height: 31px;
}

.haveCode2 {
  width: 100%;
  height: 77px;
}

.padding-cont {
  width: 82%;
  height: 333px;
  margin: -10px auto 0;

}

.inputbox {
  width: 91%;
  height: 50px;
  padding: 0 16px;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  margin-bottom: 9px;
  outline: none;
}

.inputbox1 {
  width: 52%;
  height: 31px;
  padding: 4px 13px;
  margin-bottom: 9px;
  outline: none;
}

.fl {
  margin-top: -30px;
  margin-left: 45px;
  line-height: 9px;
  font-size: 29px;
  color: #3B3D45;
  font-weight: 500;
}

.fl2 {
  margin-top: -30px;
  margin-left: 50px;
  line-height: 9px;
  font-size: 29px;
  color: #3B3D45;
  font-weight: 500;
}

.return {
  background: url("../assets/registerIma/returnReg.png");
  width: 40px;
  height: 40px;
  display: inline-block;
  margin-right: 90%
}

.str2 {
  color: #32BAF0;
}

.str1 {
  color: #AFB1B3;
}

.btn-login {
  padding: 12px 26px;
  text-align: right;
  display: block;
  text-decoration: none;
}

.h3 {
  text-align: left;
  padding: 0 29px;
  font-size: 32px;
  font-weight: 400;
}

.p {
  margin-top: -7px;
  color: rgb(112, 112, 112);
  text-align: left;
  font-size: 12px;
  padding: 0 30px;
}

.student {
  display: block;
  width: 68%;
  font-size: 16px;
  color: #fff;
  line-height: 57px;
  text-align: center;
  background: #32BAF0;
  margin-left: 90px;
  border-radius: 3px;
  margin-top: -10px;
}

.student::before {
  background: url("../assets/registerIma/student.png");
  content: '';
  position: absolute;
  left: 29px;
  top: 258px;
  width: 58px;
  height: 60px;
}

.teacher {
  display: block;
  width: 68%;
  font-size: 16px;
  color: #fff;
  line-height: 57px;
  text-align: center;
  background: #32BAF0;
  margin-left: 88px;
  border-radius: 3px;
  margin-bottom: 64px;
  margin-top: -19px;

}

.teacher::before {
  background: url("../assets/registerIma/teacher.png");
  content: '';
  position: absolute;
  left: 26px;
  top: 147px;
  width: 60px;
  height: 60px;

}

.choose {
  margin-top: 70px;
  margin-left: 15px;
}

.registerBack {
  background: url("../assets/registerIma/register.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.back-ground {
  width: 25%;
  height: 53%;
  background: white;
  margin-top: 7%;
  position: absolute;
  margin-left: 36%;
  border-radius: 4px;
  margin-right: auto;
}

.teacherDiv {
  width: 100%;
  height: 470px;
  background: white;
  margin-top: -12%;
  position: absolute;
  margin-left: 0%;
  border-radius: 4px;
  margin-right: auto;
  padding: 25px;
}

.studentDiv {
  width: 100%;
  height: 520px;
  background: white;
  margin-top: -16%;
  position: absolute;
  margin-left: 0%;
  border-radius: 4px;
  margin-right: auto;
  padding-top: 20px;
}

</style>
