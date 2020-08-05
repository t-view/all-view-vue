<template>
  <div>
    <h2>redis 主页</h2>
    <div>这里有一个可以按钮可以点击然后链接</div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <div>这里展示登记的redis链接</div>
      </el-aside>
      <el-main>
        <div>这里放默认登记的redis连接的配置信息</div>
      </el-main>
    </el-container>
  </div>

</template>

<script>
export default {
  name: 'RedisDashboard',
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
