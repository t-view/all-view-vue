<template>
  <div><h2>Keyspace</h2>

    <el-card />
  </div>
</template>

<script>
export default {
  name: 'Keyspace',
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
      keyspace: {

      }
    }
  },
  created() {
    console.log('父组件传递的值', this.param)
  }

}
</script>

<style scoped>

</style>
