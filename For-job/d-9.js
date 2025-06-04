let a1 = [1, 2, 3, 4, 3, 2, 1];
//console.log(a1.filter((item) => a1.indexOf(item) == a1.lastIndexOf(item)));
let a2 = ["A", "A", "B", "B", "B", "C", "A", "B"];
let a3 = [];
for (i = 0; i < a2.length; i++) {
  if (a2[i] !== a2[i - 1]) {
    a3.push(a2[i]);
  }
}
console.log(a3);
