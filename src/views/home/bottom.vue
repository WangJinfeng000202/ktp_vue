<template>
  <div class="footer">
    <div class="cWidth">
      <div class="nav-new">
        <a href="#">关于我们</a>
        <a href="#">联系我们</a>
        <a href="#">服务条款</a>
        <a href="#" target="_blank">浏览器下载</a>
        <a href="#">更新动态</a>
      </div>
      <p >Copyright © 2014 ketangpai.com All Rights Reserved. 京ICP备14023276号-4</p>
      <div style="width:300px;margin:0 auto; padding:20px 0;">
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11011402010566" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
          <img src="" style="float:left;" alt="" /><p style="float:left;height:20px;line-height:20px;margin: 0 0 0 5px; color:#939393;">京公网安备 11011402010566号</p></a></div><p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottom'
}
</script>

<style scoped>
.footer{
  height: 150px;
  background: #ececec;
}
.cWidth{
  width: 980px;
  margin-left: auto;
  margin-right: auto;
}
.nav-new{
  padding-top: 36px;
  text-align: center;

}
p{
  text-align: center;
  color: #5b5b5b;
  font-size: 12px;
  margin-top: 20px;

}
a{
  color: #2d2d2d;
  margin-right: 60px;
  text-decoration: none;
}

</style>
