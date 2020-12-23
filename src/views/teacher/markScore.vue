<template>
  <div>
    <div class="main">
      <!----头部工具栏-->
      <div class="head-title">
        <h2>{{ homework.assignmentTitle }}</h2>
        <button class="gr-fs">生成期末成绩</button>
        <div class="togsh">
          <span class="end-date">截止{{ homework.deadline }}</span>
          <span class="no-name"><input v-model="queryParam.schoolId" type="text" placeholder="学号、姓名"><i class="el-icon-search"></i></span>
          <button class="hd-ap">对学生隐藏成绩<i class="el-icon-arrow-down"></i></button>
          <span class="ck-rpt"><i class="el-icon-setting"></i>查重设置</span>
        </div>
      </div>
      <!----筛选-->
      <div class="review-wrap">
        <div class="work-tips-infor">
        <span
          class="infor-left">已筛选出1人 （全班共{{
            homework.reviewNum + homework.notReviewNum + homework.notSubmitNum
          }}人）</span>
          <span class="hb"></span><a class="infor-right" @click="tour=!tour">{{ tour ? '收起' : '展开' }}</a>
        </div>
        <div class="tb-ckbox" v-if="tour">
          <!--作业状态-->
          <div class="tb-item">
            <div class="item-left">成绩：</div>
            <span class="ult">不限</span>
            <span class="cks">
                    <el-checkbox v-model="queryParam.isReviewed">已批（{{ homework.reviewNum }}）</el-checkbox>
                </span>
            <span class="cks">
                    <el-checkbox v-model="queryParam.isNotReviewed">未批（{{ homework.notReviewNum }}）</el-checkbox>
                </span>
            <span class="cks">
                    <el-checkbox v-model="queryParam.isNotSubmit">未交（{{ homework.notSubmitNum }}）</el-checkbox>
                </span>
          </div>
          <!--相似度-->
          <div class="tb-item">
            <div class="item-left">相似度：</div>
            <span class="ult">不限</span>
            <span class="cks">
                    <el-checkbox>0-50%</el-checkbox>
                </span>
            <span class="cks">
                    <el-checkbox>50%-70%</el-checkbox>
                </span>
            <span class="cks">
                    <el-checkbox>70%-90%</el-checkbox>
                </span>
            <span class="cks">
                    <el-checkbox>90%-100%</el-checkbox>
                </span>
          </div>
          <!--提交状态-->
          <div class="tb-item">
            <div class="item-left">提交状态：</div>
            <span class="ult">不限</span>
            <span class="cks">
                    <el-checkbox>按时交</el-checkbox>
                </span>
            <span class="cks">
                    <el-checkbox>超时交</el-checkbox>
                </span>

          </div>
          <!--分享状态-->
          <div class="tb-item">
            <div class="item-left">分享状态：</div>
            <span class="ult">不限</span>
            <span class="cks">
                    <el-checkbox>未分享</el-checkbox>
                </span>
            <span class="cks">
                    <el-checkbox>已分享</el-checkbox>
                </span>
          </div>
          <!--作业字数和批改次数-->
          <div class="tb-item last-two">
            <div class="item-left">作业字数：</div>
            <input type="text"><span> - </span><input type="text">&nbsp;&nbsp;&nbsp;&nbsp;<a href="">确定</a>
          </div>
          <div class="tb-item last-two">
            <div class="item-left">批改次数</div>
            <input type="text"><span> - </span><input type="text">&nbsp;&nbsp;&nbsp;&nbsp;<a href="">确定</a>
          </div>
        </div>
      </div>
      <div class="tour">
        <div class="tour-bar">
          <a href="#" style="width:150px">学号</a>
          <a href="#">姓名</a>
          <a href="#">成绩</a>
          <a href="#">相似度</a>
          <a href="#">提交状态</a>
          <a href="#">作业字数</a>
          <a href="#">批改次数</a>
        </div>
        <div class="tb-hw">
          <span><el-checkbox>已选0/20</el-checkbox></span>
          <el-button size="mini" type="primary">批量给分</el-button>
          <el-button size="mini" type="primary">打回作业</el-button>
          <el-button size="mini" type="primary">下载</el-button>
        </div>
        <div class="tb-td" v-for="(item,index) in courseWorks" :key="index">
          <span style="width:150px"><el-checkbox></el-checkbox> {{ item.schoolId }}</span>
          <span style="font-weight: 800">{{ item.username }}</span>
          <span>
            <template v-if="item.id">
              <input @blur="markScores(item)" v-model="item.score" type="text"
                     class="score-input">/{{ homework.fullMark }}
            </template>
            <template v-else>
              <span style="color: red;font-size: 18px">未交</span>
            </template>
            </span>
          <span>--</span>
          <span style="width: 138px;">{{ item.gmtCreate }}</span>
          <span>--</span>
          <span>--</span>
          <span style="width: auto;">
            <template v-if="item.id">
              <span class="py" style="color: #32BAF0" @click="checkHomework(item.id)">进入批阅</span>
            </template>
            <template v-else>
              <span class="cj" style="color: #32BAF0">催交<span class="qcj" style="padding-left:30px;color: #32BAF0">全部催交</span></span>
            </template>
          </span>

        </div>
      </div>
      <!--学生上传文件列表-->
      <el-dialog title="学生文件列表" :visible.sync="stuFileList" width="30%" center :close-on-click-modal="false"
                 :append-to-body="true">
        <!--作业列表-->
        <div class="file" v-for="file in fileList">
          <div><img src="../../assets/fileType/file_ext_big_others.png" width="55" height="55" alt=""></div>
          <div class="file-detail">
            <div class="filename" @click="review(file)">{{ file.name }}</div>
            <div class="size-re">
              <div>
                {{ file.size }}
              </div>
              <div class="remove-a"><a :href="file.url">下载</a></div>
            </div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
        <el-button @click="closeFileList" style="margin-top: 20px;" type="primary">关 闭</el-button>
      </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>

