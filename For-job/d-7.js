let a1 = "Hello my name it Gunnu";

function Change(data, replace, newreplace) {
  const dc = data.split(replace);
  const dc1 = dc.join(newreplace);
  console.log(dc1);
}
//Change(a1, "it", "is");

function foo1(name) {
  this.name = name;
}

foo1.prototype.greet = function () {
  return `my name is ${this.name}`;
};
const a2 = new foo1("George");
//console.log(a2.greet());
Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b);
};
//console.log([1, 2, 3, 4, 5].sum());
console.log(Array(10, 5));
