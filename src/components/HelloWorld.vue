<template>
  <div class="hello">
    <h1>Hello 2009</h1>
    <h1 v-text='msg' @click='testClick'></h1>
    <h1 v-text='xxx'></h1>
  </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  props: {
    msg: String,
    xxx: String
  },
  methods: {
    testClick() {
      console.log(this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
