<template>
  <div>
    <h2>节点管理</h2>

    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-tree
          :data="og"
          :props="defaultProps"
          default-expand-all="true"
          width="200px"
          @node-click="handleNodeClick"
        />

      </el-aside>

      <el-container />
    </el-container>

  </div>
</template>

<script>
import { zkTree } from '@/api/zookeeper_api'

export default {
  name: 'ZkNodeManager',
  data() {
    return {
      host_port: '127.0.0.1:2181',
      node_type: [
        {
          value: 'PERSISTENT',
          label: 'PERSISTENT'
        }, {
          value: 'EPHEMERAL',
          label: 'EPHEMERAL'
        }
      ],
      defaultProps: {
        children: 'child',
        label: 'showName'
      },
      og: [
        {
          showName: '一级 1',
          children: [{
            showName: '二级 1-1',
            children: [{
              showName: '三级 1-1-1'
            }]
          }]
        }, {
          showName: '一级 2',
          children: [{
            showName: '二级 2-1',
            children: [{
              showName: '三级 2-1-1'
            }]
          }, {
            showName: '二级 2-2',
            children: [{
              showName: '三级 2-2-1'
            }]
          }]
        }, {
          showName: '一级 3',
          children: [{
            showName: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            showName: '二级 3-2',
            children: [{
              showName: '三级 3-2-1'
            }]
          }]
        }
      ]
    }
  },
  created() {
    zkTree({ 'host_port': '127.0.0.1:2181' }).then(res => {
      this.og = [res.data]
    }).catch(ex => {
      console.log(ex)
    })
  },
  methods: {
    handleNodeClick(data) {
      console.log(data.path)
    }
  }
}
</script>

<style scoped>

</style>
