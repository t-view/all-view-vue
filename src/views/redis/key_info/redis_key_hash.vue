<template>
  <div>
    <h2>展示 hash 结构</h2>
    <h3>{{ big_key }}</h3>

    <el-table
      :data="tableResData"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        label="key"
        width="180"
      /><el-table-column
        prop="key"
        label="key"
        width="180"
      />
      <el-table-column
        prop="value"
        label="value"
        width="180"
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
      tableResData: [],
      tableData: [{ 'c': 'A' }, { 'A': 'NEW_VALUE' }, { 'b': 'A' }]
    }
  },
  created() {
    console.log('父组件传递的值', this.param)
    this.tableData.forEach(
      element => {
        for (const key in element) {
          this.tableResData.push({ 'key': key, 'value': element[key] })
        }
      }
    )
  }
}
</script>

<style scoped>

</style>
