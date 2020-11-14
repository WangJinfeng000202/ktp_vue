<template>
  <div class="app-container">
    <div class="main">
      <!-- 创建/加入课程;发布活动按钮-->
      <div style="float: right;">
        <el-dropdown trigger="click">
          <el-button type="primary" size="medium">+ 创建/加入课程</el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><span @click="popCreateCourseForm">创建课程</span></el-dropdown-item>
            <el-dropdown-item><span @click="popJoinCourse">加入课程</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        &nbsp;
        <el-button type="primary" size="medium">+ 快速发布活动</el-button>
      </div>
      <!-- 课程排序/归档管理按钮-->
      <div class="sortAndGuiDang">
        <span style="cursor: pointer;"><i class="el-icon-sort"></i>课程排序</span>
        &nbsp; &nbsp; <span style="cursor: pointer;"><i class="el-icon-files"></i>归档管理</span>
      </div>
    </div>
    <!--置顶课程-->
    <el-divider content-position="left">置顶课程</el-divider>
    <div class="course-top">
      <!--创建的置顶课程-->
      <div class="course" v-for="(course) in courseCreatedAndIsTop">
        <div class="teach">
          <div class="symbol">教</div>
          <div class="tri"></div>
        </div>
        <div :style="{backgroundImage:'url('+course.miniCover+')'}" class="fulImg">
          <div class="title-name">
            <a class="course-title" href="#">{{ course.courseTitle }}</a><br/>
            <span class="class-name">{{ course.className }}</span><br/>
          </div>
          <div>
            <el-dropdown trigger="click" class="invite-code">
          <span style="cursor: pointer">
            <img style="width: 15px;height: 15px;vertical-align: middle" src="@/assets/course/二维码.png" alt="">
          <span> 加课码：{{ course.courseCode }}<i class="el-icon-arrow-down"></i></span>
          </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>停用</el-dropdown-item>
                <el-dropdown-item>重置</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span class="year-semester">
         {{ course.schoolYear }}
          <br/>
            {{ course.semester === 0 ? '不限' : course.semester === 1 ? '第一学期' : '第二学期' }}
        </span>
          </div>
        </div>
        <div class="recent-ass">
          <li class="ass-tip">近期作业</li>
          <li v-for="(item) in course.assignmentVos">
            <a class="ass-title">{{ item.assignmentTitle }}</a>
          </li>
          <template>
            <li v-if="course.assignmentVos.length===0">无</li>
          </template>
        </div>
        <div class="course-foot">
        <span><img class=" avatar el-avatar--small el-avatar--circle"
                   src="https://ktp123.oss-cn-beijing.aliyuncs.com/cover/35.png" alt="">
        </span>
          <span style="font-size: 12px;margin-left: 10px">成员{{ course.userVos.length }}人</span>
          <span @click="topOrNotCourse(course)" class="is-top">{{ course.isTop === 0 ? '取消置顶' : '置顶' }}</span>
          <el-dropdown trigger="click" placement="top-end">
            <span class="more-op">更多<img src="@/assets/course/more.png" alt=""></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><span @click="popUpdateCourseForm(course.id)">编辑</span></el-dropdown-item>
              <el-dropdown-item><span @click="popRemoveCourseDialog(course)">删除</span></el-dropdown-item>
              <el-dropdown-item><span>归档</span></el-dropdown-item>
              <el-dropdown-item>复制课程</el-dropdown-item>
              <el-dropdown-item>打包下载</el-dropdown-item>
              <el-dropdown-item>转让</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <!--加入的置顶课程-->
      <div class="course" v-for="(course) in courseJoinedAndIsTop">
        <div class="teach">
          <div class="symbol">学</div>
          <div class="tri"></div>
        </div>
        <div :style="{backgroundImage:'url('+course.miniCover+')'}" class="fulImg">
          <div class="title-name">
            <a class="course-title" href="#">{{ course.courseTitle }}</a><br/>
            <span class="class-name">{{ course.className }}</span><br/>
          </div>
          <div>
        <span class="invite-code">
          <img style="width: 15px;height: 15px;vertical-align: middle" src="@/assets/course/二维码.png" alt="">
          <span style="cursor: pointer;"> 加课码：{{ course.courseCode }}</span>
        </span>
            <span class="year-semester">
         {{ course.schoolYear }}
          <br/>
         {{ course.semester === 0 ? '不限' : course.semester === 1 ? '第一学期' : '第二学期' }}
        </span>
          </div>
        </div>
        <div class="recent-ass">
          <li class="ass-tip">近期作业</li>
          <li v-for="(item) in course.assignmentVos">
            <a class="ass-title">{{ item.assignmentTitle }}</a>
          </li>
          <template>
            <li v-if="course.assignmentVos.length===0">无</li>
          </template>
        </div>
        <div class="course-foot">
        <span><img class=" avatar el-avatar--small el-avatar--circle"
                   :src="course.userVo.avatar" alt="">
        </span>
          <span style="font-size: 12px;margin-left: 10px">userVo.username</span>
          <span class="is-top">{{ course.isTop === 0 ? '取消置顶' : '置顶' }}</span>
          <el-dropdown trigger="click" placement="top-end">
            <span class="more-op">更多<img src="@/assets/course/more.png" alt=""></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><span>归档</span></el-dropdown-item>
              <el-dropdown-item><span>退课</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <!--占位样式-->
      <no-course v-for=" (i) in (5-(courseCreatedAndIsTop.length + courseJoinedAndIsTop.length)%5)" :key="i"/>
    </div>
    <el-divider content-position="left">其他课程</el-divider>
    <div class="course-top">
      <!--创建的非置顶课程-->
      <div class="course" v-for="(course) in courseCreatedAndIsNotTop">
        <div class="teach">
          <div class="symbol">教</div>
          <div class="tri"></div>
        </div>
        <div :style="{backgroundImage:'url('+course.miniCover+')'}" class="fulImg">
          <div class="title-name">
            <a class="course-title" href="#">{{ course.courseTitle }}</a><br/>
            <span class="class-name">{{ course.className }}</span><br/>
          </div>
          <div>
            <el-dropdown trigger="click" class="invite-code">
          <span style="cursor: pointer">
            <img style="width: 15px;height: 15px;vertical-align: middle" src="@/assets/course/二维码.png" alt="">
          <span> 加课码：{{ course.courseCode }}<i class="el-icon-arrow-down"></i></span>
          </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>停用</el-dropdown-item>
                <el-dropdown-item>重置</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span class="year-semester">
         {{ course.schoolYear }}
          <br/>
            {{ course.semester === 0 ? '不限' : course.semester === 1 ? '第一学期' : '第二学期' }}
        </span>
          </div>
        </div>
        <div class="recent-ass">
          <li class="ass-tip">近期作业</li>
          <li v-for="(item) in course.assignmentVos">
            <a class="ass-title">{{ item.assignmentTitle }}</a>
          </li>
          <template>
            <li v-if="course.assignmentVos.length===0">无</li>
          </template>
        </div>
        <div class="course-foot">
        <span><img class=" avatar el-avatar--small el-avatar--circle"
                   src="https://ktp123.oss-cn-beijing.aliyuncs.com/cover/35.png" alt="">
        </span>
          <span style="font-size: 12px;margin-left: 10px">成员{{ course.userVos.length }}人</span>
          <span @click="topOrNotCourse(course)" class="is-top">{{ course.isTop === 0 ? '取消置顶' : '置顶' }}</span>

          <el-dropdown trigger="click" placement="top-end">
            <span class="more-op">更多<img src="@/assets/course/more.png" alt=""></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><span @click="popUpdateCourseForm(course.id)">编辑</span></el-dropdown-item>
              <el-dropdown-item><span>删除</span></el-dropdown-item>
              <el-dropdown-item><span>归档</span></el-dropdown-item>
              <el-dropdown-item>复制课程</el-dropdown-item>
              <el-dropdown-item>打包下载</el-dropdown-item>
              <el-dropdown-item>转让</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <!--加入的非置顶课程-->
      <div class="course" v-for="(course) in courseJoinedAndIsNotTop">
        <div class="teach">
          <div class="symbol">学</div>
          <div class="tri"></div>
        </div>
        <div :style="{backgroundImage:'url('+course.miniCover+')'}" class="fulImg">
          <div class="title-name">
            <a class="course-title" href="#">{{ course.courseTitle }}</a><br/>
            <span class="class-name">{{ course.className }}</span><br/>
          </div>
          <div>
        <span class="invite-code">
          <img style="width: 15px;height: 15px;vertical-align: middle" src="@/assets/course/二维码.png" alt="">
          <span style="cursor: pointer;"> 加课码：{{ course.courseCode }}</span>
        </span>
            <span class="year-semester">
         {{ course.schoolYear }}
          <br/>
         {{ course.semester === 0 ? '不限' : course.semester === 1 ? '第一学期' : '第二学期' }}
        </span>
          </div>
        </div>
        <div class="recent-ass">
          <li class="ass-tip">近期作业</li>
          <li v-for="(item) in course.assignmentVos">
            <a class="ass-title">{{ item.assignmentTitle }}</a>
          </li>
          <template>
            <li v-if="course.assignmentVos.length===0">无</li>
          </template>
        </div>
        <div class="course-foot">
        <span><img class=" avatar el-avatar--small el-avatar--circle"
                   :src="course.userVo.avatar" alt="">
        </span>
          <span style="font-size: 12px;margin-left: 10px">userVo.username</span>
          <span class="is-top">{{ course.isTop === 0 ? '取消置顶' : '置顶' }}</span>
          <span class="more-op">更多<img src="@/assets/course/more.png" alt=""></span>
        </div>
      </div>
      <!--占位样式-->
      <no-course v-for=" (i) in (5-(courseCreatedAndIsNotTop.length + courseJoinedAndIsNotTop.length)%5)" :key="i"/>
    </div>

    <!--对话框-->
    <!--新建/修改课程窗口-->
    <el-dialog :title="createOrUpdateTitle" :visible.sync="dialogFormVisible" append-to-body>
      <el-form :model="createCourseForm">
        <el-form-item label="课程名称" :label-width="formLabelWidth">
          <el-input v-model="createCourseForm.courseTitle" placeholder="请输入课程名称"/>
        </el-form-item>
        <el-form-item label="班级名称" :label-width="formLabelWidth">
          <el-input v-model="createCourseForm.className" placeholder="请输入班级名称（选填）"/>
        </el-form-item>
        <el-form-item label="选择日期" :label-width="formLabelWidth">
          <el-select v-model="createCourseForm.schoolYear">
            <el-option v-for="(item,index) in schoolYear" :key="index" :label="item" :value="item"/>
          </el-select>
          <el-select v-model="createCourseForm.semester">
            <el-option label="不限" :value="0"/>
            <el-option label="第一学期" :value="1" checked/>
            <el-option label="第二学期" :value="2"/>
          </el-select>
        </el-form-item>
        <el-form-item label="其他" :label-width="formLabelWidth">
          <span style="font-size: 12px;">学生必须额外填写下列信息才能加入课程</span><br>
          <el-checkbox label="自然班级" name="type"></el-checkbox>
          <el-checkbox label="年级" name="type"></el-checkbox>
          <el-checkbox label="入学年月" name="type"></el-checkbox>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="createOrUpdateCourse">确 定</el-button>
      </div>
    </el-dialog>
    <!--加入课程对话框-->
    <el-dialog title="加入课程" :visible.sync="joinCourseDialogVisible" width="20%" :append-to-body="true">
      <el-input v-model="joinCourseCode" type="text" placeholder="请输入课程加课验证码" style="font-size:12px"/>
      <span slot="footer" class="dialog-footer" style="background-color: #f5f5f5">
          <el-button @click="joinCourseDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="joinCourse">加 入</el-button>
        </span>
    </el-dialog>
    <!--删除课程对话框-->
    <el-dialog :visible.sync="removeCourseDialog" :append-to-body="true" width="30%">
      <span class="remove-dialog-title">确定要删除”<span class="remove-title">{{ removeCourseTitle }}</span>“么？</span>
      <br/><br>
      您的这个课程的任何信息或评论将被永久删除<br/><br>
      <span style="color: red">警告：此操作无法撤销</span><br/><br/>
      <span style="color: blue">提醒：已用课程包含了“删除课程数”</span><br><br>
      <div slot="footer" class="dialog-footer">
        <el-button @click="removeCourseDialog = false">取 消</el-button>
        <el-button type="primary" @click="removeCourse">删 除</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>

