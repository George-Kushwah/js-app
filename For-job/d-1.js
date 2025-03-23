let a1 = {
  name: "Harshit",
  dc: ["apple", "banan", "mango"],
  func: function () {
    this.dc.map((item) => {
      //Ar func search this value in parent function
      console.log(this.name, item);
    });
  },
};
// a1.func();
let a2 = "Rajesh";
function test11() {
  let a2 = "Minal";
  console.log(a2);
}
if (a2.length > 0) {
  a2 = "Rohan";
  // console.log(a2);
}
// test11();
// console.log(a2);
let a3 = { name: "George" };
//let a4 = { ...a3 }
//let a4 = Object.assign({}, a3);
//a4.name = "Rachit";
//console.log(a3, a4);
let a5 = {
  name: "Gunnu",
  add: { city: "Agra" },
  data: function () {
    return "all data";
  },
};
let a6 = JSON.parse(JSON.stringify(a5));
a6.add.city = "Jaipur";
//console.log(a6, a5);
function* gen() {
  let re = yield;
  // let re = [yield, yield, yield];
  //  console.log(re);
  yield "Result";
  yield* ["React", "node", "express"];
}
let a7 = gen();
a7.next();
// a7.next(400);
// a7.next(500);
// a7.next(600);
// console.log(a7.next().value);
// console.log(a7.next().value);
// for (i of a7) {
//   console.log(i, "loop");
// }
// console.log([...a7]);
// console.log(a7.next().value);
// console.log(a7.next().value);
let lane = "city";
let name1 = "Jaipur";
let a8 = {
  fname: "Rajesh",
  age: 35,
  "like this space": true,
  [lane]: name1,
};
//console.log(a8["like this space"]);
for (i in a8) {
  //console.log(a8[i]);
}
let a9 = { a: 10, b: 20, c: "name" };
function test1(a) {
  for (key in a) {
    if (typeof a[key] === "number") {
      a[key] *= 2;
    }
  }
}
// test1(a9);
// console.log(a9);
let a = {};
let b = { key: "a" };
let c = { key: "c" };
a[b] = 100;
a[c] = 200;
a[b] = 800;
// console.log(a);
// let a10 = { a: "a", b: "b", a: "c" };
// console.log(a10);
// console.log({ ..."abcde" }); //it add auto key in object but not in array
// console.log([..."abcde"]);
let a10 = { name: "Gunnu", level: 10, city: "agra" }; //add only 2 properties define in arr
//console.log(JSON.stringify(a10, ["level", "city"])); //pass vaule in array not in object
let a11 = {
  radius: 10,
  dis() {
    return this.radius * 2;
  },
  prer: () => this.radius * 2,
};
// console.log(a11.dis());
// console.log(a11.prer()); //its refer this value to window object and find undefied so un*un=nan
let a12 = { name: "George", city: { name: "agra", age: "plplo" } };
let {
  city: { age },
} = a12;
//console.log(age);
//let fg = [4, 2, 5];
let a13 = { name: "minal" };
let a14 = [a13];
a14 = null;
// console.log(a13);
let a15 = { number: 10 };
let a16 = (x = { ...a15 }) => {
  console.log((x.number *= 2));
};
// a16(2);
//console.log({ a15 });
// a16(); //20
// a16(); //20
// a16(a15); //20
// a16(a15); //40
// a16(); //80
// a16(); //80
//let df = { hj: "pppp" };
let df = [1, 2, 2];
// let df1 = { ...df };
// let df1 = [...df];
// console.log(df1);
// let a17 = {
//   name: "user",
//   logmess() {
//     console.log(`${this.name}`);
//   },
// };
// setTimeout(function () {
//   a17.logmess();
// });
// let a18 = {
//   read() {
//     this.a = +prompt("a", 0);
//     this.b = +prompt("b", 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
// };
// a18.read();
// console.log(a18.sum());
var lengths = 4;
function call1() {
  console.log(this.lengths);
}
let a20 = {
  length: 5,
  // method(fn) {
  //   fn(); // target window object
  // },
  method() {
    console.log(arguments);
    arguments[0](); //target the present object
  },
};
// a20.method(call1, 1, 2);
let a21 = {
  total: 0,
  sum(a) {
    this.total += this.total + a;
    return this;
  },
  multi(a) {
    this.total *= this.total + a;
    return this;
  },
};
let a22 = a21.sum(15).multi(5);
// console.log(a22.total);
let a23 = ["a", "b", "c"];
let a24 = [1, 2, 3];
a23.push.apply(a23, a24);
// console.log(a23);
function f() {
  console.log(`${this.name}`);
}
let a25 = f.bind({ name: "Gunnu" }).bind({ name: "Harshit" }); //chaining bind not working only first chain is work
// a25();
// let div1 = document.getElementById("a1");
// let div2 = document.getElementById("a2");
// let div3 = document.getElementById("a3");
// div1.addEventListener(
//   "click",
//   function (e) {
//     // e.stopPropagation();
//     alert("div1");
//   }
//   //{ capture: true } //event capture
// );
// div2.addEventListener(
//   "click",
//   function (e) {
//     // e.stopPropagation();
//     alert("div2");
//   }
//   //{ capture: true }
// );
// div3.addEventListener(
//   "click",
//   function (e) {
//     // e.stopPropagation();
//     alert("div3");
//   }
//   //{ capture: true }
// );
// let a26 = document.getElementById("dc");
// a26.addEventListener("click", (e) => {
//   console.log(e.target.tagName);
// });
class hello {
  constructor(name) {
    this.name = name;
    //console.log("cons logs");
  }
  hello() {
    console.log(`${this.name}`);
  }
  static mee() {
    console.log(`static method`);
  }
}
let aa = new hello("Gunnu");
// aa.hello();
// hello.mee();
// for (i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100);
// }
// for (i = 0; i < 5; i++) {
//   (function (fn) {
//     setTimeout(() => {
//       console.log(fn);
//     }, i);
//   })(i);
// }
let b1 = [1, 2, 3];
b1[10] = 11;
// console.log(b1);
function test22(name) {
  let mark = name ?? "absent";
  console.log(`mark is ${mark}`);
}
// test22(10);
// test22(0);
let na1 = {};
let bird = { name: "Perrit" };
let ani = { name: "dog" };
na1[bird] = { ...bird };
na1[ani] = { ...ani, tg: "hi" }; //its remove first value add last value name:dog
// console.log(na1[bird]);
let a30 = () => {
  let a1 = "Hello";
  function code() {
    console.log(a1);
  }
  a1 = "Hi";
  return code;
};
let a31 = a30(); // first order methos apply hoga
// a31();
function otp() {
  let otp = Math.floor(Math.random() * 90000);
  return otp;
}
// console.log(otp());
new Promise((res, rej) => {
  multiply = (x) => {
    setTimeout(() => {
      res(x * x);
    }, 1000);
  };
}).then((res) => {
  console.log("Result", res);
});
//multiply(3);
// for (i = 0; i < 2; i += 0.5) {
//   console.log(i);
// }
// let object = {};
let vals = "constructor";
// if (vals in object) {
//   console.log("Success");
// } else console.log("Not");
function getsumm(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
let a32 = "Gunnu";
let a33 = "George";
// getsumm`${a32} hello ${a33}`; // Tagged template
// console.log(["toSdfdfdtring", "ppp"].length);
function test() {
  console.log(test.xz);
}
// test();
test.xz = 10;
test.xz = 20;
let s1 = 10;
let s2 = new Number(10); // its create a object
let s3 = 10;
//console.log(b === c);
//console.log(s1 === s2);
function setage(ed) {
  if (ed == { age: 18 }) {
    console.log("hello age");
  } else if (ed == { age: 18 }) {
    console.log("not age");
  } else console.log("hello");
}
// setage({ age: 18 });
let s4 = {};
let s5 = { key: "c" };
let s6 = { key: "d" };
s4[s5] = 500;
s5[s6] = 600;
s5[s5] = 400;
// console.log(s4[s6]);
// console.log(s4[s5]);
// console.log(s5[s5]);
// console.log(s5[s6]);
// console.log(s4, s5, s6);
let s9 = [1, 2, 3, 4];
delete s9[2];
// console.log(s9);
// let s10 = "Gunnu";
// s10[0] = "R";
// console.log(s10[0], s10[1]);
var [ed, pl] = [1, 2, 3];
// console.log(ed, pl);
let s18 = 'Hello code "dost"'; //backslash
// console.log(s18);
function s19(a, b) {
  "use strict";
  a = 20;
  b = 40;
  return arguments[0] + arguments[0];
}
// console.log(s19(10, 20));
function sum1(a) {
  return a + a;
}
function sum2(a) {
  return a * a;
}
let b2 = (sum1(10), sum2(4));
// console.log(b2);
let b3 = { na: "Jaipur" };
let b4 = Object.create(b3);
//let b4 = b3;
delete b4.na;
// console.log(b3);
function convertinit(val) {
  return val.toString(2).split("0").join("").length;
}
// console.log(convertinit(1234));
function test1() {
  let aq = (bq = cq = "@@");
  return aq;
}
// console.log(test1());
// console.log(typeof aq);
// console.log(typeof bq);
// console.log(typeof cq);
let s21 = 5;
let s22 = s21++;
// console.log(s21, s22);
let s23 = `let n=2; let n1=2; console.log(n+n1)`;
//setTimeout(s23, 1000); // its useing evfal funtion
let s24 = new Function("a", "b", "console.log(a+b)");
//s24(10, 20);
let s25 = [10, 20, 35, 40];
//let s26 = s25.some((dc) => dc > 30);
//let s26 = s25.every((dc) => dc > 8);
//console.log(s26);
s25.fill(78);
//console.log(s25);
function test2() {
  s27 = "Hello";
  console.log(s27);
}
// test2();
// let s27;
let s29 = "wave";
//output Wave wAve waVe wavE
function wave(str) {
  let a = [];
  for (i = 0; i < str.length; i++) {
    let b = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    a.push(b);
  }
  return a;
}
// console.log(wave(s29));
async function test3() {
  return "hello";
}
//console.log(test3());
var s30 = "Hello";
function test45() {
  s30 = "hi";
  return;
  function s30() {
    return "fdfdf";
  }
}
// console.log(test45());
// console.log(s30);
show1 = "love js";
function show1() {
  console.log("hello");
}
// console.log(show1);
var foo = "hi";
function test4() {
  function foo() {}
  foo = "helli";
  return;
}
// console.log(test4());
// console.log(foo);
function Factorail(n) {
  if (n === 1) return 1;
  else return n * Factorail(n - 1);
}
// console.log(Factorail(5));
let s31 = 10;
let s33 = 20;
s31 = s31 ^ s33;
s33 = s31 ^ s33;
s31 = s31 ^ s33;
// console.log(s31, s33); //vALUE SWAP
function abc1() {
  return 2;
}
function abc2() {
  return 4;
}
let s37 = (abc1(), abc2());
// console.log(s37);
let s35 = { aa: "1", 2: "2" };
let s36 = new Set([1, 2, 3]);
// console.log(s35.hasOwnProperty("aa"));
// console.log(s35.hasOwnProperty(aa));
// console.log(s35.hasOwnProperty("2"));
// console.log(s35.hasOwnProperty(2));
// console.log(s36.has("1"));
// console.log(s36.has(1));
// console.log(s36);
//let w1 = "jscode";
//let w1 = [1, 2, 3];
// w1[0] = "c";
// console.log(w1);
let w2 = { name: "Gunnu" };
//let w3 = ["name"];
let w3 = { name: "John" };
w2[w3] = "George";
// console.log(w2[w3]);
let w4 = {
  flag: 1,
  toString: function () {
    return this.flag++;
  },
};
w4.toString();
w4.toString();
//console.log(w4);
// if (w4 == 1 && w4 == 2 && w3 == 3) {
//   console.log("Hello");
// }
// let dcf1 = { age: 45 };
// dcf1.pl = "ppp";
// console.log(dcf1);
this.a = 10;
const dcf2 = () => {
  setTimeout(() => {
    console.log(this.a);
  }, 1000);
};
dcf2();
const user1 = {
  name: "Rahul",
  func() {
    console.log(this.name);
  },
};
// setTimeout(user1.func(), 1000);
const dcf3 = [1, 2, 3, 4, 5];
let dcf4 = dcf3.reduce((prev, current, index) => {
  // console.log(prev, "---prev");
  // console.log(current, "--curr");
  // console.log(`itteration-${index}`);
  return prev + current;
});
// console.log(dcf4);
const dcf5 = [];
let dcf6 = dcf5.reduce((prev, current, index) => {
  // console.log(prev);
  // console.log(current);
  // console.log("itteration-1");
  // return prev + current;
}, 0);
// console.log(dcf6);
const sw1 = [1, 2, 3, 4];
sw1.splice(0, sw1.length);
// console.log(sw1);
// for (;;) {
//   //  console.log("loop"); run as infinte
// }
