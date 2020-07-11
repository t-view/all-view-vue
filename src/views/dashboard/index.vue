<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div>{{ error_data }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { health } from '@/api/health'

export default {
  name: 'Dashboard',
  data() {
    return {
      error_data: ''
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
    console.log('fff')
    health().then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
  }
}
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }

    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }
</style>
