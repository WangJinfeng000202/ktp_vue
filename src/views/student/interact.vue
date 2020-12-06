<template>
  <div class="joinInteract">
    <div class="groupbtn">
      <a class=" nowithscreen" data-isliving>暂无同屏/直播</a>
      <a class=" joinInteractBtn" href="javascript:; ">进入互动</a>
    </div>
    <div class="quickbtn">
      <div class="history">我的互动</div>
      <div class="prestudyBtn">我的学习</div>
    </div>
    <p class="tipinfo"></p>
    <div class="sendtoppt">
      <textarea type="text" class="sendinput" placeholder="发送弹幕到PPT"></textarea>
      <div class="sendbtn">发送</div>
      <div class="sendDanmu"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'interact',
  created () {
    this.courseId = this.$route.params.id
  },
  methods: {}
}
</script>

<style scoped>
.joinInteract {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(226, 230, 237, 1);
  padding: 24px 24px 40px;
  position: relative;
}
.joinInteract .nowithscreen {
  display: inline-block;
  margin: 0 auto;
  color: #fff;
  font-size: 16px;
  text-align: center;
  width: 184px;
  height: 48px;
  line-height: 48px;
  background: #ccc;
  border-radius: 4px;
  pointer-events: none;
}
.joinInteract .groupbtn {
  display: flex;
  float: left;
}
.quickbtn {
  position: absolute;
  right: 0;
}
.joinInteract .joinInteractBtn {
  width: 128px;
  border: 1px solid rgba(50,186,240,1);
  border-radius: 4px;
  color: #32BAF0;
  text-decoration: none;
}
.joinInteract .joinInteractBtn {
  display: inline-block;
  line-height: 48px;
  margin-left: 20px;
  height: 48px;
  text-align: center;
}
.prestudyBtn {
   background: url(https://www.ketangpai.com/Public/Home/img/preview1.png) center left no-repeat;
 }
.history, .prestudyBtn {
  width: 88px;
  padding-left: 30px;
  float: right;
  cursor: pointer;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(95,99,104,1);
}
.history, .prestudyBtn, .quickbtn {
  height: 50px;
  line-height: 50px;
}

.history {
  background: url(https://www.ketangpai.com/Public/Home/img/history.png) 3px no-repeat;
}
.history, .prestudyBtn, .quickbtn {
  height: 50px;
  line-height: 50px;
}

.sendtoppt {
  height: 112px;
  margin-top: 90px;
  margin-bottom: 64px;
}
.sendinput {
  display: block;
  font-size: 16px;
  width: 100%;
  height: 112px;
  background: rgba(241,243,244,1);
  border-radius: 4px;
  padding: 16px;
  box-sizing: border-box;
}
textarea {
  resize: none;
}
input, select, textarea {
  outline: none;
  border: none;
  background: none;
  cursor: text;
}
.sendbtn {
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  user-select: none;
  width: 128px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid rgba(50,186,240,1);
  font-size: 14px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(50,186,240,1);
  float: right;
  margin-top: 24px;
}
.sendDanmu {
  background: url(https://www.ketangpai.com/Public/Home/img/sendDanmu.png) center center no-repeat;
  background-size: contain;
  float: right;
  margin: 25px;
}
.d_fullscreen, .danmu, .sendDanmu {
  width: 38px;
  height: 38px;
  cursor: pointer;
}
</style>
