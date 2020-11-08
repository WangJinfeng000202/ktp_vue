<template>
  <div class="course">
    <div class="study">
      <div class="symbol">学</div>
      <div class="tri"></div>
    </div>
    <div :style="{backgroundImage:'url(https://ktp123.oss-cn-beijing.aliyuncs.com/cover/35.png)'}" class="fulImg">
      <div class="title-name">
        <a class="course-title" href="#">{{ course.courseTitle }}</a><br/>
        <span class="class-name">{{ course.className }}</span><br/>
      </div>
      <div>
        <span class="invite-code">
          <img style="width: 15px;height: 15px;vertical-align: middle" src="./二维码.png" alt="">
          <span style="cursor: pointer;">加课码：{{ course.courseCode }}</span>
        </span>
        <span class="year-semester">
         {{ course.schoolYear }}
          <br/>
         {{ course.semester === 0 ? '不限' : course.semester === 1 ? '第一学期' : '第二学期'  }}
        </span>
      </div>
    </div>
    <div class="recent-ass">
      <li class="ass-tip">近期作业</li>
      <li v-for="(item,index) in course.assignmentVos" :key="index" >
        <a class="ass-title">{{ item.assignmentTitle }}</a>
      </li>
    </div>
    <div class="course-foot">
        <span><img class=" avatar el-avatar--small el-avatar--circle"
                   :src="course.userVo.avatar" alt="">
        </span>
        <span style="font-size: 12px;margin-left: 10px">userVo.username</span>
        <span class="is-top">取消置顶</span>
        <span class="more-op">更多<img src="./more.png" alt=""></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentCourse",
  props:['course'],
  data() {
    return {}
  },
  created() {
  },
  methods: {}

}
</script>

<style scoped>
.course {
  width: 270px;
  background: #fff;
  border: 1px solid #E2E6ED;
  border-radius: 8px;
  position: relative;
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

.study {
  height: 28px;
  width: 25px;
  right: 10px;
  position: absolute;
}

.symbol {
  line-height: 22px;
  font-size: 14px;
  color: white;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  width: 20px;
  background-color: #32baf0;
  text-align: center;
}

.tri {
  width: 0;
  height: 0;
  border-left: 10px solid #32baf0;
  border-right: 10px solid #32baf0;
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
}

.more-op {
  font-size: 12px;
  color: #2C58AB;
  line-height: 30px;
  margin-left: 10px;
}

.avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  vertical-align: middle;
  margin-left: 20px;
}

.more-op img{
  width: 15px;
  height: 15px;
  vertical-align: middle;
}
</style>

