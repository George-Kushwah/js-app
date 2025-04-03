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

a3.add("true");
//console.log(a3.has(2));
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
//let aq17 = [2, 5, 1, 4, 7, 9, 6];
let aq17 = [5, 4, 3, 6, 1, 9];
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
// console.log(foo5(aq17, 9));
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
foo56(a17, 2);
// console.log(a17);
let a18 = [...a17.splice(a17.length - dc), ...a17];
// console.log(a18);
//console.log(a17.splice(4));
let a19 = "aaaaaaaaabababcbdbfbbbcbbaba".split("");
let a20 = {};
let a21 = "";
a19.forEach((i, ind) => {
  a20[i] = (a20[i] || 0) + 1;
});
for (let char in a20) {
  let max = 0;
  //console.log(a20[char]);
  if (a20[char] >= 1) {
    a21 += char;
  }
}
console.log(a21, a20);
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
