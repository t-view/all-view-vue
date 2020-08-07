<template>
  <div>

    <h2>Stats</h2>

    <el-card>
      <li>totalConnectionsReceived: {{ this.stats.totalConnectionsReceived }}</li>
      <li>totalCommandsProcessed: {{ this.stats.totalCommandsProcessed }}</li>
      <li>instantaneousOpsPerSec: {{ this.stats.instantaneousOpsPerSec }}</li>
      <li>totalNetInputBytes: {{ this.stats.totalNetInputBytes }}</li>
      <li>totalNetOutputBytes: {{ this.stats.totalNetOutputBytes }}</li>
      <li>instantaneousInputKbps: {{ this.stats.instantaneousInputKbps }}</li>
      <li>instantaneousOutputKbps: {{ this.stats.instantaneousOutputKbps }}</li>
      <li>rejectedConnections: {{ this.stats.rejectedConnections }}</li>
      <li>syncFull: {{ this.stats.syncFull }}</li>
      <li>syncPartialOk: {{ this.stats.syncPartialOk }}</li>
      <li>syncPartialErr: {{ this.stats.syncPartialErr }}</li>
      <li>expiredKeys: {{ this.stats.expiredKeys }}</li>
      <li>evictedKeys: {{ this.stats.evictedKeys }}</li>
      <li>keyspaceHits: {{ this.stats.keyspaceHits }}</li>
      <li>keyspaceMisses: {{ this.stats.keyspaceMisses }}</li>
      <li>pubsubChannels: {{ this.stats.pubsubChannels }}</li>
      <li>pubsubPatterns: {{ this.stats.pubsubPatterns }}</li>
      <li>latestForkUsec: {{ this.stats.latestForkUsec }}</li>
      <li>migrateCachedSockets: {{ this.stats.migrateCachedSockets }}</li>
    </el-card>

  </div>
</template>

<script>
export default {
  name: 'Stats',
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
      stats: {
        'totalConnectionsReceived': '',
        'totalCommandsProcessed': '',
        'instantaneousOpsPerSec': '',
        'totalNetInputBytes': '',
        'totalNetOutputBytes': '',
        'instantaneousInputKbps': '',
        'instantaneousOutputKbps': '',
        'rejectedConnections': '',
        'syncFull': '',
        'syncPartialOk': '',
        'syncPartialErr': '',
        'expiredKeys': '',
        'evictedKeys': '',
        'keyspaceHits': '',
        'keyspaceMisses': '',
        'pubsubChannels': '',
        'pubsubPatterns': '',
        'latestForkUsec': '',
        'migrateCachedSockets': ''
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
