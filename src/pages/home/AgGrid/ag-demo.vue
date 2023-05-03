<template>
  <div>
    <div class="top-search">
      <el-button @click="reflashRowData">刷新某行数据</el-button>
    </div>
    <div ref="agGrid">
      <ag-grid-vue
      style="width: 100%; height: 400px;"
        class="ag-theme-alpine"
        rowSelection="multiple"
        editType = 'fullRow'
        :rowHeight="rowHeight"
        :singleClickEdit="true"
        :defaultColDef="defaultColDef"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :getRowId="getRowId"
        @grid-ready="onGridReady"
        @cell-value-changed="onCellValueChanged"
        @row-value-changed="onRowValueChanged"
      >
      <!-- editType = 'fullRow' -->
      </ag-grid-vue>
    </div>
  </div>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue";
export default {
  data(){
    return {
      rowData:[]
    }
  },
  components: {
    AgGridVue,
  },
  created(){
    this. rowHeight  = 60
    // this.headerHeight  =100
    this.getRowId = (params) => {
      return params.data.id;
    };
    this.defaultColDef = {
      resizable: true,
        initialWidth: 200,
      // initialWidth: 200,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      editable: false, //单元表格是否可编辑
      // enableRowGroup: true,
      // enablePivot: true,
      // enableValue: true,
      sortable: false, //开启排序
      // resizable: true, //是否可以调整列大小，就是拖动改变列大小
      filter: false, //开启刷选
      // suppressRowDeselection:true,
      // suppressRowClickSelection:true
      // checkboxSelection :true
    };
    this.onGridReady = (params) => {
      this.gridApi = params.api;
      this.gridApi.sizeColumnsToFit();

      // this.gridApi.stopEditing();
      // this.gridApi.startEditingCell({
      //   rowIndex: 0,
      //   colKey: 'school',
      // });
      // this.gridApi.startEditingCell({
      //   rowIndex: 1,
      //   colKey: 'school',
      // });
      // this.gridApi.startEditingCell({
      //   rowIndex: 2,
      //   colKey: 'school',
      // });
    };
    this.columnDefs = [
      {
        field: "",
        headerCheckboxSelection: true,
        checkboxSelection: true,
      },
      {
        field: "name",
        headerTooltip:'name',
        headerName: "姓名",
        headerComponentParams: {
        template:
            '<div class="ag-cell-label-container" role="presentation">' +
            '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
            '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
            '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
            '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
            '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
            '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
            '    <span class="red">*</span></span></span> <span ref="eText" class="ag-header-cell-text" role="columnheader"></span>' +
            '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
            '  </div>' +
            '</div>'
    },
        editable: (params) => {
          return true;
        },
        cellStyle: params => {
          console.log('样式变化',params)
            if (Number(params.data.yearOld) > 12) {
                //mark police cells as red
                return {color: 'red', backgroundColor: 'green'};
            }else{
              return {
                color:'#000',
                backgroundColor:'#fff'
              }
            }
        }
      },
      {
        field: "yearOld",
        headerName: "年98678978978967896986789龄",
        editable: (params) => {
          return true;
        },
      },
      {
        field: "school",
        headerName: "学5675675674567456780-98-90-90-8-456745674675校",
      },
      {
        field: "txtText",
        headerName: "说明3第三方个地方官多个地方官的11111111111111111111111",
      },
    ];
  },
  mounted() {
    this.getData();
  },
  methods:{
    onCellValueChanged(event) {
      console.log('event11',event)
      event.node.setData(event.data)
      // console.log(
      //   'onCellValueChanged: ' + event.colDef.field + ' = ' + event.newValue
      // );
    },
    onRowValueChanged(event) {
      console.log('event',event)

      // var data = event.data;
      // console.log(
      //   'onRowValueChanged: (' +
      //     data.make +
      //     ', ' +
      //     data.model +
      //     ', ' +
      //     data.price +
      //     ', ' +
      //     data.field5 +
      //     ')'
      // );
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
     * 改变某个条件刷新一行数据
     */
    reflashRowData(){
      // console.log( this.gridApi.getSelectedRows());
      // console.log(this.gridApi.getSelectedNodes());



      let arr = this.gridApi.getSelectedNodes()
      arr.forEach((val)=>{
        //刷新某一行的数据
        val.setData({
          id:val.id,
          name: "更新的行",
        yearOld: 13,
        school: "10000000000",
        })
        //刷新某一个单元格的数据
        // val.setDataValue('yearOld',15)
      })
      
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.red{
  color: red !important;
}
</style>
<!-- <style>
.red{
  color: red;
}
</style> -->