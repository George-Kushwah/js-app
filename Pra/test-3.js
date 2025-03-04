let a1 = [1, 2, [1, 5, 6, [9, 5, 7, [8, 9]]]];
//let a2 = Array.prototype.concat.apply([], a1);
//let a2 = a1.reduce((a, b) => a.concat(b), []);
//console.log(a2);
let a3 = 0;
function denn() {
  console.log("Fracth Data" + a3++);
}
function getDebounce(call, a) {
  return function () {
    setTimeout(() => {
      call();
    }, a);
  };
}
//let debounce = getDebounce(denn, 500);
let a4 = { name: "Gunnu", age: 7 };
let a5 = { age: 12, __proto__: a4 };
//console.log(a5);
Array.prototype.convertToobj = function () {
  let obj = {};
  this.forEach((i) => {
    obj[i] = i;
  });
  return obj;
};
//console.log(["Agra", "minal"].convertToobj());
function Myprorotype(name) {
  this.name = name;
}
Myprorotype.prototype = a4;
//let a6 = new Myprorotype("Harshit");
//console.log(a6);
let a7 = [1, 2, 3, 4, 5];
Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b);
};
//console.log(a7.sum());
let a8 = [2, 4, 6, 8, 10];
function maptoploy(arr, sq) {
  let a = [];
  for (i = 0; i < arr.length; i++) {
    a.push(sq(arr[i]));
  }
  return a;
}
function squre(z) {
  return z * z;
}
let a9 = maptoploy(a8, squre);
//console.log(a9);
Array.prototype.myforeach = function (call) {
  if (!call) {
    throw Error("Undefined function");
  } else {
    let arr = this;
    for (i = 0; i < arr.length; i++) {
      call(arr[i], i, arr);
    }
  }
};
a8.myforeach((item, ind, arr) => {
  //console.log(item, ind, arr);
});

function sum(a, b) {
  return a + b;
}

Array.prototype.myreduce = function (call, value) {
  if (!call) {
    throw Error("undefined value");
  } else {
    let acc = value;
    for (i = 0; i < this.length; i++) {
      acc = call(acc, this[i]);
    }
    return acc;
  }
};
//console.log(a8.myreduce(squre, 0));
function squre(v) {
  return v * v;
}
function memoize(fn) {
  let cahhe = {};
  return function (...agrs) {
    let n = agrs[0];
    if (n in cahhe) {
      console.log("calling");
      return cahhe[n];
    } else {
      let result = fn(n);
      cahhe[n] = result;
      return result;
    }
  };
}
let dc = memoize(squre);
// console.time();
// console.log(dc(5));
// console.log(dc(6));
// console.log(dc(7));
// console.log(dc(6));
// console.log(dc(9));
// console.timeEnd();
let a21 = ["sun", "mon", "tue"];
let a22 = Object.assign({}, a21);
// console.log(a22);
//console.log(a21.reduce((a, v) => ({ ...a, [v]: v }), {}));
let a23 = { name: "Jhon", age: 25 };
let a24 = Object.entries(a23);
//console.log(a24.flat());

function test5() {
  {
    // var a = 10;
    // var b = 20;
    (function () {
      var a = 10;
      var b = 20;
    })();
  }
  console.log(a, b);
}
// test5();
const a26 = {
  Georgia: {
    notes: "lorem ipsum",
    lat: "32.1656",
    long: "82.9001",
  },
  Alabama: {
    notes: "lorem ipsum",
    lat: "32.3182",
    long: "86.9023",
  },
};
let a27 = Object.entries(a26).map(([item, val]) => ({ item, ...val }));
//console.log(a27);
let a28 = [5, 7, 9, 11, 15, 17];
function missinodd(a) {
  let a1 = Math.max(...a);
  let a2 = Math.min(...a);
  for (i = a2; i < a1; i++) {
    if (i % 2 !== 0 && !a.includes(i)) {
      return i;
    }
  }
}
//console.log(missinodd(a28));
let a29 = [1, 2, 3, 4, 6, 15];
function missinum(a) {
  let a1 = Math.max(...a);
  let a2 = Math.min(...a);
  let dd = [];
  for (i = a2; i < a1; i++) {
    if (!a.includes(i)) {
      dd.push(i);
    }
  }
  return dd;
}
//console.log(missinum(a29));
let a33 = [2, 7, 11, 4, -2];
let output = [20, 15, 11, 18, 24];
let a34 = [];
a33.forEach((val, ind, arr) => {
  let a1 = arr[ind];
  let a2 = arr.filter((a) => a != a1);
  let a3 = a2.reduce((a, b) => a + b);
  a34.push(a3);
});
//console.log(a34);
let a35 = [2, 7, 11, 4, -2];
let output1 = [11, 4, -2, 2, 7];
function rotateval(a, b) {
  let a1 = a.slice(0, b);
  let a2 = a.slice(b, a.length);
  console.log([...a2, ...a1]);
}
rotateval(a35, 3);
let a36 = [
  {
    key: "sample1",
    data: "data1",
  },
  {
    key: "sample1",
    data: "data1",
  },
  {
    key: "sample2",
    data: "data2",
  },
  {
    key: "sample3",
    data: "data3",
  },
  {
    key: "sample2",
    data: "data2",
  },
];
let a37 = {};
for (i of a36) {
  if (a37[i.key]) {
    a37[i.key].push(i);
  } else {
    a37[i.key] = [i];
  }
}
//console.log(a37);
var a39 = "Hello";
//console.log(a39);
var a39 = "abcd";
function abc2() {
  console.log(a39);
  var a39 = "Gunnu";
}
//abc2();
function cd1() {
  setTimeout(() => {
    console.log("Timer");
  });
  console.log("First");
  cd2();
}
function cd2() {
  console.log("Second");
  cd3();
}
function cd3() {
  console.log("Third");
  //process.nextTick(() => console.log("Tick")); // ye sabse pahale chalta hai setTimeout se bhi pahale
  console.trace();
}
//cd1();
let dc1 = Array.from("Hello");
//console.log(dc());
//console.log(Array.from("Hello"));
//console.log(Array.from({ length: 5 }, (it, i) => i * 2 - 1));
let dc2 = { name: "Harshit" };
dc2 = 23;
if (!typeof dc === "string") {
  console.log("Its String");
} else console.log("Not a String");
let dc3 = (b11 = c11 = 20);
if ((dc3 === b11) === c11) console.log("hello");
else console.log("Hi");
function test5(a, b) {
  console.log(arguments, a + b + arguments[0]);
}
//test5(10, 20, 30);
