<template>
  <div>
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
      &nbsp
      <el-button type="primary" size="medium">+ 快速发布活动</el-button>
    </div>
    <!-- 课程排序/归档管理按钮-->
    <div class="sortAndGuiDang">
      <span style="cursor: pointer;"><i class="el-icon-sort"></i>课程排序</span>
      &nbsp &nbsp <span style="cursor: pointer;"><i class="el-icon-files"></i>归档管理</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentCourse",
  data() {
    return {}
  },
  created() {
  },
  methods: {}

}
</script>

<style scoped>
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

