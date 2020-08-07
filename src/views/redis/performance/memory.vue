<template>
  <div>
    <h2>Memory</h2>

    <el-card>
      <li>usedMemory: {{ this.memory.usedMemory }}</li>
      <li>usedMemoryHuman: {{ this.memory.usedMemoryHuman }}</li>
      <li>usedMemoryRss: {{ this.memory.usedMemoryRss }}</li>
      <li>usedMemoryRssHuman: {{ this.memory.usedMemoryRssHuman }}</li>
      <li>usedMemoryPeak: {{ this.memory.usedMemoryPeak }}</li>
      <li>usedMemoryPeakHuman: {{ this.memory.usedMemoryPeakHuman }}</li>
      <li>totalSystemMemory: {{ this.memory.totalSystemMemory }}</li>
      <li>totalSystemMemoryHuman: {{ this.memory.totalSystemMemoryHuman }}</li>
      <li>usedMemoryLua: {{ this.memory.usedMemoryLua }}</li>
      <li>usedMemoryLuaHuman: {{ this.memory.usedMemoryLuaHuman }}</li>
      <li>maxmemory: {{ this.memory.maxmemory }}</li>
      <li>maxmemoryHuman: {{ this.memory.maxmemoryHuman }}</li>
      <li>maxmemoryPolicy: {{ this.memory.maxmemoryPolicy }}</li>
      <li>memFragmentationRatio: {{ this.memory.memFragmentationRatio }}</li>
      <li>memAllocator: {{ this.memory.memAllocator }}</li>
    </el-card>

  </div>
</template>

<script>
export default {
  name: 'Memory',
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
      memory: {
        'usedMemory': '',
        'usedMemoryHuman': '',
        'usedMemoryRss': '',
        'usedMemoryRssHuman': '',
        'usedMemoryPeak': '',
        'usedMemoryPeakHuman': '',
        'totalSystemMemory': '',
        'totalSystemMemoryHuman': '',
        'usedMemoryLua': '',
        'usedMemoryLuaHuman': '',
        'maxmemory': '',
        'maxmemoryHuman': '',
        'maxmemoryPolicy': '',
        'memFragmentationRatio': '',
        'memAllocator': ''
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
