import request from '@/utils/request'

function gcInfoEntities(data) {
  return request({
    url: '/jvm/monitor/gcInfoEntities',
    method: 'get'
  })
}
function findCpuInfo(data) {
  return request({
    url: '/jvm/monitor/findCpuInfo',
    method: 'get'
  })
}
function deadlockCheck(data) {
  return request({
    url: '/jvm/monitor/deadlockCheck',
    method: 'get'
  })
}
function javaThreadEntity(data) {
  return request({
    url: '/jvm/monitor/javaThreadEntity',
    method: 'get'
  })
}
function jvmInfo(data) {
  return request({
    url: '/jvm/monitor/jvmInfo',
    method: 'get'
  })
}

export {
  gcInfoEntities,
  findCpuInfo,
  deadlockCheck,
  javaThreadEntity,
  jvmInfo
}
