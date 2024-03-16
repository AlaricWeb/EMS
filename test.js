function operator(value, operator, where) {
  let result = false;
  switch (operator) {
    case "<":
      console.log("<");
      result = value < where;
      break;
    case ">":
      console.log(">");
      result = value > where;
      break;
    case "=":
      console.log("==");
      result = value == where;
      break;
    case "<=":
      console.log("<=");
      result = value <= where;
      break;
    case ">=":
      console.log(">=");
      result = value >= where;
      break;
    default:
      console.log(arguments.length);
      result = false;
      break;
  }
  return result;
}
const result = operator(1, "=", 2);
console.log(result);
