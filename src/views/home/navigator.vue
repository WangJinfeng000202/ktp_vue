<template>
  <div style="background-color: #272e38">
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#272e38"
        text-color="#fff"
        active-text-color="#ffd04b"
        id="top">
      <el-menu-item style="margin-left: 30px" index="2"><img src="@/assets/HomeImage1/top1.png" alt=""/></el-menu-item>
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="3"><img src="@/assets/HomeImage1/top2.png" style="width: 80px" alt=""/></el-menu-item>
      <el-menu-item index="4">渠道合作</el-menu-item>
      <el-submenu index="5">
        <template slot="title">解决方案</template>
        <el-menu-item index="5-1">申请机构版</el-menu-item>
        <el-menu-item index="5-2">本地化部署</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">帮助中心</el-menu-item>
      <el-submenu index="7">
        <template slot="title">更多</template>
        <el-menu-item index="7-1">会员权益</el-menu-item>
        <el-menu-item index="7-2">产品动态</el-menu-item>
      </el-submenu>
      <el-menu-item index="8">试用新版</el-menu-item>
      <el-menu-item class="lg-btn">
        <template v-if="!token">
          <el-button plain style="color: #fff;background-color: transparent" @click="login()">登录</el-button>
          <el-button type="primary" style="color: #fff" @click="register()">注册</el-button>
        </template>
        <template v-else>
          <router-link class="course-title" to="/Main">进入课堂</router-link>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'

export default {
  name: 'navigator',
  data () {
    return {
      token: '',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  created () {
    this.token = getToken()
  }
  ,
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    login () {
      this.$router.push({ path: '/login' })
    },

    register () {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
}

.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.lg-btn {
  position: absolute;
  right: 40px;
}
.course-title {
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
</style>
