<template>
  <div class="elcel">
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
  /**
   * // 往期佳作清单下载(后端返回excel)
export function downloadBest(params: any) {
  return request({
    url: `${realfixApi}/activity/download-best`,
    method: 'get',
    responseType: 'blob',
    params,
  })
}
   */
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
  methods: {
    /**
     * @function:往期佳作清单下载
     */
    // ListiDownload() {
    //   let params = {};
    //   params.startTime = this.formatTime(this.startDate);
    //   params.endTime = this.formatTime(this.endDate);
    //   downloadBest(params).then((res) => {
    //     // debugger
    //     console.log(res); //打印出来是blob对象，已经不是乱码了
    //     let url = window.URL.createObjectURL(res); //表示一个指定的file对象或Blob对象
    //     // console.log(url,"看一下这是啥")
    //     let a = document.createElement("a");
    //     document.body.appendChild(a);
    //     // let fileName = res.headers['content-disposition'].split(';')[1].split('=')[1] //filename名称从后端返回的headers截取
    //     // let fileName = params.objectName // 这里也可以这样获取到文件名
    //     a.href = url;
    //     a.download = "往期佳作案例"; //命名下载名称
    //     a.click(); //点击触发下载
    //     window.URL.revokeObjectURL(url); //下载完成进行释放
    //   });
    // },
  },
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
