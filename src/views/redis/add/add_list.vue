<template>
  <div>
    <h2>添加list的数据结构</h2>
    <el-input v-model="req.key" placeholder="key" />
    <el-input v-model="req.value" placeholder="value" />
  </div>
</template>

<script>
export default {
  name: 'AddList',
  data() {
    return {
      req: {
        key: '',
        value: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
