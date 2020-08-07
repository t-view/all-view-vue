<template>
  <div>
    <h2>Cluster</h2>

    <el-card>
      <li>clusterEnabled: {{ this.cluster.clusterEnabled }}</li>
    </el-card>

  </div>
</template>

<script>
export default {
  name: 'Cluster',
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
      cluster: {
        'clusterEnabled': '123'
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
