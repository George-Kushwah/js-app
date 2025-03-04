let s12 = new Set([1, 2, 2, 3, 5, { name: "Gunnu" }]);

// console.log(s12.has(2));
// console.log(s12.add(8));
// console.log(s12.delete(8));
// console.log(s12.clear());
// console.log(s12);
let s13 = { name: "Jhon" };
let s14 = new WeakSet(); //work same as set
s14.add(s13);
//console.log(s14);
let s15 = new Map();
s15.set("info", { city: "agra" });
// console.log(s15.get("info"));
//console.log(s15.has("info")); //properties same as like: set,get,has,delete,clear
//console.log(s15);
var foo = "hi";

function test4() {
  function foo() {}

  foo = "helli";
  return;
}
// console.log(test4());
// console.log(foo);
let s38 = ["one", "two"];
let s39 = "hello";
// console.log(s38.includes("on"));
// console.log(s39.includes("ll"));
let s40 = "Hellopl";
let s41 = "world";
let ss1 = "";
//output Hweollrle----------------------------to do
for (i = 0; i < s40.length; i++) {
  ss1 += `${s40[i]}${s41[i] === undefined ? "" : s41[i]}`;
  //console.log(`${s40[i]}${s41[i]}`);
}
// console.log(ss1);
function test1() {
  let a = (b = 5); //here js attch b to global object
}
// test1();
// console.log(b);
let dc1 = [1, 5, 4, 2, 6, 3].sort(); //it will sort on aphabet order
let d12 = [];
d12[10] = 10;
d12[100] = 100;
// console.log(dc1);
// console.log(d12);
d12.forEach((i) => {
  //console.log(i); // not calcuated empty slot in array
});
d12.map((i) => {
  // console.log(i);
});
for (i of d12) {
  // console.log(i); //its calcuated empty slot in array
}
// console.log("abc" + +"xuz");
let dc4 = [1, 2, 3].push(4);
// console.log(dc4.push(3));
function foo1() {
  setTimeout(() => {
    console.log(i);
  }, 1000);
  let i = 10;
}
foo1();
// if ([]) {
//   console.log("Hello");
// }
// if ([] == true) {
//   console.log("Hello");
// } else console.log("hi");
let fc = [1, 2, 2, 3];
// console.log(fc.sort(() => Math.random * 0.5));
