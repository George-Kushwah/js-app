// let a1 = document.getElementById("cv-1");
// let a2 = document.getElementById("cv-2");
// let a3 = document.getElementById("cv-3");
// let a4 = document.getElementById("cv-4");
// const worker = new Worker("./worker.js");

// a1.addEventListener("click", () => {
//   worker.postMessage("ddf");
//   worker.onmessage = (e) => {
//     console.log(e);
//     a3.innerText = e.data;
//   };
// });

// a2.addEventListener("click", () => {
//   a4.innerText = "Hello i was clicked";
// });
// let c8 = "125478596587458".slice(-4);
// let c9 = c8.padStart(16, "*");
// console.log(c9);
//Anagram
let a1 = "Rahul";
let a2 = "ahulR";
// if (a1.split("").sort().join("") === a2.split("").sort().join("")) {
//   console.log("Yes");
// } else console.log("No");
// console.log(a.split("").sort().join(""));
let a3 = new Set([1, "Hello", 2]);

// a3.add("true");
// console.log(a3.has(2));
// console.log(a3);
let a5 = { name: "Gunnu" };
let a4 = new WeakSet();
a4.add(a5);
// console.log(a4);
//let a6 = "Hello Rahul how u r hello".split(" ");
let a6 = "Hello Rahul how u r olleh".split(" ");
// let a6 = "elloh Alotd silent Rahudl how u r ohlle listen".split(" ");
let a7 = [];
a6.forEach((item, ind, arr) => {
  let a = item.split("").reverse().join("").toUpperCase();
  let a1 = arr.filter((item) => item.toUpperCase() === a);
  if (item.length > 1 && a1.length > 0) {
    //console.log(item);
    // a7.push(item);
  }
});
//console.log(a7);
// console.log(
//   a6.filter((item) => item.split("").sort().join("").toUpperCase() == "EHLLO")
// );
let aq17 = [2, 5, 1, 4, 7, 9, 6];
//let aq17 = [5, 4, 3, 6, 1, 9];
function foo5(arr, tar) {
  let a = [];
  let aa = arr.toSorted();
  for (i = 0; i < arr.length; i++) {
    let z = arr[i];
    for (j = i; j < arr.length; j++) {
      if ((z !== arr[j]) !== aa[i] && aa[i] + z + arr[j] == tar) {
        a.push([arr[i], arr[j], aa[i]]);
      } else if (z !== arr[j] && z + arr[j] == tar) {
        a.push([arr[i], arr[j]]);
      }
    }
  }
  return a;
}
console.log(foo5(aq17, 7));
let dc1 = ["aa", "AA", "bc", "BB"];
//console.log(dc.sort());
// console.log(dc1.sort((a, b) => a.localeCompare(b)));
let a8 = [2, 5, 6, 8, [2, 3, 9, [6, 3, 8]]];
a8.push(95, [85, a8], 6);
// console.log(a8.toString());
let a9 = "Hello Rahul how u r lelOh".split(" ");
let a10 = a9.map((item, ind, arr) => {
  let a = item
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("")
    .toUpperCase();
  //console.log(a);
});
let a11 = a9.map((item, ind, arr) => {
  let a = item
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("")
    .toUpperCase();
  if (ind == 0) {
    let a1 = arr.filter(
      (item) =>
        item
          .split("")
          .sort((a, b) => a.localeCompare(b))
          .join("")
          .toUpperCase() == a
    );
    //console.log(item);
  }
});
let a12 = [1, 2, 0, 3, 6, 0, 5, 8];
let a13 = [1, 2, 3, 4, 5, 6, 7, 8];
//[1,4,2,3,5,6,7,8]
//[1,4,5,6,7,8,2,3]
for (i = 0; i < a12.length; i++) {
  if (a12[i] === 0) {
    a12.splice(i, 1);
    a12.push(0);
  }
}
// console.log(a12);
function foo1(a, b) {
  let a1 = a.slice(0, b);
  let a2 = a.slice(b, a.length);
  console.log(...a2, ...a1);
}
//foo1(a13, 4);
function foo2(arr, ...val) {
  for (i = 0; i < val.length; i++) {
    let a = arr.indexOf(val[i]);
    let a1 = arr[a];
    arr.splice(a, 1);
    //arr.push(a1);
    arr.splice(val.length + 1, 0, a1);
  }
}
foo2(a13, 2, 3);
//console.log(a13);
let a14 = "Hello nitin Rahul tIInN how u r lelOh".split(" ");
let a15 = a14.map((item, ind, arr) => {
  let a = item
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("")
    .toLowerCase();
  let a1 = arr.filter(
    (item) =>
      item
        .split("")
        .sort((a, b) => a.localeCompare(b))
        .join("")
        .toLowerCase() === a
  );
  if (a1.length > 1) {
    // console.log(item);
  }
});

