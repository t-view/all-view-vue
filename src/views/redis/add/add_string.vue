<template>
  <div>
    <h2>添加字符串的redis属性</h2>
    <h3>{{ big_key }}</h3>
    <el-input v-model="req.key" placeholder="key" />
    <el-input v-model="req.value" placeholder="value" />

  </div>
</template>

<script>
export default {
  name: 'AddString',
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
