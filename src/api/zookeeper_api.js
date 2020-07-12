import request from '@/utils/request'

// eslint-disable-next-line no-unused-vars
export function createNode(params) {
  return request({
    url: 'zk/node/create',
    method: 'post',
    params
  })
}

export function nodeInfo(params) {
  return request({
    url: '/zk/node/get/info',
    method: 'post',
    params
  })
}

export function zkTree(params) {
  return request({
    url: '/zk/node/tree',
    method: 'get',
    params
  })
}

export function nodeDelete(params) {
  return request({
    url: '/zk/node/del',
    method: 'get',
    params
  })
}

export function zkState(params) {
  return request({
    url: '/zk/node/state',
    method: 'get',
    params
  })
}

export function zkMntr(params) {
  return request({
    url: '/zk/node/mntr',
    method: 'post',
    params
  })
}

export function zkConf(params) {
  return request({
    url: '/zk/node/conf',
    method: 'post',
    params
  })
}

export function znenv(params) {
  return request({
    url: '/zk/node/env',
    method: 'post',
    params
  })
}

