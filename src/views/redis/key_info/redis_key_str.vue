<template>
  <div>

    <h2>展示 string 结构</h2>
    <h2>{{ key }}</h2>
    <h2>{{ value }}</h2>
  </div>

</template>

<script>
export default {
  name: 'RedisKeyStr',
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
      key: 'key',
      value: 'value'
    }
  },
  created() {
    console.log('父组件传递的值', this.param)
  }
}
</script>

<style scoped>

</style>
