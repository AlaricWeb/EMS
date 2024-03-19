1. 实现一个vite 插件 
2. 插件参数 {rootDir:"mockjs"} rootDir 表示 存放mockjs 的 目录
3. 根据rootDir 导入所有的js文件 或者ts 文件  获取export default 
const company =[
    {
       id:1
       name:"xx科技有限公司"
    },
    {
        id:2,
        name:"xxx电商有限公司"
    }
]
const user = [
    {
        name:"张三"
        company_id:2
    },
    {
        name: "李四"
        compnay_id:1
    }
]

把这两个数据关联起来 封装一个函数 