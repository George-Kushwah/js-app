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
  if (item.length > 0 && a1.length > 0) {
    //console.log(item);
    a7.push(item);
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
//let dc = ["aa", "AA", "bc", "BB"];
//console.log(dc.sort());
//console.log(dc.sort((a, b) => a - b));
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
    console.log(a1);
  }
});
