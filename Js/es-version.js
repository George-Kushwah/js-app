//Lexical scope
let a1 = {
  list: "Name",
  dc: ["apple", "banana", "mango"],
  func: function () {
    this.dc.map((item) => {
      console.log(this.list, item);
    });
  },
};
//a1.func();
let a2 = "Rohan";
function abc1() {
  let a2 = "Minal";
  console.log(a2);
}
if (a2.length > 0) {
  a2 = "Rajesh";
  //console.log(a2);
}
//abc1();
//console.log(a2);

//shallow copy

let a3 = { name: "George" };
//let a4 = { ...a3 };
let a4 = Object.assign({}, a3);
a4.name = "Rachit";
//console.log(a3, a4);
let a5 = {
  name: "Gunnu",
  add: {
    city: "Agra",
  },
  data: function () {
    return "all data";
  },
};
let a6 = JSON.parse(JSON.stringify(a5));
a6.add.city = "Jaipur";
//console.log(a6, a5);
function* Genrator() {
  //   let result = yield;
  //   let result = [yield, yield, yield];
  //   console.log(result);
  yield "Result";
  yield* ["React", "node", "express"];
}
let a7 = Genrator();
// a7.next();
// a7.next(400);
// a7.next(500);
// a7.next(600);
// console.log(a7.next().value);
// console.log(a7.next().value);
// for (i of a7) {
//   console.log("Loop", i);
// }
//console.log([...a7]);
// console.log(a7.next().value);
// console.log(a7.next().value);
const lname = "city"; //add key valye
const city = "agra";
let a8 = {
  name: "Hello code",
  age: 35,
  "like this space": true,
  [lname]: city,
};

//console.log(a8);
for (i in a8) {
  //console.log(a8[i]);
}
// let a9 = {
//   a: 10,
//   b: 20,
//   c: "Name",
// };

// function abc2(a) {
//   for (key in a) {
//     if (typeof a[key] === "number") {
//       a[key] *= 2;
//     }
//   }
// }
// abc2(a9);
// console.log(a9);
let a = {};
let b = { key: "a" };
let c = { key: "c" };
//it will assign like this
//a[object object]:122 -- b already a object so object not convert it
//a[object object]:222 -- c already a object so object not convert it
a[b] = 122;
a[c] = 222;
//console.log(a[b]);
let a9 = { a: "a", b: "b", a: "c" }; // if here two iwth same name while first key replace while printing
//console.log(a9);
//console.log({ ..."abcde" });
//console.log([..."abcde"]);
let a10 = { name: "Gunnu", level: 10, city: "agra" }; //add only 2 properties define in arr
//console.log(JSON.stringify(a10, ["level", "city"]));
let a11 = {
  radius: 10,
  dis() {
    return this.radius * 2;
  },
  prer: () => this.radius * 2,
};
// console.log(a11.dis());
// console.log(a11.prer()); //its refer this value to window object
let a12 = {
  name: "Gunnu",
  add: {
    mob: "Agra",
  },
};
let name = "Harshit";
//let { name: myname } = a12;
let {
  add: { mob },
} = a12; //nested detureing
//console.log(city);
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
// a16(a15); //20
// a16(a15); //40

