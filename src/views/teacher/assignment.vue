<template>
  <div class="main">
    <!--发布作业按钮-->
    <el-row>
      <el-col :span="8">
        <div class="topLeft">
          <el-button @click="ShowPersonalWorkPage" :type="activeButtonPersona">发布个人作业</el-button>
          <el-button @click="ShowTeamWorkPage" :type="activeButtonTeam">发布小组作业</el-button>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="topRight">
          <div class="topRightText">
            <i class="el-icon-document-copy"></i>
            <span>作业成绩管理</span>
          </div>
          <div class="topRightText">
            <i class="el-icon-download"></i>
            <span>下载所有作业</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 个人作业创建窗口-->
    <div class="publishHomework" v-show="personalWorkPage">
      <el-form ref="form" :model="newHomework" label-width="80px" style="font-size: 20px">
        <el-input v-model="newHomework.assignmentTitle" placeholder="作业名称" style="width: 100%;"></el-input>
        <div style="height:130px;margin-top: 20px;margin-bottom: 60px;font-size: 12px;">
          <el-input type="textarea" v-model="newHomework.briefIntroduction" :rows="8"></el-input>
        </div>
        <el-form-item label="截止日期:">
          <el-date-picker v-model="newHomework.deadline" value-format="yyyy-MM-dd HH:mm:ss" type="datetime"
                          placeholder="选择日期"
                          style="width: 300px;">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="满分值:">
          <el-input v-model="newHomework.fullMark" style="width: 60px;"></el-input>
        </el-form-item>
        <el-form-item label="是否查重">
          <el-switch v-model="switchValue"></el-switch>
          <div v-show="switchValue">
            查重警戒值:
            <el-input placeholder="50" style="width: 50px;"></el-input>
            %<br>
            <el-checkbox></el-checkbox>
            查重率高于
            <el-input placeholder="50" style="width: 50px;"></el-input>
            %自动打回
          </div>
        </el-form-item>
      </el-form>
      <el-upload class="upload" action=""><i class="el-icon-download"></i>导入作业</el-upload>
      <div style="float: right">
        <el-button @click="personalWorkPage=false; activeButtonPersona=''">取消</el-button>
        <el-button type="primary" v-show="personalHButton" @click="publishAssignment">发布个人作业</el-button>
        <el-button type="primary" v-show="updateButton">保存</el-button>
      </div>
    </div>
    <!-- 小组作业创建窗口-->
    <div class="publishHomework" v-show="teamWorkPage">
      <el-form ref="form" :model="newHomework" label-width="100px" style="font-size: 20px">
        <el-input v-model="newHomework.assignmentTitle" placeholder="作业名称" style="width: 100%;"></el-input>
        <div style="height:130px;margin-top: 20px;margin-bottom: 60px;font-size: 12px;">
          <el-input type="textarea" v-model="newHomework.briefIntroduction" :rows="8"></el-input>
        </div>
        <el-form-item label="选择分组批次:">
          <el-select placeholder="请选择分组" value="">
            <el-option style="color: #cccccc;font-weight:100;" value="">请选择分组</el-option>
            <el-option style="color: #cccccc;font-weight:100;" value="">课程固定分组</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="截止日期:">
          <el-date-picker v-model="newHomework.deadline" value-format="yyyy-MM-dd HH:mm:ss" type="date"
                          placeholder="选择日期"
                          style="width: 300px;">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="满分值:">
          <el-input v-model="newHomework.fullMark" style="width: 60px;"></el-input>
          <span style="font-size: 10px;">注：同一分组内，任一学生所交作业都将记为小组作业，组内成员作业共享。</span>
        </el-form-item>
        <el-form-item label="是否查重">
          <el-switch v-model="switchValue">
          </el-switch>
          <div v-show="switchValue">
            查重警戒值:
            <el-input placeholder="50" style="width: 50px;"></el-input>
            %<br>
            <el-checkbox></el-checkbox>
            查重率高于
            <el-input placeholder="50" style="width: 50px;"></el-input>
            %自动打回
          </div>
        </el-form-item>
      </el-form>
      <el-upload class="upload" action=""><i class="el-icon-download"></i>导入作业</el-upload>
      <div style="float: right">
        <el-button @click="teamWorkPage=false;activeButtonTeam=''">取消</el-button>
        <el-button type="primary">发布小组作业</el-button>
      </div>
    </div>
    <!-- 作业显示列表-->
    <div class="homework">
      <div v-for="(item,index) in assignments" class="hli" :key="index">
        <div style="display: flex;flex-direction: column;">
          <div class="Htype">
            <span class="HtypeSpan">
                {{ item.type === 0 ? '个人作业' : '小组作业' }}
            </span>
            <span style="padding-left: 10px;">{{ item.gmtCreate }}</span>
            <el-dropdown placement="bottom-end" style="float: right">
              <i class="el-icon-more" style="cursor: pointer;font-size: 20px;"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><span @click="popModifyAssignment(item)">编辑</span></el-dropdown-item>
                <el-dropdown-item><span>保存到...</span></el-dropdown-item>
                <el-dropdown-item><span @click="popRemoveAssignment(item.id)">删除</span></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div>
            <div style="width: 100%;height: auto;padding-top: 10px">
              <div style="float: left;">
                  <span
                    class="assignment-title">{{ item.assignmentTitle }}</span><br><br>
                <span>{{ item.briefIntroduction?item.briefIntroduction:'如题所述'}}</span>
              </div>
              <div class="courseDataBox">
                <div class="courseDataBoxSon">
                  <span style="font-size: 40px;font-weight: 300;">
                    {{ item.reviewNum == null ? 0 : item.reviewNum }}
                  </span>
                  <span>已批</span>
                </div>
                <div class="courseDataBoxSon">
                  <span style="font-size: 40px;font-weight: 300;">{{
                      item.notReviewNum == null ? 0 : item.notReviewNum
                    }}</span>
                  <span>未批</span>
                </div>
                <div class="courseDataBoxSon">
                  <span
                    style="font-size: 40px;font-weight: 300;">{{
                      item.notSubmitNum == null ? 0 : item.notSubmitNum
                    }}</span>
                  <span style="color: #ff4e1b">未交</span>
                </div>
              </div>
            </div>
          </div>
          <div class="Htype">
            <span>截止日期: {{ item.deadline }}</span>
            <span style="padding-left: 10px;">0条讨论</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 页脚信息-->
    <div class="footer">
      <h3>欢迎开课！</h3>
      <p>快速发布、收集学生作业，支持50多种文档在线批阅。</p>
      <p>维度（全班查重、作业字数等）统计学生作业情况。（点击
        <a style="color: #32BAF0;text-decoration: none">播放视频</a>，查看使用详情）</p>
    </div>
    <!--删除作业对话框-->
    <el-dialog title="确定要删除该作业?" :visible.sync="deleteHWDialogVisible" width="30%" center :append-to-body="true">
        <span slot="footer" class="dialog-footer">
          <el-button @click="deleteHWDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="removeAssignment">确定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