import courseApi from '@/api/course/course'
import noCourse from '@/components/noCourse'

export default {
  name: 'courseList',
  components: {noCourse},

  data() {
    return {
      userId: 'string',
      // 加入课程对话框
      joinCourseDialogVisible: false,
      // 加入课程加课码
      joinCourseCode: '',
      joinIdentifyRole: '学生',

      // 创建或修改信息
      dialogFormVisible: false,
      createOrUpdateTitle: '',
      currentSchoolYear: '',
      formLabelWidth: '120px',
      createCourseForm: {
        courseTitle: '',
        className: '',
        schoolYear: '',
        semester: 1
      },
      schoolYear: [],

      //删除课程或退课
      removeCourseTitle: '',
      removeCourseDialog: false,
      removeCourseId: '',

      // 创建的置顶课程
      courseCreatedAndIsTop: [],
      // 创建的非置顶课程
      courseCreatedAndIsNotTop: [],
      // 加入的置顶课程
      courseJoinedAndIsTop: [],
      // 加入的非置顶课程
      courseJoinedAndIsNotTop: []
    }
  },
  created() {
    this.getAllCourse(this.userId)
    this.generateSchoolYear()
  },
  methods: {

    removeCourse() {
      courseApi.removeCourseCreated(this.removeCourseId)
        .then(res => {
          this.$message.success(res.data.msg)
          this.removeCourseDialog = false
          this.getAllCourse(this.userId)

        }).catch(err => {
        this.$message.error(err.msg)
      })
    },

    popRemoveCourseDialog(course) {
      this.removeCourseDialog = true
      this.removeCourseId = course.id
      this.removeCourseTitle = course.courseTitle
    },

    /*
    * 置顶或取消置顶
    * */
    topOrNotCourse(course) {
      if (course.isTop === 0) { // 置顶课程取消置顶
        courseApi.notTopCourse(course.id)
          .then(res => {
            this.getAllCourse(this.userId)
            this.$message.success(res.data.msg)
          })
          .catch(err => {
            this.$message.error(err.msg)
          })
      } else { // 非置顶课程置顶
        courseApi.topCourse(course.id)
          .then(res => {
            this.getAllCourse(this.userId)
            this.$message.success(res.data.msg)
          })
          .catch(err => {
            this.$message.error(err.msg)
          })
      }
    },

    /* 创建或修改课程 */
    createOrUpdateCourse() {
      this.createCourseForm.userId = this.userId
      if (this.createCourseForm.id) { // 如果存在id则执行修改
        courseApi.updateCourse(this.createCourseForm)
          .then(res => {
            this.$message.success(res.data.msg)
            this.dialogFormVisible = false
            this.getAllCourse(this.userId)
          })
          .catch(err => {
            this.$message.error(err.msg)
          })
      } else { // 不存在id则执行添加方法
        courseApi.createCourse(this.createCourseForm)
          .then(res => {
            this.$message.success(res.data.msg)
            this.dialogFormVisible = false
            this.getAllCourse(this.userId)
          })
          .catch(err => {
            this.$message.error(err.msg)
          })
      }
    },

    /* 弹出课程创建 */
    popCreateCourseForm() {
      this.createOrUpdateTitle = '创建课程'
      this.dialogFormVisible = true
      this.createCourseForm = {}
      this.createCourseForm.schoolYear = this.currentSchoolYear
      this.createCourseForm.semester = 1
    },
    /* 弹出编辑课程 */
    popUpdateCourseForm(courseId) {
      this.createOrUpdateTitle = '编辑课程'
      this.dialogFormVisible = true
      courseApi.getById(courseId)
        .then(res => {
          this.createCourseForm = res.data.data.item
        }).catch(err => {
        this.$message.error(err.msg)
      })
    },

    /* 生成学年 */
    generateSchoolYear() {
      const schoolYear = []
      const currentYear = new Date().getFullYear()
      const maxYear = currentYear + 3
      const minYear = currentYear - 10
      for (let i = minYear; i < maxYear; i++) {
        schoolYear.push(i + '-' + (i + 1))
      }
      this.schoolYear = schoolYear
      this.currentSchoolYear = currentYear + '-' + (currentYear + 1)
    },

    /* 加入课程弹窗 */
    popJoinCourse() {
      this.joinCourseDialogVisible = true
      this.joinCourseCode = ''
    },

    /* 加入课程 */
    joinCourse() {
      this.joinCourseDialogVisible = false
      const joinCourseInfo = {}
      joinCourseInfo.userId = this.userId
      joinCourseInfo.courseCode = this.joinCourseCode
      joinCourseInfo.identityRole = this.joinIdentifyRole
      console.log(joinCourseInfo)
      courseApi.joinCourse(joinCourseInfo)
        .then(res => {
          this.$message.success(res.data.msg)
        }).catch(err => {
        this.$message.error(err.data.msg)
      })
    },

    /*
    * 获取所有课程
    * */
    getAllCourse(userId) {
      courseApi.getAllMyCourse(userId)
        .then(res => {
          this.courseCreatedAndIsTop = res.data.data.items1
          this.courseCreatedAndIsNotTop = res.data.data.items2
          this.courseJoinedAndIsTop = res.data.data.items3
          this.courseJoinedAndIsNotTop = res.data.data.items4
        }).catch(err => {
        this.$message.error('数据加载失败')
      })
    }
  }

}
</script>

