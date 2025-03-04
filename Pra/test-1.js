function Recurrtion(val) {
  if (val <= 0) return val;
  else return val + Recurrtion(val - 1);
}
//console.log(Recurrtion(6));
function curring(val) {
  return (a) => {
    return (b) => val + a + b;
  };
}
//console.log(curring(10)(20)(30));
const data1 = [
  { name: "Harshit", age: 5, role: "admin" },
  { name: "Rachit", age: 3, role: "admin" },
  { name: "Spidey", age: 5, role: "admin" },
  { name: "Rahul", age: 34, role: "user" },
];
function filter(val, fn) {
  let rr = [];
  for (i of  ) {
    if (fn(i)) {
      rr.push(i);
    }
  }
  return rr;
}
// console.log(
//   filter(data1, (val) => {
//     return val.age >= 5;
//   })
// );

function student(name, age) {
  this.name = name;
  this.age = age;
}
function greet(a) {
  console.log(
    `hi my name is ${this.name} and age ${this.age} and living in ${a}`
  );
}
let a1 = student("Harshit", 7);
//greet.call(a1, "Noida");
//greet.apply(a1, ["Delhi"]);
let a2 = greet.bind(a1);
//a2("Jaipur");
function fname() {
  return "Rahul";
}
function lname() {
  return "Kumar";
}
function com1(a, b) {
  console.log(a, b);
}
//com1(fname(), lname());
function com2() {
  return () => {
    return "Hello";
  };
}
let a3 = com2();
//console.log(a3());
let a4 = 10;
function impure() {
  a4++;
  console.log(a4);
}
// impure();
// impure();
function pure(a) {
  a++;
  console.log(a);
}
// pure(10);
// pure(10);
let a5 = function chaining(a, b) {
  return new Promise((res, rej) => {
    //res(a + b);
    setTimeout(() => {
      res(a + b);
    }, 1000);
  });
};
// a5(3, 4)
//   .then((res) => a5(3, res))
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

let a6 = async function () {
  let a = new Promise((res, rej) => {
    res("Resolve");
  });
  try {
    let a1 = await a;
    console.log(a1);
  } catch (e) {
    console.log(e);
  }
};
//a6();
// a6()
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

async function call1() {
  try {
    let a = await fetch("https://jsonplaceholder.typicode.com/users");
    let a1 = await a.json();
    return a1;
  } catch (e) {
    console.log(e);
  }
}
//console.log(call1());
let aa5 = new Promise((res, rej) => {
  setTimeout(() => {
    res("1-*Resolve");
  }, 200);
});

let aa6 = new Promise((res, rej) => {
  setTimeout(() => {
    res("2-*Resolve");
  }, 100);
});

let aa7 = new Promise((res, rej) => {
  setTimeout(() => {
    res("3-Resolve");
  }, 50);
});

let aa8 = new Promise((res, rej) => {
  setTimeout(() => {
    //res("4-*Resolve");
    //rej(new Error());
  }, 500);
});
// Promise.all([aa5, aa6, aa7, aa8])
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e, "pppp"));

// Promise.allSettled([aa5, aa6, aa7, aa8])
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

// Promise.race([aa5, aa6, aa7, aa8])
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

// Promise.any([aa5, aa6, aa7, aa8])
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

