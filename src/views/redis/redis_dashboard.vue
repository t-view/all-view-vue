<template>
  <div>
    <h2>redis 主页</h2>
    <div>这里有一个可以按钮可以点击然后链接</div>

    <el-container style="height: 1000px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-button type="primary" @click="dialogVisible = true">添加链接</el-button>
        <el-button type="primary" @click="facd">acacacacac</el-button>

        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <span>这是一段信息</span>
          <el-input v-model="login_param.name" placeholder="名称" />
          <el-input v-model="login_param.host" placeholder="host" />
          <el-input v-model="login_param.port" placeholder="port" />
          <el-input v-model="login_param.password" placeholder="password" />
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="redis_login">确 定</el-button>
          </span>
        </el-dialog>

        <el-tree
          :data="treeData"
          :props="defaultProps"
          :default-expand-all="true"
          width="400px"
          @node-click="handleNodeClick"
        />
      </el-aside>

      <el-main>
        <el-header>
          <div>节点信息</div>

          <el-button-group style="float: contour">
            <el-button type="primary">创建节点</el-button>
            <el-button type="success">修改节点</el-button>
            <el-button type="danger">删除节点</el-button>
          </el-button-group>

        </el-header>
        <el-footer>
          <el-tabs type="border-card">
            <el-tab-pane label="easy_info">
              <easy-info :param="redis_config" />
            </el-tab-pane>

            <el-tab-pane label="clients">
              <clients :param="redis_config" />
            </el-tab-pane>

            <el-tab-pane label="cluster">
              <cluster :param="redis_config" />
            </el-tab-pane>

            <el-tab-pane label="cpu">
              <cpu :param="redis_config" />
            </el-tab-pane>

            <el-tab-pane label="keyspace">
              <keyspace :param="redis_config" />
            </el-tab-pane>

            <el-tab-pane label="memory">
              <memory :param="redis_config" />
            </el-tab-pane>

            <el-tab-pane label="Persistence">
              <persistence :param="redis_config" />
            </el-tab-pane>

            <el-tab-pane label="Replication">
              <replication :param="redis_config" />
            </el-tab-pane>

            <el-tab-pane label="Server">
              <server :param="redis_config" />
            </el-tab-pane>

            <el-tab-pane label="Stats">
              <stats :param="redis_config" />
            </el-tab-pane>

          </el-tabs>
        </el-footer>

      </el-main>
    </el-container>
  </div>

</template>

<script>
import { login } from '@/api/redis_api'
import EasyInfo from './performance/easy_info'
import Clients from './performance/clients'
import Cluster from './performance/cluster'
import Cpu from './performance/cpu'
import Keyspace from './performance/keyspace'
import Memory from './performance/memory'
import Persistence from './performance/persistence'
import Replication from './performance/replication'
import Server from './performance/server'
import Stats from './performance/stats'

export default {
  name: 'RedisDashboard',
  components: {
    EasyInfo, Clients, Cluster, Cpu, Keyspace, Memory, Persistence,
    Replication,
    Server,
    Stats
  },
  data() {
    return {
      redis_config: {
        'host': '',
        'port': '',
        'pwd': '',
        'dbIndex': ''
      },
      login_param: {
        name: 'localhost',
        host: 'localhost',
        port: '6379',
        password: ''
      },
      dialogVisible: false,
      defaultProps: {
        children: 'child',
        label: 'showName'
      },
      treeData: [{
        path: 'localhost:8080',
        showName: 'localhost',
        type: 'host+port',
        child: [
          {
            path: 'db0',
            showName: 'db0',
            type: 'database',
            child: [
              {
                path: 'key_name',
                type: 'key_type',
                showName: 'key_name'
              }
            ]
          }]
      }
      ]

    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data.path)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {
        })
    },
    facd() {
      login({
        'host': '127.0.0.1',
        'port': '6379',
        'pwd': '',
        'dbIndex': '1'
      }).then(res => {
        console.log(res)
      }).catch(e => {
        console.log(e)
      })
    },
    redis_login() {
      this.dialogVisible = true
      login({
        'name': this.login_param.name,
        'host': this.login_param.host,
        'port': this.login_param.port,
        'pwd': this.login_param.password
      }).then(res => {
        console.log(res)
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>

</style>
