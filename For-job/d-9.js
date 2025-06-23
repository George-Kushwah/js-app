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
console.log(a22);
