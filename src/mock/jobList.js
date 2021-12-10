let jobList = {
  status: 200,
  message: "success",
  data: {
    list: [
      {
        id: 1,
        professionId: "230000",
        job: "教师",
      },
      {
        id: 2,
        professionId: "240000",
        job: "医生",
      },
      {
        id: 3,
        professionId: "250000",
        job: "公务员",
      },
    ],
  },
};
let txtlist = {
  status: 200,
  message: "success",
  data: {
    title:
      "计提日期|机构名称|费用类型|是否中登|基金代码|基金名称|是否公开基金|保有份额|单位净值|费率|分成比例|费用金额",
    "list|100": [
      {
        id: 1,
        time: "20200901",
        who: "大成基金管理有限公司",
        type: "XIAOSHOU_FEE|N",
        isout: "N",
        code: "000128",
        name: "大成景安短融债券A",
        has: "Y",
        edu: "2663820.73",
        danwei: "1.2687",
        feilv: "0.003",
        percent: "10%",
        money: "27.7",
      },
    ],
  },
};
export default {
  "get|/parameter": jobList,
  "get|/txtlist": txtlist,
};

// let jobList = [
//   {
//     id: 1,
//     professionId: "230000",
//     job: "教师",
//   },
//   {
//     id: 2,
//     professionId: "240000",
//     job: "医生",
//   },
//   {
//     id: 3,
//     professionId: "250000",
//     job: "公务员",
//   },
// ];
// export default {
//   "get|/parameter": (option) => {
//     return {
//       status: 200,
//       message: "success",
//       data: jobList,
//     };
//   },
// };
