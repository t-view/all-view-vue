<template>
  <div>

    <h2>展示 zset 结构</h2>
    <el-table
      :data="tableResData"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        label="key"
        width="180"
      />
      <el-table-column
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
  name: 'RedisKeyZset',
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
      tableResData: [],
      tableData: [{ 'score': 2.0, 'value': 'a' }, { 'score': 2.0, 'value': 'b' }]
    }
  },
  created() {
    console.log('父组件传递的值', this.param)
    this.tableData.forEach(
      element => {
        this.tableResData.push({ 'key': element['value'], 'value': element['score'] })
      }
    )
  }
}
</script>

<style scoped>

</style>
