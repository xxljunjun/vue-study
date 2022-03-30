<template>
  <div class="elcel">
    <h2>vue-json-excel前端导出excel</h2>
    <download-excel
      class="btn btn-default"
      :data="json_data"
      :fields="json_fields"
      worksheet="My Worksheet"
      type="csv"
      name="smartWatch.xls"
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
        "Complete name": "name",
        City: "city",
        Telephone: "phone.mobile",
        "Telephone 2": {
          field: "phone.landline",
          callback: (value) => {
            return `Landline Phone - ${value}`;
          },
        },
      },
      json_data: [
        {
          name: "诈身份",
          city: "直达佛个地方",
          country: "United States",
          birthdate: "1978-03-15",
          phone: {
            mobile: "1-541-754-3010",
            landline: "(541) 754-3010",
          },
        },
        {
          name: "Thessaloniki",
          city: "Athens",
          country: "Greece",
          birthdate: "1987-11-23",
          phone: {
            mobile: "+1 855 275 5071",
            landline: "(2741) 2621-244",
          },
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
