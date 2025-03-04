let a1 = [1, 2, 3, 4, 3, 2, 1, 4, 5, 1, 2, 3, 4, 4, 3, 2, 1];
let a2 = a1.reduce((a, b, c, d) => {
  if (d.indexOf(b) != c && a.indexOf(b) < 0) a.push(b);
  return a;
}, []);
//console.log(a2);
let a3 = {};
let a4 = [];
a1.forEach((i) => {
  a3[i] = (a3[i] || 0) + 1;
});
for (i in a3) {
  if (a3[i] < 2) {
    delete a3[1];
  } else a4.push(parseInt(i));
}
//console.log(a4);
let a5 = { a: 10, b: 2, c: 3, e: 11, d: 12 };
let a6 = { a: 110, e: 11, d: 12 };
let a7 = {};
for (i in a5) {
  if (a5[i] !== a6[i]) {
    a7[i] = a5[i];
  }
}
//console.log(a7);
let a8 = "125418547595689".slice(-4);
let a9 = a8.padStart(16, "*");
//console.log(a9);
let a10 = "12547859632587";
let a11 = a10.slice(0, 4);
let a12 = a10.slice(-4);
//console.log(`${a11}**********${a12}`);
let a13 = "125478596325".slice(0, 4).slice(-4);
//console.log(a13);
let a14 = 0;
function debn() {
  console.log("Fetch Data" + a14++);
}
function getbounce(call, a) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    setTimeout(() => {
      call();
    }, a);
  };
}

let debounce = getbounce(debn, 500);

let a16 = { name: "Gunnu", age: 12 };
let a17 = {
  age: 8,
  __proto__: a16,
};
//console.log(a17);
Array.prototype.convertToobj = function () {
  let obj = {};
  this.forEach((i) => {
    obj[i] = i;
  });
  return obj;
};
console.log(["Agra"].convertToobj());
function Myprorotype(name) {
  this.name = name;
}
Myprorotype.prototype = a16;
let a18 = new Myprorotype("Harshit");
//console.log(a18);

let a15 = [1, 2, 3, 6, 5, 4];
function mappolyfill(arr, call) {
  let newarr = [];
  for (i = 0; i < arr.length; i++) {
    newarr.push(call(arr[i]));
  }
  return newarr;
}

function squre(x) {
  return x * x;
}
// console.log(mappolyfill(a15, squre));
// console.log(a15);
function filterpoly(arr, fn) {
  let dd = [];
  for (i of arr) {
    if (fn(i)) {
      dd.push(i);
    }
  }
  return dd;
}
function fillter(ed) {
  return ed % 2 == 0;
}
//console.log(filterpoly(a15, fillter));

Array.prototype.myforeach = function (call) {
  if (!call) {
    throw Error("Undefined function ");
  }
  let arr = this;
  for (i = 0; i < arr.length; i++) {
    call(arr[i], i, arr);
  }
};
a15.myforeach((item, ind, arr) => {
  //  console.log(item, ind, arr);
});
let a19 = [5, 4, 3, 2, 1];
let a20 = a19.reduce((total, sum, index) => {
  //   console.log("total", total);
  //   console.log("value", sum);
  //   console.log("iteation-1", index);
  df = total + sum;
  return df;
}, 3);
//console.log(a20);

function sums(a, b) {
  return a + b;
}
Array.prototype.myReduce = function (call, value) {
  if (!call) {
    throw Error("Undefined function ");
  } else {
    let acc = value;
    for (i = 0; i < this.length; i++) {
      acc = call(acc, this[i]);
    }
    return acc;
  }
};
//console.log(a19.myReduce(sums, 0));
function Squres(n) {
  return n * n;
}
function memoize(fn) {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
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
// console.timeEnd();
let a21 = ["sun", "mon", "tue"];
let a22 = Object.assign({}, a21);
//console.log(a22);
//console.log(a21.reduce((a, v) => ({ ...a, [v]: v }), {}));
let a23 = { name: "Jhon", age: 25 };
let a24 = Object.entries(a23);
//console.log(a24.flat());
//Use of this

let a25 = {
  name: "Jhon",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
//a25.greet();
function abc() {
  {
    // var x = 10;
    // var y = 20;
    (function () {
      var x = 10;
      var y = 20;
    })();
    console.log(x, y);
  }
}
//abc();
function abc1() {
  return { name: "Gunnu" };
}
function abc2() {
  return;
  {
    name: "Gunnu";
  }
}
//console.log(abc1(), abc2());
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
function missodd(val) {
  let a = Math.max(...val);
  let b = Math.min(...val);
  for (i = b; i <= a; i++) {
    if (i % 2 !== 0 && !val.includes(i)) {
      return i;
    }
  }
}
//console.log(missodd(a28));
let a29 = [1, 2, 3, 4, 6, 15];
function Missingnumber(val) {
  let a = Math.max(...val);
  let b = Math.min(...val);
  let dd = [];
  for (i = b; i <= a; i++) {
    if (!val.includes(i)) {
      dd.push(i);
    }
  }
  return dd;
}
//console.log(Missingnumber(a29));
let a30 = "this code for find max charcter in js".split("");
let a31 = {};
let a32 = "";
a30.forEach((val) => {
  a31[val] = (a31[val] || 0) + 1;
});
for (i in a31) {
  if (i != " ") {
    if (a31[i] > 2) {
      // console.log(a31[i], i);
    }
  }
}
//console.log(a32);
let a33 = [2, 7, 11, 4, -2];
let output = [20, 15, 11, 18, 24]; // add any index put sum of all element expect that index
let a34 = [];
a33.forEach((value, index, arr) => {
  let a1 = arr[index];
  let a2 = arr.filter((a) => a !== a1);
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
//rotateval(a35, 3);
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
let a38 = { name: "minal", data: "ed" };
//console.log(Object.keys(a38));
var a39 = "Hello";
//console.log(a39);
var a39;
function abc2() {
  console.log(a39);
  var a39 = "Gunnu";
}
//abc2();
function closer1() {
  let a = "Outer function var";
  console.log(a);
  function clo1() {
    let b = "inner function var";
    console.log(b);
  }
  clo1();
  //console.log(b);
}
//closer1();
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
  //process.nextTick(() => console.log("Tick")); ye sabse pahale chalta hai setTimeout se bhi pahale
  //console.trace();
}
//cd1();
localStorage.setItem("dn", "11-25-2018");
//console.log(localStorage.getItem("dn"));
document.cookie = "name=Rahul; max-age=2500";
document.cookie = "name1=Guddu";
//debugger;
//console.log(document.cookie);
