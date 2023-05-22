<template>
  <div
    id="box"
    @mousedown="mousedown($event)"
    @mouseup="mouseup"
    @mousemove="mousemove"
    class=""
  ></div>
</template>
  
  <script>
/**
 * clientHeifht
 *
 *
 */
/*
  element.getBoundingClientRect():方法返回一个 DOMRect 对象，其提供了元素的大小及其相对于视口的位置。
    width: 100
    height: 100 

    bottom: 210
    right: 270

    top: 110
    y: 110
    x: 170
    left: 170
    
    
 */
/*
   //           添加属性：
            //     obj.setAttribute('attr_name','attr_value');
            //  获取属性值：
            //     obj.getAttribute('attr_name');
            //  删除属性：
            //     obj.removeAttribute('attr_name');
*/
export default {
  components: {},
  data() {
    return {
      dom: null,
    };
  },
  methods: {
    mousedown(e) {
      console.log("鼠标按下", e);
      let elment = e.target
      let eleId = elment.getAttribute("id");
      switch (eleId) {
        case "box":
          this.creatBlueBox();
          break;
        case "blue-box":
        elment.style.cursor = 'move'
        this.dom = elment
          break;
      }
    },
    mouseup(e) {
      // console.log("鼠标松开", e);
      let eleId = e.target.getAttribute("id");
      console.log("鼠标松开", eleId);
      if (this.dom) {
            this.dom.style.top = e.offsetY + "px";
            this.dom.style.left = e.offsetX + "px";
            this.dom.style.opacity = 1;}
            

      // switch (eleId) {
      //   case "box":
      //     if (this.dom) {
      //       this.dom.style.top = e.offsetY + "px";
      //       this.dom.style.left = e.offsetX + "px";
      //       this.dom.style.opacity = 1;
            
      //     }
      //     break;
      //   case "blue-box":

      //     break;
      // }
    },
    creatBlueBox() {
      this.dom = null;
      this.dom = document.createElement("div");
      this.dom.setAttribute("id", "blue-box");
      let box = document.getElementById("box");
      this.dom.style.width = "100px";
      this.dom.style.height = "100px";
      this.dom.style.background = "blue";
      this.dom.style.position = "absolute";
      this.dom.style.opacity = 0;
      box.appendChild(this.dom);
    },
    mousemove(e) {
      // console.log('鼠标移动',e)
      // let eleId = e.target.getAttribute("id");
      // switch (eleId) {
      //   case "box":
      //     break;
      //   case "blue-box":
      //   if (this.dom) {
      //       this.dom.style.top = e.offsetY + "px";
      //       this.dom.style.left = e.offsetX + "px";
      //     }
      //     break;
      // }
     
    },
  },
};
</script>
  
  <style lang="scss" scoped>
#box {
  height: 800px;
  // opacity: 1;
  // cursor: move;
}
</style>
  