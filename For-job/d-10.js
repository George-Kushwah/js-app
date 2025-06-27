let a1 = "Hello nitin Rahul nitin how lelOh";
//console.log(a1.match(/nitin/g));
let a2 = [1, 0, 1, 0, 1, 0];
function foo1(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
}
foo1(a2);
//console.log(a2);