let a17 = {
  name: "user",
  logmess() {
    console.log(`${this.name}`);
  },
};
setTimeout(function () {
  //  a17.logmess();
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
//a18.read();
//console.log(a18.sum());
var lengths = 4;
function call1() {
  console.log(this.lengths);
}
let a20 = {
  length: 5,
  //   method(fn) {
  //     fn(); target window object
  //   },
  method() {
    arguments[0](); //target the present object
  },
};
//a20.method(call1, 1, 2);
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
//console.log(a23);
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
//event delegation

// let a26 = document.getElementById("dc");
// a26.addEventListener("click", (e) => {
//   console.log(e.target.tagName);
// });

class Hellot {
  constructor(name) {
    this.stname = name;
    console.log("Cons function");
  }
  hello() {
    console.log(`${this.stname}`);
  }
  static staticmeh() {
    console.log("static method");
  }
}
//let a27 = new Hellot("Gunnu");
//a27.hello();
//Hellot.staticmeh();

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i);
// }

for (var i = 0; i < 5; i++) {
  (function (inf) {
    setTimeout(() => {
      //console.log(inf);
    }, i);
  })(i);
}

let a28 = [1, 2, 3];
a28[10] = 11;
//console.log(a28);
function stumess(name) {
  //let mess = name || "absent";
  let mess = name ?? "absent";
  //console.log(`mark ${mess}`);
}
stumess(10);
stumess(0);
stumess(52);
//console.log(true ?? "Hello");
//console.log(false ?? "Hello");
//console.log(null ?? "Hello");
//console.log(0 || "Hello");
//console.log(Math.floor(Math.random() * 9) + 1);
const { length } = "js"; //Boxing method
//console.log(length);
let a29 = 100;
//console.log(a29.toString())
//console.log(100.toString())//fix with add .. dots
let na1 = {};
let bird = { name: "Perrit" };
let ani = { name: "dog" };
na1[bird] = { ...bird, name: "hello" };
na1[ani] = { ...ani, tg: "hi" }; //its remove first value add last value name:dog
//console.log(na1[bird]);
//console.log("9" > "11"); //convert string to string
//console.log("9" > 11); // convert strint and number
//console.log("" > -1); // empty is 0
//console.log("Hello" > 1); //
//console.log(1000000 === 10_000_00); // useing numeric seperator here intorduced in es6
let a30 = () => {
  let a1 = "Hello";
  function code() {
    console.log(a1);
  }
  a1 = "Hi";
  return code;
};
let a31 = a30(); // first order methos apply hoga
//a31();
// if (0.1 + 0.2 === 0.3) {
//   console.log("true");
// } else console.log("False");
//console.log(0.2 + 0.1);
//console.log(false == []); //empty array converted into string or empty strin 0 and false value =0
//console.log(false == ![]); //![] == truthy value
//console.log("hello" == {});
//console.log("111" - 1);
//console.log([] + 1);
//console.log({} + 2);
//console.log([1, 2, 3] > 1);
//console.log(NaN === NaN);
//console.log({} + []);
function OTP() {
  let otp = "";
  otp = Math.floor(Math.random() * 9000);
  return otp;
}
//console.log(OTP());
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
//console.log(1 < 1);
//console.log(undefined++);
//console.log([1, 5] + [2, 3]); // convert array in string
//call method automatic convert string,number to object
//console.log(10++)
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
const pro1 = Promise.resolve("pro1");
const pro2 = Promise.resolve("pro2");
const pro3 = Promise.reject("pro3");
const pro4 = Promise.resolve("pro4");

const runpro = async () => {
  const res1 = await Promise.all([pro1, pro2]);
  const res2 = await Promise.all([pro3, pro4]);
  return [res1, res2];
};
// runpro()
//   .then((res) => console.log(res))
//   .catch((e) => console.log("Error", e));
let a34 = 12;
//console.log(a34 ** 3);12*12*12
function test() {
  console.log(test.xz);
}
//test();
test.xz = 10;
test.xz = 20;
//test();
//console.log({} == {});
let s1 = 10;
let s2 = new Number(10); // its create a object
let s3 = 10;
//console.log(b === c);
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
s5[s5] = 400;
// console.log(s4[s6]);
// console.log(s4[s5]);// Overwirite
// console.log(s5[s5]);
// console.log(s5[s6]);
// console.log(s4, s5, s6);
let s7 = "abcdef";
let s8 = "123";
//output a1b2c3def
//oupt a1b2c3456
//-----------
// console.log(![]);
// console.log([1, 2, 3, 4] + 1);
// console.log([] + []);
// console.log("rr" + false);
// console.log((1 && 2) || 0 || 3);
// console.log(null && undefined);
// console.log(null || (2 && 5) || 9);
//console.log("good" > "bad");
//console.log(1 > 1);
// console.log("uat" > 2);
// console.log("bat" > 1);
// console.log("9" > 11);
// console.log(Math.round(5.51));
// console.log(Math.round(-5.51));
// console.log(Math.floor(5.51));
// console.log(Math.floor(-5.51));
// console.log(Math.abs(5.51));
// console.log(Math.abs(-5.51));
//console.log((125.426).toFixed(2));
let s9 = [1, 2, 3, 4];
delete s9[0];
//console.log(s9);
let s10 = "Gunnu";
s10[0] = "R";
//console.log(s10[0], s10[1]);
let s11 = true;
// setTimeout(() => {
//   //a11 = false;
// });
// while (a11) {
//   //console.log("Print long");// it will run countonius becua call stack not empty and set timeout funcciton will not go to stack
// }
//console.log(true + "5");
var [ed, pl] = [1, 2, 3];

//console.log(ed, pl);
let s12 = new Set([1, 2, 2, 3, 5, { name: "Gunnu" }]);

//console.log(s12.has(2));
// console.log(s12.add(8));
// console.log(s12.delete(8));
//console.log(s12.clear());
//console.log(s12);
let s13 = { name: "Jhon" };
let s14 = new WeakSet(); //work same as set
s14.add(s13);
//console.log(s14);
let s15 = new Map();
s15.set("info", { city: "agra" });
//console.log(s15.get("info"));
//console.log(s15.has("info")); //properties same as like: set,get,has,delete,clear
//console.log(s15);
let s16 = new WeakMap();
let s17 = {};
s16.set(s17, "Gunnu");
//console.log(s16);
// console.log(-0 == 0);
// console.log(-0 === 0);
let s18 = 'Hello code "dost"'; //backslash
//console.log(s18);
function s19(a, b) {
  "use strict";
  a = 20;
  b = 40;
  return arguments[0] + arguments[0];
}
//console.log(s19(10, 20));---------------------
let s20 = { com: "abc" };
//let s21 = Object.create(s20);
//let s21 = s20;
//delete s21.com; //kyuki s21 ke pass koi object nahi hai ye s20 ka hi object use kar raha hai
//console.log(s20.com);
function covertnits(val) {
  return val.toString(2).split("0").join("").length;
  //return val.toString();
}
//console.log(covertnits(1234));
function test1() {
  const a = (b = c = "@@");
}
// console.log(test1());
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
//console.log(null == null);//true
//console.log(null == undefined);//true
//console.log(null != undefined); //false
//console.log(undefined + undefined);//nan
//console.log(null + null);//0
//console.log(null + "abcd");//nullabcd
let s21 = 5;
let s22 = s21++;
//console.log(s21 + s22);
let s23 = `let n=2; let n1=2; console.log(n+n1)`;
//setTimeout(s23, 1000); // its useing evfal funtion
//console.log(eval("10*10+5"));
//console.log(eval("alert('hello')"));
let s24 = new Function("a", "b", "console.log(a+b)");
//s24(10, 20);
//console.log(["eval", "p"] + 10);
let s25 = [10, 20, 35, 40];
//let s26 = s25.some((dc) => dc > 30);
let s26 = s25.every((dc) => dc > 8);
//console.log(s26);
s25.fill(78);
//console.log(s25);
function test2() {
  s27 = "Hello";
  console.log(s27);
}
let s27;
//test2();
let s28 = "Rahul";
//console.log(s28.substring(5, 1)); // its swap a value
//console.log(s28.substr(0, 2));
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
//console.log(test4());
//console.log(s30);
show1 = "love js";
function show1() {}

//console.log(show1);
var foo = "hi";

function test4() {
  function foo() {}

  foo = "helli";
  return;
}
//console.log(test4());
//console.log(foo);
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

let s35 = { 1: "1", 2: "2" };
let s36 = new Set([1, 2, 3]);
// console.log(s35.hasOwnProperty("1"));
// console.log(s35.hasOwnProperty(1));
// console.log(s36.has("1"));
// console.log(s36.has(1));
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
//console.log(s38.includes("on"));
//console.log(s39.includes("ll"));
let s40 = "Hello";
let s41 = "wordl";
//output Hweollrle----------------------------to do
//console.log(3 > "rich" < 1);
//console.log(4 < "good" > 6);
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
if (w4 == 1 && w4 == 2 && w3 == 3) {
  console.log("Hello");
}
