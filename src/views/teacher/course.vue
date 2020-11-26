<template>
  <div class="bge">
    <div class="nav-default">
      <el-menu class="nav-menu-left" mode="horizontal" menu-trigger="click" router>
        <el-menu-item><i class="el-icon-s-fold"></i></el-menu-item>
        <el-menu-item>
          <router-link to="/TeacherMain/ClassListPage" style="text-decoration: none;">课堂</router-link>
        </el-menu-item>
      </el-menu>
      <span style="line-height: 65px;">{{ course.courseTitle }}  {{ course.className }}</span>
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
          <template slot="title"><img :src="user.avatar" alt="" title=""
                                      style="width: 30px; height: 30px;border-radius: 50%;"></template>
          <el-menu-item index="开通VIP"><i class="el-icon-shopping-cart-2"></i>开通VIP</el-menu-item>
          <el-menu-item index="机构账号绑定"><i class="el-icon-s-promotion"></i>机构账号绑定</el-menu-item>
          <el-menu-item index="个人设置"><i class="el-icon-s-tools"></i>个人设置</el-menu-item>
          <el-menu-item index="邀请记录"><i class="el-icon-notebook-2"></i>邀请记录</el-menu-item>
          <el-menu-item index="退出账户"><i class="el-icon-switch-button"></i>退出账户</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="course">
      <div :style="{backgroundImage:'url(' + course.cover + ')'}" class="top">
        <a class="selectTheme">更改背景</a><br>
        <div style="width: 100%;height: 131px;margin-top:30px">
          <h1 style="font-weight: 500;color: #fff;font-size: 30px;">
            {{ course.courseTitle }}
            <i class="el-icon-edit-outline" style="padding-left: 10px;font-size: 25px"></i>
          </h1>
          <h2 style="font-weight: 500;color: #fff;font-size: 15px;padding-top: 5px">{{ course.className }}</h2>

          <div class="seleBox">
            <div class="sele">
              <div class="erweima"></div>
              加课二维码
            </div>
            <div class="sele">
              <el-dropdown trigger="click" class="infotextmain">
                <span style="cursor: pointer;">加课码：{{ course.courseCode }}<i
                  class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>停用</el-dropdown-item>
                  <el-dropdown-item>重置</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="sele">
              <i class="el-icon-user" style="width: 24px;height: 24px;line-height:24px;background-size: 16px;"></i>
              <router-link :to="{path:'/members',query:{courseId: course.id}}" style="text-decoration: none;">
                <div class="infotextmain">成员 {{ course.memberNum }} 人</div>
              </router-link>
            </div>
            <div class="sele">
              <i class="el-icon-s-data"
                 style="color:white;width: 24px;height: 24px;line-height:24px;background-size: 16px;"></i>数据分析
            </div>
            <div class="sele">
              <div class="grade"></div>
              成绩管理
            </div>
            <div class="courseDataBox">
              <div class="courseDataBoxSon">
                <span style="font-size: 40px;padding-left: 10px">0</span>
                <span style="font-size: 12px;">互动个数</span>
              </div>
              <div class="courseDataBoxSon">
                <span style="font-size: 40px;padding-left: 10px">{{ course.assignmentNum }}</span>
                <span style="font-size: 12px;">发布作业</span>
              </div>
              <div class="courseDataBoxSon">
                <span style="font-size: 40px;padding-left: 10px">0</span>
                <span style="font-size: 12px;">发布测试</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="topNav">
        <el-menu :default-active="activeNavIndex" mode="horizontal" menu-trigger="click" router class="topNavDefault">
          <el-menu-item index="课堂互动" :route="'/teacher/classInteract/'+courseId">课堂互动</el-menu-item>
          <el-menu-item index="作业" :route="'/teacher/assignment/'+courseId">作业</el-menu-item>
          <el-menu-item index="话题" disabled>话题</el-menu-item>
          <el-menu-item index="资料" disabled>资料</el-menu-item>
          <el-menu-item index="测试(考试)" disabled>测试(考试)</el-menu-item>
          <el-menu-item index="公告" disabled>公告</el-menu-item>
        </el-menu>
      </div>
      <div style="width:100%;height:auto;margin-top:100px">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import courseApi from "@/api/course/course"
import {mapGetters} from 'vuex'

export default {
  name: "Course",
  data() {
    return {
      activeNavIndex: '课堂互动',
      courseId: '',
      user: {},
      course: {},
      homeworkNum: '',
    };
  },
  created() {
    this.user = this.getUserInfo()
    this.courseId = this.$route.params.id
    this.getCourseDetailInfo(this.courseId)
  },
  methods: {
    ...mapGetters(['getUserInfo']),
    getCourseDetailInfo(courseId) {
      courseApi.getDetailById(courseId)
        .then(res => {
          this.course = res.data.data.item
        })
        .catch(err => {
          this.$message.error(err.msg)
        })
    }
  }
}
</script>

<style scoped>
.bge {
  height: 100%;
  min-height: 600px;
  position: relative;
  background: #fff;
  margin: 0;
  padding: 0;
}

.nav-default {
  background-color: #fff;
  position: fixed;
  padding: 0;
  width: 100%;
  height: 72px;
  z-index: 8;
  box-sizing: border-box;
}

.nav-menu-left {
  color: #5f6368;
  float: left;
  margin-left: 30px;
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
  height: 100%;
}

.course {
  width: 1220px;
  height: auto;
  padding: 85px 10% 100px;
  z-index: 2;
  position: relative;
}

.top {
  width: 100%;
  background-size: cover;
  height: 200px;
  border-radius: 8px 8px 0 0;
  box-sizing: border-box;
  padding-left: 40px;
}

.topNav {
  width: 1180px;
  height: 72px;
  padding-left: 40px;
  background-color: #F1F3F4;
  border-radius: 0 0 8px 8px;
  position: absolute;
}

.topNavDefault {
  height: 100%;
  background-color: #F1F3F4;
}

.topNavDefault .el-menu-item {
  border-bottom: 4px solid #2C58AB;
}

.selectTheme {
  color: #FFF;
  background: url(../../assets/courseDetail/theme.png) 0 no-repeat;
  right: 15px;
  top: 15px;
  float: right;
  padding-left: 30px;
  cursor: pointer;
  position: relative;
}

.seleBox {
  width: 100%;
  height: auto;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  position: relative;
}

.sele {
  font-size: 12px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 5px;
  cursor: pointer;
  background-color: #83abdf;
  border-radius: 2px;
  margin-right: 15px;
}

.erweima {
  background: url(../../assets/courseDetail/qrcodehover.png) center no-repeat;
  width: 24px;
  height: 24px;
  background-size: 16px;
}

.grade {
  background: url(../../assets/courseDetail/A+.png) center no-repeat;
  width: 24px;
  height: 24px;
  background-size: 16px;
}

.infotextmain {
  display: inline-block;
  color: #fff;
  font-size: 12px;
  line-height: 24px;
}

.courseDataBox {
  position: absolute;
  right: 65px;
  bottom: 0;
  height: auto;
  width: auto;
  margin-left: 250px;
  display: flex;
  flex-direction: row;
}

.courseDataBoxSon {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  color: white;
}
</style>
