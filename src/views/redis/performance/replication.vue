<template>
  <div>
    <h2>Replication</h2>
    <el-card>
      <li>role: {{ this.replication.role }}</li>
      <li>connectedSlaves: {{ this.replication.connectedSlaves }}</li>
      <li>masterReplOffset: {{ this.replication.masterReplOffset }}</li>
      <li>replBacklogActive: {{ this.replication.replBacklogActive }}</li>
      <li>replBacklogSize: {{ this.replication.replBacklogSize }}</li>
      <li>replBacklogFirstByteOffset: {{ this.replication.replBacklogFirstByteOffset }}</li>
      <li>replBacklogHistlen: {{ this.replication.replBacklogHistlen }}</li>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Replication',
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
      replication: {
        'role': '',
        'connectedSlaves': '',
        'masterReplOffset': '',
        'replBacklogActive': '',
        'replBacklogSize': '',
        'replBacklogFirstByteOffset': '',
        'replBacklogHistlen': ''
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
