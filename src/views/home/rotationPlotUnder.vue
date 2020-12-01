<template>

  <div class="lanternBlock">
    <h3>媒体报道</h3>
    <p>课堂派深耕教学管理，受到广泛认可</p>
    <div class="leftOne" @click="goPrevious(index)"></div>
    <div class="rightOne" @click="goNext(index)"></div>
    <ul class="ulCont" :style="{marginLeft:changeMarginLeft + 'px'}">
      <li index="5" len="6" class="liCont" :class="{active:flag[5]}">
        <div class="mrtitle">
          <a>【网易教育】课堂派：教师指向型在线教育平台新思路</a>
        </div>
        <div class="mrinfo">目前，教育资源渐趋雷同并竞相抢占市场份额，在线教育发展进
          入瓶颈期。可喜的是，课堂派的出现打破了这一随大流的现有局面，致力于教师指向型在线教育平
          台开发，为在线教育市场发展提出新思路。
        </div>
        <el-button target="_blank" href="http://edu.163.com/15/0327/14/ALNHV72O00294MBF.html" class="more">查看详情
        </el-button>
        <div class="rigthborer"></div>
      </li>
      <li len="6" index="0" class="liCont" :class="{active:flag[0]}">
        <div class="mrtitle">
          <a>助力智慧课堂：课堂派成为腾讯微校生态战略伙伴</a>
        </div>
        <div class="mrinfo">7月18日，腾讯微校发布会在北京船山书院如期举行，正式推出以微信校园卡
          、腾讯校园码为核心的数字校园解决方案——腾讯微校2.0。本次发布会突破传统Q&amp;A的传统模式，
          现场模拟校园场景，利用“一款非常好用的应用”课堂派进行了现场互动。作为腾讯微校的生态战略伙伴，互动教学
          品牌课堂派展现了科技时代，智慧课堂所带来的创新和变化。
        </div>
        <el-button target="_blank" href="http://edu.qq.com/a/20180719/029331.htm" class="more">查看详情</el-button>
        <div class="rigthborer"></div>
      </li>

      <li len="6" index="1" class="liCont" :class="{active:flag[1]}">

        <div class="mrtitle">
          <a>课堂派亮相2018中国“互联网+”数字经济峰会</a>
        </div>
        <div class="mrinfo">4月12日下午教育分论坛，北京大学软件与微电子学院林院长分享了智慧课堂的建设经验：
          教学资源呈现多样化、课堂形式丰富、如何把学生从玩手机的屏幕聚焦到课堂互动环节等方面。林院长表示，课堂
          派在研发过程中，学院的一线教师主动参与，把很多丰富的实际教学经验融入研发当中，使整个智慧课堂的建设更
          具实用性和前瞻性。
        </div>
        <el-button target="_blank" href="https://www.sohu.com/a/228148312_429328" class="more">查看详情</el-button>
        <div class="rigthborer"></div>

      </li>
      <li index="2" len="6" class="liCont" :class="{active:flag[2]}">
        <div class="mrtitle"><a>新时代新青年 课堂派创始人陈杰宾的创业梦</a>
        </div>
        <div class="mrinfo">6月26日，中国共产主义青年团第十八次全国代表大会在人民
          大会堂开幕。共青团委对福建省驻京团工委点赞，CCTV新闻频道进行了同步报道。分享会上，课堂
          派创始人陈杰宾作为闽籍创业青年代表，向在京青年创业者分享了课堂派的发展模式以及创业历程。
        </div>

        <el-button target="_blank" href="http://edu.qq.com/a/20180627/034766.htm" class="more">查看详情</el-button>
        <div class="rigthborer"></div>
      </li>

      <li index="3" len="6" class="liCont" :class="{active:flag[3]}">
        <div class="mrtitle">
          <a>【新浪新闻】课堂派云管理颠覆高校传统实习模式</a>
        </div>
        <div class="mrinfo">用课堂派最大的好处就是在学习的过程中，随时跟老师进行沟通和分享，无论从
          知识和情感层面都需要倾诉，而课堂派不仅提供跟老师同学交流的机会，还能够获得别人的指导和鼓励，
          让整个学习过程更加轻松。
        </div>
        <el-button target="_blank" href="http://news.sina.com.cn/o/2015-08-19/doc-ifxfxrai2235429.shtml" class="more">
          查看详情
        </el-button>
        <div class="rigthborer"></div>
      </li>
      <li index="4" len="6" class="liCont" :class="{active:flag[4]}">
        <div class="mrtitle">
          <a>【华北电力大学】“互联网+”让教育发现每一个学生</a>
        </div>
        <div class="mrinfo">“课堂上教师要及时了解学生对内容的掌握程度，课下学生也希望教师能对自己的学习困难进行及时的指
          导。”在以前，这些实现起来比较困难的事情，“课堂派”可以让这一切变得轻而易举。
        </div>
        <el-button target="_blank" href="http://news.ncepu.edu.cn/mthd/76621.htm" class="more">查看详情</el-button>
        <div class="rigthborer"></div>
      </li>
      <li index="5" len="6" class="liCont" :class="{active:flag[5]}">
        <div class="mrtitle">
          <a>【网易教育】课堂派：教师指向型在线教育平台新思路</a>
        </div>
        <div class="mrinfo">目前，教育资源渐趋雷同并竞相抢占市场份额，在线教育发展进
          入瓶颈期。可喜的是，课堂派的出现打破了这一随大流的现有局面，致力于教师指向型在线教育平
          台开发，为在线教育市场发展提出新思路。
        </div>
        <el-button target="_blank" href="http://edu.163.com/15/0327/14/ALNHV72O00294MBF.html" class="more">查看详情
        </el-button>
        <div class="rigthborer"></div>
      </li>
      <li len="6" index="0" class="liCont" :class="{active:flag[0]}">
        <div class="mrtitle">
          <a>助力智慧课堂：课堂派成为腾讯微校生态战略伙伴</a>
        </div>
        <div class="mrinfo">7月18日，腾讯微校发布会在北京船山书院如期举行，正式推出以微信校园卡
          、腾讯校园码为核心的数字校园解决方案——腾讯微校2.0。本次发布会突破传统Q&amp;A的传统模式，
          现场模拟校园场景，利用“一款非常好用的应用”课堂派进行了现场互动。作为腾讯微校的生态战略伙伴，互动教学
          品牌课堂派展现了科技时代，智慧课堂所带来的创新和变化。
        </div>
        <el-button target="_blank" href="http://edu.qq.com/a/20180719/029331.htm" class="more">查看详情</el-button>
        <div class="rigthborer"></div>
      </li>

    </ul>
    <ul class="ulLabel">
      <li class="dot" index="0" len="6" :class="{active:flag[0]}">
      </li>
      <li class="dot " index="1" len="6" :class="{active:flag[1]}">
      </li>
      <li class="dot" index="2" len="6" :class="{active:flag[2]}">
      </li>
      <li class="dot" index="3" len="6" :class="{active:flag[3]}">
      </li>
      <li class="dot" index="4" len="6" :class="{active:flag[4]}">
      </li>
      <li class="dot" index="5" len="6" :class="{active:flag[5]}">
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'rotationPlotUnder',
  data () {
    return {
      changeMarginLeft: -845,
      index: 1,
      flag: [false, true, false, false, false, false]
    }
  },
  created () {
    setInterval(this.goNext, 3000)
  },
  methods: {
    goPrevious () {
      if (this.index > 0) {
        this.flag[this.index] = false
        this.flag[--this.index] = true
        this.changeMarginLeft += 640
      } else if (this.index === 0) {
        this.changeMarginLeft = -3405
        this.flag[0] = false
        this.flag[5] = true
        this.index = 5
      }
    },
    goNext () {
      if (this.index < 5) {
        this.flag[this.index] = false
        this.flag[++this.index] = true
        this.changeMarginLeft -= 640
      } else if (this.index === 5) {
        this.changeMarginLeft = -205
        this.flag[0] = true
        this.flag[5] = false
        this.index = 0
      }
    }
  }
}
</script>

