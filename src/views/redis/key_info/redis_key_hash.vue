<template>
  <div>
    <h2>展示 hash 结构</h2>
    <h3>{{ big_key }}</h3>

    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      />
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      />
      <el-table-column
        prop="address"
        label="地址"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'RedisKeyHash',
  props: {
    param: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      big_key: 'uc3:company',
      tableData: [{ 'c': 'A' }, { 'A': 'NEW_VALUE' }, { 'b': 'A' }]
    }
  },
  created() {
    console.log('父组件传递的值', this.param)
  }
}
</script>

<style scoped>

</style>
