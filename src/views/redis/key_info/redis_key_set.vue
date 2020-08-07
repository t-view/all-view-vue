<template>
  <h2>展示 set 结构</h2>

</template>

<script>
export default {
  name: 'RedisKeySet',
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