<style scoped>
.app-container {
  height: 100%;
  overflow: hidden;
  padding: 85px 3.58% 100px;
}

.main {
  padding-bottom: 40px;
  position: relative;
  z-index: 1;
  justify-content: flex-start;
  margin-bottom: 20px;
  padding-top: 20px;
}

.sortAndGuiDang {
  width: auto;
  min-width: 200px;
  float: right;
  height: 36px;
  line-height: 36px;
  color: rgba(59, 61, 69, 1);
}

.course-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

/*教师课程*/
.course {
  width: 270px;
  background: #fff;
  border: 1px solid #E2E6ED;
  border-radius: 8px;
  position: relative;
  margin-bottom: 10px;
}

.title-name {
  height: 62px;
}

.course-title {
  font-size: 20px;
  color: white;
  margin-left: 20px;
  text-decoration: none;
}

.class-name {
  font-size: 16px;
  color: #ffffff;
  margin-left: 20px;
  line-height: 28px;
}

.course-title:hover {
  text-decoration: underline;
}

.fulImg {
  height: 95px;
  width: 100%;
  border-radius: 4px 4px 0 0;
  padding-top: 18px;
  padding-bottom: 14px;
}

.invite-code {
  height: 22px;
  background: rgba(255, 255, 255, .2);
  border-radius: 2px;
  font-size: 10px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
  text-align: center;
  margin-left: 18px;
  padding-left: 2px;
  padding-right: 4px;
  margin-top: 13px;
  display: inline-block;
}

