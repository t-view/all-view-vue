import { healthDefault } from '@/api/health'

const getDefaultState = () => {
  return {
    health: false
  }
}

export default {
  getDefaultState,
  healthDefault
}
