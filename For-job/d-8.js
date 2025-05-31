function foo1() {
  return new Promise((res, rej) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res1) => {
        if (res1.ok) {
          return res1.json();
        } else Promise.reject(res);
      })
      .then((res2) => res(res2))
      .catch((e) => rej(e));
  });
}
//console.log(foo1());

function printStarPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = `*`.repeat(2 * i - 1);
    //  let stars = `${i}`.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

//printStarPyramid(7);
function printNumberPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    line += " ".repeat(rows - i);
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    for (let j = i - 1; j >= 1; j--) {
      line += j;
    }
    console.log(line);
  }
}

printNumberPyramid(4);
