<template>
  <div class="submit-work">
    <div class="blank"></div>
    <!-- 提交作业主页部分 -->
    <div class="course-work">
      <p class="title">{{ assignment.assignmentTitle }}</p>
      <p class="detail">{{ assignment.briefIntroduction }}</p>
      <div class="date-ck">
        <div><p class="deal-line"><span>截止日期：{{ assignment.deadline }}</span>
          <span>{{ assignment.type == 0 ? '个人作业' : '小组作业' }}</span></p></div>
        <div>查看谁提交了</div>
      </div>
      <div class="submit-ck">
        <div @click="submitCourseWork" v-if="!courseWork.id"><a class="bt-submit">提交</a></div>
        <div @click="modifyCourseWork" v-else><a class="bt-submit">更新提交</a></div>
        <div><span>未完成</span></div>
      </div>
      <div class="file-upl">
        <div class="upl-top">
          <!--作业列表-->
          <div class="file" v-for="(file,index) in filesList">
            <div><img src="../../assets/fileType/file_ext_big_docx.png" width="55" height="55" alt=""></div>
            <div class="file-detail">
              <div class="filename">{{ file.name }}</div>
              <div class="size-re">
                <div>
                  {{ file.size }}
                </div>
                <div style="margin-left: 20px;">已上传</div>
                <div v-if="showBtnAdd" class="remove-a"><span @click="removeFile(index)">删除</span></div>
              </div>
            </div>
          </div>
          <!--上传业按钮-->
          <div class="btn-upl" v-if="showBtnAdd">
            <input type="file"  multiple="multiple" id="uploadFiles" @change="upload"/>
            <div class="upl-lb">
              <img src="../../assets/add.png" alt="" width="20">
            </div>
            <div style="margin-left: 10px">
              <span>添加作业文件</span><br/>
              <span style="font-size: 12px;color:#707070;">支持各类文档、图片、代码、压缩包格式</span>
            </div>
          </div>
        </div>
        <!--留言-->
        <div class="upl-msg">
          <span>作业留言：</span><span style="color: #707070;margin-left: 20px">点击添加留言（仅老师可看）...</span>
        </div>
      </div>
      <div style="color: #357ae8;margin-top: 30px">查看日志 ></div>
    </div>
    <el-dialog title="更新作业？" :visible.sync="dialogVisible" width="30%">
      <p>点击确定后重新编辑作业</p>
      <p>注：再次提交前，不影响老师批改原作业</p>
      <el-divider/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false;showBtnAdd = true">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { upload } from '@/utils/upload'
import { getCourseWorkById } from '@/api/assignment/assignment'
import { getUserInfo } from '@/utils/auth'
import { getCourseWork, insertCourseWork, updateCourseWork } from '@/api/assignment/userAssignment'

