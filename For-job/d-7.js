let a1 = "Hello my name it Gunnu";

function Change(data, replace, newreplace) {
  const dc = data.split(replace);
  const dc1 = dc.join(newreplace);
  console.log(dc1);
}
//Change(a1, "it", "is");

function foo1(name) {
  this.name = name;
}

foo1.prototype.greet = function () {
  return `my name is ${this.name}`;
};
const a2 = new foo1("George");
//console.log(a2.greet());
Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b);
};
//console.log([1, 2, 3, 4, 5].sum());
//console.log(Array(10, 5));
let a3 = "a.b.c.d.e".split(".");
let a4 = a3.reduceRight((a, b) => ({ [b]: a }));
//console.log(a4);
function magic() {
  return (x = 1), [], {}; //js exe right side
}
//console.log(magic());
function foo2() {
  console.log(this);
}
let a5 = {
  dc: foo2.bind(null), // foo2 function pointing to the window object
};
//a5.dc();

let a6 = {
  pizza: 346,
  burger: 49,
  alloticky: 99,
  peties: 25,
};
function getprice(ab) {
  return a6[ab] || 0;
}
//console.log(getprice("peties"));

class multifun {
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

const dc1 = new multifun();
//console.log(dc1.add(2).add(3).multi(2));
//console.log(typeof []);
let a7;
let a8;
a7 = 1;
a8 = (a7++, a7++, (a7) => a7 + 1)(a7);
//console.log(a8);
let a9 = ["Bat", "fan", "apple", "Cat", "cat"]; // js sort by UTF-8
//console.log(a9.sort());

function foo3() {
  console.log("object-1");
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("object-2");
    });
    return res("Promise Resolve");
  });
}
// console.log(foo3());
// console.log("object-3");
function foo4() {
  return "Hello", "Peacock", {}, [];
}
//console.log(foo4());
function foo4(a, b) {
  //"use strict";
  a = 6;
  b = 4;
  //console.log(a + b);
  console.log(arguments[0] + arguments[1]);
}
//foo4(3, 20);

let a10 = [5, 5, 3, 3, 3, 2, 1, 1, 1, 1, 4, 4, 4, 4, 4];
//Output [2,5,3,1,4]
let a11 = {};
a10.forEach((item) => {
  a11[item] = (a11[item] || 0) + 1;
});
let a13 = [];
let a12 = Object.entries(a11)
  .sort(([, a], [, b]) => a - b)
  .flat(1)
  .filter((a) => {
    if (typeof a == "string") {
      //console.log(typeof parseInt(a));
      a13.push(Number(a));
    }
  });

//console.log(a13);
// let a14 = [];
// let a13 = ["2", 1, "3", 4].filter((a) => {
//   if (typeof a == "string") {
//     a14.push(Number(a));
//   }
// });
// console.log(a14);
let a15 = "false";
let a16 = !a15;
//console.log(a16);
let a17 = 0;
// console.log(a17++);
// console.log(++a17);
// console.log(a17);
let str = "Hello GFG"; //string is immutable
str.replace("Hello", "Bye");
//console.log(str);
let str1 = "Hello GFG";
let str2 = str1.toLowerCase();
// console.log(str1);
// console.log(str2);
let a18 = ["aa", "bb", "cc"];
//console.log(a18.find((a) => a == "aa"));
let obj = {
  a: "A",
  b: "B",
};

function test(args) {
  return (args.a = args.a + args.b);
}

let result = test(obj);

// console.log("Obj = ", obj);
// console.log("result =", result);
a19 = ["m", "y", " ", " ", "d"];
// const a20 = a19.filter((char) => char !== " ").join("");

//console.log(a20);
function foo5(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == " ") {
      a19.splice(i, 1);
      //a19[i] = arr[i];
      //console.log(arr[i]);
    }
  }
}
// foo5(a19);
// console.log(a19);
let aa19 = [1, 2, 3, 4, 5];
let aa20 = aa19.reduce((total, sum, index) => {
  // console.log("total", total);
  // console.log("sum", sum);
  // console.log("iteation-", index);
  // df = total + sum;
  //return df;
}, 3);
// console.log(aa20);

//let w1 = [1, 2, 3, 1, 2, 3, 4];
let w1 = "AAABBCCDDAABB";
let w2 = [];
for (i = 0; i < w1.length; i++) {
  if (w1[i] !== w1[i - 1]) {
    w2.push(w1[i]);
  }
}
//console.log(w2);

function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}
//console.log(foo(), typeof x, typeof y);

async function fetchdata() {
  try {
    const [user, user1] = await Promise.all([
      fetch("https://api.escuelajs.co/api/v1/users"),
      fetch("https://jsonplaceholder.typicode.com/users"),
    ]);
    const [a1, b1] = await Promise.all([user.json(), user1.json()]);
    const modify = b1.map((item) => {
      return {
        ...item,
        clf: false,
      };
    });
    console.log(modify);
  } catch (e) {
    console.log(e);
  }
}
//fetchdata();
