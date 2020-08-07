<template>
  <div>
    <h2>Persistence</h2>
    <el-card>
      <li>loading: {{ this.persistence.loading }}</li>
      <li>rdbChangesSinceLastSave: {{ this.persistence.rdbChangesSinceLastSave }}</li>
      <li>rdbBgsaveInProgress: {{ this.persistence.rdbBgsaveInProgress }}</li>
      <li>rdbLastSaveTime: {{ this.persistence.rdbLastSaveTime }}</li>
      <li>rdbLastBgsaveStatus: {{ this.persistence.rdbLastBgsaveStatus }}</li>
      <li>rdbLastBgsaveTimeSec: {{ this.persistence.rdbLastBgsaveTimeSec }}</li>
      <li>rdbCurrentBgsaveTimeSec: {{ this.persistence.rdbCurrentBgsaveTimeSec }}</li>
      <li>aofEnabled: {{ this.persistence.aofEnabled }}</li>
      <li>aofRewriteInProgress: {{ this.persistence.aofRewriteInProgress }}</li>
      <li>aofRewriteScheduled: {{ this.persistence.aofRewriteScheduled }}</li>
      <li>aofLastRewriteTimeSec: {{ this.persistence.aofLastRewriteTimeSec }}</li>
      <li>aofCurrentRewriteTimeSec: {{ this.persistence.aofCurrentRewriteTimeSec }}</li>
      <li>aofLastBgrewriteStatus: {{ this.persistence.aofLastBgrewriteStatus }}</li>
      <li>aofLastWriteStatus: {{ this.persistence.aofLastWriteStatus }}</li>
    </el-card>

  </div>
</template>

<script>
export default {
  name: 'Persistence',
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
      persistence: {
        'loading': '',
        'rdbChangesSinceLastSave': '',
        'rdbBgsaveInProgress': '',
        'rdbLastSaveTime': '',
        'rdbLastBgsaveStatus': '',
        'rdbLastBgsaveTimeSec': '',
        'rdbCurrentBgsaveTimeSec': '',
        'aofEnabled': '',
        'aofRewriteInProgress': '',
        'aofRewriteScheduled': '',
        'aofLastRewriteTimeSec': '',
        'aofCurrentRewriteTimeSec': '',
        'aofLastBgrewriteStatus': '',
        'aofLastWriteStatus': ''
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
