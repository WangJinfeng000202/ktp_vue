<template>
  <div class="bge">
    <div class="nav-default">
      <div class="nav-menu-left">
        <div><img src="../assets/registerBack.png" width="20" alt=""></div>
        <router-link :to="'/teacher/classInteract/'+ courseId" class="course-title">{{course.courseTitle}}</router-link>
      </div>
      <div class="nav">
        <router-link to="/detail/submit">成员</router-link>
        <router-link to="">学生分组</router-link>
        <router-link to="">成绩管理</router-link>
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
          <el-menu-item index="退出账户"><span @click="logout"><i class="el-icon-switch-button"></i>退出账户</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="main">
      <div style="width: 100%;height:auto;">
        <div class="main-top">
          <div class="main-top1">
            <el-button type="primary" style="width: 100px;height: 35px;">导入成员</el-button>
            <div class="main-top2">
              <i class="el-icon-bottom"></i>
              <span>下载成员信息</span>
            </div>
            <div class="main-top2">
              <i class="el-icon-notebook-2"></i>
              <span>成员退课记录</span>
            </div>
          </div>
          <div style="line-height: 60px;margin-left: 590px;">
            <el-input placeholder="姓名、学号" size="medium">
              <el-button slot="append" icon="el-icon-search">
              </el-button>
            </el-input>
          </div>
        </div>
        <div class="main-main">
          <div style="width:20%;height:600px;">
            <el-button :type="activeButtonTeachTeam" @click="showTeachTeam"
                       style="width: 100%;font-size: 18px;border-radius: 0;height: 55px;">教学团队
              ({{ teachers.length + 1 }})
            </el-button>
            <el-button :type="activeButtonStudentMem" @click="showStudentMembers"
                       style="width: 100%;font-size: 18px;margin: 0;border-radius: 0;height: 55px;">全部学生
              (学生{{ students.length }})
            </el-button>
          </div>
          <div v-show="teachTeamPage" class="memberList">
            <div class="memberListTop">
              <span style="float: left">教学团队 (老师{{ teachers.length + 1 }})</span>
              <el-button type="primary" style="width: 172px;font-size: 16px;height: 40px;float: right;margin-top: 10px;"
                         @click="addTeacher=true">
                <i class="el-icon-s-custom"></i>添加助教/老师
              </el-button>
            </div>
            <ul style="list-style: none;">
              <li class="Mli">
                <img :src="user.avatar" alt="" class="liImg">
                <p style="width: 300px;float: left;">{{ user.username }}</p>
                <div style="width: 300px;display: flex;flex-direction: row">
                  <p v-if="user.tel===null">{{ user.tel }}</p>
                  <p v-else>{{ user.mail }}</p>
                  <p style="margin-left: 20px">(管理员)</p>
                </div>
                <div style="margin-left: 100px;">
                  <i class="el-icon-chat-dot-round" style="font-size: 26px;line-height: 60px;"></i>
                  <i class="el-icon-more" style="font-size: 26px;line-height: 60px;margin-left: 20px;"></i>
                </div>
              </li>
              <li v-for="teacher of teachers" class="Mli">
                <img :src="teacher.avatar" alt="" class="liImg">
                <p style="width: 300px;float: left;">{{ teacher.username }}</p>
                <div style="width: 300px;display: flex;flex-direction: row">
                  <p v-if="teacher.tel===null">{{ teacher.tel }}</p>
                  <p v-else>{{ teacher.mail }}</p>
                  <p style="margin-left: 20px">(助教/老师)</p>
                </div>
                <div style="margin-left: 200px;">
                  <i class="el-icon-chat-dot-round" style="font-size: 26px;line-height: 60px;"></i>
                  <i class="el-icon-more" style="font-size: 26px;line-height: 60px;margin-left: 20px;"></i>
                </div>
              </li>
            </ul>
          </div>
          <div v-show="studentMembersPage" class="memberList">
            <div class="memberListTop">
              <span style="float: left">全部学生 (学生{{ students.length }})</span>
              <div style="float: right">
                <el-checkbox>人数限制</el-checkbox>
                <el-switch v-model="switchValue" active-text="不允许退课" style="margin-left: 20px;"></el-switch>
              </div>
            </div>
            <div class="memberListTop2">
              <el-checkbox style="margin-left: 20px;">本页全选 已选(0)人</el-checkbox>
              <el-button type="info" disabled style="margin-left: 50px;">删除成员</el-button>
              <el-button type="info" disabled>群发私信</el-button>
            </div>
            <ul style="list-style: none;">
              <li v-for="student of students" class="Mli">
                <el-checkbox style="margin-left: 20px;line-height: 60px"></el-checkbox>
                <div class="tb-im">
                  <img :src="student.avatar" alt="" class="liImg">
                  <p>{{ student.schoolId }}</p>
                  <p>{{ student.username }}</p>
                  <p> {{ student.tel==null?student.mail:student.tel }}</p>
                  <p>{{ student.gmtCreate }}</p>
                </div>
                <div style="margin-left: 100px;">
                  <i class="el-icon-chat-dot-round" style="font-size: 26px;line-height: 60px;"></i>
                  <i class="el-icon-more" style="font-size: 26px;line-height: 60px;margin-left: 20px;"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--加入课程对话框-->
    <el-dialog title="添加教师" :visible.sync="addTeacher" width="30%" center :close-on-click-modal="false">
      <el-input v-model="teacherAccount" type="text" placeholder="请输入待添加教师账号" style="font-size:12px"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addTeacher = false">取 消</el-button>
        <el-button type="primary" @click="addOtherTeacher">加 入</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getUserInfo, removeToken, removeUser, setToken, setUser } from '@/utils/auth'
