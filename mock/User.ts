import { MockConfig } from 'vite-plugin-mock'
import type { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/admin/v1/system/user',
    method: 'get',
    response({ query }) {
      return {
        code: 200,
        "total|1-100":100,
        "data|10": [
          {
            "id|+1": 1,
            "account": "@last()",
            "name":"@cname",
            "system_role_id|1-100":100,
            "created_at":"@date",
            "updated_at":"@date"
          }
        ]
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
  },
  {
    url: '/admin/v1/system/user',
    method: 'put',
    response({ query }) {
      return {
        code: 200,
        data: {
          m: 'put'
        }
      }
    }
  },
  {
    url: '/admin/v1/system/user',
    method: 'delete',
    response({ query }) {
      return {
        code: 200,
        data: {
          m: 'delete'
        }
      }
    }
  }
] as MockMethod[]
