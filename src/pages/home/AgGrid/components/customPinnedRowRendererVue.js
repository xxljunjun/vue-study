export default {
    template: `
        <span :style="mystyle">{{ value }}</span>
      `,
    data: function () {
      return {
      };
    },
    computed:{
      mystyle(){
        return this.params?.style
      },
      value(){
        return this.params?.value
      }
      
    }
  };