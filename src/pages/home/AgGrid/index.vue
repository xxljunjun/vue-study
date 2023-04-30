<template>
  <div>
    <div class="top-search">
      <el-button @click="reRowTable">刷新某行数据</el-button>
      <el-button @click="clearSelect">清空选择项</el-button>
      <el-button @click="morenSelect">默认选中</el-button>
      <el-button @click="fixedHeader">某一行固定</el-button>
    </div>
    <div ref="agGrid">
      <ag-grid-vue
        style="height: 400px"
        :rowHeight="rowHeight"
        :headerHeight="headerHeight"
        class="ag-theme-alpine"
        rowSelection="multiple"
        :singleClickEdit="true"
        :defaultColDef="defaultColDef"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :rowMultiSelectWithClick="true"
        :getRowId="getRowId"
        :isRowSelectable="isRowSelectable"
        :pinnedTopRowData="pinnedTopRowData"
        @grid-ready="onGridReady"
        @cell-clicked="onCellClicked"
        @row-selected="onRowSelected"
        @selection-changed="onSelectionChanged"
      >
      </ag-grid-vue>
    </div>
    <CustomPinnedRowRenderer />
  </div>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue";
import CustomPinnedRowRenderer from "./components/customPinnedRowRendererVue.js";

export default {
  data() {
    return {
      columnDefs: null,
      rowData: null,
      getRowStyle: null,
      pinnedTopRowData: null,
    };
  },
  components: {
    AgGridVue,
    CustomPinnedRowRenderer,
  },
  created() {
    this.defaultColDef = {
      editable: false, //单元表格是否可编辑
      // enableRowGroup: true,
      // enablePivot: true,
      // enableValue: true,
      sortable: true, //开启排序
      resizable: true, //是否可以调整列大小，就是拖动改变列大小
      filter: true, //开启刷选
      // suppressRowDeselection:true,
      // suppressRowClickSelection:true
      // checkboxSelection :true
    };
      this. rowHeight  = 60,
  this.headerHeight  =100,
    this.getRowStyle = (params) => {
      if (params.node.rowPinned) {
        return { "font-weight": "bold" };
      }
    };
    this.onGridReady = (params) => {
      console.log("params111", params);
      this.gridApi = params.api;
      this.gridApi.sizeColumnsToFit();
    };
    this.getRowId = (params) => {
      console.log("params222", params);
      return params.data.id;
    };
    this.isRowSelectable = (params) => {
      return params.data.name != "小溪流";
    };
    // this.pinnedTopRowData  = [
    //   {
    //     id: -1,
    //       name: '345',
    //       yearOld: '64',
    //       school: '654',
    //   }
    // ]
    
    // this.pagination =  true,  //开启分页（前端分页）
    // this.paginationAutoPageSize =  true, //根据网页高度自动分页（前端分页）
    // this.getRowHeight = (params) => params.node.group ? 50 : 20;
    this.columnDefs = [
      {
        field: "",
        headerCheckboxSelection: true,
        checkboxSelection: true,
        showDisabledCheckboxes: true,
      },
      {
        field: "name",
        headerName: "姓名",
        // valueGetter:'node.id'
        editable: (params) => {
          return true;
        }
      },
      {
        field: "yearOld",
        headerName: "年龄",
        cellRendererSelector: (params) => {
          if (params.node.rowPinned) {
            console.log("111");
            return {
              component: "CustomPinnedRowRenderer",
              params: {
                style: { color: "red" },
              }
            };
          } else {
            // rows that are not pinned don't use any cell renderer
            return undefined;
          }
        },
      },
      {
        field: "school",
        headerName: "学校",
      },
      {
        field: "txtText",
        headerName: "说明",
        width: 350,
        wrapText: true, //可换行
        autoHeight:true
      },
    ];
  },
  destroyed() {},
  mounted() {
    this.getData();
    window.addEventListener("resize", this.autoHeight);
  },
  methods: {
    fixedHeader() {
      this.gridApi.setPinnedTopRowData([
        {
          id: -1,
          name: "345",
          yearOld: "64",
          school: "654",
        }
      ]);
    },
    /**
     * 默认选中的某些行
     */
    morenSelect() {
      this.gridApi.forEachNode(function (node) {
        node.setSelected(node.data.yearOld === 18);
        // node.setSelected(true);
      });
    },
    /**
     * 点击某行
     */
    onRowSelected(val) {
      console.log("val>>>", val);
    },
    /**
     * 选择的行数据
     */
    onSelectionChanged() {
      console.log(this.gridApi.getSelectedNodes());
      console.log(this.gridApi.getSelectedRows());
    },
    /**
     * 清空所有的选择
     */
    clearSelect() {
      console.log("this.gridApi", this.gridApi);
      this.gridApi.deselectAll();
    },
    /**
     * 单元格的点击事件
     */
    onCellClicked(row) {
      console.log(row);
    },
    /**
     * 自动刷新表格高度
     */
    autoHeight() {
      // let height = document.body.offsetHeight;
      // console.log(height);
      // let dom = document.getElementsByClassName('ag-theme-alpine')[0]
      // dom.style.height = height
    },
    /**
     * 获取表格数据
     */
    getData() {
      this.rowData = [
        {
          name: "小溪流",
          yearOld: 12,
          school: "嘉应学院",
          id: 1,
          txtText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          name: "小毛",
          yearOld: 14,
          school: "北京学院",
          id: 2,
          txtText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        },
        {
          name: "小黄",
          yearOld: 18,
          school: "上海",
          id: 3,
          txtText: '112233'
        }
      ];
      // for (let i = 0; i < 1000; i++) {
      //   this.rowData.push({
      //     id: i + 5,
      //     name: i,
      //     yearOld: i,
      //     school: i,
      //   });
      // }
      if (this.gridApi) {
        this.gridApi.setRowData(this.rowData);
      }
    },
    /**
     * 刷新某行数据
     */
    reRowTable() {
      //方式一：
      const rowNodeByID = this.gridApi.getRowNode(1); //获取id为dd的数据行
      //需要更新的数据
      const newRowById = {
        id: 1,
        name: "更新的行",
        yearOld: "无性别",
        school: "10000000000",
      };
      rowNodeByID.setData(newRowById); // 设置数据

      //方式二：
      const selRow = this.gridApi.getSelectedRows();
      this.gridApi.updateRowData({
        update: selRow,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.top-search {
  display: flex;
  margin-bottom: 10px;
}
</style>
