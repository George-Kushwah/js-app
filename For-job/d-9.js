let a1 = [1, 2, 3, 4, 3, 2, 1];
//console.log(a1.filter((item) => a1.indexOf(item) == a1.lastIndexOf(item)));
let a2 = ["A", "A", "B", "B", "B", "C", "A", "B"];
let a3 = [];
for (i = 0; i < a2.length; i++) {
  if (a2[i] !== a2[i - 1]) {
    a3.push(a2[i]);
  }
}
//console.log(a3);
let a4 = "foo";
let a5 = "Hi is foo is all foo";
let a6 = new RegExp(a4, "gi"); //i- case sensitive,gi: global
//let a7 = a6.replace(a5, a4);
//console.log(a6.test(a7));
let a8 = { name: "Rahul" };
let a9 = { name: "Rahul" };
if (JSON.stringify(a8) == JSON.stringify(a9)) {
  // console.log("Match");
}
// x = 5;
// console.log(x);
//let x;

let a10 = [1, 2, 3, 4, 5, 77, 22];

for (let i = 0; i < Math.floor(a10.length / 2); i++) {
  let temp = a10[i];
  a10[i] = a10[a10.length - 1 - i];
  a10[a10.length - 1 - i] = temp;
}

//console.log(a10);
let aa11 = [3, 2, 6, 5, 9, 3, 2, 0];
let a12 = [];
for (i = 0; i < aa11.length; i++) {
  if (aa11[i] > aa11[i + 1]) {
    a12.push(aa11[i]);
  }
}
//console.log(a12);

function abc() {
  wa = 10;
  let wb = 5;
}
abc();
//console.log(wa, ab);
let a11 = "The quick brown fox jumped over the lazy dogs back".split(" ");
let a13 = Math.min(...a11.map((item) => item.length));
let a14 = a11.filter((item) => item.length == a13);
//console.log(a14);
function foo1(val) {
  if (val.length > 10) return val.substring(0, 10) + "...";
}
//console.log(foo1("Harshit Kumar Kushwah"));
let a15 = "wave";
function foo2(val) {
  let aa = [];
  for (i = 0; i < val.length; i++) {
    let a = val.slice(0, i) + val[i].toUpperCase() + val.slice(i + 1);
    aa.push(a);
  }
  return aa;
}
//console.log(foo2(a15));
let a16 = [1, 10, 74, 2, 3, 5, 6, 9, 8];
//let a17 = [...a16.splice(a16.length - 2), ...a16];
//let a17 = [...a16.splice(2), ...a16.slice(0, 2)];
//console.log(a17);
//let a18 = a16[Math.floor(a16.length / 2)];
//let a18 = a16.sort((a, b) => a - b);
//let a18 = a16.at(-1);
let a18 = a16[a16.length - 1];
//console.log(a18);
let a19 = [1, 8, 4, 74, 5, 96, 3, 25, 74];
//console.log(Math.max(...a19));
let a20 = [10, 20, 30, 40, 50];
let a21 = a20[Math.floor(a20.length / 2)];
let a22 = [
  a21,
  ...a20.slice(0, a20.indexOf(a21)),
  ...a20.slice(a20.indexOf(a21) + 1, a20.length),
];
//console.log(a22);
let a23 = [12, 10, 15];
let a24 = Object.entries(a23).map(([item, ind]) => ({ [item]: ind }));
//console.log(a24);
let a25 = [1, 2, 3, 4, 5, 6];
function foo3(val, its) {
  let a = [...val.splice(its), ...val.slice(0, its)];
  console.log(a);
}
//foo3(a25, 2);
const employees = [
  {
    id: 20,
    name: "Tim David-1",
    age: 35,
    gender: "male",
    designation: "Technical Lead",
    department: "IT",
    salary: 55000,
  },
  {
    id: 20,
    name: "Tim David-2",
    age: 35,
    gender: "male",
    designation: "Technical Lead",
    department: "de",
    salary: 55000,
  },
  {
    id: 20,
    name: "Tim Jhon-5",
    age: 35,
    gender: "male",
    designation: "Technical Lead",
    department: "IT",
    salary: 55000,
  },
  {
    id: 20,
    name: "Tim deo-6",
    age: 35,
    gender: "male",
    designation: "Technical Lead",
    department: "admin",
    salary: 55000,
  },
];

const rol = {};
for (i of employees) {
  if (rol[i.department]) {
    rol[i.department].push(i);
  } else rol[i.department] = [i];
}

function foo3(as) {
  Object.entries(as).map(([item, list]) => {
    console.log(item);
    list.map((item) => {
      console.log(item.name);
    });
  });
}
//foo3(rol);

let maskss = ["name", "salary", "age", "gender"];
function foo4(data, masks) {
  let result = {};
  let mask = data.map((item) => {
    Object.keys(item).forEach((dat) => {
      if (masks.includes(dat)) {
        result[dat] =
          String(item[dat]).slice(0, 1) +
          "*****" +
          item[dat].toString().slice(-1);
      }
    });
    return {
      ...item,
      ...result,
    };
  });
  return mask;
}
//console.log(foo4(employees, maskss));

let q1 = [
  { name: "gunnu", group: "ab" },
  { name: "george", group: "abs" },
];

let q2 = [
  { name: "sd", group: "1" },
  { name: "xs", group: "2" },
];

function foo5(ar1, ar2) {
  let a1 = [...ar1];
  let a2 = [...ar2];
  a1.forEach((item, ind) => {
    if (item) {
      const temp = a1[ind].name;
      a1[ind].name = a2[ind].name;
      a2[ind].name = temp;
    }
  });
  console.log(a1, a2);
}
//foo5(q1, q2);
Promise.resolve().then(() => console.log("hello1"));
queueMicrotask(() =>
  setTimeout(() => {
    console.log("hello2");
  })
);
function foo6() {
  return console.log("hello3");
}
foo6();
