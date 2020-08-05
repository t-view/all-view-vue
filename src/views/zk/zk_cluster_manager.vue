<template>
  <el-container>
    <div>
      <h2>集群管理</h2>
    </div>
    <el-table :data="tableData">
      <el-table-column v-for="item in newCol" :label="item" :prop="item">
      </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
export default {
  name: "ZkClusterManager",

  data() {
    return {
      tableData: [{}]
    };
  },

  computed: {
    newCol() {
      const newData = new Set(); //使用Set 的唯一性处理重复的字段
      this.tableData.map(item => {
        Object.keys(item).forEach(sub => {
          // if(sub !='name' && sub!='id' && sub!='sex'){ //这里把你确定的字段给过滤掉，剩下的就是 收入a,收入b,收入c等其他参数
          newData.add(sub);
          // }
        });
      });
      return [...newData];
    }
  },

  mounted() {}
};
</script>

<style scoped></style>