<style scoped>
.lanternBlock {
  background: #F3F5F7;
  height: 457px;
  overflow-x: hidden;
  position: relative;
  width: 100%;

}

.leftOne {
  width: 20px;
  height: 40px;
  position: absolute;
  background: url('../../assets/toprev.png') right no-repeat;
  right: 44%;
  transform: translateX(-430px);
  top: 53%;
}

.rightOne {
  width: 20px;
  height: 40px;
  position: absolute;
  background: url('../../assets/tonext.png') left no-repeat;
  left: 42%;
  transform: translateX(430px);
  top: 53%;
}

.rigthborer {
  width: 8px;
  background: #2178FF;
  height: 50%;
  position: absolute;
  top: 34%;
  margin-left: -110px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.mrtitle {
  height: 36px;
  width: 104%;
  font-size: 20px;
  font-weight: 500;
  margin-top: -46px;
  margin-bottom: 12px;
}

.mrinfo {
  font-size: 12px;
  text-align: left;
  line-height: 23px;
  width: 100%;
  font-weight: 540;
}

.ulCont {
  list-style: none;
  width: 8600px;
  height: 288px;
  margin-left: -845px;
  margin-top: 36px;
}

.ulLabel {
  list-style: none;
  width: 200px;
  margin: 0 auto;
  height: 20px;
  text-align: center;
}

.more {
  background: url('../../assets/btnmore.png');
  color: white;
  margin-top: 6%;

}

.liCont {
  width: 500px;
  background: #fff;
  padding: 88px 28px;
  height: 100px;
  text-align: left;
  opacity: .4;
  margin-right: 80px;
}

.liCont.active {
  opacity: 1;
}

li {
  float: left;
}

h3 {
  text-align: center;
  font-size: 28px;
  font-weight: 400;
}

p {
  font-size: 17px;
  text-align: center;
  color: #666;
  margin-top: -20px;
}

.dot {
  display: inline-block;
  margin: 0;
  padding: 0;
  height: 8px;
  width: 10px;
  background: #bbb;
  border-radius: 10px;
  margin-right: 13px;
}

.dot.active {
  width: 40px;
}

</style>
