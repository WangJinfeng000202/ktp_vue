<template>
  <div class="home">
    <!--导航栏-->
    <div>
      <navigator/>
    </div>
    <!--轮播图-->
    <div style="margin: auto">
      <rotation/>
    </div>
    <!--视频播放-->
    <div style="background-color: #ececec">
      <section-video/>
      <!--卡片介绍-->
      <home-class-intro/>
    </div>
    <!--巨幕介绍1-->
    <div>
      <home-class-back/>
    </div>
    <!--巨幕介绍2-->
    <div class="back2">
      <home-class-back2/>
    </div>
    <!--巨幕介绍3-->
    <div>
      <home-class-back3/>
    </div>
    <!--媒体报导-->
    <div>
      <rotation-plot-under/>
    </div>
    <!--学校-->
    <div>
      <university/>
    </div>
    <!--关于-->
    <div>
      <about/>
    </div>
  </div>
</template>

<script>
import navigator from '@/views/home/navigator'
import rotation from '@/views/home/rotation'
import sectionVideo from '@/views/home/sectionVideo'
import homeClassIntro from '@/views/home/homeClassIntro'
import homeClassBack from '@/views/home/homeClassBack'
import homeClassBack2 from '@/views/home/homeClassBack2'
import homeClassBack3 from '@/views/home/homeClassBack3'
import rotationPlotUnder from '@/views/home/rotationPlotUnder'
import university from '@/views/home/universitys'
import about from '@/views/home/bottom'

export default {
  name: 'Home',
  components: {
    about,
    university,
    navigator,
    rotation,
    sectionVideo,
    homeClassIntro,
    homeClassBack,
    homeClassBack2,
    homeClassBack3,
    rotationPlotUnder
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },

}
</script>

<style scoped>
.back2 {
  background-image: url('../assets/s3bg.png');
}
</style>
