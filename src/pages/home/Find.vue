<template>
<div>
  <h1>发现</h1>
  <hr>

  <div class="tab">
    <!-- <span @click='tabClick(1)' :class='{"on": tabIdx==1}'>今日数据统计</span>
    <span @click='tabClick(2)' :class='{"on": tabIdx==2}'>昨日数据统计</span> -->
    <router-link tag='span' exact-active-class='on' to='/find/'>今日</router-link>
    <router-link tag='span' exact-active-class='on' to='/find/t2'>昨日</router-link>

  </div>
  <div class="content2">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      tabIdx: 1
    }
  },
  methods: {
    tabClick(idx) {
      this.tabIdx = idx
      this.$router.history.push('/find/t'+idx)
    }
  }
}
</script>

<style lang="css" scoped>
.tab {
  line-height: 35px;
  display: flex;
}
.tab span {
  flex: 1;
  border: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
}
.tab span.on {
  color: orange;
}
.content2 {
  line-height: 100px;
  text-align: center;
}
</style>
