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
//console.log(Array(10, 5));
let a3 = "a.b.c.d.e".split(".");
let a4 = a3.reduceRight((a, b) => ({ [b]: a }));
//console.log(a4);
function magic() {
  return (x = 1), [], {}; //js exe right side
}
//console.log(magic());
function foo2() {
  console.log(this);
}
let a5 = {
  dc: foo2.bind(null), // foo2 function pointing to the window object
};
//a5.dc();

let a6 = {
  pizza: 346,
  burger: 49,
  alloticky: 99,
  peties: 25,
};
function getprice(ab) {
  return a6[ab] || 0;
}
//console.log(getprice("peties"));

class multifun {
  val = 0;
  add(num) {
    this.val += num;
    return this;
  }
  multi(num) {
    this.val *= num;
    return this;
  }
}

const dc1 = new multifun();
//console.log(dc1.add(2).add(3).multi(2));
//console.log(typeof []);
let a7;
let a8;
a7 = 1;
a8 = (a7++, a7++, (a7) => a7 + 1)(a7);
//console.log(a8);
let a9 = ["Bat", "fan", "apple", "Cat", "cat"]; // js sort by UTF-8
//console.log(a9.sort());

function foo3() {
  console.log("object-1");
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("object-2");
    });
    return res("Promise Resolve");
  });
}
// console.log(foo3());
// console.log("object-3");
function foo4() {
  return "Hello", "Peacock", {}, [];
}
//console.log(foo4());
