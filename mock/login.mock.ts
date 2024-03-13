import { definePostMock } from "./config";
import { user } from "./auth/user.mock";
const menu = [
    {
        name: "控制台",
        route_path: "/console",
        icon: "mingcute:abs-line"
    },
    {
        "id": 1,
        "name": "工单管理",
        "parent_id": 0,
        "route_path": "/work/order",
        "sort": 0,
        "status": 0,
        "icon": "mingcute:ad-rectangle-fill",
        "type": 1,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": false
    },
    {
        "id": 2,
        "name": "企业设置",
        "parent_id": 0,
        "route_path": "",
        "sort": 0,
        "status": 0,
        "icon": "mingcute:compass-line",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": true,
        "children": [
            {
                "id": 3,
                "name": "故障类型",
                "parent_id": 2,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            },
            {
                "id": 4,
                "name": "报修部门",
                "parent_id": 2,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            },
            {
                "id": 5,
                "name": "报修单位",
                "parent_id": 2,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            },
            {
                "id": 6,
                "name": "报修区域",
                "parent_id": 2,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            }
        ]
    },
    {
        "id": 7,
        "name": "设备管理",
        "parent_id": 0,
        "route_path": "",
        "sort": 0,
        "status": 0,
        "icon": "mingcute:device-line",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": true,
        "children": [
            {
                "id": 8,
                "name": "设备列表",
                "parent_id": 7,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            },
            {
                "id": 9,
                "name": "设备分类",
                "parent_id": 7,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            }
        ]
    },
    {
        "id": 10,
        "name": "耗材管理",
        "parent_id": 0,
        "route_path": "",
        "sort": 0,
        "status": 0,
        "icon": "mingcute:rabbit-fill",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": true,
        "children": [
            {
                "id": 11,
                "name": "我的耗材",
                "parent_id": 10,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            },
            {
                "id": 12,
                "name": "耗材列表",
                "parent_id": 10,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            },
            {
                "id": 13,
                "name": "申领列表",
                "parent_id": 10,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            },
            {
                "id": 14,
                "name": "历史入库",
                "parent_id": 10,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            },
            {
                "id": 15,
                "name": "盘点记录",
                "parent_id": 10,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            },
            {
                "id": 16,
                "name": "折损记录",
                "parent_id": 10,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            },
            {
                "id": 17,
                "name": "耗材维护",
                "parent_id": 10,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 0,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": true,
                "children": [
                    {
                        "id": 18,
                        "name": "耗材分类",
                        "parent_id": 17,
                        "route_path": "",
                        "sort": 0,
                        "status": 0,
                        "icon": "",
                        "type": 1,
                        "deleted_at": null,
                        "created_at": "2024-03-03 20:09:24",
                        "updated_at": "2024-03-03 20:09:24",
                        "has_children": false
                    },
                    {
                        "id": 19,
                        "name": "生产厂商",
                        "parent_id": 17,
                        "route_path": "",
                        "sort": 0,
                        "status": 0,
                        "icon": "",
                        "type": 1,
                        "deleted_at": null,
                        "created_at": "2024-03-03 20:09:24",
                        "updated_at": "2024-03-03 20:09:24",
                        "has_children": false
                    },
                    {
                        "id": 20,
                        "name": "供应商",
                        "parent_id": 17,
                        "route_path": "",
                        "sort": 0,
                        "status": 0,
                        "icon": "",
                        "type": 1,
                        "deleted_at": null,
                        "created_at": "2024-03-03 20:09:24",
                        "updated_at": "2024-03-03 20:09:24",
                        "has_children": false
                    },
                    {
                        "id": 21,
                        "name": "仓库地址",
                        "parent_id": 17,
                        "route_path": "",
                        "sort": 0,
                        "status": 0,
                        "icon": "",
                        "type": 1,
                        "deleted_at": null,
                        "created_at": "2024-03-03 20:09:24",
                        "updated_at": "2024-03-03 20:09:24",
                        "has_children": false
                    }
                ]
            },
            {
                "id": 22,
                "name": "耗材报告",
                "parent_id": 10,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            }
        ]
    },
    {
        "id": 23,
        "name": "巡检管理",
        "parent_id": 0,
        "route_path": "",
        "sort": 0,
        "status": 0,
        "icon": "mingcute:time-fill",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": true,
        "children": [
            {
                "id": 24,
                "name": "区域管理",
                "parent_id": 23,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            },
            {
                "id": 25,
                "name": "巡检任务",
                "parent_id": 23,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            },
            {
                "id": 26,
                "name": "巡检记录",
                "parent_id": 23,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            }
        ]
    },
    {
        "id": 27,
        "name": "维修经验",
        "parent_id": 0,
        "route_path": "",
        "sort": 0,
        "status": 0,
        "icon": "mingcute:settings-6-line",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": true,
        "children": [
            {
                "id": 28,
                "name": "文章列表",
                "parent_id": 27,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            },
            {
                "id": 29,
                "name": "知识分类",
                "parent_id": 27,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            }
        ]
    },
    {
        "id": 32,
        "name": "个人中心",
        "parent_id": 0,
        "route_path": "/repassword",
        "sort": 0,
        "status": 0,
        "icon": "mingcute:user-2-line",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": false
    },
    {
        "id": 33,
        "name": "权限管理",
        "parent_id": 0,
        "route_path": "/system/auth",
        "sort": 0,
        "status": 0,
        "icon": "mingcute:auto-hold-fill",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": true,
        "children": [
            {
                "id": 34,
                "name": "管理员",
                "parent_id": 33,
                "route_path": "/system/user",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 0,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": true,
            },
            {
                "id": 39,
                "name": "系统菜单",
                "parent_id": 33,
                "route_path": "/system/menu",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            },
            {
                "id": 40,
                "name": "管理员角色",
                "parent_id": 33,
                "route_path": "/system/role",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            }
        ]
    },
    {
        "id": 41,
        "name": "在线留言",
        "parent_id": 0,
        "route_path": "/foodback",
        "sort": 0,
        "status": 0,
        "icon": "mingcute:list-check-2-fill",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": false
    },
    {
        "id": 30,
        "name": "设置",
        "parent_id": 0,
        "route_path": "/system",
        "sort": 255,
        "status": 0,
        "icon": "mingcute:settings-1-line",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": true,
        "children": [
            {
                "id": 31,
                "name": "系统配置",
                "parent_id": 30,
                "route_path": "/config/base",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 0,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
            }
        ]
    },
    {
        name: "意见反馈",
        parent_id: 0,
        route_path: "/feedback",
        sort: 0,
        status: 0,
        icon: "mingcute:feeder-fill",
    }
];
export default definePostMock([
    {
        url: '/login/userinfo',
        method: "GET",
        body: {
            ...user.list[1],
            auth: menu
        }
    },
    {
        url: "/login/password",
        method: "POST",
        response(req, res) {
            const { query = {}, body = { account: '', password: '' } } = req
            res.setHeader('Content-Type', 'application/json')
            if (body.account == 'admin' && body.password == '123456') {
                res.statusCode = 200
                res.end(
                    JSON.stringify({
                        ...user.list[1],
                        token: "e10adc3949ba59abbe56e057f20f883e",
                        auth: menu
                    }),
                )
            } else {
                res.statusCode = 400
                res.end(
                    JSON.stringify({
                        error_code: '4001',
                        msg: "密码错误",
                    }),
                )
            }
        },

    }
])