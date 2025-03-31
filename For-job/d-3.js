let a1 = 1;
let a2 = 2;
let aa3 = a2++;
// console.log(++a1, a2++, aa3++);
let a3 = [1, 3];
let a4 = a3.reverse(); //its changes org array
// console.log(a3, a4);
let a5 = 5;
let a6 = a5++;
// console.log(a5 + a6);
//console.log([] == false);
function test1q() {
  let a = (bb = 5); //here js attch b to global object
}
// test1q();
// console.log(bb, "ppp");
let a7 = [1, 2, [3, 4]];
let a8 = [...a7];
a8[1] = 10;
a7[2][0] = 100;
// console.log(a7, a8);
// new Promise(() => {
//   console.log("R");
// });
// console.log("H");
let a9 = [1, 2, 3];
let a10 = a9.slice(); //it return a new array
a10[0] = 0;
// console.log(a9, a10);
function test2(a = 5, b = 6) {
  console.log(a + b); //null convert into 0
}
// test2(null, 12);
var a11 = 15;
//console.log(a11);
function a11() {
  console.log("Hello");
}
// console.log(a11);
//console.log([1, 2, 3] == "1,2,3");
var a12 = "employee";
function test3() {
  a12 = "hello";
  return function a12() {
    return;
  };
}
// console.log(test3(), a12, "ppp");
let a13 = [1, 5, 5].push(5); //it will return a length of array
//a13.push(3);
// console.log(a13);
a14 = 6;
// console.log(a14);
// let a14;
let a16 = [1, 2, 3, 6];
let [a17] = a16; // becaue of destrincing
// console.log(a17);
let a19 = [1, 2, 3, 4];
let a20 = a19.toReversed(); // ye org array ko mutate nahi karta hai
// console.log(a20, a19);
var name = 2024; // convert strint in var not in let
// console.log(name + 1);
// console.log(new Array(2, 3)); //it convert beaucse comma seprated value
// console.log(Array(5)); // here not use comma
for (i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
  //console.log(String.fromCharCode(i));
}
let a21 = [1, 5, 4, 7, 9];
// console.log(a21.at(-1));
let a22 = new Array(2, 5);
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
const a25 = (a, b, s = 10) => {};
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
// getinfo();
let d1 = {
  a: 1,
  b: 2,
  sum() {
    return this.a + this.b;
  },
};
//let d2 = d1.sum;
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
function test33() {
  let d5 = 5;
  let d6 = 9;
  console.log(d5, d6);
}
// test33();
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
// obj1.sing();
let d7 = 1;
let d8 = [1, 2, 3];
//console.log(d8[(d7 += 1)]);
let d9 = NaN;
switch (d9) {
  case NaN: //becuase swith use to compare === and nan===nan false
    console.log("Hi nan");
    break;
  default:
  //  console.log("match not found");
}
let d10 = "Harshit Kushwah";
function test4(a) {
  if (a.length > 10) {
    return a.substring(0, 10) + "...";
  }
}
// console.log(test4(d10));
let d11 = [1, 2, 3, 6, 5];
d11 = 0;
// console.log(d11);
function test5(a, b) {
  console.log(arguments, a + b + arguments[0]);
}
//test5(10, 20, 30);
let s1 = ["2024-9-9", "2024-2-13", "2024-1-29", "2024-8-13"];
let s2 = s1.sort((a, b) => new Date(a) - new Date(b));
//console.log(s2);
// console.log("A" - 1);
// console.log("2" + 2 - 2);
let s3 = 10;
let s4 = 20;
let s5 = new Function("a", "b", "console.log(a+b)");
//s5(s3, s4);
let s6 = [1, 2];
let s7 = s6.slice(); //slie method create a sholow copy of the array
s7[0] = 42;
// console.log(s7, s6);
let s8 = { y: 10 }; //JSON NOT ACCEPT CIRCULLER OBJECT
s8.x = s8;
//console.log(JSON.stringify(s8));
const s9 = "Hello";
s10 = 25;
// console.log(delete s9);
// console.log(delete s10); //delete work not work with var let const and work with global object
// let s11 = 1 + score;
// score = 88;
// console.log(s11); //refrence error
let s12 = { prop: 12 };
let s13 = s12;
s13 = { hj: "dfdfd" }; //change when edit refrence value other wise it stroe diff location
// console.log(s12, s13);
//console.log("9" > "78");
// console.log(..."Hello");
let dc1 = ++[[]][+[]] + [+[]];
// console.log(dc1);
// console.log(5 + +"3");
// console.log(5 - -"3");
let dc2 = "8";
// console.log(dc2 + 1);
// console.log(++dc2);
// console.log(dc2++);
// console.log(++dc2);
let dc3 = "Spidey";
var dc4 = "Rahul";
// console.log(delete [dc3]);
// console.log(delete [dc4]);
// console.log(delete dc3);
// console.log(delete dc4);
// console.log(typeof typeof 1); // it will return "number" and number typeof is string
// let a20 = a19.reduce((total, sum, index) => {
//   //   console.log("total", total);
//   //   console.log("value", sum);
//   //   console.log("iteation-1", index);
//   df = total + sum;
//   return df;
// }, 3);
//console.log(a20);
// var a39 = "Hello";
// console.log(a39);
// var a39;
function abc2() {
  console.log(a39);
  var a39 = "Gunnu";
}
// abc2();
function closer1() {
  let a = "Outer function var";
  console.log(a);
  function clo1() {
    let b = "inner function var";
    console.log(b);
  }
  clo1();
  // console.log(b);
}
closer1();
localStorage.setItem("dn", "11-25-2018");
//console.log(localStorage.getItem("dn"));
document.cookie = "name=Rahul; max-age=2500";
document.cookie = "name1=Guddu";
//debugger;
//console.log(document.cookie);
const { length } = "js"; //Boxing method
// console.log(length);
// let s7 = "abcdef";
// let s8 = "123";
//output a1b2c3def
//oupt a1b2c3456
let ss9 = [1, 2, 3, 4];
ss9.length = 100;
delete ss9[0];
// console.log(ss9);
