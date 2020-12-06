<template>
  <div>
    <div class="nav-default">
      <div class="nav-menu-left">
        <div><img src="../../assets/registerBack.png" width="20" alt=""></div>
        <router-link to="/Main/index" class="course-title">算法分析与设计</router-link>
      </div>
      <div class="nav">
        <router-link to="/detail/submit">提交作业</router-link>
        <router-link to="">作业讨论</router-link>
      </div>
      <el-menu mode="horizontal" menu-trigger="click" class="nav-menu-right">
        <el-submenu index="工具">
          <template slot="title"><img src="@/assets/courseDetail/tool_icon.png" alt=""
                                      style="width: 30px; height: 30px;border-radius: 50%;"> 工具
          </template>
          <el-menu-item index="论文查重"><i class="el-icon-document-copy"></i>论文查重</el-menu-item>
          <el-menu-item index="学术存证"><i class="el-icon-star-off"></i>学术存证</el-menu-item>
          <el-menu-item index="邀请教师"><i class="el-icon-user"></i>邀请教师</el-menu-item>
        </el-submenu>
        <el-menu-item index="消息通知" style="margin: 0"><i class="el-icon-bell"></i></el-menu-item>
        <el-submenu index="用户设置">
          <template slot="title"><img :src="user.avatar" alt="" :title="user.username"
                                      style="width: 30px; height: 30px;border-radius: 50%;"></template>
          <el-menu-item index="开通VIP"><i class="el-icon-shopping-cart-2"></i>开通VIP</el-menu-item>
          <el-menu-item index="机构账号绑定"><i class="el-icon-s-promotion"></i>机构账号绑定</el-menu-item>
          <el-menu-item index="个人设置"><i class="el-icon-s-tools"></i>个人设置</el-menu-item>
          <el-menu-item index="邀请记录"><i class="el-icon-notebook-2"></i>邀请记录</el-menu-item>
          <el-menu-item index="退出账户"><i class="el-icon-switch-button"></i>退出账户</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div style="padding-top: 40px;"><router-view/></div>
  </div>
</template>

<script>

import { getUserInfo } from '@/utils/auth'
import { getCourseById } from '@/api/course/course'

export default {
  name: 'submitWork',
  data () {
    return {
      course:{},
      user:{}
    }
  },
  components: {},
  created () {
    this.user = JSON.parse(getUserInfo())
  },
  methods: {
    //获取课程信息
    getCourseInfo () {
      getCourseById()
        .then(res => {
          this.course = res.data.item
        })
        .catch(err => {
          this.$message.error(err.msg)
        })
    },

  }
}
</script>

<style scoped>
.nav-default {
  background-color: #fff;
  padding: 0;
  width: 100%;
  height: 72px;
  z-index: 8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}

.nav-menu-left {
  color: #5f6368;
  margin-left: 30px;
  display: flex;
  align-items: center;
  border-bottom: none;
}
.nav-menu-left .course-title{
  color: #FFF;
  line-height: 32px;
  vertical-align: middle;
  margin-left: 14px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 32px;
  border-radius: 16px;
  font-size: 14px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  padding: 0 10px;
  min-width: 80px;
  text-align: center;
  background-color: #2c58ab;
  text-decoration: none;
}

.nav a {
  display: inline-block;
  min-width: 80px;
  text-align: center;
  font-size: 16px;
  height: 67px;
  line-height: 70px;
  /* color: #DCDCDC; */
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 20px;
  font-weight: 400;
  color: rgba(95, 99, 104, 1);
  text-decoration: none;
}

.nav a:first-child{
  border-bottom: 4px solid #2C58AB;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  /* color: #FFF; */
  font-size: 16px;
  font-weight: 500;
  color: rgba(59, 61, 69, 1);
}

.nav-menu-right {
  margin-right: 0;
  margin-top: 11px;
  padding: 0 4%;
  border-bottom: none;
}
</style>
