let a1 = 1;
let a2 = 2;
//console.log(++a1 + a2++);
let a3 = [1, 3];
let a4 = a3.reverse();
//console.log(a3, a4);
let a5 = 5;
let a6 = a5++;
//console.log(a5 + a6);
//console.log([] == false);
function test1() {
  let a = (b = 5); //here js attch b to global object
}
//test1();
//console.log(b);
let a7 = [1, 2, [3, 4]];
let a8 = [...a7];
a8[1] = 10;
a7[2][0] = 100;
//console.log(a7);
new Promise(() => {
  //console.log("R");
});
//console.log("H");
let a9 = [1, 2, 3];
let a10 = a9.slice(); //it return a new array
a10[0] = 0;
//console.log(a9);
function test2(a = 5, b = 6) {
  console.log(a + b); //null convert into 0
}
//test2(null, 12);
var a11 = 15;
//console.log(a11);
function a11() {
  console.log("Hello");
}
//a11();
//console.log([1, 2, 3] == "1,2,3");
var a12 = "employee";
function test3() {
  a12 = "hello";
  return;
  function a12() {}
}
//console.log(a12);
let a13 = [1].push(3); //it will return a length of array
//console.log(a13.push(3));
a14 = 6;
//console.log(a14);
//let a14;
//console.log(typeof typeof 1); // it will return "number" and number typeof is string
let a15 = 0;
//console.log(a15++); //retrun value then increment
//console.log(++a15);
let a16 = [1, 2, 3, 6];
let [a17] = a16; // becaue of destrincing
//console.log(a17);
let a18 = "Hello";
//console.log(a18.repeat(10));
let a19 = [1, 2, 3, 4];
let a20 = a19.toReversed(); // ye org array ko mutate nahi karta hai
//console.log(a20, a19);
var name = 2024; // convert strint in var not in let
//console.log(name + 1);
//console.log(new Array(2, 3)); //it convert beaucse comma seprated value
//console.log(Array(5)); // here not use comma
for (i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
  //console.log(String.fromCharCode(i));
}
let a21 = [1, 5, 4, 7, 9];
//console.log(a21.at(-1));
let a22 = new Array(2);
[...a22].forEach((i) => {
  //console.log(i);
});
const a23 = new Promise((res, rej) => {
  res(1);
  res(2);
  res3(3);
});
//a23.then((res) => console.log(res));
const a24 = (a, b) => {};
const a25 = (a, b, c = 10) => {};
const a26 = (a, b, ...arg) => {};
// console.log(a24.length);
// console.log(a25.length);
// console.log(a26.length);
//console.log(111111111111111111); //max int limit is 16 digit
var messs = 100;
function getinfo() {
  console.log(messs);
  const messs = "hello";
}
//getinfo();
let d1 = {
  a: 1,
  b: 2,
  sum() {
    return this.a + this.b;
  },
};
let d2 = d1.sum;
//let d2 = d1.sum.bind(d1);
//console.log(d2());
let d3 = "Hello js";
let d4 = 5;
// console.log(Number.isNaN(d3));
// console.log(Number.isNaN(d4));
// console.log(isNaN(d3));
// console.log(isNaN(d4));
var d5 = 3;
let d6 = 8;
function test3() {
  let d5 = 5;
  let d6 = 9;
  console.log(d5, d6);
}
//test3();
const obj1 = {
  name: "Minal",
  sing: function () {
    this.age = 20;
    console.log(this);
    var scr = function () {
      this.age = 30;
      console.log(this);
    };
    scr();
  },
};
//obj1.sing();
let d7 = 1;
let d8 = [1, 2, 3];
//console.log(d8[(d7 += 1)]);
let d9 = NaN;
switch (d9) {
  case NaN: //becuase swith use to compare === and nan===nan false
    console.log("Hi nan");
    break;
  default:
  //   console.log("match not found");
}
let d10 = "Harshit Kushwah";
function test4(a) {
  if (a.length > 10) {
    return a.substring(0, 10) + "...";
  }
}
//console.log(test4(d10));
let d11 = [1, 2, 3, 6, 5];
d11 = 0;
//console.log(d11);
let d12 = [];
d12[10] = 10;
d12[100] = 100;
//console.log(d12);
d12.forEach((i) => {
  //console.log(i); // not calcuated empty slot in array
});
d12.map((i) => {
  // console.log(i);
});
for (i of d12) {
  //console.log(i); //its calcuated empty slot in array
}
let d13 = [1, 2, 3, 4];
d13.reduce((a, b) => {
  console.log(a, b); // its return 12,unde,3,unde,4 to remove return b
  return b;
});
