<template>
  <div>
    <h2>添加 set 的数据结构</h2>
    <el-input v-model="req.key" placeholder="key" />
    <el-input v-model="req.value" placeholder="key" />
  </div>

</template>

<script>
export default {
  name: 'AddSet',
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
