import axios from 'axios'
import fa from 'element-ui/src/locale/lang/fa'
import he from 'element-ui/src/locale/lang/he'
import request from '@/utils/request'

export function health() {
  return request({
    url: '/health',
    method: 'get'
  })
}