import assignmentApi from '@/api/assignment/assignment'
import { mapGetters } from 'vuex'

export default {
  name: 'assignment',
  data () {
    return {
      /* 个人作业创建界面显示 */
      personalWorkPage: false,
      /* 小组作业创建界面显示 */
      teamWorkPage: false,
      /* 按钮状态 */
      activeButtonPersona: '',
      activeButtonTeam: '',
      /* 该课程作业列表 */
      assignments: [],
      /* 新作业存储数组 */
      newHomework: {
        courseId: '',
        userId: '',
        assignmentTitle: '',
        briefIntroduction: '',
        deadline: '',
        fullMark: '',
        type: ''
      },
      /* 查重开关 */
      switchValue: false,
      /* 该课程人数 */
      classMembers: 0,
      personalHButton: false,
      updateButton: false,
      assignmentId: '',
      deleteHWDialogVisible: false,
      courseId: '',
      user: {}
    }
  },
  methods: {
    /* 展开发布个人作业窗口 */
    ShowPersonalWorkPage () {
      this.newHomework.type = 0
      this.personalWorkPage = true
      this.personalHButton = true
      this.updateButton = false
      this.teamWorkPage = false
      this.activeButtonPersona = 'primary'
      this.activeButtonTeam = ''
      this.newHomework.assignmentTitle = ''
      this.newHomework.briefIntroduction = ''
      this.newHomework.deadline = ''
      this.newHomework.fullMark = ''
    },

    /* 展开发布小组作业窗口 */
    ShowTeamWorkPage () {
      this.newHomework.type = 1
      this.teamWorkPage = true
      this.personalWorkPage = false
      this.activeButtonPersona = ''
      this.activeButtonTeam = 'primary'
      this.newHomework.assignmentTitle = ''
      this.newHomework.briefIntroduction = ''
      this.newHomework.deadline = ''
      this.newHomework.fullMark = ''
    },

    /* 修改作业 */
    popModifyAssignment (assignment) {
      if (assignment.type === 0) {
        this.ShowPersonalWorkPage()
        assignmentApi.getById(assignment.id)
          .then(res => {
            this.newHomework = res.data.data.item
          })
          .catch(err => {
            this.$message.error(err.msg)
          })
      } else {
        this.ShowTeamWorkPage()
      }
    },

    /* 发布修改作业 */
    publishAssignment () {
      this.newHomework.courseId = this.courseId
      this.newHomework.userId = this.user.userId
      if (this.newHomework.id) { // 如果有id，执行修改
        assignmentApi.modifyAssignment(this.newHomework)
          .then(res => {
            this.$message.success(res.data.msg)
            this.personalWorkPage = false
            this.teamWorkPage = false
            this.getAllAssign()
          })
          .catch(err => {
            this.$message.error(err.msg)
          })
      } else { // 执行添加
        assignmentApi.createAssignment(this.newHomework)
          .then(res => {
            this.$message.success(res.data.msg)
            this.personalWorkPage = false
            this.teamWorkPage = false
            this.complete()
            this.getAllAssign()
          })
          .catch(err => {
            this.$message.error(err.msg)
          })
      }
    },

    /* 弹出删除作业提示 */
    popRemoveAssignment (id) {
      this.assignmentId = id
      this.deleteHWDialogVisible = true
    },

    /* 删除作业 */
    removeAssignment () {
      assignmentApi.removeAssignment(this.assignmentId)
        .then(res => {
          this.$message.success(res.data.msg)
          this.deleteHWDialogVisible = false
          this.getAllAssign()
          this.complete()
        })
        .catch(err => {
          this.$message.error(err.msg)
        })
    },

    /* 获取课程的所有作业 */
    getAllAssign () {
      assignmentApi.getAllAssignment(this.courseId)
        .then(res => {
          this.assignments = res.data.data.items
          console.log(this.assignments)
        })
        .catch(err => {
          this.$message.error(err.msg)
        })
    },
    ...mapGetters(['getUserInfo']),
    complete () {
      this.$root.$emit('next', this.courseId)
    }
  },
  created () {
    this.courseId = this.$route.params.id
    this.getAllAssign()
    this.complete()
    this.user = this.getUserInfo()
  }
}
</script>

