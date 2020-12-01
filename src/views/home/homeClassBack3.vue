<template>
  <div class="homeClassBack3">
    <div class="cont">
      <div class="let">
        <img src="../../assets/主页背景-手机.png" class="img" alt="" />
      </div>
      <div class="rig">
        <img src="../../assets/双引号.png" class="img1" alt="" />
        <h5>混合教学，全过程管理</h5>
        <ul>
          <li><span class="ds">课前备课：</span><span class="span1">创建课堂，轻松开启教学，发布预习</span></li>
          <li><span class="ds">课中互动：</span><span class="span2">上传原生课件，随堂互动答题，提供多种互动创新场景，让课堂活起来</span></li>
          <li style="margin-top: 22px;"><span class="ds">课后巩固：</span><span class="span3">随时随地发布话题，测试，作业，在线批阅，实时查重，自动管理教学成绩，教学过程自动分析，可留存，可追溯</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'homeClassBack3'
}
</script>

<style scoped ref="stylesheet">
.homeClassBack3{
  background-color: white;
  height: 398px;
}
.ds{
  font-weight: 600;
}
.cont{
  width: 50%;
  position: relative;
  margin: 0 auto;
}
.let{
  position: absolute;
  width: 50%;
  height: 100%;
}
.span1{
  margin-left: 5px;
}
.span2{
  display: inline-block;
  margin-left: 79px;
  margin-top: -20px;

}
.span3{
  display: inline-block;
  margin-left: 83px;
  width: 82%;
  height: auto;
  margin-top: -21px;
}
.rig{
  position: absolute;
  width: 62%;
  height: 100%;
  margin-left: 50%;
}
.img {
  width: 100%;
  height: auto;
}
.img1{
  width: 8%;
  margin-left: -72%;
  padding: 51px 2px 15px;
}
ul{
  list-style: none;
  width: 89%;
  height: 124px;
}
li{
  text-align: left;
  width: 100%;
  height: 24%;
  font-size: 15px;
}

h5{
  font-size: 28px;
  text-align: left;
  margin: 0 0 0 9%;
}

</style>