import { getAllMembers } from '@/api/course/userCourse'
import courseApi from '@/api/course/course'

export default {
  name: 'Members',
  data () {
    return {
      user: {},
      addTeacher: false,
      teacherAccount: '',
      activeNavIndex: '成员',
      activeButtonTeachTeam: 'primary',
      teachTeamPage: true,
      studentMembersPage: '',
      activeButtonStudentMem: '',
      courseId: '',
      course: {},
      teachers: [],
      students: [],
      switchValue: true
    }
  },
  created () {
    this.user = JSON.parse(getUserInfo())
    this.courseId = this.$route.params.id
    this.course = this.getCourseDetailInfo(this.courseId)
    this.getMemberInfo()
  },
  methods: {
    showTeachTeam () {
      this.teachTeamPage = true
      this.studentMembersPage = false
      this.activeButtonTeachTeam = 'primary'
      this.activeButtonStudentMem = ''
    },
    showStudentMembers () {
      this.teachTeamPage = false
      this.studentMembersPage = true
      this.activeButtonTeachTeam = ''
      this.activeButtonStudentMem = 'primary'
    },
    addOtherTeacher () {
      this.$alert('未实现')
      this.addTeacher = false
    },
    getCourseDetailInfo (courseId) {
      courseApi.getDetailById(courseId)
        .then(res => {
          this.course = res.data.item
        })
        .catch(err => {
          this.$message.error(err.msg)
        })
    },
    getMemberInfo () {
      getAllMembers(this.courseId)
        .then(res => {
          const result = res.data
          this.students = result.students == null ? [] : result.students
          this.teachers = result.teachers == null ? [] : result.teachers
        })
        .catch(err => {
          this.$message.error(err.msg)
        })
    },
    logout () {
      removeToken()
      removeUser()
      this.$router.push({ path: '/' })
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

.nav-menu-left .course-title {
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

.nav a:first-child {
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

.main {
  height: auto;
  padding: 50px 140px 100px;
  z-index: 2;
  position: relative;
}


.main-top {
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 0 0 rgba(17, 17, 17, 0.21);
  display: flex;
  flex-direction: row;
}

.main-top1 {
  height: 100%;
  width: 400px;
  align-items: center;
  display: flex;
  flex-direction: row;
}

.main-top2 {
  width: 150px;
  height: 35px;
  line-height: 40px;
  margin-left: 20px;
}

.main-main {
  margin-top: 30px;
  width: 100%;
  height: 600px;
  border-radius: 8px;
  border: 1px solid rgba(226, 230, 237, 1);;
  display: flex;
  flex-direction: row;
}

.memberList {
  width: 80%;
  height: 600px;
  border-left: 1px solid rgba(226, 230, 237, 1);
  overflow: auto;
}

.memberListTop {
  width: 100%;
  height: 55px;
  background-color: rgba(242, 242, 242, 0.71);
  line-height: 55px;
}

.memberListTop2 {
  width: 100%;
  height: 55px;
  border-bottom: 1px solid rgba(226, 230, 237, 1);
  line-height: 55px;
}

ul li:hover {
  background-color: rgba(242, 242, 242, 0.71);
}

.Mli {
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  flex-direction: row;
}

.liImg {
  height: 40px;
  margin: 10px 20px;
  display: block;
  border-radius: 100%;
}

.tb-im {
  margin-left: 50px;
  display: flex;
  align-items: center;
}

.tb-im p{
  margin-left: 20px;
}
</style>
