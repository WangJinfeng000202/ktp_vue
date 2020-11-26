<template>
    <div class="ClassInteract">
      <div class="top">
        <div class="fabuStyle">发布课件互动</div>
        <div class="fabuStyle">发布试题互动</div>
      </div>
      <div class="textBox">
        <div class="textLeft">
          <h3>点击上方按钮，发布课堂互动吧！将您的课堂变得更有趣！</h3>
          <p>老师随时组织投票与讨论，学生使用手机直接参与互动。可以制作精美的微课</p>
          <p>大屏幕同步展示互动结果，活跃课堂气氛。（点击
            <a style="color: #32BAF0;text-decoration: none">播放视频</a>，查看使用详情）</p>
        </div>
        <div class="textRight">
          <img src="@/assets/courseDetail/CoursePageTextRight.png" style="width: 300px;height: 300px;" alt="">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ClassInteract"
    }
</script>

<style scoped>
  .ClassInteract{
    height: 600px;
    padding: 0;
    margin: 0;
    font-size: 14px;
  }
  .top{
    height: 40px;
    width: 350px;
  }
  .fabuStyle{
    width: 136px;
    text-align: center;
    height: 36px;
    line-height: 36px;
    border: 1px solid #32BAF0;
    border-radius: 4px;
    background: #FFF;
    margin-right: 16px;
    float: left;
    color: #32BAF0;
    cursor: pointer;
  }
  .textBox{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
  }
  .textLeft{
    width: 900px;
    height: 140px;
    text-align: center;
    background: #F1F3F4;
    border-radius: 8px;
    margin-top: 30px;
    padding-top: 40px ;
  }
  .textLeft h3{
    font-size: 14px;
    color: #707070;
    font-weight: 400;
    margin-bottom: 5px;
  }
  .textLeft p{
    color: #A0A0A0;
    font-size: 14px;
    line-height: 24px;
  }
  .textRight{
    width: 300px;
    height: 300px;
    margin-top: 30px;
    border: 1px solid #ebebe4;
    border-radius: 8px;
  }
</style>
