<template>
  <div class="other">
    <div>倒计时功能实现</div>
    <div>{{ `${day}天 ${hr}小时 ${min}分钟 ${sec}秒` }}</div>
    <img src="@/assets/banner@2x.png" alt="" class="banner" />
    <div class="daoying"></div>
    <hr/>
    <button @click="toMessage">点我弹出提示</button>
  </div>
</template>

<script>
import Notice from "./components/notice.vue"
import create from "@/utils/create.js"
export default {
  data() {
    return {
      day: 0,
      hr: 0,
      min: 0,
      sec: 0,
      timer: null,
    }
  },
  components: {},
  mounted() {
    // this.countdown()
  },
  destroyed() {
    clearTimeout(this.timer)
  },
  methods: {
    toMessage(){
      const notice = create(Notice,{
        title:"111111111111111",
        message:"22222222222222",
        deraction:10000,
      })
      console.log(notice)
      notice.show()
    },
    toBlurImgHide_1() {
      //点击图片也应该收起来大图片
      const viewers = document.querySelectorAll('.viewer-container')
      // let isFind = false
      if (viewers.length) {
        for (let i = 0; i < viewers.length; i++) {
          if (viewers[i].classList.contains('viewer-in')) {
            viewers[i].querySelector('.viewer-canvas').click()
            // isFind = true
            this.isOpenImg = false
          }
        }
      }
    },
    countdown() {
      const end = Date.parse(new Date('2021-06-30'))
      const now = Date.parse(new Date())
      //格林威治时间
      console.log('获取当前的格林威治时间', now)
      const msec = end - now
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt((msec / 1000 / 60 / 60) % 24)
      let min = parseInt((msec / 1000 / 60) % 60)
      let sec = parseInt((msec / 1000) % 60)
      this.day = day
      this.hr = hr > 9 ? hr : '0' + hr
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      const that = this
      this.timer = setTimeout(function () {
        that.countdown()
      }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
.other {
  color: #000;
  .banner {
    height: 245px;
    width: 320px;
    border-radius: 10px;
    // -webkit-box-reflect: below;
    // -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left
    //       bottom, from(transparent), to(rgba(250, 250, 250, 0.5)));
    vertical-align: top;
  }
  .daoying {
    height: 245px;
    width: 320px;
    background: linear-gradient(
      rgba(248, 143, 32, 0.6) 0%,
      rgba(238, 59, 14, 0) 18%
    );
    border-radius: 16px;
    opacity: 0.4;
  }
}
</style>