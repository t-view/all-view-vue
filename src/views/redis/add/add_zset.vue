<template>
  <div>
    <h2>添加 z_set 的数据结构</h2>
    <el-input v-model="req.key" placeholder="key" />
    <el-input v-model="req.value" placeholder="key" />
    <el-input v-model="req.score" placeholder="key" />

  </div>
</template>

<script>
export default {
  name: 'AddZset',
  data() {
    return {
      req: {
        key: '',
        value: '',
        score: 1
      }
    }
  }
}
</script>

<style scoped>

</style>
