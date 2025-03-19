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
console.log(Math.floor(Math.random() * 5000));
