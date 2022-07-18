<template>
  <div class="dateFns">
    <ul>
      <li><a href="#angular">angular</a></li>
      <li><a href="#vue">vue</a></li>
      <li><a href="#react">react</a></li>
    </ul>
  </div>
</template>
<script>
import { compareAsc, format, addDays, getDate } from "date-fns";
import { enUS, enAU, zhCN, th } from "date-fns/locale";

import { nanoid } from "nanoid/async";
import { customAlphabet } from "nanoid";
export default {
  data() {
    return {
      id: "",
    };
  },
  mounted() {
    const nanoid = customAlphabet("1234567890abcdef", 10);
    console.log(">>>>", nanoid);
    console.log(">>>>", nanoid(10));
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.dateFns {
}
</style>
