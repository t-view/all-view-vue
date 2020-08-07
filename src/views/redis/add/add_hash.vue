<template>
  <div>
    <h2>添加 hash 的数据结构</h2>
    <el-input v-model="req.key" placeholder="key" />
    <el-input v-model="req.sk" placeholder="key" />
    <el-input v-model="req.value" placeholder="key" />
  </div>

</template>

<script>
export default {
  name: 'AddHash',
  data() {
    return {
      req: {
        key: '',
        sk: '',
        value: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
