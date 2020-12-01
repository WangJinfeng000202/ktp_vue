<template>
  <div class="universitys">
    <div class="cont">
      <h3 style="font-size: 24px;"><span class="six">6000+ </span>学校正在使用课堂派</h3>
      <div class="all">
        <div class="onelogos" v-for="(item,index) in universities" :key="index">
          <img :src="item.src" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "universitys",
  data(){
    return{
      universities:[
        {
          src:require("../../assets/collegeLogo/1.png")
        },
        {
          src:require("../../assets/collegeLogo/2.png")
        },
        {
          src:require("../../assets/collegeLogo/3.png")
        },
        {
          src:require("../../assets/collegeLogo/4.png")
        },
        {
          src:require("../../assets/collegeLogo/5.png")
        },
        {
          src:require("../../assets/collegeLogo/6.png")
        },
        {
          src:require("../../assets/collegeLogo/7.png")
        },
        {
          src:require("../../assets/collegeLogo/8.png")
        },
        {
          src:require("../../assets/collegeLogo/9.png")
        },
        {
          src:require("../../assets/collegeLogo/10.png")
        },
        {
          src:require("../../assets/collegeLogo/11.png")
        },
        {
          src:require("../../assets/collegeLogo/12.png")
        },
        {
          src:require("../../assets/collegeLogo/13.png")
        },
        {
          src:require("../../assets/collegeLogo/14.png")
        },
        {
          src:require("../../assets/collegeLogo/15.png")
        },
        {
          src:require("../../assets/collegeLogo/16.png")
        }
      ]
    }
  }
}
</script>

<style scoped>
.universitys{
  width: 100%;
  height: 461px;
}
.all{
  width: 53%;
  margin: 0 auto;
  height: 480px;
  margin-top:44px
}

.six{
  color: #32BAF0;
  margin-left: 600px;
}
.onelogos{
  width: 21%;
  height: 14%;
  float: left;
  padding: 15px;
}
img{
  width: 100%;
  height: 80%;
}

</style>