import { getViewById } from '@/api/assignment/assignment'
import { getFileList, getCourseWorks, markScore } from '@/api/assignment/userAssignment'
import { getUserInfo } from '@/utils/auth'

export default {
  name: 'MarkScore',
  data () {
    return {
      user: {},
      tour: true,
      courseWorks: [],
      courseId: '',
      homeworkId: '',
      homework: {},
      showMakeScorePage: false,
      score: '',
      fileList: [],
      stuFileList: false,
      studentId: '',
      queryParam: {
        isReviewed:false,
        isNotReviewed:false,
        isNotSubmit:false,
        schoolId:''
      }
    }
  },
  created () {
    this.courseId = this.$route.params.cid
    this.homeworkId = this.$route.params.id
    this.getAssignmentInfo()
    this.getCourseWorks()
    this.user = JSON.parse(getUserInfo())
  },
  methods: {
    closeFileList () {
      this.stuFileList = false
      this.fileList = []
    },
    markScores (item) {
      // 为用户打分
      let ua = {}
      ua.id = item.id
      ua.score = item.score
      ua.isReviewed = 1
      markScore(ua)
      .then(res => {
        this.getAssignmentInfo()
        this.$message.success(res.msg)
      })
      .catch(err => {
        this.$message.error(err.msg)
      })
    },
    review(file){
      window.open("https://view.officeapps.live.com/op/view.aspx?src=" + file.url,"_blank")
    },
    checkHomework (id) {
      this.stuFileList = true
      getFileList(id)
        .then(res => {
          const files = res.data.fileList
          this.fileList = files==null?[]:files
        })
        .catch(err => {
          this.$message.error(err.msg)
        })
    },
    getCourseWorks () {
      getCourseWorks(this.courseId, this.homeworkId,this.queryParam)
        .then(res => {
          this.courseWorks = res.data.items
        })
        .catch(res => {
          this.$message.error(err.msg)
        })
    },
    getAssignmentInfo () {
      getViewById(this.homeworkId)
        .then(res => {
          this.homework = res.data.item
        })
        .catch(err => {
          this.$message.error(err.msg)
        })
    }
  }
}
</script>

<style scoped>
.main {
  width: 1020px;
  height: 800px;
  border: 1px solid #c8c8c8;
  margin: 0 auto;
}

.head-title {
  padding: 39px 30px 27px;
  height: 80px;
  border-bottom: 1px solid #c8c8c8;
  clear: both;
}

.head-title h2 {
  font-size: 18px;
  color: #2d2d2d;
  font-weight: 400;
  display: inline-block;
}

.gr-fs {
  float: right;
  height: 26px;
  line-height: 26px;
  display: block;
  text-align: center;
  background-color: #fff;
  color: #818181;
  font-family: '微软雅黑',serif;
  cursor: pointer;
  border-radius: 3px;
  padding: 0 10px;
  border: 1px solid #ccc;
  outline: none;
}

