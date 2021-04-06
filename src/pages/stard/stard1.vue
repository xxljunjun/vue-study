<template>
  <div class="stard1">
    <h1>测试</h1>
    <div class="demo">
      <div class="left">
        <p
          v-for="item in lettersArr"
          :key="item.id"
          class="letter"
          :class="item.Letters === activeLetters ? 'select-letter' : ''"
          @click="clickzimu(item.Letters)"
        >
          {{ item.Letters }}
        </p>
      </div>
      <div class="right">
        <div v-for="item in messageArr" :key="item.id">
          <p class="zimu" :class="'make-' + item.zimu">{{ item.zimu }}</p>
          <p v-for="(item1, index) in item.data" :key="index" class="data" @click="choosedata">
            {{ item1 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lettersArr: [
        { id: 0, Letters: "A" },
        { id: 1, Letters: "B" },
        { id: 2, Letters: "C" },
        { id: 3, Letters: "D" },
        { id: 4, Letters: "E" },
        { id: 5, Letters: "F" },
        { id: 6, Letters: "G" },
        { id: 7, Letters: "H" },
      ],
      messageArr: [
        {
          id: 0,
          zimu: "A",
          data: ["模拟数据1", "模拟数据2", "模拟数据3", "模拟数据4"],
        },
        {
          id: 1,
          zimu: "B",
          data: ["模拟数据1", "模拟数据2", "模拟数据3", "模拟数据4"],
        },
        {
          id: 2,
          zimu: "C",
          data: ["模拟数据1", "模拟数据2", "模拟数据3", "模拟数据4"],
        },
        {
          id: 3,
          zimu: "D",
          data: ["模拟数据1", "模拟数据2", "模拟数据3", "模拟数据4"],
        },
        {
          id: 4,
          zimu: "E",
          data: ["模拟数据1", "模拟数据2", "模拟数据3", "模拟数据4"],
        },
        {
          id: 5,
          zimu: "F",
          data: ["模拟数据1", "模拟数据2", "模拟数据3", "模拟数据4"],
        },
        {
          id: 6,
          zimu: "G",
          data: ["模拟数据1", "模拟数据2", "模拟数据3", "模拟数据4"],
        },
        {
          id: 7,
          zimu: "H",
          data: ["模拟数据1", "模拟数据2", "模拟数据3", "模拟数据4"],
        },
      ],
      activeLetters: "",
    };
  },
  components: {},
  watch: {},
  methods: {
    clickzimu(value) {
      // console.log(this.$el)
      this.activeLetters = value;
      let selector = ".make-" + value;
      this.$el.querySelector(selector).scrollIntoView({
        behavior: "smooth", // 平滑过渡
        block: "nearest",
      });
    },
    choosedata(){
      console.log("1")
    }
  },
  created() {},
  mounted() {
    let parentTop = document.querySelector(".right").getBoundingClientRect()
      .top; //获取某个元素相对于视窗的位置集合,这里的值是不变的200
    const that = this;
    document.querySelector(".right").addEventListener("scroll", () => {
      for (let i = 0; i < that.messageArr.length; i++) {
        let letter = that.messageArr[i].zimu;
        let top = document
          .querySelector(".make-" + letter)
          .getBoundingClientRect().top;
        let distance = top - parentTop;
        if (distance >= 0) {
          that.activeLetters = letter;
          //break完全结束循环，continue终止本次循环
          break;
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
.stard1 {
  font-size: 20px;
}
.demo {
  margin: 50px auto;
  width: 300px;
  height: 600px;
  background: #f2f2f2;
  display: flex;
  .left {
    width: 100px;
    height: 600px;
    border-right: 1px solid #ccc;
    .letter {
      text-align: center;
      border-bottom: 1px solid #ccc;
      height: 24px;
      line-height: 24px;
      padding: 10px 0;
      cursor: pointer;
    }
    .select-letter {
      font-weight: 600;
    }
  }
  .right {
    width: 200px;
    height: 600px;
    overflow: auto;
    text-align: center;
    .zimu {
      border-bottom: 1px solid #ccc;
      height: 40px;
      line-height: 40px;
    }
    .data {
      border-bottom: 1px solid #ccc;
      height: 30px;
      line-height: 30px;
      cursor: pointer;
    }
    .select{
      color: red;
      border-bottom: 1px solid red;
    }
  }
}
</style>