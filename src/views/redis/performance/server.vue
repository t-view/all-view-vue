<template>
  <div>
    <h2>Server</h2>
    <el-card>
      <li>redisVersion: {{ this.server.redisVersion }}</li>
      <li>redisGitSha1: {{ this.server.redisGitSha1 }}</li>
      <li>redisGitDirty: {{ this.server.redisGitDirty }}</li>
      <li>redisBuildId: {{ this.server.redisBuildId }}</li>
      <li>redisMode: {{ this.server.redisMode }}</li>
      <li>os: {{ this.server.os }}</li>
      <li>archBits: {{ this.server.archBits }}</li>
      <li>multiplexingApi: {{ this.server.multiplexingApi }}</li>
      <li>processId: {{ this.server.processId }}</li>
      <li>runId: {{ this.server.runId }}</li>
      <li>tcpPort: {{ this.server.tcpPort }}</li>
      <li>uptimeInSeconds: {{ this.server.uptimeInSeconds }}</li>
      <li>uptimeInDays: {{ this.server.uptimeInDays }}</li>
      <li>hz: {{ this.server.hz }}</li>
      <li>lruClock: {{ this.server.lruClock }}</li>
      <li>executable: {{ this.server.executable }}</li>
      <li>configFile: {{ this.server.configFile }}</li>
    </el-card>

  </div>
</template>

<script>
export default {
  name: 'Server',
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
      server: {
        'redisVersion': '',
        'redisGitSha1': '',
        'redisGitDirty': '',
        'redisBuildId': '',
        'redisMode': '',
        'os': '',
        'archBits': '',
        'multiplexingApi': '',
        'processId': '',
        'runId': '',
        'tcpPort': '',
        'uptimeInSeconds': '',
        'uptimeInDays': '',
        'hz': '',
        'lruClock': '',
        'executable': '',
        'configFile': ''
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
