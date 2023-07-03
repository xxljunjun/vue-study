<template>
  <div>
    <el-button @click="goToAdd">点我新增</el-button>
    <el-button @click="goToSearch">点我查询</el-button>
    <el-table
      v-loading="isLoading"
      height="600"
      :data="tableData"
      style="width: 100%"
      element-loading-background="rgba(0, 0, 0, 0.5)"
      element-loading-text
      element-loading-spinner="el-icon-loading"
    >
      <el-table-column
        v-for="item in columns"
        :key="item.key"
        :prop="item.key"
        :label="item.name"
        :width="item.width"
      >
        <template slot-scope="scope">
          <el-select
            v-if="item.type === 'select'"
            v-model="scope.row[item.key]"
            placeholder="请选择"
            @change="selectChang(scope.$index, scope.row)"
          >
            <el-option
              v-for="val in selectArr"
              :key="val.value"
              :label="val.label"
              :value="val.value"
            >
            </el-option>
          </el-select>
          <!-- 可以再这里加更多的v-else-if判断 -->
          <div v-else>{{ scope.row[item.key] }}</div>
        </template>
      </el-table-column>

      <el-table-column key="operation" prop="operation" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <addEditDialog
      :isEdit="isEdit"
      :editData="editData"
      :status.sync="dialogStatus"
      @on-comfire="dialogComfire"
      @on-cancle="dialogCancle"
    />
  </div>
</template>
<script>
import addEditDialog from "./components/add-edit-dialog.vue";
import { getUser, deleteUserById } from "@/api/user.js";
export default {
  data() {
    return {
      isLoading:false,
      //表格列
      columns: [
        {
          key: "id",
          name: "id",
          width: 180,
        },
        {
          key: "name",
          name: "id姓名",
          width: 180,
        },
        {
          key: "sex",
          name: "性别",
          width: 180,
        },
        {
          key: "projectId",
          name: "项目ID",
          width: 180,
        },
        {
          key: "projectName",
          name: "项目名称",
          width: 180,
        },
        {
          key: "projectMan",
          name: "责任人",
          width: 180,
        },
        {
          key: "projectState",
          name: "项目状态",
          width: 180,
          type: "select", //用来判断是下拉框
        },
        {
          key: "remark",
          name: "备注",
          width: 180,
        },
      ],
      //下拉选择的数据（看需求是否要写死还是后端接口返回）
      selectArr: [
        {
          label: "计划",
          value: 1,
        },
        {
          label: "进行中",
          value: 2,
        },
        {
          label: "已完成",
          value: 3,
        },
      ],
      //表格数据
      tableData: [],
      dialogStatus: false,
      isEdit: false,
      editData: {},
    };
  },
  components: {
    addEditDialog,
  },
  mounted() {
    this.toGetUser();
  },
  methods: {
    goToSearch() {
      this.toGetUser();
    },
    async toGetUser() {
      this.isLoading = true;
      const { data } = await getUser();
      let obj = {
        projectId: "P00001",
        projectName: "BMW北方区智慧5号工厂建设项目",
        projectMan: "张大军, BH0001",
        projectState: 1, //后端返回的对应的项目状态
        remark: "备注",
      };
      data.forEach((val) => {
        Object.entries(obj).forEach((k) => {
          val[k[0]] = k[1];
        });
      });
      this.tableData = data;
       this.isLoading = false;
    },
    /**
     * 子组件触发的确认按钮
     */
    dialogComfire(data) {
      console.log("data", data);
      this.toGetUser();
    },
    /**
     * 子组件触发的取消按钮
     */
    dialogCancle(data) {
      console.log("data", data);
    },
    /**
     * 新增
     */
    goToAdd() {
      //清空还原可编辑信息
      this.isEdit = false;
      this.editData = {};
      //打开弹窗
      this.dialogStatus = true;
    },
    /**
     * 项目状态发生改变触发
     */
    selectChang(index, row) {
      console.log("index", index);
      console.log("row", row);
      //在这里调后端接口改变状态
    },
    /**
     * 编辑
     */
    handleEdit(index, row) {
      console.log("index", index);
      console.log("row", row);
      this.editData = row;
      this.dialogStatus = true;
      this.isEdit = true;
    },
    /**
     * 删除
     */
    async handleDelete(index, row) {
      console.log("index", index);
      console.log("row", row);
      const { id } = row;
      const res = await deleteUserById({ id });
      console.log("res", res);
      this.toGetUser();
    },
  },
};
</script>
