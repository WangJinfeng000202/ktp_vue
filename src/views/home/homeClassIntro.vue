<template>
  <div class="back-icon">
    <ul>
      <li>
        <img src="../../assets/主页小-Whome1.png" alt=""/>
        <h2>极简教学主义</h2>
        <p>
          无安装，无插件，无需专门学习；掌握简单，三分钟上手；不改变教学习惯，让课堂更精彩，让教学更高效！
        </p>
      </li>
      <li>
        <img src="../../assets/Whome2.png" alt=""/>
        <h2>远程直播互动教学</h2>
        <p>
          一键开启直播，共享电脑屏幕，替代教室投影仪/黑板，像在教室里一样互动教学。直播录像自动保存，可查看课堂直播教学统计和再次回顾学习。
        </p>
      </li>
      <li>
        <img src="../../assets/Whome3.png" alt=""/>
        <h2>有趣的课堂互动</h2>
        <p>
          提供丰富的教学互动创新场景，上传原生PPT课件进行&nbsp;讲解，手机遥控，标记疑问，评论，开启弹幕，抢答，提问，讨论，随时奖励学生表现，让课堂更精彩。
        </p>
      </li>
      <li>
        <img src="../../assets/Whome4.png" alt=""/>
        <h2>随堂互动答题</h2>
        <p>
          随时编辑互动答题：投票、评价、匿名开放、拍照、选择、判断、简答等多种题型，实时分析互动答题情况，一键词云提取学生有效观点，及时检验教学效果
        </p>
      </li>
      <li>
        <img src="../../assets/Whome5.png" alt=""/>
        <h2>精准的考勤签到</h2>
        <p>
          二维码，数字口令，GPS，传统考勤等多种考勤形式；杜绝代签，一键导出考勤记录
        </p>
      </li>
      <li>
        <img src="../../assets/Whome6.png" alt=""/>
        <h2>作业神器</h2>
        <p>
          81种文档格式作业在线展示和批阅，随时随地批改作业；实时查重，精准比对，避免学生抄袭；自动管理成绩，一键下载作业数据
        </p>
      </li>
      <li>
        <img src="../../assets/Whome7.png" alt=""/>
        <h2>智能成绩管理</h2>
        <p>
          汇总考勤、表现、作业、测试、平时成绩、期末成绩；自由调整成绩权重，汇总最终教学成绩，科学权威
        </p>
      </li>
      <li>
        <img src="../../assets/Whome8.png" alt=""/>
        <h2>教学全过程数据分析</h2>
        <p>
          教学全过程活动数据自动生成，实时查看课程和学生数据面板和报表，教学数据可留存，可追溯
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeClassIntro'
}
</script>

<style scoped>
.back-icon {
  width: 980px;
  height: 600px;
  margin: 20px auto 0;
  background-color: #ececec;
}

ul {
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}

img {
  width: 29%;
  height: auto;
  margin: 8% auto 0;
}

h2 {
  font-size: 18px;
  margin: 16px auto 0;
}

p {
  color: #64707d;
  font-size: 13px;
  width: 98%;
  text-align: left;
  margin-top: 16px;
}

li {
  width: 222px;
  height: 260px;
  background-color: #fff;
  box-shadow: 0 0 20px 0 rgba(4, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  letter-spacing: 2px;
  font-family: 'PingFang SC', tahoma, arial, 'helvetica neue', 'hiragino sans gb', 'microsoft yahei ui', 'microsoft yahei', simsun, sans-serif;
}
</style>
