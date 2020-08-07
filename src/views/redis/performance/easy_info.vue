<template>
  <div>
    <el-card>
      <li>version: {{ this.easy_redis.version }}</li>
      <li>useMemory: {{ this.easy_redis.useMemory }}</li>
      <li>client: {{ this.easy_redis.client }}</li>
      <li>execSize: {{ this.easy_redis.execSize }}</li>
      <li>runTime: {{ this.easy_redis.runTime }}</li>
    </el-card>
  </div>
</template>

<script>
import { easy_info } from '@/api/redis_api'

export default {
  name: 'EasyInfo',
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
      easy_redis: {
        'version': '12',
        'useMemory': '123',
        'client': '123',
        'execSize': '123',
        'runTime': '123'
      }
    }
  },
  created() {
    console.log('父组件传递的值', this.param)
    easy_info(this.param).then(
      res => {
        console.log(res)
      }
    ).catch(e => {
      console.log(e)
    })
  }

}

</script>

<style scoped>

</style>
