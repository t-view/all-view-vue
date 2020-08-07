import request from '@/utils/request'

export function easy_info(data) {
  return request({
    url: '/redis/easy_info',
    method: 'post',
    data
  })
}

export function server(data) {
  return request({
    url: '/redis/server',
    method: 'post',
    data
  })
}

export function clients(data) {
  return request({
    url: '/redis/clients',
    method: 'post',
    data
  })
}

export function memory(data) {
  return request({
    url: '/redis/memory',
    method: 'post',
    data
  })
}

export function persistence(data) {
  return request({
    url: '/redis/persistence',
    method: 'post',
    data
  })
}

export function stats(data) {
  return request({
    url: '/redis/stats',
    method: 'post',
    data
  })
}

export function replication(data) {
  return request({
    url: '/redis/replication',
    method: 'post',
    data
  })
}

export function cpu(data) {
  return request({
    url: '/redis/cpu',
    method: 'post',
    data
  })
}

export function cluster(data) {
  return request({
    url: '/redis/cluster',
    method: 'post',
    data
  })
}

export function keyspace(data) {
  return request({
    url: '/redis/keyspace',
    method: 'post',
    data
  })
}

export function login(data) {
  return request({
    url: '/rog/redis/acac',
    method: 'post',
    data
  })
}

// export {
//
//   easy_info,
//   server,
//   clients,
//   memory,
//   persistence,
//   stats,
//   replication,
//   cpu,
//   cluster,
//   keyspace, login
// }
