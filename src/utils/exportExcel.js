// import XLSX from "xlsx";  //用这个导出会报错
const XLSX = require("xlsx");
import XLSXS from "xlsx-style";
import FileSaver from "file-saver";

export function exportExcel() {
  // 需要导出的数据
  let excelData = [
    ["幼儿园课表", null, null, null], // 标题
    ["序号", "课程名称", "教师名称", "上课地点"], // 表头
    ["11.1234", "11,211.1234", "11.1234", "操场"],
    ["11.1234", "11,211.1234", "11.1234", "操场"],
    ["11.1234", "11,211.1234", "11.1234", "操场"],
    ["11.1234", "11,211.1234", "11.1234", "操场"],
    ["11.1234", "11,211.1234", "11.1234", "操场"],
  ];

  // 导出的excel文件名
  const filename = "幼儿园课程表.xlsx";

  // Excel第一个sheet的名称
  const ws_name = "Sheet1";
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(excelData);
  XLSX.utils.book_append_sheet(wb, ws, ws_name); // 将数据添加到工作薄

  // 设置标题行单元格合并
  // s即start, e即end, r即row, c即column
  // 合并从--0行0列开始,到0行3列
  ws["!merges"] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 3 } }];

  // 设置单元格宽度
  ws["!cols"] = [
    {
      wpx: 40,
    },
    {
      wpx: 100,
    },
    {
      wpx: 100,
    },
    {
      wpx: 100,
    },
  ];

  /*
    设置单元格其他样式
    这里列举一部分,其他样式大同小异,自行网上搜索
   */

  // 可以遍历全部单元格,进行样式设置
  for (let i in ws) {
    if (i === "B1") {
      ws[i].s = {
        // 字体
        font: {
          name: "仿宋",
          sz: 14,
          bold: true,
        },
      };
    } else if (i === "B2") {
      ws[i].s = {
        // 居中
        alignment: {
          horizontal: "center",
          vertical: "center",
          wrapText: true,
        },
      };
    } else if (i === "B3") {
      ws[i].s = {
        // 单元格边框
        border: {
          top: {
            style: "thin",
          },
          bottom: {
            style: "thin",
          },
          left: {
            style: "thin",
          },
          right: {
            style: "thin",
          },
        },
      };
    }
  }

  // 导出Excel, 注意这里用到的是XLSXS对象
  let wbout = XLSXS.write(wb, {
    bookType: "xlsx",
    bookSST: false,
    type: "binary",
  });
  FileSaver.saveAs(
    new Blob([s2ab(wbout)], {
      type: "application/octet-stream",
    }),
    filename
  );
}

/**
 * 工具方法
 */
function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
}
