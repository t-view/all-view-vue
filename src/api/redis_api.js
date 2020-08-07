import request from '@/utils/request'

function easy_info(data) {
  return request({
    url: '/redis/easy_info',
    method: 'post',
    data
  })
}

function server(data) {
  return request({
    url: '/redis/server',
    method: 'post',
    data
  })
}

function clients(data) {
  return request({
    url: '/redis/clients',
    method: 'post',
    data
  })
}

function memory(data) {
  return request({
    url: '/redis/memory',
    method: 'post',
    data
  })
}

function persistence(data) {
  return request({
    url: '/redis/persistence',
    method: 'post',
    data
  })
}

function stats(data) {
  return request({
    url: '/redis/stats',
    method: 'post',
    data
  })
}

function replication(data) {
  return request({
    url: '/redis/replication',
    method: 'post',
    data
  })
}

function cpu(data) {
  return request({
    url: '/redis/cpu',
    method: 'post',
    data
  })
}

function cluster(data) {
  return request({
    url: '/redis/cluster',
    method: 'post',
    data
  })
}

function keyspace(data) {
  return request({
    url: '/redis/keyspace',
    method: 'post',
    data
  })
}

function login(data) {
  return request({
    url: '/redis/login',
    method: 'post',
    data
  })
}

export {

  easy_info,
  server,
  clients,
  memory,
  persistence,
  stats,
  replication,
  cpu,
  cluster,
  keyspace, login
}
