let na1 = "Harshit";
//console.log(na1.split("").reverse().join(""));
let na2 = "";
for (i = na1.length; i--; ) {
  na2 += na1[i];
}
//console.log(na2);
function Prime(val) {
  if (val === 1) return console.log("np");
  else if (val == 2) return console.log("pn");
  else {
    for (i = 2; i < val; i++) {
      if (val % i === 0) {
        return console.log("np");
      }
      return console.log("pn");
    }
  }
}
//Prime(20);
function Fab(val) {
  let a = 0,
    a1 = 1,
    next;
  for (i = 0; i < val; i++) {
    next = a + a1;
    a = a1;
    a1 = next;
    document.writeln(a, "<br>");
  }
}
//Fab(8);
let na3 = 6;
let na4 = 8;
let lcm;
let hcm;
for (i = 0; i <= na3 && i <= na4; i++) {
  if (na3 % i === 0 && na4 % i === 0) {
    lcm = i;
  }
  hcm = (na3 * na4) / lcm;
}
//console.log(hcm);
function Arm(val) {
  let num = 0;
  let temp = val;
  while (temp > 0) {
    let rem = temp % 10;
    num += rem * rem * rem;
    temp = parseInt(temp / 10);
  }
  if (num === val) {
    console.log("true");
  } else console.log("false");
}
//Arm(371);
function Pair(str) {
  let a1 = str.length;
  let a2 = Math.floor(a1 / 2);
  for (i = 0; i < a2; i++) {
    if (str[i] === str[a1 - 1 - i]) {
      return true;
    } else return false;
  }
}
//console.log(Pair("dad"));
function Recur(val) {
  if (val <= 0) {
    return val;
  } else return val + Recur(val - 1);
}
//console.log(Recur(6));
function Curring(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
//console.log(Curring(10)(20)(30));
const data1 = [
  { name: "Harshit", age: 5, role: "admin" },
  { name: "Rachit", age: 3, role: "admin" },
  { name: "Spidey", age: 5, role: "admin" },
  { name: "Rahul", age: 34, role: "user" },
];
function Filter(val, fn) {
  let dd = [];
  for (i of val) {
    if (fn(i)) {
      dd.push(i);
    }
  }
  return dd;
}
//console.log(Filter(data1, (emp) => emp?.role == "user"));
function emp(name, age) {
  this.name = name;
  this.age = age;
}
function greet(a) {
  console.log(`hi my name is ${this.name} and age is ${this.age} city is ${a}`);
}
let cla = new emp("Harshit", 7);
//greet.call(cla, "Agra");
//greet.apply(cla, ["Agra"]);
let cla1 = greet.bind(cla);
//cla1(["Agra"]);
function fname(name) {
  return name;
}
function lname(name) {
  return name;
}
function com1(a, b) {
  console.log(a, b);
}
//com1(fname("Guddu"), lname("Kushwah"));
function com2() {
  return () => {
    return "Hello first";
  };
}
let na5 = com2();
//console.log(na5());
let na6 = 2;
function impure() {
  na6++;
  console.log(na6);
}
// impure();
// impure();
function pure(val) {
  val++;
  console.log(val);
}
// pure(10);
// pure(10);
let na7 = function (a, b) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(a + b);
    }, 5000);
  });
};
// na7(3, 5)
//   .then((res) => na7(res, 2))
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

async function foo() {
  let a = new Promise((res, rej) => {
    res("hi this is resolve");
    rej(new Error());
  });
  try {
    let a1 = await a;
    console.log(a1);
  } catch (e) {
    console.log(e);
  }
}
//foo();
async function foo1() {
  try {
    let a = await fetch("https://jsonplaceholder.typicode.com/users");
    let a1 = await a.json();
    console.log(a1);
  } catch (e) {
    console.log(e);
  }
}
//foo1();
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
    //res("3-Resolve");
    //rej(new Error());
  }, 50);
});

let aa8 = new Promise((res, rej) => {
  setTimeout(() => {
    //res("4-*Resolve");
    // rej(new Error());
  }, 500);
});

