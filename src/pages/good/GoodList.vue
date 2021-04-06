<template>
<div class="qf-goodlist">
  <div>商品列表</div>

  <div style="margin:25px 0;">
    <!-- 栅格系统 -->
    <!-- 一行 -->
    <el-row align='middle' type='flex'>
      <el-col :span='2'>
        <div class="qf-filter-label">名称搜索:</div>
      </el-col>
      <el-col :span='4'>
        <el-input clearable v-model="filter.searchText" size='mini' @change='textFilter'></el-input>
      </el-col>
      <el-col :span='2' :offset='1'>
        <div class="qf-filter-label">品类筛选:</div>
      </el-col>
      <el-col :span='4'>
        <CateSelect @change='cateFilter' clearable size='mini' v-model='filter.cate'></CateSelect>
      </el-col>

      <el-col :span="4" :offset='7'>
        <div style="textAlign:right">
          <el-button type="primary" size='mini' @click='skipToAdd'>新增</el-button>
        </div>
      </el-col>
    </el-row>

    <!-- 第二行 -->
    <el-row align='middle' type='flex'>
      <el-col :span='2'>
        <div class="qf-filter-label">日期筛选:</div>
      </el-col>
      <el-col :span='4'>
        <el-date-picker
          v-model="filter.date"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size='mini'
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-col>
    </el-row>
  </div>

  <div class="qf-table">
    <el-table
      :data="good.list"
      style="width: 100%">

      <el-table-column
        prop="date"
        label="商品"
        align='center'>
        <template slot-scope="scope">
          <div class="qf-row-img">
            <img :src="$img.imgBaseUrl+scope.row.img" alt="img">
            <div v-text='scope.row.name'></div>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        prop="desc"
        label="描述"
        align='center'>
      </el-table-column>

      <el-table-column
        prop="price"
        align='center'
        label="价格">
      </el-table-column>

      <el-table-column
        prop="hot"
        align='center'
        label="是否热销">
        <template slot-scope="scope">
          <span v-text='scope.row.hot ? "热销" : "否"'></span>
        </template>
      </el-table-column>

      <el-table-column label="操作" align='center'>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="editGood(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="delGood(scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>

  <div class="qf-page">
    <el-pagination
      @size-change="sizeChange"
      @current-change="pageChange"
      :current-page="1"
      :page-sizes="[2, 5, 10, 20, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      :page-size.sync="filter.size"
      :total="good.total">
    </el-pagination>
  </div>
</div>
</template>

<script>
import { CateSelect } from '@/components/'
export default {
  components: {
    CateSelect
  },
  data: function() {
    return {
      good: {},
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        },{
          text: '最近三天',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 3)
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      // 专门用于筛选
      filter: {
        text: '',
        cate: '',
        size: 2,
        page: 1,
        hot: true,
        date: ''
      }
    }
  },
  mounted() {
    this.initTable()
  },
  methods: {
    initTable(flag) {
      if(!flag) this.filter.page = 1
      this.$http.fetchGoodList(this.filter).then(res=>{
        // console.log('商品列表', res)
        this.good = res
      })
    },
    // 跳转到商品新增页面
    skipToAdd() {
      this.$router.history.push('/good/add/0')
    },
    // 当size变化时
    sizeChange(val) {
      console.log('size', val)
      this.filter.size = val
      this.initTable()
    },
    // 当页码发生变化
    pageChange(val) {
      console.log('page', val)
      this.filter.page = val
      this.initTable(true)
    },
    delGood(item) {
      console.log('item', item)
      this.$confirm(`你确定要删除 ${item.name} 吗？`, '危险', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 调接口删除商品
          this.$http.fetchGoodDel({id: item._id}).then(()=>{
            this.initTable(true)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    editGood(item) {
      console.log('item', item)
      this.$router.push('/good/add/'+item._id)
    },
    // 搜索
    textFilter(val) {
      this.filter.text = val
      this.initTable()
    },
    // 品类帅选
    cateFilter() {
      this.initTable()
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-goodlist {
  font-size: 14px;
}
.qf-page {
  text-align: right;
  padding: 20px;
}
.qf-row-img {
  text-align: center;
  &>img {
    display: inline-block;
    width: 60px;
    height: 60px;
  }
}
</style>
