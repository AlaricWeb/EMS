import { MockConfig } from 'vite-plugin-mock'
import type { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/admin/v1/system/user',
    method: 'get',
    response({ query }) {
      return {
        code: 200,
        data: {
          m: 'get'
        }
      }
    }
  },
  {
    url: '/admin/v1/system/user',
    method: 'post',
    response({ query }) {
      return {
        code: 200,
        data: {
          m: 'post'
        }
      }
    }
  }
] as MockMethod[]