let aa9 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise Resolve");
  }, 1000);
});
// aa9
//   .finally((res1) => console.log(res1, "Finily"))
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e, "error"));
// let a7 = function () {
//   return new Promise((res, rej) => {
//     res("Promise Resolved");
//   });
// };
// console.log(a6().then((res) => res));
///////////////////////////////////////////// Prev ------------------------------
let b1 = "Rahul";
let b2 = "Hello my name is Harshit";
//console.log(b2.includes("my"));
// console.log(b2.startsWith("He"));
// console.log(b2.endsWith("it"));
//console.log(b2.search("my"));
//console.log(b2.match(/is/g));
//console.log(b2.search("my"));
//console.log(b2.replace(/is/g, "on"));
//console.log(b1.slice(-3, -1));
//console.log(b1.substring(1, 4));
let b3 = b1.slice(0, 1) + b1.slice(1);
//console.log(b3);
let b4 = b1.split("").reverse().join("");
//console.log(b4);
let b5 = "";
for (i = b1.length; i--; ) {
  b5 += b1[i];
}
//console.log(b5);
//console.log(b1.repeat(10));
// console.log(
//   b1
//     .split("")
//     .map((a) => a.split().reverse().join(""))
//     .join("")
// );
let b6 = ["sun", "mon", "tue", "wed", "thu"];
b6.length = 2;
//console.log(b6);
let b7 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
let b8 = [...new Set(b7)];
//console.log(b8);
let b9 = [1, 1, 2, 3, 4, 4, 5, 6, 6];
//console.log(b9.filter((a, b) => b9.indexOf(a) != b));
let b10 = [
  { name: "Rahul", age: 10 },
  { name: "Ram", age: 10 },
  { name: "Ram", age: 10 },
  { name: "Mianl", age: 10 },
];
//console.log(Array.from(new Set(b10.map(JSON.stringify))).map(JSON.parse));
let b11 = b10.map((item) => item.name);
//console.log(b10.filter((a, b) => b11.indexOf(a.name) != b));
function text1(...a) {
  return a.includes(7);
}
//console.log(text1(1, 2, 3, 6, 5, 4, 7, 8));
let b12 = [1, 2, 3, 4, [3, [5, [8]]]];
function* flat(b12) {
  for (i of b12) {
    Array.isArray(i) ? yield* flat(i) : yield i;
  }
}
let b13 = [...flat(b12)];
//console.log(b13);
let b14 = [4, 5, 6, 7, 8, 9];
let b15 = [...b14];
b14.push(10);
//console.log(b15);
let b16 = [2, 5, 6, 3, 8, 4, 7, 1, 6];
for (i = 0; i < b16.length; i++) {
  let x = b16[i];
  for (j = i; j < b16.length; j++) {
    if (x != b16[j] && x + b16[j] == 7) {
      //console.log(b16[i], b16[j]);
    }
  }
}
let b17 = [14, 85, 63, 2, 1, 4, 95, 87, 12, 100];
for (i = 0; i < b17.length; i++) {
  for (j = 0; j < i; j++) {
    if (b17[i] < b17[j]) {
      let x = b17[j];
      b17[j] = b17[i];
      b17[i] = x;
    }
  }
}
//console.log(b17);
//console.log(b17.sort((a, b) => b - a));
//console.log(Math.max(...b17));
const b18 = [
  { name: "Rahul", age: 12 },
  { name: "zzz", age: 78 },
  { name: "aaa", age: 40 },
];
// console.log(
//   b18.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
// );
let b19 = 0;
for (i of b17) {
  if (b19 < i) {
    b19 = i;
  }
}
//console.log(b19);
let b20 = [1, 2, 3, 4, 3, 2, 1];
//console.log(b20.filter((a) => b20.indexOf(a) == b20.lastIndexOf(a)));
let b21 = "Harshit";
//console.log(b21.split("").filter((a) => "aeiou".includes(a)));
//console.log(Array.from(b21).filter((a) => "aeiou".includes(a)));
let b22 = "well do doing";
// console.log(
//   b22
//     .split(" ")
//     .map((a) => a.split("").reverse().join(""))
//     .join(" ")
// );
let b23 = b22.split(" ").reduceRight((a, b) => {
  let a1 = a.slice(0, 1).toUpperCase() + a.slice(1);
  let a2 = b.slice(0, 1).toUpperCase() + b.slice(1);
  return a1 + " " + a2;
});
//console.log(b23);
function abcd() {
  let x = document.getElementById("pp").value;
  document.getElementById("dd").innerText = x;
}
let b24 = "well do doing";
let b25 = b24.split("").reduceRight((a, b) => {
  let a1 = a
    .split("")
    .map((aa) => aa.split("").reverse().join(""))
    .join("");
  let a2 = b
    .split("")
    .map((aa) => aa.split("").reverse().join(""))
    .join("");
  return a1 + "" + a2;
});
//console.log(b25);
//----------------------------------------------------
let aa1 = [11, 22, 33, 44, 55, 66];
//a1.pop() // Remove last value
//a1.shift() // Remove First value
//a1.unshift(10) // add value in at first
//console.log(a1)
// function check(val) {
//   if (val > 18) {
//     return val;
//   }
// }
// let aa3 = aa1.findIndex(check);
// console.log(aa3);
//a1.splice(2)
//console.log(a2)
//console.log(a1)
let str8 = "Rahul Kumar";
let str9 = str8
  .split(" ")
  .map((s) => s.split("").reverse().join(""))
  .join(" ");
