let aq1 = new Function("a", "b", "console.log(a+b)");
let aq2 = `let a=2; let b=3; console.log(a+b);`;
//setTimeout(aq2, 500);
//aq1(4, 5);
let aq3 = { a: { b: { name: "Lydia" }, c: { hj: "Jhon" } } };
function foo1(obj) {
  for (let i in obj) {
    if (typeof obj[i] === "object") {
      foo1(obj[i]);
    } else console.log(obj[i]);
  }
}
//foo1(aq3);
let aq4 = {
  age: {
    city: "agra",
    name: "jhon",
  },
  city: {
    city: "noida",
    name: "lydia",
  },
};
//console.log(Object.entries(aq4).map(([item, val]) => ({ item, ...val })));
let aq5 = [
  {
    key: "sample1",
    data: "data1",
  },
  {
    key: "sample1",
    data: "data2",
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
let aq6 = {};
for (i of aq5) {
  if (aq6[i.key]) {
    aq6[i.key].push(i);
  } else aq6[i.key] = [i];
}
// console.log(aq6);
function foo2(arr) {
  return [...Array(arr)].map((item, ind) => arr - ind);
}
//console.log(foo2(14));
function foo3(str) {
  return Number(str);
}
//console.log(foo3("3232323"));
function foo4(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//console.log(foo4(7, 19));
let aq7 = "The quick brown fox jumps over the lazy dog".split(" ");
let aq8 = aq7.reduce((a, b) => (a.length > b.length ? a : b));
//console.log(aq8);
let aq9 = "abcdefa".split("");
//console.log(new Set(aq9).size === aq9.length);
//console.log(aq9.filter((a, b) => aq9.indexOf(a) != b));
//console.log(Math.floor(Math.random() * 5000));
let aq10 = [1, 2, 3, 6, 5, 4];
// console.log(aq10["2"]);
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits2 = fruits.toSpliced(2, 0, "Lemon", "Kiwi"); // retrun a new array
//console.log(fruits, fruits2);
let aq11 = 0;
let aq12 = [1, 2, 3];
delete aq12[1];
aq12.forEach(() => aq11++);
//console.log(aq12);
// console.log(aq12.length);
// console.log(aq11);
let aq13 = [undefined, null, undefined, null];
// aq13.map((i) => {
//   console.log(i);
// });
let aq14 = (len) => {
  let otp = "";
  for (let i = 0; i < len; i++) {
    let rand = Math.random() * 10;
    otp += Math.floor(rand);
  }
  return otp;
};
//console.log(aq14(7));
function evaluate(opr) {
  return function (a) {
    return function (b) {
      if (opr === "sum") return a + b;
      else if (opr === "multi") return a * b;
      else return "invalid";
    };
  };
}
//console.log(evaluate("sum")(8)(2));
function createBase(base) {
  return function (a) {
    return base + a;
  };
}
let adds = createBase(10);
// console.log(adds(5));
let aq15 = [1, 2, 3, 1, 2, 5, 3];
//console.log(aq15.indexOf(3, 3));
let aq16 = [1, 2, 3, 4, 5];
let aq16sum = 0;
let aq16sq = aq16.map((num) => ((aq16sum += num), num * num));
//console.log(aq16sum, aq16sq);
// (function () {
//   try {
//     throw new Error();
//   } catch (x) {
//     var x = 1,
//       y = 2;
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();
let aq17 = [2, 5, 6, 9, 6];
function foo5(arr, tar) {
  let a = [];
  for (i = 0; i < arr.length; i++) {
    let z = arr[i];
    for (j = i; j < arr.length; j++) {
      if (z !== arr[j] && z + arr[j] == tar) {
        a.push(arr[i], arr[j]);
      }
    }
  }
  return a;
}
//console.log(foo5(aq17, 7));
let aq18 = ["Radar", "Level", "Nitin", "Hello", "Minal"];
let aq19 = [];
function foo6(arr) {
  for (i of arr) {
    let a = i;
    let res = i.split("").reverse().join("");
    if (a.toUpperCase() === res.toUpperCase()) {
      aq19.push(a);
    }
  }
}
foo6(aq18);
// console.log(aq19);
let aq20 = [1, 2, null, undefined, "", true, false, NaN, {}, []];
function foo7(arr) {
  let a = [];
  for (i of arr) {
    if (i) {
      a.push(i);
    }
  }
  return a;
}
//console.log(foo7(aq20));
function foo8(num) {
  if (num === 1) return num;
  else return num * foo8(num - 1);
}
//console.log(foo8(4));
let aq21 = {
  lib: "JavaScript",
  fun: function () {
    console.log(this.lib);
  },
};
aq21.fun();
//setTimeout(aq21.fun, 100);
//setTimeout(() => aq21.fun());