.end-date {
  padding: 5px 20px;
  margin-right: 10px;
  background: rgba(0, 0, 0, 0.1);
  display: inline-block;
  font-size: 14px;
}

.togsh {
  clear: both;
}

.ck-rpt {
  margin-right: 20px;
  padding-top: 5px;
  color: #818181;
  float: right;
}

.hd-ap {
  display: block;
  text-indent: 20px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  padding-right: 30px;
  margin-right: 20px;
  background-color: RGB(53, 122, 232);
  border: none;
  outline: none;
  display: block;
  float: right;
}

.no-name {
  border: 1px solid #c8c8c8;
  width: 173px;
  height: 22px;
  padding: 4px 10px 4px 20px;
  font-size: 18px;
  float: right;
}

.no-name input {
  border: none;
  outline: none;
  width: 150px;
  font-size: 15px;
  float: left;
}

.review-wrap {
  padding: 0 40px;
}

.work-tips-infor {
  width: 100%;
  height: 48px;
  font-size: 12px;
  color: #5a5a5a;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.infor-left {
  display: block;
}

.infor-right {
  display: block;
  font-size: 12px;
  color: #828282;
  text-decoration: none;
}

.infor-right:hover {
  color: RGB(53, 122, 232);
}

.tb-ckbox {
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
}

.tb-item {
  width: 100%;
  height: 46px;
  border: 1px dotted #ccc;
}

.item-left {
  height: 100%;
  width: 150px;
  border-right: 1px solid #ccc;
  text-align: center;
  line-height: 46px;
  background-color: rgb(242, 242, 242);
  font-size: 12px;
  color: #5a5a5a;
  margin-right: 36px;
  display: inline-block;
}

.ult {
  display: inline-block;
  background-color: RGB(53, 122, 232);
  font-size: 12px;
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 2px;
  margin-right: 30px;
}

.cks {
  width: 108px;
  display: inline-block;
  margin-right: 25px;
}

.last-two input {
  border: 1px solid #c8c8c8;
  outline: none;
  width: 50px;
  height: 20px;
}

.last-two a {
  font-size: 12px;
  color: #5a5a5a;
  text-decoration: none;
}

.last-two a:hover {
  color: RGB(53, 122, 232);
}

.tour {
  padding: 0 40px;
}

.tour-bar {
  height: 40px;
  border: 1px solid #c8c8c8;
  margin: 30px 0;
  display: flex;
  background-color: RGB(246, 246, 246);
}

.tour-bar a {
  display: block;
  line-height: 40px;
  height: 100%;
  width: 100px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  color: #5a5a5a;
}

.tb-hw {
  height: 58px;
  line-height: 58px;
  border: 1px solid #c8c8c8;
  background-color: RGB(246, 246, 246);
}

.tb-hw > span {
  margin-left: 12px;
}

.tb-hw .el-button {
  margin-left: 12px;
}

.tb-td {
  height: 58px;
  display: flex;
  border: 1px solid #c8c8c8;
  border-top: none;
}

.tb-td> span {
  font-size: 14px;
  line-height: 58px;
  display: block;
  height: 100%;
  width: 80px;
  text-align: center;
  color: #5a5a5a;
}

.tb-td:hover {
  background-color: #e6e6e6;
}

.score-input {
  border: none;
  outline: none;
  font-size: 14px;
  width: 30px;
}

.file {
  display: flex;
  padding-bottom: 25px;
  height: 64px;
}

.file-detail {
  margin-left: 20px;

}

.file-detail a {
  text-decoration: none;
}

.file-detail .size-re {
  margin-top: 10px;
  color: #ABABAB;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.remove-a {
  text-decoration: none;
  margin-left: 80px;
  color: #32BAF0;
}

.file:hover .filename {
  color: #32BAF0;
}

.filename:hover {
  color: #2d2d2d;
  text-decoration: underline;
}

.remove-a:hover {
  text-decoration: underline #32BAF0;
}

.py,.cj,.qcj {
  color: #32BAF0;
  cursor: pointer;
}
.qcj {
  display: none;
}
.cj:hover,.py:hover {
  text-decoration: underline #32BAF0;
}
.cj:hover .qcj{
  display: inline;
}



</style>
