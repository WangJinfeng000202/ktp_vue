<template>
  <div>
    <!-- 作业显示列表-->
    <div class="homework">
      <div v-for="(item,index) in courseWorks" class="hli" :key="index">
        <router-link :to="'/detail/submit/'+courseId+'/'+item.id" v-if="item.userAssignmentId==null" class="sc-btn">上传作业</router-link>
        <router-link :to="'/detail/submit/'+courseId+'/'+item.id" v-else class="sc-btn-f">已提交</router-link>
        <div style="display: flex;flex-direction: column;">
          <div class="Htype">
            <span class="HtypeSpan">
                {{ item.type === 0 ? '个人作业' : '小组作业' }}
            </span>
            <span style="padding-left: 10px;">{{ item.gmtCreate }}</span>
          </div>
          <div>
            <div style="width: 100%;height: auto;padding-top: 10px">
              <div style="float: left;">
                  <span
                    class="assignment-title">{{ item.assignmentTitle }}</span><br><br>
                <span>{{ item.briefIntroduction ? item.briefIntroduction : '如题所述' }}</span>
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
  </div>
</template>

<script>
import userAssignmentApi from '@/api/assignment/userAssignment'

export default {
  name: 'courseWork',
  data () {
    return {
      courseId: '',
      courseWorks: [],
    }
  },
  created () {
    this.courseId = this.$route.params.id
    this.getCourseWokList()
  },
  methods: {
    getCourseWokList () {
      userAssignmentApi.getAllCourseWork(this.courseId)
        .then(res => {
          this.courseWorks = res.data.items
        })
        .catch(err => {
          this.$message.error(err.msg)
        })
    }
  }

}
</script>

<style scoped>
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
  position: relative;
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

.sc-btn{
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #FFF;
  background-color: #32baf0;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  position: absolute;
  right: 65px;
  bottom: 48px;
}
.sc-btn-f{
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #32baf0;
  border: 1px solid #32baf0;
  background-color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  position: absolute;
  right: 65px;
  bottom: 48px;
}
</style>
