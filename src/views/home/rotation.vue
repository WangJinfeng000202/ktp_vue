<template>
  <div class="slide">
    <img v-for="(item ,index) in imgs" v-show="index === mark" :key="index"
         :src="item.src" alt="" class="img"/>

    <div class="bar">
      <span v-for="(item,index) in imgs" :class="{ 'active': index===mark}" :key="index"
            @click="handlechange(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rotation',
  data: function () {
    return {
      mark: 0,
      imgs: [
        {
          src: require('@/assets/主页背景-banner4.png')
        },
        {
          src: require('@/assets/主页背景-newbanner.png')
        }
      ]
    }
  },
  methods: {
    autoPlay () {
      this.mark++
      if (this.mark === 2) {
        this.mark = 0
      }
    },
    play () {
      setInterval(this.autoPlay, 5000)
    },
    handlechange (i) {
      this.mark = i
    }
  },
  created () {
    this.play()
  }
}
</script>

<style scoped>
.slide {
  width: 100%;
  height: 520px;
  position: relative;
}

.img {
  width: 100%;
  height: 100%;
  margin-left: 0;
  transition: all .5s;
  position: absolute;
}

.img.active {
  z-index: 1;
}

.bar {
  position: absolute;
  width: 50%;
  text-align: center;
  height: 13px;
  margin-top: 22%;
  margin-left: 26%;
}

.bar span {
  width: 34px;
  height: 4px;
  margin-right: 10px;
  border: 0;
  opacity: 0.5;

  background-color: #f2f2f2;
  display: inline-block;
}

</style>
