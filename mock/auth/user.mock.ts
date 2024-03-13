import { definePostMock } from "../config";
import Mock from 'mockjs'
export const user = Mock.mock({
    "total|1-1000": 1,
    'list|10': [
        {
            'id|+1': 1,
            "nickname": "@cname",
            "avatar": "https://cdn.seovx.com/d/?mom=302",
            "system_role_id|1-6": 1,
            "account": "@name",
            created_at: "@datetime",
            updated_at: "@datetime",
        }
    ]
})
export default definePostMock([
    {
        url: '/system/user',
        method: "GET",
        body: {
            total: user.total,
            list: user.list
        }
    },
    {
        url: '/system/user/:id',
        method: "GET",
        body(request) {
            const id = request.params.id as number
            if (id && user.list[id - 1]) return user.list[id - 1]
            return {
                error_code: 400,
                msg: 'author not found',
            }

        }
    },
    {
        url: '/system/user',
        method: "POST",
        body(request) {
            request.body.id = Mock.Random.integer('100-1000');
            user.list.push(request.body);
            return request.body
        }
    },
    {
        url: '/system/user/:id',
        method: "PUT",
        body(request) {
            // user.list[]
            const id = request.params.id as number
            user.list[id - 1] = Object.assign(user.list[id - 1], request.body)
            return user.list[id - 1]
        }
    },
    {
        url: '/system/user/:id',
        method: "DELETE",
        body(request) {
            // user.list[]
            const id = request.params.id as number
            user.list.splice(id - 1, 1);
            return user.list[id - 1];
        }
    },
])