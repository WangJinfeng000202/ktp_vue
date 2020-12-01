<template>
  <div class="homeClassBack2">
    <div class="cont1">
      <div class="let">
        <img src="../../assets/双引号白.png" class="img1" alt=""/>
        <h5>精品课程，在线自主学习</h5>
        <p>北大领航，集高校精品课程，免费向社会开放，惠及全球华人</p>
        <p>课堂派教学资源互相共享，打造线上金课，混合金课，共建金</p>
        <p>课</p>
      </div>
      <img class="img2" src="../../assets/慕课大图.png" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeClassBack2'
}
</script>

<style scoped>

h5, p {
  margin: 0;
  padding: 0;
}

.homeClassBack2 {
  width: 980px;
  display: flex;
  margin: 0 auto;
}

.cont1 {
  display: flex;
  flex: 1;
}

.cont1 .let {
  display: flex;
  justify-content: center;
  flex: 1;
  flex-direction: column;
}

.let img {
  width: 40px;
  margin-bottom: 16px;
}

.let h5 {
  font-size: 32px;
  color: #FFFFFF;
  letter-spacing: 1px;
  line-height: 48px;
  margin-bottom: 24px;
}

.let p {
  font-size: 17px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 32px;
}

.img2 {
  width: 465px;
}
</style>
