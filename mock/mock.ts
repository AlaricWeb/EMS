import Mock from "mockjs";
Mock.Random.extend({
  phone: function (...param) {
    var phonePrefixs = ["132", "135", "189"]; // 自己写前缀哈
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/); //Number()
  },
  company: function (...param) {
    return "1";
  },
});
export function database<T extends object>(data: T, id?: number): Array<any> {
  const result = Mock.mock({
    "list|100": [data],
    total: 100,
  });
  return result;
}
export default Mock;
