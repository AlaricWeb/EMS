import { definePostMock } from "../config";
import Mock from 'mockjs'
export const menu = [
    {
        id: 1,
        name: '控制台',
        route_path: "/console",
        parent_id: 0,
        icon: "mingcute:confused-fill"
    },
    {
        id: 2,
        name: '工单管理',
        route_path: "/console",
        parent_id: 0,
        icon: "mingcute:confused-fill"
    },
    {
        id: 3,
        name: '企业管理',
        route_path: "/system/user",
        parent_id: 0,
        icon: "mingcute:confused-fill"
    },
    {
        id: 4,
        name: '角色管理',
        route_path: "/system/role",
        parent_id: 3,
        icon: "mingcute:confused-fill"
    },
    {
        id: 5,
        name: '测试',
        route_path: "/system/role",
        parent_id: 3,
        icon: "mingcute:confused-fill"
    }
]
const findItem = <T extends object>(where: T) => {
    return menu.find((item) => {
        return Object.keys(where).every((key) => {
            return item[key] === where[key]
        })
    })
}
const findList = <T extends object>(where: T) => {
    return menu.filter((item) => {
        return Object.keys(where).every((key) => {
            return item[key] === where[key]
        })
    })
}
export const user = Mock.mock({
    "total|1-1000": 1,
    'list|10': [
        {
            'id|+1': 1,
            name: "@cname",
            created_at: "@datetime",
            updated_at: "@datetime",
        }
    ]
})
export default definePostMock([
    {
        url: '/system/menu',
        method: "GET",
        delay: 1000,
        body(request) {
            const { page, limit } = request.query;
            const start = (page - 1) * limit;
            const end = start + parseInt(limit);;
            return {
                total: user.list.length,
                list: user.list.slice(start, end)
            }
        }
    },
    {
        url: '/system/menu/:id',
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
        url: '/system/menu',
        method: "POST",
        body(request) {
            request.body.id = Mock.Random.integer();
            user.list.push(request.body);
            return request.body
        }
    },
    {
        url: '/system/menu/:id',
        method: "PUT",
        body(request) {
            // user.list[]
            const id = request.params.id as number
            user.list[id - 1] = Object.assign(user.list[id - 1], request.body)
            return user.list[id - 1]
        }
    },
    {
        url: '/system/menu/:id',
        method: "DELETE",
        body(request) {
            // user.list[]
            const id = request.params.id as number
            user.list.splice(id - 1, 1);
            return user.list[id - 1];
        }
    },
])