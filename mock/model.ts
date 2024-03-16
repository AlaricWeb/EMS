import Mock from "mockjs";
type Operator = "=" | "<" | ">" | "<=" | ">=";
function operator(value, operation: Operator, where) {
  switch (operation) {
    case "<":
      return value < where;
      break;
    case ">":
      return value > where;
      break;
    case "=":
      return value == where;
      break;
    case "<=":
      return value <= where;
      break;
    case ">=":
      return value >= where;
      break;
    default:
      return false;
      break;
  }
}