export default {
  name: 'submit',
  data () {
    return {
      dialogVisible: false,
      showBtnAdd: true,
      courseId: '',
      assignmentId: '',
      course: {},
      user: {},
      assignment: {},
      filesList: [],
      courseWork: {}
    }
  },
  created () {
    this.courseId = this.$route.params.cid
    this.assignmentId = this.$route.params.id
    this.getAssignmentById()
    this.user = JSON.parse(getUserInfo())
    this.getCourseWorkInfo()
  },
  methods: {

    removeFile(i) {
      this.filesList.splice(i,1);
    },

    // 更新作业
    modifyCourseWork () {
      if (this.showBtnAdd) {
        // 执行修改操作
        this.courseWork.assignmentUrl = JSON.stringify(this.filesList)
        updateCourseWork(this.courseWork)
          .then(res => {
            this.getCourseWorkInfo()
            this.showBtnAdd = false
            this.$message.success(res.msg)
          })
          .catch(err => {
            this.$message.error(err.msg)
          })
      } else {
        // 打开提示框
        this.dialogVisible = true
      }
    },
    // 提交作业
    submitCourseWork () {
      if (this.filesList.length === 0) {
        this.$message.info('您未上传作业')
      } else {
        this.courseWork.assignmentUrl = JSON.stringify(this.filesList)
        this.courseWork.courseId = this.courseId
        this.courseWork.assignmentId = this.assignmentId
        this.courseWork.userId = this.user.id
        insertCourseWork(this.courseWork)
          .then(res => {
            this.showBtnAdd = false
            this.$message.success(res.msg)
            this.getCourseWorkInfo()
          })
          .catch(err => {
            this.$message.error(err)
          })
      }
    },

    //获取作业信息
    getAssignmentById () {
      getCourseWorkById(this.assignmentId)
        .then(res => {
          this.assignment = res.data.item
        })
        .catch(err => {
          this.$message.error(err.msg)
        })
    },

    getCourseWorkInfo () {
      getCourseWork(this.user.id, this.assignmentId)
        .then(res => {
          this.courseWork = res.data.item == null ? {} : res.data.item
          this.filesList = res.data.fileList
          if (this.courseWork.id) {
            this.showBtnAdd = false
          }
        })
        .catch(err => {
          this.$message.error(err.msg)
        })
    },

    // 上传作业
    upload () {
      let files = document.getElementById('uploadFiles').files
      console.log(files)
      for (let i = 0; i < files.length; i++) {
        let file = {}
        let filename = files[i].name
        file.name = filename
        let fileSize = files[i].size
        if (fileSize < 1024) {
          files.size = fileSize + 'B'
        } else if (fileSize < 1024 * 1024) {
          file.size = Math.ceil(fileSize / 2014) + 'K'
        } else {
          file.size = Math.ceil(fileSize / 2014 / 1024) + 'M'
        }
        file.type = filename.substring(filename.lastIndexOf('.') + 1)
        let form = new FormData()
        form.append('file', files.item(i))
        //等待加载
        const loading = this.$loading({
          lock: true,
          text: '上传中...',
          spinner: 'el-icon-loading',
          background: 'rgba(241,243,244,0.7)'
        })
        upload(form)
          .then(res => {
            loading.close()
            file.url = res.data.url
            this.$message.success('上传成功')
            this.filesList.push(file)
          })
          .catch(err => {
            console.log(err.msg)
          })
      }
    }

  }
}
</script>

<style scoped>
.submit-work {
  width: 1224px;
  margin: 0 auto;
}

.blank {
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(218, 220, 224, 1);
  padding: 24px;
  height: 58px;
  margin-bottom: 24px;
  box-sizing: border-box;
}

.course-work .title {
  font-size: 18px;
  margin: 0;
}

.course-work .detail {
  color: rgb(112, 112, 112);
  line-height: 1.8;
  margin: 0;
  font-size: 12px;
}

.deal-line span {
  font-size: 12px;
  padding: 5px 5px;
  line-height: 20px;
  margin-right: 10px;
  margin-bottom: 40px;
  background-color: #F1F3F4;
  color: #5F6368;
  border-radius: 2px;
}

.date-ck, .submit-ck {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
}

.submit-ck .bt-submit {
  cursor: pointer;
  width: 102px;
  background: #32BAF0;
  color: #fff;
  display: block;
  line-height: 40px;
  text-align: center;
  border-radius: 2px;
  text-decoration: none;
}

.file-upl {
  margin-top: 20px;
  border: 1px solid #E2E6ED;
  background: #FFF;
  border-radius: 8px;
}

.file-upl .upl-top {
  padding: 25px 25px 0 25px;
}

.btn-upl {
  width: 330px;
  height: 80px;
  border: 2px dashed #CCC;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}

#uploadFiles {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.btn-upl .upl-lb {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #32baf0;
}

.upl-msg {
  background: #F1F3F4;
  border-top: 1px solid #dcdcdc;
  padding: 26px 0 26px 25px;
  font-size: 14px;
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
  margin-left: 30px;
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

</style>
