<template>
  <div class="app-container">
    <div class="main">
      <span class="allCourse">置顶课程</span>
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
      <!--新建/修改课程窗口-->
      <el-dialog :title="createOrUpdateTitle" :visible.sync="dialogFormVisible" append-to-body>
        <el-form :model="createCourseForm">
          <el-form-item label="课程名称" :label-width="formLabelWidth">
            <el-input v-model="createCourseForm.courseTitle" placeholder="请输入课程名称"></el-input>
          </el-form-item>
          <el-form-item label="班级名称" :label-width="formLabelWidth">
            <el-input v-model="createCourseForm.className" placeholder="请输入班级名称（选填）"></el-input>
          </el-form-item>
          <el-form-item label="选择日期" :label-width="formLabelWidth">
            <el-select v-model="createCourseForm.schoolYear">
              <el-option v-for="(item,index) in schoolYear" :key="index" :label="item" :value="item"/>
            </el-select>
            <el-select v-model="createCourseForm.semester">
              <el-option label="不限" value="0"/>
              <el-option label="第一学期" value="1" checked/>
              <el-option label="第二学期" value="2"/>
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
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
      <!-- 课程排序/归档管理按钮-->
      <div class="sortAndGuiDang">
        <span style="cursor: pointer;"><i class="el-icon-sort"></i>课程排序</span>
        &nbsp; &nbsp; <span style="cursor: pointer;"><i class="el-icon-files"></i>归档管理</span>
      </div>
    </div>
    <div class="course-top">
      <teacher-course v-for="(item,index) in courseCreatedAndIsTop" :key="index" :course="item"/>
      <student-course v-for="(item,index) in courseJoinedAndIsTop" :key="index" :course="item"/>
    </div>
    <el-divider content-position="left">其他课程</el-divider>
    <div class="course-top">
      <teacher-course v-for="(item,index) in courseCreatedAndIsNotTop" :key="index" :course="item"/>
      <student-course v-for="(item,index) in courseJoinedAndIsNotTop" :key="index" :course="item"/>
    </div>
  </div>
</template>

<script>

import courseApi from "@/api/course/course";
import studentCourse from "@/components/course/studentCourse";
import teacherCourse from "@/components/course/teacherCourse";

export default {
  name: "courseList",
  components: {studentCourse, teacherCourse},

  data() {
    return {
      userId: 'string',
      //加入课程对话框
      joinCourseDialogVisible: false,
      //加入课程加课码
      joinCourseCode: '',
      joinIdentifyRole: '学生',

      //创建或修改信息
      dialogFormVisible: false,
      createOrUpdateTitle: '',
      formLabelWidth: '120px',
      createCourseForm: {
        courseTitle: '',
        className: '',
        schoolYear: '',
        semester: '第一学期'
      },
      schoolYear: [],

      //创建的置顶课程
      courseCreatedAndIsTop: [],
      //创建的非置顶课程
      courseCreatedAndIsNotTop: [],
      //加入的置顶课程
      courseJoinedAndIsTop: [],
      //加入的非置顶课程
      courseJoinedAndIsNotTop: [],
    }
  },
  created() {
    this.getAllCourse(this.userId)
    this.generateSchoolYear()
  },
  methods: {

    /**
     * 弹出课程创建或修改按钮
     * */
    popCreateCourseForm() {
      this.createOrUpdateTitle = '创建课程'
      this.dialogFormVisible = true
      // this.createCourseForm = {}
    },

    /*生成学年*/
    generateSchoolYear() {
      let schoolYear = []
      let currentYear = new Date().getFullYear()
      let maxYear = currentYear + 3
      let minYear = currentYear - 10
      for (let i = minYear; i < maxYear; i++) {
        schoolYear.push(i + "-" + (i + 1))
      }
      this.schoolYear = schoolYear
      this.createCourseForm.schoolYear = currentYear + "-" + (currentYear + 1)
    },

    /*加入课程弹窗*/
    popJoinCourse() {
      this.joinCourseDialogVisible = true
      this.joinCourseCode = ''
    },

    /*加入课程*/
    joinCourse() {
      this.joinCourseDialogVisible = false
      let joinCourseInfo = {}
      joinCourseInfo.userId = this.userId
      joinCourseInfo.courseCode = this.joinCourseCode
      joinCourseInfo.identityRole = this.joinIdentifyRole
      console.log(joinCourseInfo)
      courseApi.joinCourse(joinCourseInfo)
        .then(res => {
          this.$message.success(res.data.msg);
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
        this.$message.error("数据加载失败")
      })
    }
  }

}
</script>

<style scoped>
.app-container {
  height: 100%;
  overflow: hidden;
  padding: 85px 4% 100px;
}

.main {
  padding-bottom: 40px;
  position: relative;
  z-index: 1;
  justify-content: flex-start;
  box-shadow: 0 1px 0 0 rgba(226, 230, 237, 1);
  margin-bottom: 20px;
  padding-top: 20px;
}

.allCourse {
  height: 36px;
  line-height: 36px;
  color: rgba(59, 61, 69, 1);
  float: left;
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
}
</style>


