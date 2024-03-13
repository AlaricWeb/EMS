import { definePostMock } from "../config";
import Mock from 'mockjs'
export const user = Mock.mock({
    "total|100-1000": 1,
    'list|100': [
        {
            'id|+1': 1,
            "name": "@name",
            "system_menu_ids": '@range(1, 10, 3)',
            "desc": "@paragraph",
            created_at: "@datetime",
            updated_at: "@datetime",
        }
    ]
})
export default definePostMock([
    {
        url: '/system/role',
        method: "GET",
        delay: 1000,
        body(request) {
            const { page, limit } = request.query;
            const total = user.list.length;
            const start = (page - 1) * limit;
            const end = start + parseInt(limit);;
            return {
                total: user.list.length,
                list: user.list.slice(start, end)
            }
        }
    },
    {
        url: '/system/role/:id',
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
        url: '/system/role',
        method: "POST",
        body(request) {
            request.body.id = Mock.Random.integer();
            user.list.push(request.body);
            return request.body
        }
    },
    {
        url: '/system/role/:id',
        method: "PUT",
        body(request) {
            // user.list[]
            const id = request.params.id as number
            user.list[id - 1] = Object.assign(user.list[id - 1], request.body)
            return user.list[id - 1]
        }
    },
    {
        url: '/system/role/:id',
        method: "DELETE",
        body(request) {
            // user.list[]
            const id = request.params.id as number
            user.list.splice(id - 1, 1);
            return user.list[id - 1];
        }
    },
])