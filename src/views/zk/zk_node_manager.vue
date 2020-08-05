<template>
  <div>
    <h2>节点管理</h2>

    <el-container style="height: 600px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-tree
          :data="treeData"
          :props="defaultProps"
          :default-expand-all=true
          width="400px"
          @node-click="handleNodeClick"
        />

      </el-aside>

      <el-main>
        <el-container>
          <el-card>
            <el-tag>节点信息</el-tag>
            <p>sssss</p>
            <p>sssss</p>
            <p>sssss</p>
            <el-tag>节点状态</el-tag>
            <p>ssss</p>
            <el-divider></el-divider>

            <el-button-group style="float: contour">
              <el-button type="primary">创建节点</el-button>
              <el-button type="success">修改节点</el-button>
              <el-button type="danger">删除节点</el-button>
            </el-button-group>
          </el-card>

          <el-divider></el-divider>


          <el-footer>
            <el-tabs type="border-card">
              <el-tab-pane label="envi">......</el-tab-pane>
              <el-tab-pane label="config">.....</el-tab-pane>
              <el-tab-pane label="state">.....</el-tab-pane>
            </el-tabs>
          </el-footer>
        </el-container>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import { zkTree } from '@/api/zookeeper_api'

export default {
  name: 'ZkNodeManager',
  data() {
    return {
      tableOpen: false,
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
      treeData: [{
        path: '',
        showName: '空节点',
        child: []
      }
      ]
    }
  },
  created() {
    zkTree({ 'host_port': '127.0.0.1:2181' }).then(res => {
      this.treeData = [res.data]
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