let a16 = "Hello hi Guunua";
function foo3(s) {
  let a = s.split(" ");
  let a1 = a[a.length - 1].length;
  console.log(a1);
}
//foo3(a16);
function foo4(sd) {
  return sd.toString(2);
}
//console.log(foo4(12525));
let inp1 = document.getElementById("fg1");
let inp2 = document.getElementById("fg2");
let typetime;
inp1.addEventListener("input", () => {
  inp2.innerText = "Typeing";
  clearInterval(typetime);
  typetime = setInterval(() => {
    inp2.innerText = "";
  }, 500);
});
let a17 = [1, 2, 3, 4, 5];
let dc = 2;
function foo56(arr, ...val) {
  for (i = 0; i < val.length; i++) {
    let a = arr.indexOf(val[i]);
    arr.splice(a, 1);
    arr.splice(val.length + 1, 0, val[i]);
  }
}
// foo56(a17, 2);
// console.log(a17);
let a18 = [...a17.splice(a17.length - dc), ...a17];
// console.log(a18);
// a17.splice(a17.length - dc);
// console.log(a17);
let a19 = "aaaaaaaaabababcbdbfbbbcbbaba".split("");
let a20 = {};
let a21 = "";
a19.forEach((i, ind) => {
  a20[i] = (a20[i] || 0) + 1;
});
for (let char in a20) {
  if (a20[char] >= 1) {
    a21 += char;
  }
}
//console.log(a21, a20);
const maxSpeed = {
  car: 300,
  bike: 60,
  motorbike: 200,
  airplane: 1000,
  helicopter: 400,
  rocket: 8 * 60 * 60,
};

const sortable = Object.entries(maxSpeed)
  .sort(([, a], [, b]) => a - b)
  .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

//console.log(sortable);
let arr = [
  { name: "Iron Man", released_on: "2002-08-21T00:00:00.000Z" },
  { name: "Captain Amoos", released_on: "2008-08-21T00:00:00.000Z" },
  { name: "Amoos John Wick", released_on: "2014-08-21T00:00:00.000Z" },
  { name: "James Bond", released_on: "2021-08-21T00:00:00.000Z" },
  { name: "Loin King", released_on: "2022-08-21T00:00:00.000Z" },
];
let fromDate = "2004-01-01";
let toDate = "2020-11-22";
function foo5d(data, key, start, end) {
  start = new Date(start).getTime();
  end = new Date(end).getTime();
  return data.filter((item) => {
    let time = new Date(item[key]).getTime();
    return start < time && time < end;
  });
}
//console.log(foo5d(arr, "released_on", fromDate, toDate));

let persons = [
  { name: "Abc", dob: "1990-05-26" },
  { name: "jhon", dob: "1980-05-26" },
  { name: "admin", dob: "1999-05-26" },
  { name: "deo", dob: "1995-05-26" },
];
let emp = [
  { name: "lydia", doj: "2005-05-26" },
  { name: "geek", doj: "2010-09-4" },
  { name: "lucus", doj: "2015-11-2" },
  { name: "deo", doj: "2020-10-1" },
];

let a23 = emp.filter((item) => persons.find((id) => item.name == id.name));
//console.log(a23);
// const getAge = (birthDate) =>
//   Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

// // today is 2018-06-13
// getAge("1994-06-14"); // 23
// getAge("1994-06-13"); // 24

