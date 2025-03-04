let a1 = {
  name: "Harshit",
  dc: ["apple", "banan", "mango"],
  func: function () {
    this.dc.map((item) => {
      console.log(this.name, item);
    });
  },
};
//a1.func();
let a2 = "Rajesh";
function test1() {
  let a2 = "Minal";
  console.log(a2);
}
if (a2.length > 0) {
  a2 = "Rohan";
  //console.log(a2);
}
// test1();
// console.log(a2);
let a3 = { name: "George" };
//let a4 = { ...a3 }
let a4 = Object.assign({}, a3);
a4.name = "Rachit";
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
//console.log(a6);
function* gen() {
  //let re = yield;
  //   let re = [yield, yield, yield];
  //   console.log(re);
  yield "Result";
  yield* ["React", "node", "express"];
}
let a7 = gen();
// a7.next();
// a7.next(400);
// a7.next(500);
// a7.next(600);
// console.log(a7.next().value);
// console.log(a7.next().value);
// for (i of a7) {
//   console.log(i);
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
//console.log(a8);
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
//console.log(a);
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
// console.log(a11.prer()); //its refer this value to window object
let a12 = { name: "George", city: { name: "agra" } };
let {
  city: { name },
} = a12;
//console.log(name);
let a13 = { name: "minal" };
let a14 = [a13];
a13 = null;
//console.log(a14);
let a15 = { number: 10 };
let a16 = (x = { ...a15 }) => {
  console.log((x.number *= 2));
};
// a16(); //20
// a16(); //20
//a16(a15); //40
let a17 = {
  name: "user",
  logmess() {
    console.log(`${this.name}`);
  },
};
setTimeout(function () {
  //a17.logmess();
});
let a18 = {
  read() {
    this.a = +prompt("a", 0);
    this.b = +prompt("b", 0);
  },
  sum() {
    return this.a + this.b;
  },
};
// a18.read();
// console.log(a18.sum());
var lengths = 4;
function call1() {
  console.log(this.lengths);
}
let a20 = {
  length: 5,
  method(fn) {
    fn(); // target window object
  },
  //   method() {
  //     arguments[0](); //target the present object
  //   },
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
let a22 = a21.sum(10).multi(5);
//console.log(a22.total);
let a23 = ["a", "b", "c"];
let a24 = [1, 2, 3];
a23.push.apply(a23, a24);
// console.log(a23);
function f() {
  console.log(`${this.name}`);
}
let a25 = f.bind({ name: "Gunnu" }).bind({ name: "Harshit" }); //chaining bind not working only first chain is work
//a25();
let div1 = document.getElementById("a1");
let div2 = document.getElementById("a2");
let div3 = document.getElementById("a3");
div1.addEventListener(
  "click",
  function (e) {
    // e.stopPropagation();
    alert("div1");
  }
  //{ capture: true } //event capture
);
div2.addEventListener(
  "click",
  function (e) {
    // e.stopPropagation();
    alert("div2");
  },
  { capture: true }
);
div3.addEventListener(
  "click",
  function (e) {
    // e.stopPropagation();
    alert("div3");
  }
  //   { capture: true }
);
let a26 = document.getElementById("dc");
a26.addEventListener("click", (e) => {
  console.log(e.target.tagName);
});

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
//aa.hello();
//hello.mee();
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
//console.log(b1);
function test2(name) {
  let mark = name ?? "absent";
  console.log(`mark is ${mark}`);
}
// test2(10);
// test2(0);
// console.log(true ?? "Hello");
// console.log(false ?? "Hello");
// console.log(null ?? "nullHello");
// console.log(0 || "0Hello");
// console.log(undefined || "unHello");
// console.log(Math.floor(Math.random() * 9) + 1);
// console.log(true || "hello");
// console.log(true ?? "Hello");
// const { length } = "js"; //Boxing method
// console.log(length);
let a29 = 100;
// console.log(a29.toString())
// console.log(100.toString())
let na1 = {};
let bird = { name: "Perrit" };
let ani = { name: "dog" };
na1[bird] = { ...bird, name: "hello" };
na1[ani] = { ...ani, tg: "hi" }; //its remove first value add last value name:dog
// console.log(na1[bird]);
// console.log("9" > "11"); //convert string to string
// console.log("9" > 11); // convert strint and number
// console.log("" > -1); // empty is 0
// console.log("Hello" > 1); //
// console.log(1000000 === 10_000_00);
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
// if (0.1 + 0.2 === 0.3) {
//   console.log("true");
// } else console.log("False");
//console.log(0.1 + 0.2);
// console.log(0.2 + 0.1);
//console.log(false == []); //empty array converted into string or empty strin 0 and false value =0
//console.log(false == ![]); //![] == truthy value
//console.log("hello" == {});
//console.log("111" - 1);
//console.log([] + 1);
//console.log({} + 2);
// console.log([1, 2, 3] > 1);
// console.log(NaN === NaN);
// console.log({} + []);
//console.log(true + 1);
//console.log(true + "");
function otp() {
  let otp = Math.floor(Math.random() * 9000);
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
// console.log(1 < 1);
// console.log(undefined++);
// console.log([1, 5, 5] + [2, 3]); // convert array in string
//call method automatic convert string,number to object
// console.log(10++)
//console.log(++10)
// for (i = 0; i < 2; i += 0.5) {
//   console.log(i);
// }

// let object = {};
// let vals = "constructor";
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
//getsumm`${a32} hello ${a33}`; // Tagged template
//console.log(["toSdfdfdtring", "ppp"].length);
let a34 = 12;
// console.log(a34 ** 3);
function test() {
  console.log(test.xz);
}
//test();
test.xz = 10;
test.xz = 20;
//test();
let s1 = 10;
let s2 = new Number(10); // its create a object
let s3 = 10;
// console.log(b === c);
function setage(ed) {
  if (ed == { age: 18 }) {
    console.log("hello age");
  } else if (ed == { age: 18 }) {
    console.log("not age");
  } else console.log("hello");
}
//setage({ age: 18 });
//console.log(+true);
//console.log(!"kl");
let s4 = {};
let s5 = { key: "c" };
let s6 = { key: "d" };
s4[s5] = 500;
s5[s6] = 600;
//s5[s5] = 400;
// console.log(s4[s6]);
// console.log(s4[s5]); // Overwirite
// console.log(s5[s5]);
// console.log(s5[s6]);
//console.log(s4, s5, s6);
// console.log(![]);
// console.log([1, 2, 3, 4] + 1);
// console.log([] + []);
// console.log("rr" + false);
// console.log((1 && 2) || 0 || 3);
// console.log(null && undefined);
// console.log(null || (2 && 5) || 9);
// console.log("good" > "bad");
// console.log(1 > 1);
// console.log("uat" > 2);
// console.log("bat" > 1);
// console.log("9" > 11);
// console.log(Math.round(5.51));
// console.log(Math.round(-5.51));
// console.log(Math.floor(5.51));
// console.log(Math.floor(-5.51));
// console.log(Math.abs(5.51));
// console.log(Math.abs(-5.51));
// console.log((125.216).toFixed(2));
//console.log(true + "5");
// console.log(-0 == 0);
// console.log(-0 === 0);
// console.log(true == false);
// console.log(false == true);
let s9 = [1, 2, 3, 4];
delete s9[2];
//console.log(s9);
let s10 = "Gunnu";
s10[0] = "R";
//console.log(s10[0], s10[1]);
var [ed, pl] = [1, 2, 3];
// console.log(ed, pl);
let s18 = 'Hello code "dost"'; //backslash
//console.log(s18);
function s19(a, b) {
  "use strict";
  a = 20;
  b = 40;
  return arguments[0] + arguments[0];
}
//console.log(s19(10, 20));
function sum1(a) {
  return a + a;
}
function sum2(a) {
  return a * a;
}
let b2 = (sum1(10), sum2(4));
//console.log(b2);
let b3 = { na: "Jaipur" };
let b4 = Object.create(b3);
//let b4 = b3;
delete b4.na;
//console.log(b3);
function convertinit(val) {
  return val.toString(2).split("0").join("").length;
}
//console.log(convertinit(1234));
function test1() {
  let aq = (bq = cq = "@@");
}
// console.log(test1());
// console.log(typeof aq);
// console.log(typeof bq);
// console.log(typeof cq);
// console.log(null == null); //true
// console.log(null == undefined); //true
// console.log(null != undefined); //false
// console.log(undefined + undefined); //nan
// console.log(null + null); //0
// console.log(null + "abcd"); //nullabcd
//console.log(["eval", "p"] + 10);
// console.log(3 > "rich" < 1);
// console.log(4 < "good" > 6);
let s21 = 5;
let s22 = s21++;
//console.log(s21, s22);
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
let s27;
// test2();
let s28 = "Rahul";
// console.log(s28.substring(5, 1)); // its swap a value
// console.log(s28.substr(0, 2));
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
//console.log(wave(s29));
async function test3() {
  return "hello";
}
//console.log(test3());
var s30 = "Hello";
function test4() {
  s30 = "hi";
  return;
  function s30() {
    return s30;
  }
}
// console.log(test4());
// console.log(s30);
show1 = "love js";
function show1() {}
//console.log(show1);
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
//console.log(Factorail(5));
let s31 = 10;
let s33 = 20;
s31 = s31 ^ s33;
s33 = s31 ^ s33;
s31 = s31 ^ s33;
//console.log(s31, s33); //vALUE SWAP
function abc1() {
  return 2;
}
function abc2() {
  return 4;
}
let s37 = (abc1(), abc2());
//console.log(s37);
let s38 = ["one", "two"];
let s39 = "hello";
// console.log(s38.includes("on"));
// console.log(s39.includes("ll"));

let s35 = { 1: "1", 2: "2" };
let s36 = new Set([1, 2, 3]);
// console.log(s35.hasOwnProperty("1"));
// console.log(s35.hasOwnProperty(1));
// console.log(s36.has("1"));
// console.log(s36.has(1));
//console.log(s36);
let s42 = 1;
let s43 = 2;
//console.log(s42++ + ++s43);
//let w1 = "jscode";
let w1 = [1, 2, 3];
w1[0] = "c";
//console.log(w1);
let w2 = { name: "Gunnu" };
//let w3 = ["name"];
let w3 = { name: "John" };
w2[w3] = "George";
//console.log(w2);
let w4 = {
  flag: 1,
  toString: function () {
    return this.flag++;
  },
};
w4.toString();
w4.toString();
console.log(w4);
if (w4 == 1 && w4 == 2 && w3 == 3) {
  console.log("Hello");
}
