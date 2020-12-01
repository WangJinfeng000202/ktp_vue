<template>
  <div class="homeClassBack">
    <div class="left">
      <img class="img1" src="@/assets/s2.png" alt=""/>
    </div>
    <div class="right">
      <img src="@/assets/双引号.png" alt=""/>
      <h5>
        远程直播，在线互动教学
      </h5>
      <ul>
        <li><span></span>无安装，操作简单</li>
        <li><span></span>在线实时互动，全过程教学统计</li>
        <li><span></span>自动录播，再次回顾，保留教学资产</li>
      </ul>
    </div>
  </div>
</template>

<script type="javascript">
export default {
  name: 'homeClassBack'
}

</script>

<style scoped ref="stylesheet">
ul,li{
  margin: 0;
  padding: 0;
}
.homeClassBack {
  margin: 0 auto;
  background-color: #fff;
  width: 980px;
  display: flex;
}

.left {
  flex: 1;
  margin-right: 50px;
}

.img1 {
  width: 100%;
  height: 396px;
}

.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.right img {
  width: 40px;
  margin-bottom: 16px;
}

.right h5{
  font-size: 32px;
  color: #4285F4;
  letter-spacing: 1px;
  line-height: 48px;
  margin: 0 0 24px 0;
}

.right ul li {
  font-size: 18px;
  color: #333333;
  letter-spacing: 0;
  line-height: 32px;
  display: flex;
  align-items: center;
}

.right ul li span {
  width: 6px;
  height: 6px;
  background: #4285F4;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
