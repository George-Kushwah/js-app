let a1 = "rahul";
let a2 = "Hello My name is Rachit";
//console.log(a2.includes("it"));
//console.log(a2.startsWith("ll"));
//console.log(a2.endsWith("it"));
//console.log(a2.search("My"));
//console.log(a2.match(/is/g));
//console.log(a2.indexOf("is"));
//console.log(a2.replace(/is/g, "My"));
//console.log(a1.slice(-7, -1));
//console.log(a2.substr(2, 12));
//console.log(a1.substring(-4, -1));
let a3 = a1.slice(0, 1).toUpperCase() + a1.slice(1);
let a4 = a3.split("").reverse().join("");
//console.log(a4);
// console.log(
//   a2
//     .split(" ")
//     .map((a) => a.split("").reverse().join(""))
//     .join(" ")
// );
let a5 = ["sun", "mon", "tue", "wed", "thu"];
//a5.length = 2;
a5.splice(0, 0, "Gunnu");
//console.log(a5);
let a6 = [1, 1, 2, 2, 3, 3, 4, 5, 5, 1];
let aa6 = [1, 1, 2, 3, 4, 5, 6, 2, 3, 4];
let a7 = [...new Set(a6)];
//console.log(a7);
let a8 = aa6.filter((val, ind) => aa6.indexOf(val) !== ind);
//console.log(a8);
//console.log(aa6.filter((a, b) => a % 2 !== 0));
let a9 = [
  { name: "Rahul", age: 10 },
  { name: "Ram", age: 10 },
  { name: "Ram", age: 10 },
  { name: "Mianl", age: 10 },
];
//console.log(Array.from(new Set(a9.map(JSON.stringify))).map(JSON.parse));
let a10 = a9.map((a) => a.name);
//console.log(a9.filter((val, ind) => a10.indexOf(val.name) !== ind));
function spread(...a) {
  return a.includes(7);
}
//console.log(spread(1, 2, 3, 4, 5, 7));
const a11 = [1, 2, 3, 4, [3, [5, [8]]]];
function* Flat(a11) {
  for (a of a11) {
    Array.isArray(a) ? yield* Flat(a) : yield a;
  }
}
let a12 = [...Flat(a11)];
//console.log(a12);
let a13 = [2, 5, 6, 3, 8, 4, 7, 1, 6];
for (i = 0; i < a13.length; i++) {
  let sc = a13[i];
  for (j = i; j < a13.length; j++) {
    if (sc !== a13[j] && a13[j] + sc == 7) {
      //console.log(a13[i], a13[j]);
    }
  }
}
let a14 = { name: "Gunnu" };
let a15 = { name: "Gunnu" };
//console.log(JSON.stringify(a14) == JSON.stringify(a15));
const a16 = [15, 2, 3, 5, 477, 8, 54, 1, 6];
//console.log(a16.sort((a, b) => a - b));
const a17 = [
  { name: "Rahul", age: 12 },
  { name: "zzz", age: 78 },
  { name: "aaa", age: 40 },
];
// console.log(
//   a17.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
// );
let a18 = [14, 85, 63, 2, 1, 4, 95, 87, 12, 100];
let a19 = 0;
//console.log(Math.min(...a18));
for (i of a18) {
  if (a19 > i) {
    a19 = i;
  }
}
//console.log(a19);
for (i = 0; i < a18.length; i++) {
  for (j = 0; j < i; j++) {
    if (a18[i] > a18[j]) {
      let x = a18[i];
      a18[i] = a18[j];
      a18[j] = x;
    }
  }
}
//console.log(a18);
let a20 = [1, 2, 3, 4, 1, 2, 3, 5];
//console.log(a20.filter((a) => a20.indexOf(a) == a20.lastIndexOf(a)));
let a21 = "well do doing";
let a22 = a21.split(" ").reduceRight((a, b) => {
  let d = a.slice(0, 1).toUpperCase() + a.slice(1);
  let c = b.slice(0, 1).toUpperCase() + b.slice(1);
  let e = d + " " + c;
  return e;
});
//console.log(a22);
// console.log(
//   a21
//     .split(" ")
//     .map((a) => a.split("").reverse().join(""))
//     .join(" ")
// );
let a23 = "Rahul";
//console.log(a23.split("").reverse().join(""));
let a24 = "";
for (i = a23.length; i--; ) {
  a24 += a23[i];
}
//console.log(a24);
let a25 = "Harshit";
//console.log(a25.split("").filter((val) => "aeiou".includes(val)));
//console.log(Array.from(a25).filter((val) => "aeiou".includes(val)));

function abcd() {
  let aa = document.getElementById("pp").value;
  document.getElementById("dd").innerHTML = aa;
}
  