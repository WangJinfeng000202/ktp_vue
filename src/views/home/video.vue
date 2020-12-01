<template>
  <div class="section-video">
    <div class="vide-warp">
      <h2 style="font-size: 22px">【专家报告视频会】钟南山、李兰娟、张文宏同台指导学校疫情防控工作</h2>
      <p class="introduction">
        4月20日下午3点，教育部召开学校疫情防控专家报告视频会，会议深入贯彻习近平总书记重要指示批示精神和党中央、国务院决策部署，指导各地各校全面做好学校疫情防控工作…
        <a style="color: #357ae8" href="https://mp.weixin.qq.com/s/dGMZOYUzk0cKnIZRirr1AA" target="_blank">&gt;&gt;查看内容</a>
      </p>
      <div class="videoBox">
        <video id="Video" preload="auto" controls
               src="https://assets.ketangpai.com/20200420/0420yiqingedu.mp4"></video>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'video'
}
</script>

<style scoped>

.section-video .vide-warp {
  width: 980px;
  margin: -30px auto 0;
  padding: 0 20px;
  height: 600px;
  border-radius: 4px;
  position: relative;
  z-index: 2;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
}

.section-video h2 {
  margin: 0;
  font-size: 24px;
  padding: 30px 0;
  text-align: center;
  color: #333;
}

.section-video .introduction {
  font-size: 14px;
  padding: 10px 0;
  line-height: 1.6;
  color: #666;
  margin:0 0  20px 0;
}

.videoBox {
  width: 700px;
  margin: auto;
}

#Video {
  width: 700px;
}
</style>
