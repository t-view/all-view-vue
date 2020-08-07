<template>
  <div><h2>clients</h2>

    <el-card>
      <li>connectedClients: {{ this.clients.connectedClients }}</li>
      <li>clientLongestOutputList: {{ this.clients.clientLongestOutputList }}</li>
      <li>clientBiggestInputBuf: {{ this.clients.clientBiggestInputBuf }}</li>
      <li>blockedClients: {{ this.clients.blockedClients }}</li>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Clients',
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
      clients: {
        'connectedClients': '',
        'clientLongestOutputList': '',
        'clientBiggestInputBuf': '',
        'blockedClients': ''
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
