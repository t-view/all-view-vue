<template>
  <div>
    <h3>这里都是图标, 可以选择请求频率几秒一次,接口如下</h3>
    <b>这里单位都是byte</b>
    <el-row gutter="10" type="flex" justify="center">
      <el-col span="8">
        <el-card body-style="height: 300px">
          /jvm/monitor/gcInfoEntities
        </el-card>
      </el-col>
      <el-col span="8">
        <el-card body-style="height: 300px">
          /jvm/monitor/findCpuInfo
        </el-card>
      </el-col>
    </el-row>
    <el-row gutter="10" type="flex" justify="center">
      <el-col span="8">
        <el-card body-style="height: 300px">
          /jvm/monitor/javaThreadEntity
        </el-card>
      </el-col>
      <el-col span="8">
        <el-card body-style="height: 300px">
          /jvm/monitor/jvmInfo
        </el-card>
      </el-col>
    </el-row>
    <el-row gutter="10" type="flex" justify="center">
      <el-col span="8">
        <el-card body-style="height: 300px">
          5555
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  gcInfoEntities,
  findCpuInfo,
  deadlockCheck,
  javaThreadEntity,
  jvmInfo
} from "@/api/jvm_api";

export default {
  name: "JVM",
  created() {
    gcInfoEntities()
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
    findCpuInfo()
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
    deadlockCheck()
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
    javaThreadEntity()
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
    jvmInfo()
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>
