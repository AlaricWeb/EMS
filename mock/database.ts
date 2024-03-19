import Mock from "mockjs";
Mock.Random.extend({
  phone: function (...param) {
    var phonePrefixs = ["132", "135", "189"]; // 自己写前缀哈
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/); //Number()
  },
  device: function (...param) {
    const data = [
      "电梯",
      "马达",
      "冰箱",
      "仓储设备",
      "车间设备",
      "起重设备",
      "传输设备",
      "包装设备",
      "清洁设备",
    ];
    return this.pick(data);
  },
  fault() {
    const data = [
      "停止运行",
      "卡顿或抖动",
      "门故障",
      "电力故障",
      "传感器故障",
      "机械故障",
      "控制系统故障",
      "紧急情况",
      "电梯下坠",
      "电梯不平",
      "电梯噪音异常",
      "电梯速度异常",
      "电梯排气异常",
      "电梯按钮失灵",
      "电梯运行不稳定",
      "电梯运行速度慢",
      "电梯运行速度快",
      "电梯运行方向错误",
      "电梯门关闭速度慢",
      "电梯门关闭速度快",
      "电梯门开启速度慢",
      "电梯门开启速度快",
      "电梯门被撞击",
      "电梯门打开时颤抖",
    ];
    return this.pick(data);
  },
  company() {
    const data = [
      "阳农（广州）贸易有限公司",
      "广州清诚生物科技有限公司",
      "广州盛宏再生资源有限公司",
      "广州市立保贸易有限公司",
      "蓝梅潮流（广州）运动科技有限公司",
      "广州薇浩贸易有限公司",
      "山浩（广州）户外用品有限公司",
      "广州市祥顺航运有限公司",
      "广州市李喜范贸易有限公司",
      "广州纯怡生物科技有限公司",
      "广州熹微互联网科技有限公司",
      "广州市增城区鲜源贸易有限公司",
      "广州释刻赛车智能科技有限公司",
      "广州豪塘商贸有限公司",
      "广州市辉绮贸易有限公司",
      "广州诚优医疗科技有限公司",
      "广东伟晨兴建材科技有限公司",
      "广州万佳环境科技有限公司",
      "雪姐传媒（广州）有限公司",
      "广州梣尹美容馆有限公司",
      "广州茱莉娅文化艺术交流有限公司",
      "广州势力生物工程有限公司",
      "广州绿盛科技有限公司",
      "广州洲季酒店管理有限公司",
      "广州市犇旺发船务服务有限公司",
      "广州上等佳物商贸有限公司",
      "广州市吉业餐饮管理有限公司天河分公司",
      "智浩（广东）工程有限公司",
      "广州市农小通产业投资有限公司",
      "广东仕洋建筑工程有限公司",
      "广州星链网络技术有限公司",
      "荏原冷热系统集成（广东）有限公司",
      "广州花育文化有限公司",
      "广州山沫艺术文化有限公司",
      "广州电迅墟市产业发展有限公司",
      "广州锦旺棋牌有限公司",
      "广州虹裕商贸有限公司",
      "广州晓麟贸易有限公司",
      "广州研和网络科技有限公司",
      "中恒产业运营管理（广东）有限公司",
      "广州好管家生活服务有限公司",
      "广东琪凰建筑工程有限公司",
      "广州佰格电子商务有限公司",
      "广东心多多控股有限公司",
      "广州文舍餐饮管理有限公司",
      "广州橙时文化有限公司华庭路分公司",
      "广州三犀科技有限公司",
      "广州新腾建筑装饰有限公司",
      "广州吉米财税服务有限公司",
      "广州市长禄信息科技有限公司",
      "广州科莱威自动化设备有限公司",
      "广州纪渔文化旅游发展有限公司",
      "广州利维亚商贸有限公司",
      "广州翼一科技有限公司",
      "广州市振丰实业发展有限公司",
      "广州运惠电子商务有限公司",
      "广州凯衡贸易有限公司",
      "广东涅康科技有限公司广州分公司",
    ];

    return this.pick(data);
  },
  brand() {
    const data = [" CHANEL", "MICHAEL KORS", "ARMANI", "Dior", "GUCCI", "KENZO"];
    return this.pick(data);
  },
});
const template = {
  "company|1": [
    {
      id: "@increment",
      name: "@company",
    },
  ],
  "device|100": [
    {
      id: "@increment",
      name: "@device",
      image: "@image(100x100)",
      use_mobile: "@phone",
      brand: "@brand",
      "company_id|1-100": 1,
      company_name: "@company",
      "use_department|1": ["销售部", "开发部", "运营"],
      use_name: "@cname",
      "status|0-6": 0,
      "status_name|1": ["运行正常", "异常", "过保运行", "停机维修", "已报废"],
      created_at: "@datetime",
      updated_at: "@datetime",
      "sms_notify|0-1": 0,
    },
  ],
  "device_type|100": [
    {
      id: "@increment",
      name: "@fault",
      created_at: "@datetime",
      updated_at: "@datetime",
    },
  ],
  "department|16": [
    {
      id: "@increment",
      "name|1": [
        "电梯维修部门",
        "机械维修部门",
        "电气维修部门",
        "安全维修部门",
        "设备维修部门",
        "保养维修部门",
        "技术维修部门",
        "紧急维修部门",
        "自动化维修部门",
        "设施维修部门",
        "保险维修部门",
        "现场维修部门",
        "工程维修部门",
        "综合维修部门",
        "专业维修部门",
        "高级维修部门",
      ],
      created_at: "@datetime",
      updated_at: "@datetime",
    },
  ],
  "device_category|16": [
    {
      id: "@increment",
      "name|1": [
        "电子设备",
        "机械设备",
        "电气设备",
        "通信设备",
        "医疗设备",
        "工业设备",
        "家用电器",
        "安全设备",
        "建筑设备",
        "航空航天设备",
        "农业设备",
        "办公设备",
        "运输设备",
        "环保设备",
        "科研设备",
        "教育设备",
        "体育设备",
        "娱乐设备",
        "消防设备",
        "军事设备",
      ],
      has_children: true,
      created_at: "@datetime",
      updated_at: "@datetime",
    },
  ],
  "company|16": [
    {
      id: "@increment",
      name: "@company",
      created_at: "@datetime",
      updated_at: "@datetime",
    },
  ],
  "area|16": [
    {
      id: "@increment",
      name: "@province",
      created_at: "@datetime",
      updated_at: "@datetime",
    },
  ],
};

const database = Mock.mock(template);
export default function (name: string) {
  const data: any[] = database[name] || [];
  return {
    total: data.length,
    find(condition) {
      return data.find((item) => {
        return Object.keys(condition).every((key) => {
          return item[key] == condition[key];
        });
      });
    },
    where(condition) {
      return data.filter((item) => {
        return Object.keys(condition).every((key) => {
          return item[key] == condition[key];
        });
      });
    },
    page(p: number, l: number) {
      p = Number(p);
      l = Number(l);
      const start = (p - 1) * l;
      let end = start + l;

      if (end > data.length) end = data.length;
      return data.slice(start, end);
    },
    created(d) {
      d.id = Mock.Random.increment();
      data.unshift(d);
      return data[0];
    },
    updated(id, d) {
      const idIndex = data.findIndex((item) => {
        if (item.id == id) {
          return true;
        }
      });
      // data[idIndex] = Object.assign(data, d);
      data[idIndex] = d;
      return data[idIndex];
    },
    delete(id) {
      const idIndex = data.findIndex((item) => {
        if (item.id == id) {
          return true;
        }
      });
      data.splice(idIndex, 1);
      return data[idIndex];
    },
  };
}
