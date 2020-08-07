<template>
  <h2>展示 zset 结构</h2>

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
    return {}
  },
  created() {
    console.log('父组件传递的值', this.param)
  }
}
</script>

<style scoped>

</style>