//console.log(str9);

const asd1 = ["sun", "mon", "tue", "wed"];
asd1.splice(2, 0, "sdsd");
let a27 =
  "thIs is a saMpLe program for first LettER CAPITAL of aLL WorDS IN a giVEN sTrInG , staTemEnT";
let a28 = a27.split(" ");
let a29 = "";
for (let a of a28) {
  let c = a.slice(0, 1).toUpperCase() + a.slice(1).toLowerCase();
  a29 += c + " ";
}
//console.log(a29)
let a30 = "GOOD wEll DO doING";
let a31 = a30.split(" ").reverse();
let a32 = "";
for (let a of a31) {
  let c = a.slice(0, 1).toUpperCase() + a.slice(1).toLowerCase();
  a32 += c + " ";
}
//console.log(a32);
var Mobile = function (model) {
  //intance merber
  this.model = model;
  this.price = 3000;
};
var sam = new Mobile("Glaxy");
var nokia = new Mobile("n90");
//console.log(sam)
//console.log(nokia)
//prototype member
Mobile.prototype.color = "white";
document.write(nokia.color);
/////////////////////////Advanced--------------------------
let c1 = [1, 2, 3, 4, 3, 2, 1, 4, 5, 1, 2, 3, 4, 4, 3, 2, 1];
let c2 = c1.reduce((a, b, c, d) => {
  if (d.indexOf(b) != c && a.indexOf(b) < 0) a.push(b);
  return a;
}, []);
//console.log(c2);
let c3 = {};
let c4 = [];
c1.forEach((i) => {
  c3[i] = (c3[i] || 0) + 1;
});
//console.log(c3);
for (i in c3) {
  if (c3[i] < 2) {
    c4.push(parseInt(i));
  }
}
//console.log(c4);
let c5 = { a: 10, b: 2, c: 3, e: 11, d: 12 };
let c6 = { a: 110, e: 11, d: 12 };
let c7 = {};
for (i in c5) {
  if (c5[i] == c6[i]) {
    c7[i] = c5[i];
  }
}
//console.log(c7);
let c8 = "125478596587458".slice(-4);
let c9 = c8.padStart(16, "*");
//console.log(c9);
let c10 = [8, 7, 4, 5, 9, 6, 8, 5, 96, 4, 74];
let c11 = c10.sort((a, b) => a - b);
//console.log(c11[c11.length - 2]);
let c12 = { name: "Rachit", age: 4 };
//Object.freeze(c12);
//Object.seal(c12);
// Object.preventExtensions(c12);
// delete c12.age;
// c12["age"] = 4.5;
// c12["city"] = "Agra";
// console.log(c12);
let c13 = "Hi javascript is best language";
// console.log(
//   c13
//     .split(" ")
//     .map((s) => s.split("").reverse().join(""))
//     .join(" ")
// );
let c14 = c13.split(" ").reverse();
let c15 = "";
for (i of c14) {
  let c = i.slice(0, 1).toUpperCase() + i.slice(1);
  //let d = c.split("").reverse().join("");
  c15 += c + " ";
}
//console.log(c15);
let c16 = c13.split("");
let c17 = {};
c16.forEach((i) => {
  c17[i] = (c17[i] || 0) + 1;
});
//console.log(c17);
