<template>
  <div class="mybigNumber">
    11111111
  </div>
</template>

<script>
import BigNumber from "bignumber.js";
export default {
  mounted() {
    let x = new BigNumber(0.4);
    let y = x.minus(0.1);
    console.log("x+y", 0.4 - 0.1); //0.30000000000000004
    console.log("y", y.toNumber()); //0.3
  },
};
</script>

<style lang="scss" scoped>
.mybigNumber {
}
</style>
