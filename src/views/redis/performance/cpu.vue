<template>
  <div><h2>Cpu</h2>
    <el-card>
      <li>usedCpuSys: {{ this.cpu.usedCpuSys }}</li>
      <li>usedCpuUser: {{ this.cpu.usedCpuUser }}</li>
      <li>usedCpuSysChildren: {{ this.cpu.usedCpuSysChildren }}</li>
      <li>usedCpuUserChildren: {{ this.cpu.usedCpuUserChildren }}</li>
    </el-card></div>
</template>

<script>
export default {
  name: 'Cpu',
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
      cpu: {
        'usedCpuSys': '',
        'usedCpuUser': '',
        'usedCpuSysChildren': '',
        'usedCpuUserChildren': ''
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
