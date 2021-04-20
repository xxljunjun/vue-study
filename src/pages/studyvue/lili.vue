<template>
  <div class="lili_Box">
    <div class="lili">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="公司信息" name="first">
          <Company />
        </el-tab-pane>
        <el-tab-pane label="关联信息" name="second"> </el-tab-pane>
        <el-tab-pane label="人事信息" name="third"> </el-tab-pane>
      </el-tabs>
    </div>
    <div class="table_Box">
      <!-- 表格 -->
      <div class="caozuo">
        <div class="text_1">TES数据信息</div>
        <div>
          <el-button>审 批</el-button>
          <el-button type="primary">导出EXCEL</el-button>
        </div>
      </div>
      <div class="table">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="日期" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="address" label="地址" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="address" label="地址" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="address" label="地址" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="address" label="地址" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="address" label="地址" show-overflow-tooltip>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="fenye">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="sizes, prev, pager, next"
            :total="1000"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Company from "./son/company";
export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
    };
  },
  components: {
    Company,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.lili_Box {
  color: #040404;
  font-size: 14px;
}
.el-button {
  height: 36px;
}
/deep/.el-input {
  .el-input__inner {
    height: 32px;
    // width: 270px;
  }
}
/deep/.el-tabs {
  .el-tabs__header {
    padding-left: 24px;
    margin: 0;
    padding-top: 18px;
  }
  .el-tabs__nav {
    color: #666666;
  }
}
.lili {
  //   width: 1192px;
  height: 338px;
  background: #ffffff;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  color: #666666;
}
.table_Box {
  height: 100px;
  margin-top: 20px;
  // width: 1192px;
  height: 496px;
  background: #ffffff;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  position: relative;
  .caozuo {
    display: flex;
    justify-content: space-between;
    height: 68px;
    align-items: center;
    padding: 0 22px;
    .text_1 {
      font-size: 18px;
      font-weight: 500;
      color: #333333;
      line-height: 32px;
    }
  }
  .fenye {
    position: absolute;
    right: 0;
	margin-top: 5px;
  }
}
</style>