// console.log(
//   Math.floor(
//     (new Date().getTime() - new Date("2005-10-1").getTime()) / 3.15576e10
//   )
// );
//let ws1 = { name: "sfsf", age: 15 };
//console.log(Object.values(ws1));
var inputArray = [
  "12345",
  "34567",
  "23456",
  "23435",
  "65342",
  "65675",
  "12374",
  "78906",
  "45782",
  "34097",
  "23089",
  "39372",
  "10926",
];
let aa1 = Object.entries(inputArray);
let aa2 = aa1.map(([item, ind]) => ({ [item]: ind }));
// console.log(aa2);
// let a221 = ["sun", "mon", "tue"];
// let a222 = Object.assign({}, a21);
// //console.log(a222);
// console.log(a221.reduce((a, v) => ({ ...a, [v]: v }), {}));
//let aa3 = { city: "Jaipur", age: 12 };
// console.log(Object.entries(aa3).flat(1));
let aa4 = { city: "Jaipur", age: 25 };
//console.log(Object.entries(aa4).flat(1));
let aa5 = ["name", "Rahul", "city", "Agra"];
//console.log(Object.assign({}, aa5));
let aa6 = ["tan", "tea", "eat", "ate", "nat", "bat", "gbh"];
function test1(sx) {
  let a = {};
  for (let i of sx) {
    const key = [...i].sort().join("");
    a[key] = a[key] ? [...a[key], i] : [i];
  }
  //console.log(Object.values(a));
  console.log(a);
}

// test1(aa6);

let aa7 = "hello my name olleh".split(" ");
function test2(ed) {
  for (i of ed) {
    let sx = [...i].sort().join("").toUpperCase();
    let as = ed.filter(
      (item) => [...item].sort().join("").toUpperCase() === sx
    );
    if (as.length > 1) {
      //  console.log(i);
    }
  }
}

//test2(aa7);

let aa8 = { a: 2, b: 5, c: 9 };
let aa9 = Object.values(aa8);
//console.log(Math.max(...aa9));
let aa10 = [3, 2, 6, 5, 9, 3, 2, 0];
let aa11 = [];
aa10.forEach((item, ind, arr) => {
  if (arr[ind + 1] !== undefined && item > arr[ind + 1]) {
    aa11.push(item);
  }
});
//console.log(aa11);

function one() {
  var a = 10;
  function two() {
    console.log(a);
  }
  two();
}
//one();
var aa12 = 20;
// console.log(aa12);
function aa12() {
  console.log(30);
}
//aa12();
let sd1 = document.getElementById("cv-3");

function sd4() {
  console.log("click btn");
}

function Debounce(fn, time) {
  let tem = null;
  return function () {
    clearTimeout(tem);
    tem = setTimeout(() => {
      fn();
    }, time);
  };
}
const handle = Debounce(sd4, 300);
sd1?.addEventListener("click", handle);

let sd5 = { age: 22, gets: true, sets: "aa" };
let sd6 = Object.create(sd5, {});
// sd6.gets = false;
// console.log(sd6.gets);
// console.log(sd5.gets, sd6.gets);
let sd7 = {
  firstName: "John",
  lastName: "Doe",
  age: 35,
  dc: { df: "pp" },
};

let sd8 = {
  dc: { df: "pp" },
  firstName: "John",
  lastName: "Doe",
  age: 35,
};

const isDeepEqual = (object1, object2) => {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (var key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if (
      (isObjects && !isDeepEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
};

const isObject = (object) => {
  return object != null && typeof object === "object";
};

// console.log(isDeepEqual(sd7, sd8));

function ass1() {
  return new Promise((res) => {
    console.log("Hello-1");
    setTimeout(() => {
      console.log("Hello-2");
      return res("Hi");
    }, 1000);
  });
}

function ass2() {
  return new Promise((res) => {
    console.log("Hello-3");
    setTimeout(() => {
      console.log("Hello-4");
      return res("Hi");
    }, 500);
  });
}
// ass1();
// ass2();
// console.log("object");

class clac {
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
// const clac = {
//   val: 0,
//   add(num) {
//     this.val += num;
//     return this;
//   },
//   multi(num) {
//     this.val *= num;
//     return this;
//   },
// };
const clasi = new clac();
// console.log(clasi.add(2).add(6).multi(3));
