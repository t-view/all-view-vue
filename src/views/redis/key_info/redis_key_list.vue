<template>
  <div>
    <h2>展示 list 结构</h2>
    <h2>{{ big_key }}</h2>

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
        prop="value"
        label="value"
        width="180"
      />

    </el-table>
  </div>

</template>

<script>
export default {
  name: 'RedisKeyList',
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
      big_key: 'list',
      tableResData: [],
      tableData: ['a', 'c', 'ccc']
    }
  },
  created() {
    console.log('父组件传递的值', this.param)
    this.tableData.forEach(
      e => {
        this.tableResData.push({ 'value': e })
      }
    )
  }
}
</script>

<style scoped>

</style>
