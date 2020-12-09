<template>
  <div class="bge">
    <div class="nav-default">
      <img class="logo" @click="toMain" src="../assets/logo-mainblue.png" alt="">
      <el-menu :default-active="activeNavIndex" class="nav-menu-left" mode="horizontal" menu-trigger="click" router>
        <el-menu-item index="课堂" route="/TeacherMain">课堂</el-menu-item>
        <el-menu-item index="备课区">备课区</el-menu-item>
        <el-menu-item index="精品慕课">精品慕课</el-menu-item>
        <el-menu-item index="我的精品">我的精品</el-menu-item>
        <el-menu-item index="双选会">双选会</el-menu-item>
        <el-menu-item index="论文管理">论文管理</el-menu-item>
      </el-menu>
      <el-menu mode="horizontal" menu-trigger="click" class="nav-menu-right">
        <el-submenu index="工具">
          <template slot="title"><i class="el-icon-s-tools"></i>工具</template>
          <el-menu-item index="论文查重"><i class="el-icon-document-copy"></i>论文查重</el-menu-item>
          <el-menu-item index="学术存证"><i class="el-icon-star-off"></i>学术存证</el-menu-item>
          <el-menu-item index="邀请教师"><i class="el-icon-user"></i>邀请教师</el-menu-item>
        </el-submenu>
        <el-menu-item index="消息通知" style="margin: 0"><i class="el-icon-bell"></i></el-menu-item>
        <el-submenu index="用户设置">
          <template slot="title">
            <img :src="user.avatar" alt="" :title="user.username" style="width: 30px; height: 30px;border-radius: 50%;">
          </template>
          <el-menu-item index="开通VIP"><i class="el-icon-shopping-cart-2"></i>开通VIP</el-menu-item>
          <el-menu-item index="机构账号绑定"><i class="el-icon-s-promotion"></i>机构账号绑定</el-menu-item>
          <el-menu-item index="个人设置"><i class="el-icon-s-tools"></i>个人设置</el-menu-item>
          <el-menu-item index="邀请记录"><i class="el-icon-notebook-2"></i>邀请记录</el-menu-item>
          <el-menu-item index="退出账户"><span @click="logout"><i class="el-icon-switch-button"></i>退出账户</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>

import user from '@/api/user/user'
import { removeToken, removeUser, setToken, setUser } from '@/utils/auth'

export default {
  components: {},
  name: 'home',
  data () {
    return {
      user: {},
      activeNavIndex: '课堂',
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      user.showUserInfo()
        .then(res => {
          this.user = res.data.userInfo
          setUser(JSON.stringify(this.user))
          this.$router.push({path:'/Main/index'})
        })
        .catch(err => {
          this.$message.error(err.msg)
        })
    },
    logout () {
      removeToken()
      removeUser()
      this.$router.push({ path: '/' })
    },
    toMain () {
      this.$router.push({ path: '/Main/index' })
    }
  }
}
</script>

<style scoped>
.bge {
  height: 100%;
  min-height: 600px;
  /*position: relative;*/
  background: #fff;
  margin: 0;
  padding: 0;
}

.nav-default {
  background-color: #fff;
  color: #FFF;
  position: fixed;
  padding: 0;
  width: 100%;
  height: 72px;
  z-index: 2;
  box-sizing: border-box;
  box-shadow: 0 0 5px #ccc;
}

.nav-menu-left {
  margin-left: 0;
  margin-top: 11px;
  padding: 0 4%;
  float: left;
  border-bottom: none;
}

.nav-menu-right {
  margin-right: 0;
  margin-top: 11px;
  padding: 0 4%;
  float: right;
  border-bottom: none;
}

.el-menu-item {
  font-size: 16px;
  padding: 0 10px;
  margin-right: 20px;
}

.nav-menu-left .el-menu-item {
  border-bottom: 4px solid #2C58AB;
}

.logo {
  cursor: pointer;
  height: 20px;
  float: left;
  margin-top: 30px;
  margin-left: 70px;
}
</style>
