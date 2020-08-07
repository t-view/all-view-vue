<template>
  <div>
    <h3>这里都是图标, 可以选择请求频率几秒一次,接口如下</h3>
    <b>这里单位都是byte</b>
    <ol>
      <li>/jvm/monitor/gcInfoEntities</li>
      <li>/jvm/monitor/findCpuInfo</li>
      <li>/jvm/monitor/javaThreadEntity</li>
      <li>/jvm/monitor/jvmInfo</li>
    </ol>
  </div>
</template>

<script>
import {
  gcInfoEntities, findCpuInfo,
  deadlockCheck,
  javaThreadEntity,
  jvmInfo
} from '@/api/jvm_api'

export default {
  name: 'JVM',
  created() {
    gcInfoEntities().then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
    findCpuInfo().then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
    deadlockCheck().then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
    javaThreadEntity().then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
    jvmInfo().then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
  }
}
</script>

<style scoped>

</style>