.year-semester {
  float: right;
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  padding-right: 14px;
  opacity: .5;
  display: flex;
  align-items: flex-end;
  height: 30px;

}

.teach {
  height: 28px;
  width: 25px;
  right: 10px;
  position: absolute;
}

.symbol {
  line-height: 22px;
  font-size: 14px;

  font-family: PingFangSC-Medium;
  font-weight: 500;
  width: 20px;
  background-color: white;
  text-align: center;
}

.tri {
  width: 0;
  height: 0;
  border-left: 10px solid #fff;
  border-right: 10px solid #fff;
  border-bottom: 4px solid transparent;
  z-index: 1;
  top: 21px;
  left: 15px;
}

.recent-ass {
  margin-top: 5px;
  padding: 0 16px;
  height: 105px;
  border-bottom: 1px solid rgba(226, 230, 237, 1);
}

.recent-ass li {
  list-style: none;
  margin-top: 13px;
}

.ass-tip {
  font-size: 12px;
  font-weight: 500;
  color: rgba(95, 99, 104, 1);
}

.ass-title {
  font-size: 14px;
  text-decoration: none;
}

.ass-title:hover {
  color: #1da3c5;
  border-bottom: 1px solid #1da3c5;
}

.course-foot {
  height: 30px;
}

.course-foot span {
  line-height: 30px;

}

.is-top {
  font-size: 12px;
  color: #5f99a7;
  line-height: 30px;
  margin-left: 80px;
  cursor: pointer;
}

.more-op {
  font-size: 12px;
  color: #2C58AB;
  line-height: 30px;
  margin-left: 10px;
  cursor: pointer;
}

.avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  vertical-align: middle;
  margin-left: 20px;
}

.more-op img {
  width: 15px;
  height: 15px;
  vertical-align: middle;
}

.remove-title {
  width: 100px;
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 20px;
  color: #4d90fe;
}

.remove-dialog-title {
  color: #a9a9bc;
  font-size: 20px;
  display: inline-block;
}

</style>
