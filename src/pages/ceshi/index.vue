<template>
  <div class="other">
    <div>倒计时功能实现</div>
    <div>{{ `${day}天 ${hr}小时 ${min}分钟 ${sec}秒` }}</div>
  </div>
</template>s

<script>
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
    this.countdown()
  },
  destroyed() {
    clearTimeout(this.timer)
  },
  methods: {
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
}
</style>