// Promise.all([aa5, aa6, aa7, aa8])
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

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
//   .finally(() => console.log("Finily"))
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e, "error"));
function abcd() {
  let ss = document.getElementById("pp").value;
  document.getElementById("dd").innerText = ss;
}
//-----------------------------
let b1 = "Rahul";
let b2 = "Hello my name is Harshit is";
// console.log(b2.includes("my"));
// console.log(b2.startsWith("He"));
// console.log(b2.endsWith("it"));
// console.log(b2.search("my"));
// console.log(b2.match(/is/g));
// console.log(b2.search("my"));
//console.log(b2.replace(/is/g, "on"));
//console.log(b1.slice(-3, -1));
//console.log(b1.substring(1, 4));
let b6 = ["sun", "mon", "tue", "wed", "thu"];
b6.length = 2;
//console.log(b6);
// let b7 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
// let b8 = [...new Set(b7)];
// console.log(b8);
let b9 = [1, 1, 2, 3, 4, 4, 5, 6, 6, 3];
// console.log(b9.filter((a, b) => b9.indexOf(a) !== b));
let b10 = [
  { name: "Rahul", age: 10 },
  { name: "Ram", age: 10 },
  { name: "Ram", age: 10 },
  { name: "Mianl", age: 10 },
];
// console.log(Array.from(new Set(b10.map(JSON.stringify))).map(JSON.parse));
let b11 = b10.map((item) => item.name);
// console.log(b10.filter((a, b) => b11.indexOf(a.name) !== b));
function text1(...a) {
  return a.includes(7);
}
// console.log(text1(1, 2, 3, 6, 5, 4, 7, 8));
let b12 = [1, 2, 3, 4, [3, [5, [8]]]];
function* flat(a) {
  for (i of a) {
    Array.isArray(i) ? yield* flat(i) : yield i;
  }
}
let sf1 = [...flat(b12)];
// console.log(sf1);
let b14 = [4, 5, 6, 7, 8, 9];
let b15 = [...b14];
b14.push(10);
//console.log(b15);
let b16 = [2, 5, 6, 3, 8, 4, 7, 1, 6];
for (i = 0; i < b16.length; i++) {
  for (j = 0; j < i; j++) {
    if (b16[i] < b16[j]) {
      let sx = b16[j];
      b16[j] = b16[i];
      b16[i] = sx;
    }
  }
}
//console.log(b16);
for (i = 0; i < b16.length; i++) {
  let df = b16[i];
  for (j = i; j < b16.length; j++) {
    if (df != b16[j] && df + b16[j] === 7) {
      //  console.log(b16[i], b16[j]);
    }
  }
}
//console.log(b16.sort((a, b) => a - b));
//console.log(Math.max(...b16));
const b18 = [
  { name: "Rahul", age: 12 },
  { name: "zzz", age: 78 },
  { name: "aaa", age: 40 },
];
// console.log(
//   b18.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
// );
let sf2 = 0;
for (i of b16) {
  if (sf2 < i) {
    sf2 = i;
  }
}
//console.log(sf2);
let b20 = [1, 2, 3, 4, 3, 2, 1];
// console.log(b20.filter((a) => b20.indexOf(a) == b20.lastIndexOf(a)));
let b21 = "Harshit";
//console.log(b21.split("").filter((a) => "aeiou".includes(a)));
//console.log(Array.from(b21).filter((a) => "aeiou".infcludes(a)));
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
let sf3 = b22.split(" ");
let sf4 = sf3.map((i) => {
  let ss = i.slice(0, 1).toUpperCase() + i.slice(1);
  return ss;
});
// console.log(...sf4);
// let str8 = "Rahul Kumar";
// let str9 = str8
//   .split(" ")
//   .map((s) => s.split("").reverse().join(""))
//   .join(" ");
// console.log(str9);
const asd1 = ["sun", "mon", "tue", "wed"];
asd1.splice(2, 1, "sdsd");
//console.log(asd1);
let a27 =
  "thIs is a saMpLe program for first LettER CAPITAL of aLL WorDS IN a giVEN sTrInG , staTemEnT";
let a28 = a27.split(" ");
let a29 = "";
for (let a of a28) {
  let c = a.slice(0, 1).toUpperCase() + a.slice(1).toLowerCase();
  a29 += c + " ";
}
//console.log(a29);
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
// Mobile.prototype.color = "white";
// document.write(nokia.color);
let c1 = [1, 2, 3, 4, 3, 2, 1, 4, 5, 1, 2, 3, 4, 4, 3, 2, 1, 15, 15];
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
  if (c3[i] > 1) {
    c4.push(parseInt(i));
  }
}
//console.log(c4);
let c5 = { a: 10, b: 2, c: 3, e: 11, d: 12 };
let c6 = { a: 110, e: 11, d: 12 };
let c7 = {};
for (i in c5) {
  if (c5[i] == c6[i]) c7[i] = c5[i];
}
//console.log(c7);
// let c8 =
//   "125478596587458".slice(0, 4) + "**********" + "125478596587458".slice(-4);
//console.log(c8);
let c8 = "125478596587458".slice(-4);
//console.log(c8.padStart(16, "*"));
let c10 = [8, 7, 4, 5, 9, 6, 8, 5, 96, 4, 74];
let c11 = c10.sort((a, b) => a - b);
//console.log(c11[c11.length - 3]);
let c12 = { name: "Rachit", age: 4 };
Object.freeze(c12);
//Object.seal(c12);
// Object.preventExtensions(c12);
// delete c12.age;
// c12["age"] = 4.5;
// c12["city"] = "Agra";
// console.log(c12);
let c13 = "Hi javascript is best language".split(" ");
let c15 = "";
for (i of c13) {
  //let c = i.slice(0, 1).toUpperCase() + i.slice(1);
  let d = i.split("").reverse().join("");
  c15 += d + " ";
}
// console.log(c15);
let c14 = c13;
let c16 = {};
c14.forEach((i) => {
  c16[i] = (c16[i] || 0) + 1;
});
//console.log(c16);
let d22 = "well do doing";
let d23 = d22.split(" ").reverse();
let d24 = d23.map((a) => a.split("").reverse().join("")).join(" ");
//console.log(d24);