<style scoped>
.main {
  height: 600px;
  padding: 0;
  margin: 0;
  font-size: 14px;
  z-index: 100;
}

.topLeft {
  height: 40px;
  width: 350px;
}

.topRight {
  height: 40px;
  width: 280px;
  float: right;
  display: flex;
  flex-direction: row;
}

.topRightText {
  color: #5F6368;
  font-size: 14px;
  cursor: pointer;
  width: 140px;
  height: 40px;
  line-height: 40px;
  margin-left: 30px;
  text-align: center;
}

.publishHomework {
  width: 97%;
  height: auto;
  margin-top: 20px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 20px 20px 60px;
}

.homework {
  width: 95%;
  height: auto;
}

.hli {
  width: 100%;
  height: 200px;
  border: 1px solid #cccccc;
  padding: 0 20px 0 40px;
  border-radius: 8px;
  margin-top: 20px;
}

.Htype {
  color: #AAA;
  padding: 21px 0 10px;
  line-height: 30px;
}

.HtypeSpan {
  color: #5F6368;
  background: #F1F3F4;
  padding: 3px 5px;
  border-radius: 2px;
}

.courseDataBox {
  height: auto;
  width: auto;
  float: right;
  display: flex;
  padding-right: 30px;
  flex-direction: row;
}

.courseDataBoxSon {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  text-align: center;
  color: #707070;
}

.footer {
  width: 100%;
  height: 120px;
  text-align: center;
  background: #F1F3F4;
  border-radius: 8px;
  margin-top: 30px;
  padding-top: 35px;
  margin-bottom: 40px;
}

.footer h3 {
  font-size: 14px;
  color: #707070;
  font-weight: 400;
  margin-bottom: 5px;
}

.footer p {
  color: #A0A0A0;
  font-size: 14px;
  line-height: 24px;
}

.upload {
  background: #32BAF0;
  color: white;
  width: 110px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 8px;
}

.assignment-title {
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
}

.hli:hover .assignment-title {
  color: #4d90fe;
}

.assignment-title:hover {
  text-decoration-line: underline;
}
</style>
