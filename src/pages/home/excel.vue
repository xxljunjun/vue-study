<template>
  <div class="elcel">
    <h2>vue-json-excel前端导出excel</h2>
    <download-excel
      class="btn btn-default"
      :data="json_data"
      :fields="json_fields"
      worksheet="sheet"
      name="24352345"
      type="xlsx"
    >
      Download Excel (you can customize this with html code!)
    </download-excel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      json_fields: {
        名字: "name",
        城市: "city",
        电话: "country",
      },
      json_data: [
        {
          name: "诈身份",
          city: "直达佛个地方",
          country: "111.0000",
        },
        {
          name: "Thessaloniki",
          city: "Athens",
          country: "222.2222",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.elcel {
  .btn {
    cursor: pointer;
    height: 50px;
    width: 300px;
    background: red;
    border-radius: 10px;
    color: #fff;
    margin-top: 50px;
  }
}
</style>
