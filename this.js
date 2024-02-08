var student = {
  firstName: "shreenehaa",
  lastName: "maha",
  fullname: function () {
    return `${this.firstName},${this.lastName}`;
  },
};

var stu1 = {
  firstName: "nehaam",
  lastName: "maharaj",
};
var printName = function (city, state) {
  return `hi ${this.firstName} ${this.lastName} is from ${city} ,${state}`;
};

console.log(printName.call(stu1, "salem", "TN"));
console.log(printName.apply(stu1, ["salem", "TN"]));

var stu2 = {
  firstName: "esa",
  lastName: "warshini",
};
var printByBind = printName.bind(stu2, "tuti", "TN");
// console.log(printByBind);
console.log(printByBind("tuti", "TN"));
