<template>
  <div class="main">
    <div class="main1">
      <span class="allCourse">置顶课程</span>
      <!-- 创建/加入课程;发布活动按钮-->
      <div style="float: right;">
        <el-dropdown trigger="click">
          <el-button type="primary" size="medium">+ 创建/加入课程</el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><span>创建课程</span></el-dropdown-item>
            <el-dropdown-item><span>加入课程</span></el-dropdown-item>
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

  </div>
</template>

<script>

export default {
  name: "courseList",
  data() {
    return {}
  },
  created() {
  },
  methods: {}

}
</script>

<style scoped>
.main {
  height: 100%;
  overflow: hidden;
  padding: 85px 4% 100px;
  z-index: 2;
}

.main1 {
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
</style>


