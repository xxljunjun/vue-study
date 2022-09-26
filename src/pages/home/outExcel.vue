<template>
  <div class="outExcel" @click="saveExcel">1111</div>
</template>

<script>
import { exportExcel } from "@/utils/exportExcel.js";
export default {
  data() {
    return {};
  },
  methods: {
    saveExcel() {
      exportExcel();
    },
  },
};
</script>

<style lang="scss" scoped></style>
