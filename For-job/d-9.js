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
  console.log("Match");
}
// x = 5;
// console.log(x);
//let x;
