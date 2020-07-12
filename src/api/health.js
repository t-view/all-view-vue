import axios from 'axios'
import request from '@/utils/request'

export function health() {
  return request({
    url: '/health',
    method: 'get'
  })
}

