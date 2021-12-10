/**
 * @function:生成TXT文件
 * @param header 表格头部
 * @param tableData 表格头部
 * @param txtName 表格头部
 */
export default function getTXT(header, tableData, txtName) {
  var title = header;

  var str = "";
  tableData.forEach((item) => {
    str +=
      item.time +
      "|" +
      item.who +
      "|" +
      item.type +
      "|" +
      item.isout +
      "|" +
      item.code +
      "|" +
      item.name +
      "|" +
      item.has +
      "|" +
      item.edu +
      "|" +
      item.danwei +
      "|" +
      item.feilv +
      "|" +
      item.percent +
      "|" +
      item.money +
      "\r\n";
  });
  var allStr = title + "\r\n" + str;
  var export_blob = new Blob([allStr]);
  var save_link = document.createElement("a");
  save_link.href = window.URL.createObjectURL(export_blob);
  save_link.download = txtName + ".txt";
  fakeClick(save_link);
}
function fakeClick(obj) {
  var ev = document.createEvent("MouseEvents");
  ev.initMouseEvent(
    "click",
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  obj.dispatchEvent(ev);
}
